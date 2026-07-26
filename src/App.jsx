import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Code2,
  Coins,
  Database,
  Landmark,
  LineChart,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const briefingEmail =
  "mailto:partners@courida.com?subject=Courida%20Partner%20Briefing%20Request";

const entryPoints = [
  {
    name: "Thelma by Courida",
    label: "Loyalty & Participation",
    headline: "Loyalty that builds something.",
    copy:
      "Recognize customers across channels, issue finality-confirmed rewards, and connect loyalty to cashback, receipts, community pools, and ownership pathways where appropriate.",
    detail:
      "A customer and brand experience for supervised demonstrations and focused loyalty pilots.",
    status: "Demonstrable in staging",
    href: "#thelma",
    icon: Coins,
    tone: "emerald",
  },
  {
    name: "William by Courida",
    label: "Investment & Ownership",
    headline: "Ownership, priced honestly.",
    copy:
      "Connect verified participation, community return, ownership design, and legitimacy analytics to investment access, valuation, and decision records.",
    detail:
      "An institutional product foundation for issuers, banks, custodians, advisors, and boards.",
    status: "Demonstration being validated",
    href: "#william",
    icon: LineChart,
    tone: "slate",
  },
  {
    name: "Courida Connect",
    label: "Enterprise Integration",
    headline: "Every integration. One platform.",
    copy:
      "Give partners one governed gateway to event recognition, finality and eligibility decisions, rewards, records, exports, and webhooks.",
    detail:
      "The primary integration door for payment processors, banks, custodians, brands, and infrastructure partners.",
    status: "Pilot integration layer",
    href: "#connect",
    icon: Network,
    tone: "blue",
  },
];

const productPortfolio = [
  {
    id: "thelma",
    name: "Thelma by Courida",
    label: "Flagship consumer product",
    copy:
      "Loyalty, rewards, receipts, cashback, community participation, and carefully scoped ownership pathways.",
    status: "Demonstrable",
    icon: Coins,
  },
  {
    id: "william",
    name: "William by Courida",
    label: "Flagship institutional product",
    copy:
      "Investment, holdings, ownership design, participation analytics, valuation support, and institutional decision records.",
    status: "Validation in progress",
    icon: LineChart,
  },
  {
    id: "commons",
    name: "Courida Commons",
    label: "Strategic community-wealth product",
    copy:
      "Administer pools, mutual aid, endowments, cooperatives, diaspora funds, and social wealth distributions with governance, finality verification, and transparent records.",
    status: "Pilot-scoped",
    icon: Users,
  },
];

const infrastructure = [
  {
    name: "Gool Protocol",
    label: "Finality & eligibility engine",
    copy:
      "Evaluates whether a recognized event has satisfied configured finality and policy conditions for Courida-enabled downstream actions.",
    status: "Core capability",
    icon: ShieldCheck,
  },
  {
    name: "Courida Data Exchange",
    label: "Consent, provenance & attribution",
    copy:
      "Provide provenance, consent, data liquidity, AI attribution, data dividends, synthetic lineage, and community-return routing for data-driven systems.",
    status: "Emerging product",
    icon: Database,
  },
  {
    name: "Courida Legitimacy",
    label: "Cross-platform assurance",
    copy:
      "Produce scoring, evidence, dashboards, and attestable records across products without representing legal or regulatory approval.",
    status: "Shared assurance layer",
    icon: BadgeCheck,
  },
];

const partnerPaths = [
  {
    audience: "Payment processors",
    lead: "Courida Connect",
    copy:
      "Recognize payment events, evaluate configured finality and eligibility through Gool Protocol, and route permitted loyalty or participation actions.",
  },
  {
    audience: "Banks and custodians",
    lead: "William + Courida Connect",
    copy:
      "Connect verified event records to ownership, entitlement, analytics, and review workflows without replacing regulated custody or settlement systems.",
  },
  {
    audience: "Loyalty and QSR brands",
    lead: "Thelma",
    copy:
      "Recover eligible loyalty across channels, issue rewards after confirmed events, and create transparent customer and campaign records.",
  },
  {
    audience: "Apparel and lifestyle brands",
    lead: "Thelma",
    copy:
      "Connect purchases, participation, loyalty benefits, receipts, community campaigns, and carefully scoped ownership prompts.",
  },
  {
    audience: "AI and data companies",
    lead: "Data Exchange + Connect",
    copy:
      "Trace consent and provenance, attribute data contributions, and explore governed return or dividend-routing models.",
  },
  {
    audience: "Governments and institutions",
    lead: "Commons + Courida Legitimacy",
    copy:
      "Explore transparent community pools, social wealth administration, governance records, and evidence of community return.",
  },
];

const pilots = [
  {
    name: "Finality-gated loyalty recognition",
    path: "Thelma + Courida Connect",
  },
  {
    name: "Third-party purchase loyalty recovery",
    path: "Thelma + Gool Protocol",
  },
  {
    name: "Community-pool campaign",
    path: "Courida Commons",
  },
  {
    name: "Data contribution and dividend attribution",
    path: "Courida Data Exchange",
  },
  {
    name: "Legitimacy dashboard",
    path: "William + Courida Legitimacy",
  },
];

function Status({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
        dark
          ? "border-white/15 bg-white/10 text-emerald-200"
          : "border-emerald-200 bg-emerald-50 text-emerald-800"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, copy, align = "center" }) {
  const alignment = align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl text-center";
  return (
    <div className={alignment}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{copy}</p>}
    </div>
  );
}

function EntryCard({ item }) {
  const Icon = item.icon;
  const tones = {
    emerald: "from-emerald-50 to-white text-emerald-800",
    slate: "from-slate-100 to-white text-slate-800",
    blue: "from-sky-50 to-white text-sky-800",
  };

  return (
    <a
      href={item.href}
      className="group block h-full rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4"
    >
      <Card className="h-full rounded-[2rem] border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-slate-200/80">
        <CardContent className="flex h-full flex-col p-7">
          <div className="flex items-start justify-between gap-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tones[item.tone]}`}>
              <Icon className="h-6 w-6" />
            </div>
            <Status>{item.status}</Status>
          </div>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            {item.label}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            {item.name}
          </h3>
          <p className="mt-4 text-lg font-semibold text-slate-900">{item.headline}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
          <p className="mt-4 text-sm leading-6 text-slate-500">{item.detail}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-slate-950">
            Explore this entry point
            <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </a>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#f7f8f6] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-[#f7f8f6]/90 backdrop-blur-xl">
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
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            <a className="transition hover:text-emerald-700" href="#entry-points">Start here</a>
            <a className="transition hover:text-emerald-700" href="#products">Products</a>
            <a className="transition hover:text-emerald-700" href="#connect">Infrastructure</a>
            <a className="transition hover:text-emerald-700" href="#partners">Partners</a>
            <a className="transition hover:text-emerald-700" href="#pilots">Pilots</a>
            <a className="transition hover:text-emerald-700" href="#company">Company</a>
          </nav>
          <Button asChild className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800">
            <a href={briefingEmail}>Request a briefing</a>
          </Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.12),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Participation infrastructure
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 md:text-7xl">
              Every transaction should build something.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              Courida helps brands, banks, processors, marketplaces, and institutions recognize
              participation, verify events, route value fairly, and prove outcomes through one
              connected platform.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800">
                <a href={briefingEmail}>
                  Request a partner briefing <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-slate-300 bg-white px-7">
                <a href="#entry-points">Find your entry point</a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Pre-launch partner briefings are available for pilot candidates and strategic
              infrastructure partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <Card className="overflow-hidden rounded-[2rem] border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
              <CardContent className="p-0">
                <div className="border-b border-slate-800 bg-slate-950 p-7 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                    One Courida platform
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">
                    Six connected offerings and infrastructure layers.
                  </h2>
                </div>
                <div className="space-y-3 p-6">
                  {[
                    ["01", "Recognize", "A purchase, contribution, vendor action, or data event enters the platform."],
                    ["02", "Verify", "Gool Protocol evaluates configured finality, policy, and eligibility conditions."],
                    ["03", "Route", "Thelma, William, Commons, or Data Exchange receives the permitted action."],
                    ["04", "Prove", "Courida Legitimacy and Connect produce records, dashboards, and exports."],
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

      <section className="border-y border-slate-200 bg-white py-9">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-4 md:px-8">
          {[
            ["Recognize", "Identify qualifying activity across channels."],
            ["Verify", "Gate value movement on configured finality and policy."],
            ["Route", "Send benefits to rewards, pools, data returns, or participation prompts."],
            ["Prove", "Produce records, receipts, attestations, dashboards, and exports."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-950">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="entry-points" className="px-5 py-20 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Start here"
          title="Three clear doors into the Courida platform."
          copy="Begin with the outcome or integration your organization needs. Courida keeps the underlying record flow connected as the relationship expands."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-3">
          {entryPoints.map((item) => <EntryCard key={item.name} item={item} />)}
        </div>
      </section>

      <section id="products" className="border-y border-slate-200 bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Products"
            title="Experiences that turn participation into durable value."
            copy="Thelma and William lead current customer and institutional conversations. Courida Commons remains a first-class product and strategic destination for community wealth, introduced through the pilots and partner paths where it is most relevant."
            align="left"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {productPortfolio.map((product) => {
              const Icon = product.icon;
              return (
                <Card id={product.id} key={product.name} className="scroll-mt-28 rounded-3xl border-slate-200 bg-[#f7f8f6] shadow-none">
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-800 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Status>{product.status}</Status>
                    </div>
                    <p className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
                      {product.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{product.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{product.copy}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="connect" className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Courida Connect
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              One governed integration point for enterprise partners.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Payment processors, banks, custodians, brands, and infrastructure partners access
              Courida capabilities through a consistent gateway for authentication, event
              recognition, routing, records, exports, and webhooks.
            </p>
            <div className="mt-8 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-200">
                Powered by Gool Protocol
              </p>
              <p className="mt-3 leading-7 text-slate-200">
                Gool evaluates whether a recognized event has satisfied configured finality and
                policy conditions for Courida-enabled downstream actions. It does not replace a
                partner’s regulated settlement, custody, or authoritative books and records.
              </p>
            </div>
          </div>
          <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-none">
            <CardContent className="p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-emerald-300">Sample partner event</p>
                  <h3 className="mt-2 text-2xl font-semibold">From processor signal to permitted outcome</h3>
                </div>
                <Code2 className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="mt-7 space-y-3">
                {[
                  "Partner submits an authenticated event through Courida Connect",
                  "Gool evaluates configured recognition, finality, policy, and eligibility conditions",
                  "Courida routes the permitted action to Thelma, William, Commons, or Data Exchange",
                  "Connect returns traceable status, records, exports, or webhooks",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-emerald-200">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="infrastructure" className="px-5 py-20 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Shared infrastructure"
          title="Capabilities beneath and across the product experience."
          copy="These layers help Courida products and partner integrations verify events, govern data, and preserve evidence without forcing every buyer to adopt a separate system."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-3">
          {infrastructure.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.name} className="rounded-3xl border-slate-200 bg-white shadow-sm">
                <CardContent className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Status>{item.status}</Status>
                  </div>
                  <p className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">{item.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{item.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.copy}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0c1612] px-5 py-20 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">In Gool</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Confirmed. Protected. Eligible.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              In Guyanese street games, being “in gool” means being in the safe zone. Courida uses
              that idea as a technical metaphor: once a transaction, contribution, or entitlement
              satisfies configured verification conditions, it enters a protected recognition state
              for Courida-enabled actions.
            </p>
          </div>
          <Card className="rounded-[2rem] border-white/10 bg-white/5 text-white shadow-none">
            <CardContent className="grid gap-4 p-6 md:grid-cols-2">
              {[
                "Transaction recognized",
                "Configured finality conditions evaluated",
                "Policy gate cleared",
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

      <section id="partners" className="px-5 py-20 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Partner paths"
          title="Enter through the capability that matches your role."
          copy="Different partners begin in different places. Courida Connect keeps the integration and record flow coherent as the relationship expands."
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partnerPaths.map((partner) => (
            <div key={partner.audience} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <Landmark className="h-5 w-5 text-emerald-700" />
                <h3 className="font-semibold text-slate-950">{partner.audience}</h3>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
                Lead with {partner.lead}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{partner.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pilots" className="border-y border-slate-200 bg-white px-5 py-20 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Pilot menu"
          title="Start narrow. Prove value. Expand carefully."
          copy="Pilot availability and scope are confirmed through partner discovery, technical validation, and counsel review—not assumed from the breadth of the platform vision."
        />
        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {pilots.map((pilot, index) => (
            <div key={pilot.name} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-[#f7f8f6] p-5 sm:flex-row sm:items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-emerald-700 shadow-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{pilot.name}</p>
                <p className="mt-1 text-sm text-slate-500">{pilot.path}</p>
              </div>
              <Status>Pilot-scoped</Status>
            </div>
          ))}
        </div>
      </section>

      <section id="company" className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <Card className="rounded-3xl border-slate-200 bg-white shadow-sm md:col-span-2">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Company</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Courida is preparing pre-launch partner briefings.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Courida Inc. is building participation infrastructure for organizations that want
                rewards, data, payments, investment access, and community return to operate from
                verified records rather than disconnected claims.
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
                <a href={briefingEmail}>partners@courida.com</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Courida Inc. All rights reserved.</p>
          <p>Pre-launch working site. Pilot availability subject to partner scoping and counsel review.</p>
        </div>
      </footer>
    </main>
  );
}
