const SITE = 'https://anantlink.com'
const SHARE_IMAGE = `${SITE}/images/hero-smart-hospital.png`

export const SITE_PAGES = {
  '/': {
    title: 'Hospital IoT & Connected Care Platform | AnantLink',
    description: 'AnantLink connects patient monitoring, SafeWard digital observations, hospital RTLS, medical asset tracking, indoor environment sensors, and care-team alerts in one modular hospital IoT platform. Optional AI analytics supports operational review.',
  },
  '/solutions': {
    title: 'Hospital IoT Solutions: Monitoring, RTLS & Automation | AnantLink',
    description: 'Explore hospital IoT modules for vital-sign monitoring, patient and asset RTLS, fall alerts, environmental monitoring, kiosks, automation, and digital twins.',
  },
  '/about': {
    title: 'About AnantLink | Connected Care for Hospitals',
    description: 'Learn how AnantLink is building vendor-neutral, offline-first connected-care infrastructure around real hospital workflows and existing systems.',
  },
  '/contact': {
    title: 'Contact AnantLink | Hospital IoT & RTLS',
    description: 'Talk with AnantLink about patient monitoring, hospital RTLS, fall detection, asset tracking, indoor monitoring, or a connected-care pilot.',
  },
  '/demo': {
    title: 'Hospital IoT Workflow Demo | AnantLink',
    description: 'See sample hospital workflows showing how bedside readings, room sensors, and check-ins move through a connected-care platform to hospital teams.',
  },
  '/experience': {
    title: 'Hospital in Motion | RTLS, Fall Alerts & Device Demo | AnantLink',
    description: 'Explore a simulated hospital campus and indoor ward walkthrough with moving staff, patient location, fall alerts, asset tracking, and device readings.',
  },
  '/safeward': {
    title: 'SafeWard by AnantLink | Digital Ward Observations & Clinical Escalation',
    description: 'SafeWard helps hospitals digitise ward observations, configure Early Warning Scores to approved protocols, remind staff when checks are due, and review clinical escalation activity in a 12-week ward pilot.',
  },
}

export function metadataFor(pathname = '/') {
  const path = pathname.replace(/\/$/, '') || '/'
  const page = SITE_PAGES[path] || SITE_PAGES['/']
  return { ...page, url: `${SITE}${path}`, image: SHARE_IMAGE }
}

export { SITE }
