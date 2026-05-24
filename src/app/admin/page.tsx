"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TernsLogo } from "@/components/TernsLogo";
import {
  LayoutDashboard,
  FileText,
  Users,
  HelpCircle,
  Settings,
  Inbox,
  RefreshCw,
  Shield,
  LogOut,
  ChevronRight,
  TrendingUp,
  UserCheck,
  Building2,
  Mic,
} from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type AdminTab =
  | "overview"
  | "sections"
  | "partners"
  | "speakers"
  | "faq"
  | "events"
  | "submissions"
  | "notion"
  | "audit";

const navItems: { key: AdminTab; icon: React.ElementType; label: string }[] = [
  { key: "overview", icon: LayoutDashboard, label: "Overview" },
  { key: "sections", icon: FileText, label: "Page Sections" },
  { key: "partners", icon: Building2, label: "Partners" },
  { key: "speakers", icon: Mic, label: "Speakers" },
  { key: "faq", icon: HelpCircle, label: "FAQ" },
  { key: "events", icon: Settings, label: "Event Settings" },
  { key: "submissions", icon: Inbox, label: "Submissions" },
  { key: "notion", icon: RefreshCw, label: "Notion Sync" },
  { key: "audit", icon: Shield, label: "Audit Log" },
];

const mockSubmissions = [
  { id: 1, name: "Rahul Sharma", email: "rahul@example.com", type: "Participant", status: "new", date: "Apr 15, 2026" },
  { id: 2, name: "Sneha Patil", email: "sneha@example.com", type: "Participant", status: "reviewing", date: "Apr 14, 2026" },
  { id: 3, name: "Amit Kulkarni", email: "amit@example.com", type: "Volunteer", status: "new", date: "Apr 13, 2026" },
  { id: 4, name: "TechCorp India", email: "hello@techcorp.in", type: "Sponsor", status: "reviewing", date: "Apr 12, 2026" },
  { id: 5, name: "Dr. Priya Singh", email: "priya@iit.ac.in", type: "Speaker", status: "accepted", date: "Apr 10, 2026" },
];

const statusColors: Record<string, string> = {
  new: "bg-soft-bone text-ink",
  reviewing: "bg-soft-bone text-ink",
  accepted: "bg-soft-bone text-ink",
  rejected: "bg-soft-bone text-ink",
};

export default function AdminPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSignOut = async () => {
    const { signOut } = await import("@/lib/appwrite");
    await signOut();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-canvas flex">
      {/* Sidebar */}
      <aside
        className={cn(
          "shrink-0 bg-lifted border-r border-border flex flex-col transition-all duration-200",
          sidebarOpen ? "w-56" : "w-14"
        )}
      >
        {/* Logo */}
        <div className="h-20 flex items-center px-4 border-b border-border">
          {sidebarOpen ? (
            <TernsLogo size={56} label="Terns Admin" nameClassName="text-sm" />
          ) : (
            <TernsLogo size={56} showName={false} className="mx-auto" />
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-2 flex flex-col gap-0.5">
          {navItems.map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-pill text-sm font-medium transition-colors w-full text-left",
                activeTab === key
                  ? "bg-white text-ink"
                  : "text-slate-gray hover:text-ink hover:bg-white/40"
              )}
            >
              <Icon size={16} className="shrink-0" />
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-2 border-t border-border">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-pill text-sm text-slate-gray hover:text-ink hover:bg-white/40 transition-colors w-full"
          >
            <LogOut size={16} className="shrink-0" />
            {sidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-lifted border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-gray hover:text-ink transition-colors"
            >
              <LayoutDashboard size={18} />
            </button>
            <span className="text-slate-gray text-xs">
              Admin ›{" "}
              <span className="text-ink capitalize">{activeTab}</span>
            </span>
          </div>
          <Link href="/" className="text-xs text-slate-gray hover:text-ink transition-colors flex items-center gap-1">
            View site <ChevronRight size={12} />
          </Link>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === "overview" && (
            <div>
              <h1 className="text-2xl font-semibold text-ink mb-6">Overview</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Applications", value: "24", trend: "+12 this week", icon: UserCheck },
                  { label: "Partners", value: "6", trend: "2 confirmed", icon: Building2 },
                  { label: "Speakers", value: "0", trend: "TBA", icon: Mic },
                  { label: "Submissions", value: "31", trend: "+8 today", icon: Inbox },
                ].map((s) => (
                  <div key={s.label} className="bg-white border border-border rounded-pill p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-dust-taupe uppercase tracking-[0.56px]">{s.label}</span>
                      <s.icon size={14} className="text-ink" />
                    </div>
                    <div className="text-3xl font-semibold text-ink mb-1">{s.value}</div>
                    <div className="text-xs text-dust-taupe">{s.trend}</div>
                  </div>
                ))}
              </div>

              {/* Recent submissions preview */}
              <div className="bg-white border border-border rounded-pill">
                <div className="p-5 border-b border-border flex items-center justify-between">
                  <h2 className="font-semibold text-ink text-sm">Recent Submissions</h2>
                  <button onClick={() => setActiveTab("submissions")} className="text-xs text-link-blue hover:opacity-80">View all →</button>
                </div>
                <div className="divide-y divide-border">
                  {mockSubmissions.slice(0, 3).map((sub) => (
                    <div key={sub.id} className="flex items-center justify-between px-5 py-3">
                      <div>
                        <p className="text-sm text-ink font-medium">{sub.name}</p>
                        <p className="text-xs text-dust-taupe">{sub.email}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-dust-taupe">{sub.type}</span>
                        <span className={cn("text-xs px-2 py-0.5 rounded-sm font-medium", statusColors[sub.status])}>
                          {sub.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "submissions" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold text-ink">Submissions</h1>
                <button className="text-xs bg-white border border-ink/30 text-ink px-3 py-1.5 rounded-pill hover:opacity-80 transition-colors">
                  Export CSV
                </button>
              </div>

              {/* Filter tabs */}
              <div className="flex gap-2 mb-5">
                {["All", "Participant", "Volunteer", "Speaker", "Sponsor"].map((f) => (
                  <button key={f} className="text-xs px-3 py-1.5 rounded-pill border border-ink/30 text-slate-gray hover:text-ink transition-colors">
                    {f}
                  </button>
                ))}
              </div>

              <div className="bg-white border border-border rounded-pill overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      {["Name", "Email", "Type", "Status", "Date", "Actions"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 text-xs font-medium text-dust-taupe uppercase tracking-[0.56px]">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {mockSubmissions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-white/3 transition-colors">
                        <td className="px-5 py-3.5 text-ink font-medium">{sub.name}</td>
                        <td className="px-5 py-3.5 text-slate-gray">{sub.email}</td>
                        <td className="px-5 py-3.5 text-slate-gray">{sub.type}</td>
                        <td className="px-5 py-3.5">
                          <span className={cn("text-xs px-2 py-0.5 rounded-sm font-medium", statusColors[sub.status])}>
                            {sub.status}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-dust-taupe text-xs">{sub.date}</td>
                        <td className="px-5 py-3.5">
                          <button className="text-xs text-link-blue hover:opacity-80 transition-colors">
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div>
              <h1 className="text-2xl font-semibold text-ink mb-6">Event Settings</h1>
              <div className="max-w-xl bg-white border border-border rounded-pill p-7">
                <h2 className="font-semibold text-ink mb-5">HackPune 2026</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Location", value: "Pune, India (TBA venue)", type: "text" },
                    { label: "Date", value: "2026 — Date TBA", type: "text" },
                    { label: "Luma URL", value: "https://lu.ma/hackpune", type: "url" },
                    { label: "Discord URL", value: "https://discord.gg/bridgr", type: "url" },
                    { label: "Slack URL", value: "https://join.slack.com/bridgr", type: "url" },
                  ].map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-slate-gray uppercase tracking-[0.56px]">{f.label}</label>
                      <input
                        type={f.type}
                        defaultValue={f.value}
                        className="bg-white border border-ink/40 rounded-pill px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-slate-gray">Applications open</span>
                    <button className="relative w-10 h-5 rounded-full bg-border transition-colors hover:bg-ink/20">
                      <span className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-ink transition-all" />
                    </button>
                  </div>
                  <button className="mt-2 bg-ink text-canvas px-4 py-2.5 rounded-md text-sm font-medium hover:translate-y-[1px] transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notion" && (
            <div>
              <h1 className="text-2xl font-semibold text-ink mb-6">Notion Sync</h1>
              <div className="max-w-xl bg-white border border-border rounded-pill p-7">
                <p className="text-body text-slate-gray font-[450] mb-6">
                  Connect a Notion database to power the Updates/Announcements section. The site caches results in Supabase — Notion outages won&apos;t take the site down.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-slate-gray uppercase tracking-[0.56px]">Notion Token</label>
                    <input
                      type="password"
                      placeholder="secret_…"
                      className="bg-white border border-ink/40 rounded-pill px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-ink transition-colors font-mono"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-slate-gray uppercase tracking-[0.56px]">Announcements Database ID</label>
                    <input
                      type="text"
                      placeholder="abc123…"
                      className="bg-white border border-ink/40 rounded-pill px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-ink transition-colors font-mono"
                    />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button className="bg-ink text-canvas px-4 py-2.5 rounded-md text-sm font-medium hover:translate-y-[1px] transition-colors">
                      Save Configuration
                    </button>
                    <button className="bg-white border border-ink/30 text-ink px-4 py-2.5 rounded-pill text-sm font-medium hover:opacity-80 transition-colors flex items-center gap-2">
                      <RefreshCw size={14} />
                      Sync Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {!["overview", "submissions", "events", "notion"].includes(activeTab) && (
            <div>
              <h1 className="text-2xl font-semibold text-ink mb-6 capitalize">{activeTab}</h1>
              <div className="bg-white border border-dashed border-border rounded-pill p-12 text-center">
                <p className="text-body text-slate-gray font-[450]">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} management coming in the next build.
                </p>
                <p className="text-xs text-dust-taupe mt-2">
                  Connect Supabase to enable full CRUD operations.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
