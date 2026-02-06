// import AnantaLinkWebsite from './AnantaLinkWebsite'
// export default function App() {
  // return <AnantaLinkWebsite />
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnantaLinkWebsite from "./AnantaLinkWebsite";
import PatientMonitoring from "./products/PatientMonitoring";
import RTLS from "./products/RTLS";
import EdgeGateway from "./products/EdgeGateway";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<AnantaLinkWebsite />} />

        {/* Product Pages */}
        <Route path="/products/patient-monitoring" element={<PatientMonitoring />} />
        <Route path="/products/rtls" element={<RTLS />} />
        <Route path="/products/edge-gateway" element={<EdgeGateway />} />
      </Routes>
    </BrowserRouter>
  );
}
