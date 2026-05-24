"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-canvas">
      <section className="bg-canvas py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-ink mb-2">{t.privacy.title}</h1>
          <p className="text-slate-gray text-sm">{t.privacy.lastUpdated}</p>
        </div>
      </section>

      <section className="py-14 bg-canvas">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-invert prose-sm max-w-none">
          {[
            {
              heading: "1. Who we are",
              body: "Bridgr operates the bridgr.io website and organises HackPune events. Our registered contact address is hello@bridgr.io. We are the data controller for information collected through this website.",
            },
            {
              heading: "2. What data we collect",
              body: "We collect information you provide through our forms: name, email address, GitHub/portfolio/LinkedIn URLs, skill descriptions, motivation text, and any other information you voluntarily submit. We also collect standard server logs (IP address, browser type, pages visited) for operational purposes.",
            },
            {
              heading: "3. How we use your data",
              body: "Application data is used solely to evaluate participation, volunteer, speaking, or sponsorship applications. We do not sell your data. We use email addresses to send event updates if you have opted in. Server logs are retained for a maximum of 30 days.",
            },
            {
              heading: "4. Legal basis",
              body: "For EEA/GDPR-covered individuals, we process data on the basis of legitimate interest (operating events) and, where required, explicit consent. You may withdraw consent at any time by emailing hello@bridgr.io.",
            },
            {
              heading: "5. Data sharing",
              body: "We use Appwrite (authentication and data storage) as a sub-processor. We do not share personal data with challenge partners or sponsors without your explicit consent. Aggregate, anonymised statistics may be shared publicly.",
            },
            {
              heading: "6. Retention",
              body: "Application data is retained for a maximum of 12 months after the event for which you applied, then deleted unless you have consented to further communication.",
            },
            {
              heading: "7. Your rights",
              body: "You have the right to access, correct, or delete your data. Email hello@bridgr.io with the subject 'Data Request' and we will respond within 30 days.",
            },
            {
              heading: "8. Cookies",
              body: "This website uses minimal cookies required for session management and language preferences. We do not use third-party tracking cookies.",
            },
            {
              heading: "9. Changes to this policy",
              body: "We may update this policy. Material changes will be announced via our updates page. Continued use of the site after changes constitutes acceptance.",
            },
            {
              heading: "10. Contact",
              body: "For any privacy-related queries: hello@bridgr.io",
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
