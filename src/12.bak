import React, { useEffect, useState } from "react";
import { Activity, Cpu, ShieldCheck, Building2, Layers, Map, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// Simple local UI primitives to avoid path aliases
function Card({ children }) {
  return <div className="rounded-2xl bg-white/5 border border-white/10">{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

function Button({ children, className = "", variant = "solid", onClick }) {
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition";
  const variants = {
    outline: "border border-slate-500 text-slate-200 hover:bg-white/10",
    solid: "bg-emerald-500 hover:bg-emerald-600 text-black",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

/**
 * AnantaLink Website
 * - Single-page layout
 * - Anchor-based navigation
 * - Healthcare-only focus
 */
export default function AnantaLinkWebsite() {
  const [darkMode, setDarkMode] = useState(true);

  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#0f172a] text-slate-100" : "bg-white text-slate-900"}`}>

      {/* Navigation */}
      <nav className="px-8 py-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/anantalink-logo.svg"
            alt="AnantaLink Logo"
            className="h-10"
          />
        </div>

        <ul className={`hidden md:flex space-x-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          <li><a href="#platform" className="hover:text-white">Platform</a></li>
          <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
          <li><a href="#architecture" className="hover:text-white">Architecture</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="px-3 py-2"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light" : "Dark"}
          </Button>
        </div>
      </nav>

      {/* Platform / Hero */}
      <section
        id="platform"
        className="px-8 py-28 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <img
            src="/images/anantalink-logo.svg"
            alt="AnantaLink Logo"
            className="h-14 mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight"
          >
            AnantaLink – SmartCare IoMT Ecosystem
          </motion.h1>

          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            Innovating care with connected solutions. A modular, edge-first IoMT
            platform enabling hospitals to become smart, connected, and predictive
            without heavy capital barriers.
          </p>

          <Button>Request Pilot Deployment</Button>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            // src="/images/hero-smart-hospital.jpg"
            src="https://ehealth.eletsonline.com/wp-content/uploads/2019/07/1.jpg"
            alt="Smart hospital IoMT ecosystem"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-8 py-20 bg-[#020617]">
        <div className="mb-12 max-w-7xl mx-auto rounded-2xl overflow-hidden shadow">
          <img
            // src="/images/iomt-architecture.png"
            src="https://cdnintech.com/media/chapter/1186641/1750941997-382952735/media/F3.png"
            alt="AnantaLink modular IoMT architecture"
            className="w-full object-contain bg-white"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent>
              <TrendingUp className="w-10 h-10 mb-4 text-emerald-700" />
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-600">
                To make every hospital smart, connected, and predictive without
                imposing high CAPEX or rigid OEM lock-in.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Activity className="w-10 h-10 mb-4 text-emerald-700" />
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-600">
                Enable real-time monitoring, action, and optimization through
                modular IoMT devices and intelligent data integration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Map className="w-10 h-10 mb-4 text-emerald-700" />
              <h3 className="text-xl font-semibold mb-2">Long-Term Goal</h3>
              <p className="text-gray-600">
                Build India’s first AI-driven hospital digital twin network
                connecting patients, assets, staff, and environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="px-8 py-28 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-emerald-800">
          Healthcare Solutions Portfolio
        </h2>
        <p className="text-slate-400 mb-12 max-w-3xl">
          Purpose-built IoMT modules exclusively for hospitals and healthcare systems.
          No cross-industry dilution. No generic IoT compromises.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent>
              <Building2 className="w-10 h-10 mb-4 text-emerald-700" />
              <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-1">
                <li>Asset & patient tracking</li>
                <li>Queue & flow optimization</li>
                <li>Wayfinding & entrance management</li>
                <li>Contact tracing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Activity className="w-10 h-10 mb-4 text-emerald-700" />
              <h3 className="text-xl font-semibold mb-3">Patient Safety & Care</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-1">
                <li>Remote patient & vitals monitoring</li>
                <li>Fall & bedsore intervention</li>
                <li>Cold-chain & room condition monitoring</li>
                <li>Automatic EMR data transfer</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <ShieldCheck className="w-10 h-10 mb-4 text-emerald-700" />
              <h3 className="text-xl font-semibold mb-3">Compliance & Clinical Ops</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-1">
                <li>NABH/JCI readiness</li>
                <li>AI-based resource scheduling</li>
                <li>Audit-ready reporting</li>
                <li>Post-operative & inpatient care workflows</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="px-8 py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-emerald-800">
            Modular Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <Layers className="w-10 h-10 mb-4 text-emerald-700" />
                <h3 className="text-xl font-semibold mb-2">Tracking Layer</h3>
                <p className="text-gray-600">
                  People, assets, devices, and environment data captured via
                  plug-and-play IoMT hardware.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Cpu className="w-10 h-10 mb-4 text-emerald-700" />
                <h3 className="text-xl font-semibold mb-2">Edge & Communication</h3>
                <p className="text-gray-600">
                  BLE gateways and routers ensure low-latency, resilient data
                  collection even in constrained environments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <ShieldCheck className="w-10 h-10 mb-4 text-emerald-700" />
                <h3 className="text-xl font-semibold mb-2">Platform & Digital Twin</h3>
                <p className="text-gray-600">
                  Unified IoMT platform with dashboards, APIs, and AI-ready digital
                  twin foundation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-emerald-800">Contact & Pilots</h2>
        <p className="text-slate-400 max-w-3xl mb-10">
          We work closely with hospitals, health systems, and government bodies
          to deploy pilot programs and validate real-world impact.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="text-sm text-slate-400">
            <p>Email: contact@anantalink.com</p>
            <p>Phone: +91-9815758978</p>
            <p>Location: India</p>
          </div>
          <Button>Request Pilot Deployment</Button>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 bg-black text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} AnantaLink Technology Pvt. Ltd.</p>
          <p>Modular. Predictive. Built for Indian healthcare reality.</p>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black px-4 py-3 shadow-lg"
        aria-label="Back to top"
      >
        ↑
      </button>

    </div>
  );
}

/* ==========================
   Basic Render Tests (Example)
   ==========================

import { render, screen } from "@testing-library/react";
import AnantaLinkWebsite from "./AnantaLinkWebsite";

describe("AnantaLinkWebsite", () => {
  test("renders hero heading", () => {
    render(<AnantaLinkWebsite />);
    expect(screen.getByText(/SmartCare IoMT Ecosystem/i)).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<AnantaLinkWebsite />);
    expect(screen.getByText(/Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Architecture/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});
*/