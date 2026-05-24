"use client";

import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const steps = [
  { num: "01", title: "Agreement Signed", status: "done", detail: "Partnership agreement finalised and countersigned." },
  { num: "02", title: "Profile Setup", status: "active", detail: "Set up your organisation profile — logo, description, contact." },
  { num: "03", title: "Challenge Brief", status: "upcoming", detail: "Submit your challenge brief. Our team will review and publish when ready." },
  { num: "04", title: "Pre-event Prep Call", status: "upcoming", detail: "1-hour call with the Bridgr team to prepare your challenge presentation." },
  { num: "05", title: "Event Day", status: "upcoming", detail: "Be present for the kickoff, mentor teams throughout, and judge final pitches." },
];

export default function PartnerPortalPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">PARTNER PORTAL</p>
            <h1 className="text-h2 text-ink">Welcome, Partner.</h1>
          </div>
          <Link href="/" className="text-xs text-slate-gray hover:text-ink transition-colors">
            ← Back to site
          </Link>
        </div>

        {/* Onboarding progress */}
        <section className="mb-10">
          <h2 className="text-h3 text-ink mb-5">Onboarding checklist</h2>
          <div className="flex flex-col gap-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`content-card content-card--compact flex gap-4 items-start ${
                  step.status === "active" ? "border-ink/40" : "border-border"
                }`}
              >
                <div
                  className={`shrink-0 w-7 h-7 rounded-sm flex items-center justify-center text-xs font-mono ${
                    step.status === "done"
                      ? "bg-soft-bone text-ink"
                      : step.status === "active"
                      ? "bg-soft-bone text-ink"
                      : "bg-soft-bone text-dust-taupe"
                  }`}
                >
                  {step.status === "done" ? <CheckCircle2 size={14} /> : step.num}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium ${
                      step.status === "done"
                        ? "text-slate-gray line-through"
                        : step.status === "active"
                        ? "text-ink"
                        : "text-slate-gray"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs text-dust-taupe mt-0.5">{step.detail}</p>
                </div>
                {step.status === "active" && (
                  <button className="shrink-0 text-xs text-link-blue hover:opacity-80 transition-colors flex items-center gap-1">
                    Complete <ArrowRight size={12} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Downloads */}
        <section className="mb-10">
          <h2 className="text-h3 text-ink mb-5">Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Brand Kit", desc: "Logos, colours, usage guidelines", ext: "ZIP" },
              { title: "Partnership Brief", desc: "Full overview of your partnership", ext: "PDF" },
              { title: "Challenge Template", desc: "Format for your challenge submission", ext: "DOCX" },
              { title: "Event Schedule", desc: "High-level timeline (TBA)", ext: "PDF" },
            ].map((doc) => (
              <div
                key={doc.title}
                className="content-card content-card--compact flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-medium text-ink">{doc.title}</p>
                  <p className="text-xs text-dust-taupe">{doc.desc}</p>
                </div>
                <button className="flex items-center gap-1.5 text-xs text-ink hover:opacity-80 transition-colors border border-ink/30 rounded-pill px-2.5 py-1.5">
                  <Download size={12} />
                  {doc.ext}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div className="content-card content-card--compact text-center">
          <p className="text-body text-slate-gray font-[450] mb-2">Questions? Your Bridgr contact is available.</p>
          <a href="mailto:partners@bridgr.io" className="text-link-blue text-sm hover:opacity-80 transition-colors">
            partners@bridgr.io →
          </a>
        </div>
      </div>
    </div>
  );
}
