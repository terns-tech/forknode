"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/Button";
import { TernsLogo } from "@/components/TernsLogo";

export default function LoginPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { signIn } = await import("@/lib/appwrite");
      await signIn(email, password);
      window.location.href = "/admin";
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <TernsLogo size="lg" nameClassName="text-xl" />
        </div>

        {/* Card */}
        <div className="bg-white border border-border rounded-pill p-8 shadow-elevated">
          <h1 className="text-2xl font-semibold text-ink mb-6 text-center">{t.login.title}</h1>

          {error && (
            <div className="mb-4 p-3 bg-white border border-ink rounded-pill text-ink text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-slate-gray">
                {t.login.email}
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border border-ink/40 rounded-pill px-4 py-3 text-sm text-ink placeholder-dust-taupe focus:outline-none focus:border-ink transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-slate-gray">
                {t.login.password}
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white border border-ink/40 rounded-pill px-4 py-3 text-sm text-ink placeholder-dust-taupe focus:outline-none focus:border-ink transition-colors"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="mt-2 w-full"
            >
              {loading ? "Signing in…" : t.login.submit}
            </Button>
          </form>

          <p className="text-center text-xs text-slate-gray mt-6">
            {t.login.noAccount}{" "}
            <a href="mailto:hello@bridgr.io" className="text-link-blue hover:opacity-80 transition-colors">
              {t.login.contact}
            </a>
          </p>
        </div>

        <p className="text-center text-xs text-slate-gray mt-6">
          <Link href="/" className="hover:text-ink transition-colors">← Back to Terns</Link>
        </p>
      </div>
    </div>
  );
}
