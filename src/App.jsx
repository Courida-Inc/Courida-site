import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Network,
  Coins,
  Database,
  Users,
  Code2,
  LineChart,
  CheckCircle2,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const silos = [
  {
    name: "Thelma",
    label: "Loyalty Management",
    headline: "Loyalty that builds something.",
    copy:
      "Recognize customers across every channel, issue finality-confirmed rewards, and connect loyalty to cashback, receipts, community pools, and ownership pathways where appropriate.",
    icon: Coins,
  },
  {
    name: "William",
    label: "Investment & Ownership",
    headline: "Ownership, priced honestly.",
    copy:
      "Connect verified participation, community return, ownership design, and legitimacy analytics to investment access, valuation, and board-ready decision records.",
    icon: LineChart,
  },
  {
    name: "Courida Commons",
    label: "Community Wealth",
    headline: "What the community builds, the community keeps.",
    copy:
      "Administer pools, mutual aid, endowments, cooperatives, diaspora funds, and social wealth distributions with governance, finality verification, and transparent records.",
    icon: Users,
  },
  {
    name: "Courida Data Exchange",
    label: "Data Attribution",
    headline: "Data contribution should be traceable, consented, and capable of return.",
    copy:
      "Provide provenance, consent, data liquidity, AI attribution, data dividends, synthetic lineage, and community-return routing for data-driven systems.",
    icon: Database,
  },
  {
    name: "Gool Protocol",
    label: "Safe-Zone Infrastructure",
    headline: "In Gool. Confirmed. Protected. Eligible.",
    copy:
      "Determine economic finality, manage transaction-token recognition, apply compliance gates, and release obligations across payment rails and economic event types.",
    icon: ShieldCheck,
  },
  {
    name: "Courida Connect",
    label: "API & Developer Platform",
    headline: "Every integration. One platform.",
    copy:
      "Give partners one API gateway to finality events, token records, rewards, data contributions, pool routing, legitimacy attestations, receipts, exports, and webhooks.",
    icon: Code2,
  },
];

const audiences = [
  "Payment processors",
  "Banks and custodians",
  "Loyalty and QSR brands",
  "Apparel and lifestyle brands",
  "AI and data companies",
  "Governments and institutions",
];

const pilots = [
  "Finality-gated loyalty recognition",
  "Third-party purchase loyalty recovery",
  "Community-pool campaign",
  "Data contribution and dividend attribution",
  "Legitimacy dashboard",
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {copy && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{copy}</p>}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Courida home">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
              C
            </div>
            <div>
              <p className="text-lg font-semibold leading-none tracking-tight">Courida</p>
              <p className="text-xs text-slate-500">Participation Infrastructure</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a className="hover:text-slate-950" href="#platform">Platform</a>
            <a className="hover:text-slate-950" href="#partners">Partners</a>
            <a className="hover:text-slate-950" href="#pilots">Pilots</a>
            <a className="hover:text-slate-950" href="#company">Company</a>
          </nav>
          <Button asChild className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800">
            <a href="mailto:partners@courida.com?subject=Courida%20Partner%20Briefing%20Request">
              Request a briefing
            </a>
          </Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_36%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.12),transparent_32%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-wrap gap-2">
              <Badge>Finality-gated rewards</Badge>
              <Badge>Community wealth</Badge>
              <Badge>Data attribution</Badge>
              <Badge>Legitimacy systems</Badge>
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Every transaction should build something.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              Courida helps brands, banks, processors, marketplaces, and institutions build
              finality-gated rewards, community wealth, data attribution, and legitimacy systems that
              recognize members, route value fairly, and prove community return through one connected
              platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800">
                <a href="mailto:partners@courida.com?subject=Courida%20Partner%20Briefing%20Request">
                  Request a partner briefing <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-slate-300 bg-white px-7">
                <a href="#platform">Explore the platform</a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Pre-launch partner briefings are available for pilot candidates and strategic
              infrastructure partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <Card className="overflow-hidden rounded-[2rem] border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
              <CardContent className="p-0">
                <div className="border-b border-slate-200 bg-slate-950 p-6 text-white">
                  <p className="text-sm font-medium text-emerald-300">Sample event flow</p>
                  <h3 className="mt-2 text-2xl font-semibold">From event to verified outcome</h3>
                </div>
                <div className="space-y-4 p-6">
                  {[
                    ["01", "Event recognized", "Purchase, contribution, vendor action, or data event enters the platform."],
                    ["02", "Finality confirmed", "Gool Protocol determines whether the event is safe for downstream action."],
                    ["03", "Value routed", "Thelma, Commons, William, or Data Exchange receives the permitted action."],
                    ["04", "Impact proven", "Courida Legitimacy and Connect produce records, dashboards, and exports."],
                  ].map(([num, title, body]) => (
                    <div key={num} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-emerald-700 shadow-sm">
                        {num}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-950">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-4 md:px-8">
          {[
            ["Recognize", "Identify qualifying activity across channels."],
            ["Verify", "Gate value movement on finality and policy."],
            ["Route", "Send benefits to rewards, pools, data returns, or prompts."],
            ["Prove", "Produce records, receipts, attestations, and exports."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-950">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="platform" className="px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="Six operating layers. One connected infrastructure."
          copy="Courida can begin as a focused pilot and expand into a broader participation infrastructure stack over time."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {silos.map((silo) => {
            const Icon = silo.icon;
            return (
              <Card key={silo.name} className="rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-emerald-700">{silo.label}</p>
                      <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{silo.name}</h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="mt-5 text-lg font-semibold text-slate-950">{silo.headline}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{silo.copy}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">In Gool</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Confirmed. Protected. Eligible.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              In Guyanese street games, being "in gool" means being in the safe zone. Courida uses
              that idea as a technical metaphor: once a transaction, contribution, or entitlement is
              verified, it enters a protected recognition state.
            </p>
          </div>
          <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-none">
            <CardContent className="grid gap-4 p-6 md:grid-cols-2">
              {[
                "Transaction recognized",
                "Finality confirmed",
                "Compliance gate cleared",
                "Eligible for reward, routing, or participation prompt",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="partners" className="px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="Partners"
          title="Built for enterprise first-contact conversations."
          copy="Different partners enter through different layers, but the platform keeps the record flow connected."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5 text-emerald-700" />
                <h3 className="font-semibold text-slate-950">{audience}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore a narrow pilot focused on verified recognition, value routing, and audit-ready
                records.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="pilots" className="bg-white px-5 py-20 md:px-8">
        <SectionHeading
          eyebrow="Pilot menu"
          title="Start narrow. Prove value. Expand carefully."
          copy="Courida pilot scopes are designed to be credible, measurable, and demo-ready within a focused implementation window."
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {pilots.map((pilot, index) => (
            <div key={pilot} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-emerald-700 shadow-sm">
                {index + 1}
              </div>
              <p className="font-medium text-slate-900">{pilot}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="company" className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <Card className="rounded-3xl border-slate-200 bg-white shadow-sm md:col-span-2">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Company</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Courida is preparing pre-launch partner briefings.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Courida is building participation infrastructure for organizations that want rewards,
                data, payments, investment access, and community return to operate from verified
                records rather than disconnected claims.
              </p>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <LockKeyhole className="h-5 w-5 text-emerald-700" />
                  <p className="mt-3 font-semibold">Pre-launch and confidential</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Partner discussions are exploratory and pilot-focused.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <ShieldCheck className="h-5 w-5 text-emerald-700" />
                  <p className="mt-3 font-semibold">Patent applications filed</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Core architecture is supported by provisional filings and continuing development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-slate-200 bg-slate-950 text-white shadow-sm">
            <CardContent className="p-8">
              <Mail className="h-8 w-8 text-emerald-300" />
              <h3 className="mt-5 text-2xl font-semibold">Request a briefing</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                For payment processors, banks, brands, data partners, institutions, and pilot
                candidates.
              </p>
              <Button asChild className="mt-6 w-full rounded-full bg-white text-slate-950 hover:bg-slate-100">
                <a href="mailto:partners@courida.com?subject=Courida%20Partner%20Briefing%20Request">
                  partners@courida.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Courida, Inc. All rights reserved.</p>
          <p>
            Pre-launch working site. Pilot availability subject to partner scoping and counsel review.
          </p>
        </div>
      </footer>
    </main>
  );
}
