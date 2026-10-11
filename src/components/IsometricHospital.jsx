export default function IsometricHospital() {
  return (
    <div className="iso-hospital" role="img" aria-label="Isometric illustration of a connected hospital ward: a patient and bedside monitor send a signal through a local gateway to a nurse">
      <div className="iso-scene-label"><i /> HOSPITAL FLOOR · CONNECTED CARE</div>
      <svg className="iso-hospital-svg" viewBox="0 0 780 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="iso-floor" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f9fbf8"/><stop offset="1" stopColor="#e6f0e9"/></linearGradient>
          <linearGradient id="iso-wall" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#e8f0eb"/></linearGradient>
          <filter id="iso-shadow" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#173d34" floodOpacity=".13"/></filter>
        </defs>
        {/* Raised floor slab */}
        <path d="M390 86 726 250 390 418 54 250Z" fill="#bccdc2" transform="translate(0 17)" />
        <path d="M54 250 390 418V432L54 264Z" fill="#aabeb2" />
        <path d="M390 418 726 250V264L390 432Z" fill="#98afa2" />
        <path d="M390 86 726 250 390 418 54 250Z" fill="url(#iso-floor)" stroke="#9fb6a8" strokeWidth="2" />
        {/* Floor divisions */}
        <path d="m222 166 336 164M558 166 222 334M138 292l252-126 252 126M306 376l252-126" fill="none" stroke="#d6e3da" strokeWidth="2" />
        {/* Low room dividers */}
        <path d="m113 235 124-62v-92L113 143Z" fill="#d9e6de" stroke="#a9bdb1" strokeWidth="2" />
        <path d="m237 173 111 55v-91l-111-56Z" fill="url(#iso-wall)" stroke="#a9bdb1" strokeWidth="2" />
        <path d="m237 173 111 55 44-22-111-56Z" fill="#fff" stroke="#a9bdb1" strokeWidth="2" />
        <path d="m516 275 103-52v-99l-103 52Z" fill="#d9e6de" stroke="#a9bdb1" strokeWidth="2" />
        <path d="m619 223 60 29v-98l-60-30Z" fill="url(#iso-wall)" stroke="#a9bdb1" strokeWidth="2" />
        {/* Bed and patient */}
        <g filter="url(#iso-shadow)">
          <path d="m119 238 117-58 132 65-117 59Z" fill="#c8d9ce" stroke="#8da99a" strokeWidth="2" />
          <path d="m119 238 132 66v11l-132-66Z" fill="#9fb6a7" />
          <path d="m251 304 117-59v11l-117 59Z" fill="#8ea797" />
          <path d="m144 234 92-46 97 48-92 46Z" fill="#fff" stroke="#c6d7cc" strokeWidth="2" />
          <path d="m159 231 68-34 28 14-68 34Z" fill="#e7efe9" />
          <ellipse cx="188" cy="220" rx="15" ry="11" fill="#d9b59e" transform="rotate(-25 188 220)" />
          <path d="M176 217c5-14 24-17 32-6l-18 9Z" fill="#61534c" />
          <path d="m207 222 64 22 25-12-52-29c-14-8-27-1-37 19Z" fill="#f2a28f" stroke="#d57e69" strokeWidth="2" />
          <path d="m147 283 5 28m204-52 4 29" stroke="#8aa496" strokeWidth="5" strokeLinecap="round" />
        </g>
        {/* Bedside monitor */}
        <g filter="url(#iso-shadow)">
          <path d="m289 135 52-26 61 30-52 26Z" fill="#607b72" />
          <path d="m289 135 61 30v69l-61-30Z" fill="#385b53" />
          <path d="m350 165 52-26v69l-52 26Z" fill="#294a44" />
          <path d="m299 139 41-20 48 24-41 20Z" fill="#eff6f0" />
          <path d="m307 140 31-15 40 20-31 15Z" fill="#e3f2e9" />
          <path d="m309 142 8 0 6-8 8 18 8-12 5 4h13" fill="none" stroke="#279777" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="iso-ecg" />
          <circle cx="331" cy="177" r="3" fill="#65c4a0" /><circle cx="344" cy="183" r="3" fill="#e2b55f" />
          <path d="m349 230 2 20m-13-23 2 20" stroke="#6d887c" strokeWidth="4" />
        </g>
        {/* Platform gateway cube */}
        <g filter="url(#iso-shadow)">
          <path d="m426 223 70-35 63 31-70 35Z" fill="#78b4d0" />
          <path d="m426 223 63 31v85l-63-32Z" fill="#397d9c" />
          <path d="m489 254 70-35v85l-70 35Z" fill="#28627f" />
          <path d="m439 224 56-28 41 20-56 28Z" fill="#b4dced" />
          <path d="m450 224 35-17 27 13-35 17Z" fill="#eff6ed" />
          <path d="m460 224 15-8 19 10-15 8Z" fill="#5baf8a" />
          <circle cx="473" cy="270" r="3" fill="#b5e5bd" className="iso-led" />
          <circle cx="486" cy="277" r="3" fill="#b5e5bd" className="iso-led delay" />
          <path d="m449 289 24 12m-24-3 24 12" stroke="#9bc7ae" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* Nurse figure and mobile device */}
        <g filter="url(#iso-shadow)">
          <ellipse cx="616" cy="253" rx="18" ry="13" fill="#d9b59e" transform="rotate(-27 616 253)" />
          <path d="M601 248c3-14 24-20 34-8l-15 12Z" fill="#574840" />
          <path d="m596 269 26-13 34 18-27 14Z" fill="#e4ede6" stroke="#9bb1a3" strokeWidth="2" />
          <path d="m603 272 18 28-14 38-21-10 10-32-16-13Z" fill="#e98c6f" stroke="#cc7158" strokeWidth="2" />
          <path d="m633 288 19 24-6 29-20-4 1-20-16-19Z" fill="#ce6f59" stroke="#b75d49" strokeWidth="2" />
          <path d="m628 271 24 11" stroke="#d9b59e" strokeWidth="8" strokeLinecap="round" />
          <path d="m650 277 14-7" stroke="#d9b59e" strokeWidth="7" strokeLinecap="round" />
          <path d="m651 266 19-10 13 7-19 10Z" fill="#274a44" />
          <path d="m655 265 14-7 7 4-14 7Z" fill="#eef6ef" />
          <path d="m659 265 5-3 3 2-5 3Z" fill="#55ad86" />
        </g>
        {/* Signal route */}
        <path d="M366 194c33-12 44-3 64 24m126-4c23-8 43 5 76 34" fill="none" stroke="#3f9d7b" strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" className="iso-data-path" />
        <circle r="5" fill="#338e70" className="iso-data-packet"><animateMotion dur="3.4s" repeatCount="indefinite" path="M366 194c33-12 44-3 64 24m126-4c23-8 43 5 76 34" /></circle>
        {/* Floating labels */}
        <g className="iso-label iso-device-label"><rect x="79" y="99" width="126" height="30" rx="7" fill="#fff" stroke="#d4e1d8"/><text x="94" y="118" fill="#526f64" fontSize="10" fontFamily="Arial" fontWeight="700">PATIENT ROOM</text></g>
        <g className="iso-label iso-gateway-label"><rect x="423" y="333" width="154" height="32" rx="7" fill="#fff" stroke="#d4e1d8"/><text x="438" y="353" fill="#526f64" fontSize="10" fontFamily="Arial" fontWeight="700">LOCAL EDGE GATEWAY</text></g>
        <g className="iso-alert-label"><rect x="625" y="172" width="126" height="42" rx="8" fill="#fff" stroke="#e4d7b8"/><circle cx="640" cy="188" r="4" fill="#d3a34b"/><text x="650" y="191" fill="#5e6255" fontSize="9" fontFamily="Arial" fontWeight="700">ALERT FOR REVIEW</text><text x="639" y="204" fill="#8c9289" fontSize="8" fontFamily="Arial">Care team notified</text></g>
      </svg>
      <div className="iso-scene-caption"><span>01</span> patient + device <i/><span>02</span> edge platform <i/><span>03</span> care team</div>
    </div>
  )
}
