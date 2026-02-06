import React, { useEffect } from "react";
import { Cpu, Layers, ShieldCheck, ArrowLeft } from "lucide-react";

export default function EdgeGateway() {
  useEffect(() => {
    document.title = "Edge Gateway | AnantaLink";
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 px-8 py-24 max-w-7xl mx-auto">
      <a href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-10">
        <ArrowLeft size={16} /> Back to Home
      </a>

      <h1 className="text-4xl font-semibold mb-6">Edge Gateway & IoMT Hub</h1>
      <p className="text-lg text-slate-300 max-w-3xl mb-12">
        Secure, hospital-grade edge gateways that aggregate IoMT data and ensure
        low-latency, reliable connectivity.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <Feature icon={Cpu} title="Edge Computing" />
        <Feature icon={Layers} title="Protocol Agnostic" />
        <Feature icon={ShieldCheck} title="Secure by Design" />
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="border border-white/10 rounded-2xl p-6">
      <Icon className="w-8 h-8 mb-4 text-emerald-400" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}
