import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'
import { metadataFor, SITE_PAGES } from '../src/seo.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'dist')
const htmlTemplate = await readFile(path.join(outDir, 'index.html'), 'utf8')
const vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })

const escapeHtml = value => value.replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[char])

function routeHead(pathname) {
  const page = metadataFor(pathname)
  const pageSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: { '@id': 'https://anantlink.com/#website' },
    about: { '@id': 'https://anantlink.com/#organization' },
  })
  const e = escapeHtml
  return { page, pageSchema, e }
}

try {
  const { SiteContent, StaticRouter } = await vite.ssrLoadModule('/src/App.jsx')

  for (const route of Object.keys(SITE_PAGES)) {
    const app = React.createElement(StaticRouter, { location: route }, React.createElement(SiteContent))
    const body = renderToString(app)
    const { page, pageSchema, e } = routeHead(route)
    let html = htmlTemplate
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${e(page.title)}</title>`)
      .replace(/<meta name="description"[^>]*\/>/, `<meta name="description" content="${e(page.description)}" />`)
      .replace(/<link rel="canonical"[^>]*\/>/, `<link rel="canonical" href="${e(page.url)}" />`)
      .replace(/<meta property="og:title"[^>]*\/>/, `<meta property="og:title" content="${e(page.title)}" />`)
      .replace(/<meta property="og:description"[^>]*\/>/, `<meta property="og:description" content="${e(page.description)}" />`)
      .replace(/<meta property="og:url"[^>]*\/>/, `<meta property="og:url" content="${e(page.url)}" />`)
      .replace(/<meta property="og:image"[^>]*\/>/, `<meta property="og:image" content="${e(page.image)}" />`)
      .replace(/<meta name="twitter:title"[^>]*\/>/, `<meta name="twitter:title" content="${e(page.title)}" />`)
      .replace(/<meta name="twitter:description"[^>]*\/>/, `<meta name="twitter:description" content="${e(page.description)}" />`)
      .replace(/<meta name="twitter:image"[^>]*\/>/, `<meta name="twitter:image" content="${e(page.image)}" />`)
      .replace('</head>', `<script type="application/ld+json">${pageSchema}</script>\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

    const target = route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, route.slice(1), 'index.html')
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, html)
  }
} finally {
  await vite.close()
}
