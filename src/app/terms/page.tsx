"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-canvas">
      <section className="bg-canvas py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-ink mb-2">{t.terms.title}</h1>
          <p className="text-slate-gray text-sm">{t.terms.lastUpdated}</p>
        </div>
      </section>

      <section className="py-14 bg-canvas">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {[
            {
              heading: "1. Acceptance of Terms",
              body: "By accessing or using the Bridgr website (bridgr.io) or registering for HackPune events, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
            },
            {
              heading: "2. Event Participation",
              body: "Participation in HackPune events is subject to successful application and acceptance. Spots are limited. Bridgr reserves the right to decline any application without providing a reason. Acceptance does not guarantee continued participation - violation of the Code of Conduct may result in removal.",
            },
            {
              heading: "3. Code of Conduct",
              body: "All participants, volunteers, speakers, and partners must adhere to our Code of Conduct. Harassment, discrimination, or disruptive behaviour of any kind will not be tolerated. Bridgr reserves the right to remove any individual from the event at any time for violations.",
            },
            {
              heading: "4. Intellectual Property",
              body: "You retain all intellectual property rights to work you create at HackPune events. By submitting work for judging, you grant Bridgr a limited, non-exclusive licence to display and promote that work for event and marketing purposes. Challenge partners may negotiate separate IP arrangements with teams directly.",
            },
            {
              heading: "5. Liability",
              body: "Bridgr is not liable for any direct, indirect, incidental, or consequential damages arising from event participation. We are not responsible for items lost, stolen, or damaged at events. Participants are responsible for their own travel and accommodation.",
            },
            {
              heading: "6. Photography and Media",
              body: "By attending Bridgr events, you consent to being photographed, filmed, or recorded for event documentation and promotional purposes. If you have specific concerns, contact us in advance.",
            },
            {
              heading: "7. Modifications",
              body: "Bridgr reserves the right to modify event details, dates, venues, and programmes. Material changes will be communicated via our updates page and Discord. Your continued participation constitutes acceptance of such changes.",
            },
            {
              heading: "8. Governing Law",
              body: "These terms are governed by the laws of Maharashtra, India. Any disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra.",
            },
            {
              heading: "9. Contact",
              body: "For any questions regarding these terms: hello@bridgr.io",
            },
          ].map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-lg font-semibold text-ink mb-3">{section.heading}</h2>
              <p className="text-body text-slate-gray font-[450]">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
