"use client";

import Link from "next/link";
import {
  Banknote,
  Zap,
  ShieldCheck,
  Presentation,
  MousePointerClick,
  GaugeCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Reveal from "../components/Reveal";

const features = [
  {
    title: "Save on every transaction",
    description:
      "Stop losing 2–3% of revenue to interchange fees. Bogle routes payments over ACH so you keep more of every sale.",
    icon: Banknote,
  },
  {
    title: "One-click checkout",
    description:
      "Delight customers with a friction-free flow that links their bank account in seconds – no account numbers required.",
    icon: MousePointerClick,
  },
  {
    title: "Instant settlement",
    description:
      "We front the funds so you don’t wait days for money to show up. Cash hits your account the moment a customer pays.",
    icon: GaugeCircle,
  },
  {
    title: "Enterprise-grade security",
    description:
      "Bank-level encryption, tokenisation and continuous monitoring keep your business and your customers safe.",
    icon: ShieldCheck,
  },
  {
    title: "Drop-in components",
    description:
      "A suite of pre-built widgets and a clean REST & GraphQL API means you integrate in an afternoon, not weeks.",
    icon: Presentation,
  },
  {
    title: "Transparent pricing",
    description:
      "Flat $0.25 per transaction or a simple SaaS plan. No set-up fees, no surprises.",
    icon: Zap,
  },
];

// New timeline section – 3 simple steps
const howSteps = [
  {
    title: "Connect your bank",
    description:
      "Securely link your business account in minutes with our Plaid-powered authorisation flow.",
    icon: Banknote,
  },
  {
    title: "Go live in hours",
    description:
      "Drop our one-click checkout widget in your site or app – no lengthy PCI audits or SDK headaches.",
    icon: MousePointerClick,
  },
  {
    title: "Get paid instantly",
    description:
      "Funds land in your account the second a customer pays – no more 2-day card holds.",
    icon: GaugeCircle,
  },
];

// Social proof section
const testimonials = [
  {
    quote:
      "Switching to Bogle slashed our payment costs by 70% and checkout conversion actually went UP.",
    name: "Jessie Carter",
    title: "Founder, Bloom Coffee Co.",
  },
  {
    quote:
      "Integration was a breeze – we had ACH payments live in an afternoon.",
    name: "Miguel Alvarez",
    title: "CTO, CraftyGoods",
  },
  {
    quote:
      "Instant settlement means we never worry about cash-flow gaps again.",
    name: "Sarah Lee",
    title: "COO, FreshFarm Market",
  },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen flex flex-col font-sans overflow-hidden">
      {/* Decorative blurred background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-10%] h-[300px] w-[480px] -translate-x-1/2 bg-gradient-to-tr from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] opacity-30 blur-[120px]" />
        <div className="absolute right-[-20%] bottom-[-20%] h-[240px] w-[360px] rotate-45 bg-gradient-to-tr from-[#d946ef] via-[#ec4899] to-[#f97316] opacity-20 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10 z-20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Bogle
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#how" className="hover:opacity-70 transition-opacity">
              How it works
            </a>
            <a href="#features" className="hover:opacity-70 transition-opacity">
              Features
            </a>
            <a href="#pricing" className="hover:opacity-70 transition-opacity">
              Pricing
            </a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">
              Contact
            </a>
          </nav>
          <a
            href="#signup"
            className="rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get early access
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="grow">
        {/* Hero */}
        <section
          id="hero"
          className="relative mx-auto max-w-7xl px-6 pt-28 pb-36 text-center flex flex-col items-center"
        >
          {/* Animated radial gradient behind heading */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex justify-center"
          >
            <span className="block h-[520px] w-[520px] bg-[radial-gradient(circle_at_center,theme(colors.indigo.400)/40,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,theme(colors.indigo.500)/40,transparent_70%)] blur-3xl animate-pulse-slow" />
          </span>

          <h1 className="relative text-5xl/tight md:text-7xl/tight font-extrabold tracking-tight max-w-4xl bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent drop-shadow-md">
            Say goodbye to credit-card fees.
          </h1>

          {/* Down arrow */}
          <a
            href="#features"
            className="mt-16 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors animate-pulse-slow"
          >
            <ChevronDown size={28} />
          </a>
          <p className="mt-6 max-w-2xl text-lg md:text-2xl text-black/70 dark:text-white/80">
            Bogle bundles one-click ACH payments into a single,
            easy-to-integrate platform so small businesses keep more of every
            sale.
          </p>
          <a
            href="#signup"
            className="group relative mt-12 inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-base text-white focus:outline-none"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] transition-opacity group-hover:opacity-80"
            />
            <span
              aria-hidden
              className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-[#06b6d4] via-[#3b82f6] to-[#8b5cf6] opacity-40 blur-sm group-hover:opacity-60 transition-opacity"
            />
            <span className="relative z-10">Request access</span>
          </a>

          <Link
            href="/dashboard"
            className="mt-4 inline-flex items-center gap-3 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 px-8 py-4 text-base font-semibold text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <span>Try live demo</span>
            <ChevronRight size={20} />
          </Link>
        </section>

        {/* Features */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-6 py-24 relative"
        >
          <h2 className="text-center text-3xl/tight md:text-4xl/tight font-bold mb-16">
            Built for modern commerce
          </h2>

          {/* Decorative blob behind grid */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex justify-center -z-10"
          >
            <span className="block h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,theme(colors.sky.400)/30,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,theme(colors.sky.500)/35,transparent_70%)] blur-3xl animate-blob" />
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
            {features.map(({ title, description, icon: Icon }, i) => (
              <Reveal
                key={title}
                animationClass="animate-fade-in-up"
                delay={`${i * 0.1}s`}
                className="relative group rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8 backdrop-blur transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon
                  size={32}
                  className="text-[#3b82f6] dark:text-[#60a5fa] mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-black/70 dark:text-white/80 leading-relaxed">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="mx-auto max-w-7xl px-6 py-24 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How Bogle works
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-black/70 dark:text-white/80">
            Three easy steps and you’re saving on every transaction.
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-3 w-full">
            {howSteps.map(({ title, description, icon: Icon }, i) => (
              <Reveal
                key={title}
                animationClass="animate-fade-in-up"
                delay={`${i * 0.15}s`}
                className="flex flex-col items-center p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur hover:-translate-y-1 transition-transform"
              >
                <Icon
                  size={36}
                  className="text-[#06b6d4] dark:text-[#3b82f6] mb-6 animate-float"
                />
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-black/70 dark:text-white/80 leading-relaxed">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="mx-auto max-w-7xl px-6 py-24 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg max-w-xl text-black/70 dark:text-white/80">
            Choose the plan that fits your business. No hidden fees.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl w-full">
            {/* Pay-as-you-go */}
            <Reveal
              animationClass="animate-fade-in-up"
              className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-8 flex flex-col hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">Pay-as-you-go</h3>
              <p className="text-4xl font-extrabold mb-6">$0.25</p>
              <p className="mb-6 text-sm text-black/70 dark:text-white/80">
                Per successful transaction. No monthly minimums.
              </p>
              <a
                href="#signup"
                className="mt-auto rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity inline-block text-center"
              >
                Get started
              </a>
            </Reveal>

            {/* Growth plan */}
            <div
              className="rounded-3xl border border-[#3b82f6]/50 dark:border-[#60a5fa]/60 bg-gradient-to-br from-[#06b6d4]/10 via-[#3b82f6]/20 to-[#8b5cf6]/10 p-1 hover:shadow-2xl transition-shadow"
              style={{ animationDelay: "0.1s" }}
            >
              <Reveal
                animationClass="animate-fade-in-up"
                delay="0.1s"
                className="h-full w-full rounded-[inherit] bg-white/80 dark:bg-black/40 backdrop-blur p-8 flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-2">Growth</h3>
                <p className="text-4xl font-extrabold mb-6">$99/mo</p>
                <p className="mb-6 text-sm text-black/70 dark:text-white/80">
                  Unlimited transactions & premium support for scaling
                  businesses.
                </p>
                <a
                  href="#signup"
                  className="mt-auto rounded-full bg-[#3b82f6] text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity inline-block text-center"
                >
                  Start your trial
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="mx-auto max-w-7xl px-6 py-24 relative"
        >
          {/* Decorative radial behind */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex justify-center -z-10"
          >
            <span className="block h-[500px] w-[500px] bg-[radial-gradient(circle_at_center,theme(colors.emerald.400)/25,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,theme(colors.emerald.500)/25,transparent_70%)] blur-3xl animate-blob" />
          </span>

          <h2 className="text-center text-3xl/tight md:text-4xl/tight font-bold mb-16">
            Loved by small businesses
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            {testimonials.map(({ quote, name, title }, i) => (
              <Reveal
                key={name}
                animationClass="animate-slide-in-right"
                delay={`${i * 0.15}s`}
                className="relative rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-8 text-left"
              >
                <p className="text-sm leading-relaxed mb-6 text-black/80 dark:text-white/80 before:content-['“'] before:text-4xl before:leading-none before:mr-1 after:content-['”'] after:text-4xl after:leading-none after:ml-1">
                  {quote}
                </p>
                <cite className="not-italic font-semibold">{name}</cite>
                <span className="block text-xs opacity-70">{title}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="signup"
          className="mx-auto max-w-7xl px-6 py-24 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Ready to ditch card fees forever?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-black/70 dark:text-white/80">
            Join the early-access list and get your first $10,000 of processing
            fee-free.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex w-full max-w-md gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@business.com"
              className="flex-grow rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 px-5 py-3 text-sm focus-visible:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Join waitlist
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-black/5 dark:border-white/10 px-6 py-10 text-center text-sm text-black/60 dark:text-white/60"
      >
        © {new Date().getFullYear()} Bogle. All rights reserved.
      </footer>
    </div>
  );
}
