"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Upload } from "lucide-react";

const steps = [
  { num: "01", title: "Profile Submitted", status: "done", detail: "Your profile has been received." },
  { num: "02", title: "Confirmation Pending", status: "active", detail: "We're reviewing your topic and availability. Expect a response within 5 business days." },
  { num: "03", title: "Talk Details", status: "upcoming", detail: "Finalise your talk title, abstract, and slide deck." },
  { num: "04", title: "Pre-event Briefing", status: "upcoming", detail: "30-minute briefing call to align on format, audience, and stage setup." },
  { num: "05", title: "Event Day", status: "upcoming", detail: "Arrive at the venue, meet the team, and take the stage." },
];

export default function SpeakerPortalPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="eyebrow mb-2">SPEAKER PORTAL</p>
            <h1 className="text-h2 text-ink">Welcome, Speaker.</h1>
          </div>
          <Link href="/" className="text-xs text-slate-gray hover:text-ink transition-colors">
            ← Back to site
          </Link>
        </div>

        {/* Progress */}
        <section className="mb-10">
          <h2 className="text-h3 text-ink mb-5">Your journey</h2>
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
                <div>
                  <p className={`text-sm font-medium ${step.status === "done" ? "text-slate-gray line-through" : "text-ink"}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-dust-taupe mt-0.5">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Profile quick edit */}
        <section className="mb-10">
          <h2 className="text-h3 text-ink mb-5">Your profile</h2>
          <div className="content-card content-card--compact">
            <div className="flex gap-4 items-start">
              <div className="w-16 h-16 rounded-full bg-white border border-border flex items-center justify-center">
                <Upload size={18} className="text-dust-taupe" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-dust-taupe mb-2">Headshot (square, min 400×400)</p>
                <button className="text-xs border border-ink/30 rounded-pill px-3 py-1.5 text-slate-gray hover:text-ink transition-colors">
                  Upload photo
                </button>
              </div>
            </div>
            {[
              { label: "Full name", placeholder: "Your name" },
              { label: "Bio (2-3 sentences)", placeholder: "Tell attendees about yourself" },
              { label: "Talk title suggestion", placeholder: "Working title" },
              { label: "Availability notes", placeholder: "Any date/time constraints" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-gray uppercase tracking-[0.56px]">{f.label}</label>
                <input
                  type="text"
                  placeholder={f.placeholder}
                  className="bg-white border border-ink/40 rounded-pill px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                />
              </div>
            ))}
            <button className="bg-ink text-canvas px-4 py-2.5 rounded-md text-sm font-medium hover:translate-y-[1px] transition-colors">
              Save Profile
            </button>
          </div>
        </section>

        {/* Contact */}
        <div className="content-card content-card--compact text-center">
          <p className="text-body text-slate-gray font-[450] mb-2">Questions? Your Terns contact is here.</p>
          <a href="mailto:speakers@terns.tech" className="text-link-blue text-sm hover:opacity-80 transition-colors">
            speakers@terns.tech →
          </a>
        </div>
      </div>
    </div>
  );
}
