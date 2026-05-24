"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Tab = "participant" | "volunteer" | "speaker" | "sponsor";

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-gray">
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="bg-white border border-ink/40 rounded-pill px-4 py-3 text-sm text-ink placeholder-dust-taupe focus:outline-none focus:border-ink transition-colors"
      />
    </div>
  );
}

function TextareaField({
  label,
  id,
  placeholder,
  required,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-gray">
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={rows}
        className="bg-white border border-ink/40 rounded-pill px-4 py-3 text-sm text-ink placeholder-dust-taupe focus:outline-none focus:border-ink transition-colors resize-none"
      />
    </div>
  );
}

function SelectField({
  label,
  id,
  options,
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-gray">
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="bg-white border border-ink/40 rounded-pill px-4 py-3 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function SuccessState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
      <CheckCircle2 size={48} className="text-ink" />
      <h3 className="text-h2 text-ink">{message}</h3>
      <p className="text-body text-slate-gray font-[450] max-w-xs">
        Next steps are coming soon. We&apos;ll reach out when the time is right.
      </p>
    </div>
  );
}

export default function ApplyPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>("participant");
  const [submitted, setSubmitted] = useState<Tab | null>(null);

  // Participant form state
  const [pForm, setPForm] = useState({
    fullName: "",
    email: "",
    github: "",
    linkedin: "",
    skills: "",
    motivation: "",
    teamStatus: "",
    travelNote: "",
  });

  // Volunteer form state
  const [vForm, setVForm] = useState({
    fullName: "",
    email: "",
    availability: "",
    role: "",
    experience: "",
  });

  // Speaker form state
  const [sForm, setSForm] = useState({
    fullName: "",
    email: "",
    bio: "",
    topic: "",
    availability: "",
    linkedin: "",
  });

  // Sponsor form state
  const [spForm, setSpForm] = useState({
    company: "",
    name: "",
    email: "",
    intent: "",
    message: "",
  });

  const handleSubmit = (tab: Tab) => (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(tab);
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "participant", label: t.apply.tabs.participant },
    { key: "volunteer", label: t.apply.tabs.volunteer },
    { key: "speaker", label: t.apply.tabs.speaker },
    { key: "sponsor", label: t.apply.tabs.sponsor },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-canvas py-20 lg:py-28 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-6">{t.apply.eyebrow}</p>
          <h1 className="text-h1 text-ink mb-6">
            {t.apply.title}
          </h1>
          <p className="text-body text-slate-gray font-[450] max-w-xl">{t.apply.subtitle}</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24 bg-lifted">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div
            id="participant"
            className="flex flex-wrap gap-2 mb-10 border-b border-border pb-0"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                id={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setSubmitted(null);
                }}
                className={cn(
                  "px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors",
                  activeTab === tab.key
                    ? "border-ink text-ink"
                    : "border-transparent text-slate-gray hover:text-ink"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Participant Form */}
          {activeTab === "participant" && (
            submitted === "participant" ? (
              <SuccessState message={t.apply.participant.success} />
            ) : (
              <form onSubmit={handleSubmit("participant")} className="flex flex-col gap-5">
                <h2 className="text-h2 text-ink mb-2">{t.apply.participant.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label={t.apply.participant.fields.fullName} id="p-name" value={pForm.fullName} onChange={(v) => setPForm({ ...pForm, fullName: v })} required />
                  <InputField label={t.apply.participant.fields.email} id="p-email" type="email" value={pForm.email} onChange={(v) => setPForm({ ...pForm, email: v })} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label={t.apply.participant.fields.github} id="p-github" value={pForm.github} onChange={(v) => setPForm({ ...pForm, github: v })} />
                  <InputField label={t.apply.participant.fields.linkedin} id="p-linkedin" value={pForm.linkedin} onChange={(v) => setPForm({ ...pForm, linkedin: v })} />
                </div>
                <InputField label={t.apply.participant.fields.skills} id="p-skills" placeholder={t.apply.participant.fields.skillsPlaceholder} value={pForm.skills} onChange={(v) => setPForm({ ...pForm, skills: v })} required />
                <TextareaField label={t.apply.participant.fields.motivation} id="p-motivation" placeholder={t.apply.participant.fields.motivationPlaceholder} value={pForm.motivation} onChange={(v) => setPForm({ ...pForm, motivation: v })} required rows={5} />
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-gray">{t.apply.participant.fields.teamStatus}</span>
                  <div className="flex gap-4">
                    {[
                      { value: "team", label: t.apply.participant.fields.teamYes },
                      { value: "solo", label: t.apply.participant.fields.teamNo },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="teamStatus"
                          value={opt.value}
                          checked={pForm.teamStatus === opt.value}
                          onChange={() => setPForm({ ...pForm, teamStatus: opt.value })}
                          className="accent-ink"
                        />
                        <span className="text-sm text-slate-gray">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <TextareaField label={t.apply.participant.fields.travelNote} id="p-travel" value={pForm.travelNote} onChange={(v) => setPForm({ ...pForm, travelNote: v })} rows={2} />
                <Button type="submit" variant="primary" size="lg" className="mt-2">
                  {t.apply.participant.submit}
                </Button>
              </form>
            )
          )}

          {/* Volunteer Form */}
          {activeTab === "volunteer" && (
            submitted === "volunteer" ? (
              <SuccessState message={t.apply.volunteer.success} />
            ) : (
              <form onSubmit={handleSubmit("volunteer")} className="flex flex-col gap-5">
                <h2 className="text-h2 text-ink mb-2">{t.apply.volunteer.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label={t.apply.volunteer.fields.fullName} id="v-name" value={vForm.fullName} onChange={(v) => setVForm({ ...vForm, fullName: v })} required />
                  <InputField label={t.apply.volunteer.fields.email} id="v-email" type="email" value={vForm.email} onChange={(v) => setVForm({ ...vForm, email: v })} required />
                </div>
                <InputField label={t.apply.volunteer.fields.availability} id="v-avail" value={vForm.availability} onChange={(v) => setVForm({ ...vForm, availability: v })} required />
                <InputField label={t.apply.volunteer.fields.role} id="v-role" placeholder={t.apply.volunteer.fields.rolePlaceholder} value={vForm.role} onChange={(v) => setVForm({ ...vForm, role: v })} />
                <TextareaField label={t.apply.volunteer.fields.experience} id="v-exp" value={vForm.experience} onChange={(v) => setVForm({ ...vForm, experience: v })} rows={4} />
                <Button type="submit" variant="primary" size="lg" className="mt-2">
                  {t.apply.volunteer.submit}
                </Button>
              </form>
            )
          )}

          {/* Speaker Form */}
          {activeTab === "speaker" && (
            submitted === "speaker" ? (
              <SuccessState message={t.apply.speaker.success} />
            ) : (
              <form id="speaker" onSubmit={handleSubmit("speaker")} className="flex flex-col gap-5">
                <h2 className="text-h2 text-ink mb-2">{t.apply.speaker.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label={t.apply.speaker.fields.fullName} id="s-name" value={sForm.fullName} onChange={(v) => setSForm({ ...sForm, fullName: v })} required />
                  <InputField label={t.apply.speaker.fields.email} id="s-email" type="email" value={sForm.email} onChange={(v) => setSForm({ ...sForm, email: v })} required />
                </div>
                <TextareaField label={t.apply.speaker.fields.bio} id="s-bio" value={sForm.bio} onChange={(v) => setSForm({ ...sForm, bio: v })} required rows={3} />
                <InputField label={t.apply.speaker.fields.topic} id="s-topic" value={sForm.topic} onChange={(v) => setSForm({ ...sForm, topic: v })} required />
                <InputField label={t.apply.speaker.fields.availability} id="s-avail" value={sForm.availability} onChange={(v) => setSForm({ ...sForm, availability: v })} />
                <InputField label={t.apply.speaker.fields.linkedin} id="s-linkedin" value={sForm.linkedin} onChange={(v) => setSForm({ ...sForm, linkedin: v })} />
                <Button type="submit" variant="primary" size="lg" className="mt-2">
                  {t.apply.speaker.submit}
                </Button>
              </form>
            )
          )}

          {/* Sponsor Form */}
          {activeTab === "sponsor" && (
            submitted === "sponsor" ? (
              <SuccessState message={t.apply.sponsor.success} />
            ) : (
              <form id="sponsor" onSubmit={handleSubmit("sponsor")} className="flex flex-col gap-5">
                <h2 className="text-h2 text-ink mb-2">{t.apply.sponsor.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label={t.apply.sponsor.fields.company} id="sp-co" value={spForm.company} onChange={(v) => setSpForm({ ...spForm, company: v })} required />
                  <InputField label={t.apply.sponsor.fields.name} id="sp-name" value={spForm.name} onChange={(v) => setSpForm({ ...spForm, name: v })} required />
                </div>
                <InputField label={t.apply.sponsor.fields.email} id="sp-email" type="email" value={spForm.email} onChange={(v) => setSpForm({ ...spForm, email: v })} required />
                <SelectField label={t.apply.sponsor.fields.intent} id="sp-intent" options={[...t.apply.sponsor.fields.intentOptions]} value={spForm.intent} onChange={(v) => setSpForm({ ...spForm, intent: v })} required />
                <TextareaField label={t.apply.sponsor.fields.message} id="sp-msg" value={spForm.message} onChange={(v) => setSpForm({ ...spForm, message: v })} rows={5} />
                <Button type="submit" variant="primary" size="lg" className="mt-2">
                  {t.apply.sponsor.submit}
                </Button>
              </form>
            )
          )}
        </div>
      </section>
    </div>
  );
}
