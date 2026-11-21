
import Image from "next/image";
import Link from "next/link";

const supportEmail = "markivo@ornge.space";

const features = [
  {
    icon: "▦",
    title: "Fast POS billing",
    description:
      "Process customer purchases quickly with an intuitive checkout experience built for busy retail counters.",
  },
  {
    icon: "▤",
    title: "Smart inventory",
    description:
      "Manage products, stock levels and inventory movements from one organised system.",
  },
  {
    icon: "▥",
    title: "Barcode scanning",
    description:
      "Find products and add them to a sale quickly using barcode scanning.",
  },
  {
    icon: "↗",
    title: "Sales insights",
    description:
      "Understand your sales activity with clear reports and business summaries.",
  },
  {
    icon: "▣",
    title: "Product management",
    description:
      "Organise your catalogue, product details, categories and prices in one place.",
  },
  {
    icon: "⌘",
    title: "Store operations",
    description:
      "Bring everyday checkout and store management activities into one workflow.",
  },
];

const steps = [
  {
    number: "01",
    title: "Set up your store",
    description:
      "Add your store details, products, categories and prices to get started.",
  },
  {
    number: "02",
    title: "Start selling",
    description:
      "Use the POS interface to scan products, build carts and process sales.",
  },
  {
    number: "03",
    title: "Manage your business",
    description:
      "Keep track of inventory and review your store's sales activity.",
  },
];

const faqs = [
  {
    question: "Who is Markivo designed for?",
    answer:
      "Markivo is designed for supermarkets, grocery stores and retail businesses looking for a practical point-of-sale and store management solution.",
  },
  {
    question: "How much does Markivo cost?",
    answer:
      "The 6-month licence costs $550 USD per store. The 12-month licence costs $999 USD per store.",
  },
  {
    question: "Are licences automatically renewed?",
    answer:
      "No. Markivo licences do not renew automatically. You can purchase a new licence when your current licence expires.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Eligible purchases are covered by a 7-day refund policy from the date of purchase. This applies to initial purchases, renewals and repeat purchases.",
  },
  {
    question: "Can I use Markivo for multiple stores?",
    answer:
      "Pricing is calculated per store. Contact our team for enquiries involving more than 10 store licences.",
  },
  {
    question: "How can I contact the Markivo team?",
    answer:
      "You can contact our team at markivo@ornge.space for sales enquiries, questions and support.",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Markivo homepage"
    >
      <Image
        src="/markivo-logo.png"
        alt="Markivo"
        width={220}
        height={88}
        priority={!footer}
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#dce9df] bg-[#f1f8f2] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#287344]">
      {children}
    </span>
  );
}

function Check() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f5eb] text-xs font-bold text-[#278348]">
      ✓
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#253B31]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Brand />

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#features" className="transition hover:text-[#35B85A]">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-[#35B85A]">
              How it works
            </a>
            <a href="#pricing" className="transition hover:text-[#35B85A]">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-[#35B85A]">
              FAQ
            </a>
          </nav>

          <a
            href={`mailto:${supportEmail}`}
            className="rounded-full bg-[#253B31] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#35B85A]"
          >
            Contact sales <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[#f5f8f5]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#dff1e2] opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#e8f3e8] opacity-70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <SectionLabel>Retail operations, simplified</SectionLabel>

            <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.08] tracking-tight text-[#253B31] sm:text-6xl lg:text-7xl">
              Run your store.
              <span className="mt-2 block text-[#35A85B]">
                Smarter with Markivo.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              A modern point-of-sale solution for supermarkets and grocery
              businesses. Manage billing, products, inventory and everyday
              store operations in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-[#253B31] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#253B31]/10 transition hover:-translate-y-1 hover:bg-[#35A85B]"
              >
                Explore pricing <span aria-hidden="true">→</span>
              </a>
              <a
                href={`mailto:${supportEmail}`}
                className="rounded-full border border-[#cbd8ce] bg-white px-7 py-4 text-sm font-bold text-[#253B31] transition hover:border-[#35A85B]"
              >
                Talk to our team
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <Check /> Built for retail
              </span>
              <span className="flex items-center gap-2">
                <Check /> Clear pricing
              </span>
              <span className="flex items-center gap-2">
                <Check /> 7-day refund policy
              </span>
            </div>
          </div>

          {/* POS Preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#dceee0] blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-[#253B31]/10">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-[#253B31]">
                    <Image
                      src="/markivo-logo.png"
                      alt=""
                      width={100}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#253B31]">
                      Markivo POS
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Store dashboard
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#eaf7ed] px-3 py-1 text-xs font-semibold text-[#278348]">
                  ● System ready
                </span>
              </div>

              <div className="grid grid-cols-[1fr_125px] gap-4 bg-[#f7f9f7] p-5">
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    CHECKOUT
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-[#253B31]">
                    New sale
                  </h3>

                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-3">
                    <span className="text-gray-400">⌕</span>
                    <span className="text-xs text-gray-400">
                      Search or scan product...
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["Fresh Apples", "2 × $3.50", "$7.00"],
                      ["Whole Milk", "1 × $2.80", "$2.80"],
                      ["Brown Bread", "1 × $2.40", "$2.40"],
                    ].map((item) => (
                      <div
                        key={item[0]}
                        className="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-3"
                      >
                        <div>
                          <p className="text-xs font-bold text-[#253B31]">
                            {item[0]}
                          </p>
                          <p className="mt-1 text-[10px] text-gray-400">
                            {item[1]}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-[#253B31]">
                          {item[2]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-[#253B31] p-3 text-white">
                  <p className="text-[10px] font-semibold text-white/60">
                    CURRENT SALE
                  </p>
                  <p className="mt-5 text-[10px] text-white/60">
                    Items in cart
                  </p>
                  <p className="text-2xl font-bold">04</p>
                  <div className="my-4 border-t border-white/15" />
                  <p className="text-[10px] text-white/60">Subtotal</p>
                  <p className="mt-1 text-xl font-bold">$12.20</p>
                  <div className="mt-5 rounded-lg bg-[#35B85A] px-2 py-3 text-center text-[10px] font-bold text-white">
                    CHECKOUT →
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3 text-[10px] text-gray-400">
                <span>MARKIVO RETAIL POS</span>
                <span>Illustrative interface preview</span>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 rounded-xl border border-gray-100 bg-white p-4 shadow-xl sm:-left-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf7ed] text-xl text-[#278348]">
                  ↗
                </div>
                <div>
                  <p className="text-xs text-gray-500">Store management</p>
                  <p className="text-sm font-bold text-[#253B31]">
                    One organised system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store types */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-8 text-center text-sm font-semibold text-gray-500 lg:px-8">
          <span>Supermarkets</span>
          <span className="hidden text-[#35B85A] sm:inline">✳</span>
          <span>Grocery stores</span>
          <span className="hidden text-[#35B85A] sm:inline">✳</span>
          <span>Independent retailers</span>
          <span className="hidden text-[#35B85A] sm:inline">✳</span>
          <span>Retail chains</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>What Markivo offers</SectionLabel>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#253B31] sm:text-5xl">
              Everything your store needs to stay organised.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Bring essential retail workflows together with tools designed
              to make everyday store operations easier to manage.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c9e6d0] hover:shadow-xl hover:shadow-[#253B31]/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf7ef] text-2xl font-bold text-[#278348] transition group-hover:bg-[#253B31] group-hover:text-white">
                  {feature.icon}
                </div>
                <p className="mt-7 text-xs font-bold tracking-widest text-[#35A85B]">
                  FEATURE 0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#253B31]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 bg-[#f5f8f5] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>A simpler workflow</SectionLabel>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#253B31] sm:text-5xl">
                Get your store moving with confidence.
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-gray-600">
                From setting up your products to processing sales, Markivo
                brings your essential store activities into a clear workflow.
              </p>

              <a
                href={`mailto:${supportEmail}`}
                className="mt-8 inline-flex rounded-full bg-[#253B31] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#35A85B]"
              >
                Contact our team →
              </a>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-[#e4ebe5] bg-white p-6"
                >
                  <span className="text-3xl font-extrabold text-[#35A85B]/40">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#253B31]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Simple pricing</SectionLabel>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#253B31] sm:text-5xl">
              Straightforward pricing. No surprises.
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              Choose a licence duration that works for your store. All prices
              are in US dollars and are charged per store.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-8">
              <p className="text-sm font-bold text-[#278348]">
                6-MONTH LICENCE
              </p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-[#253B31]">
                  $550
                </span>
                <span className="pb-2 text-sm text-gray-500">/ 6 months</span>
              </div>
              <p className="mt-3 text-sm text-gray-500">Per store</p>

              <div className="my-8 border-t border-gray-100" />

              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-3">
                  <Check /> Six-month licence
                </li>
                <li className="flex gap-3">
                  <Check /> Per-store pricing
                </li>
                <li className="flex gap-3">
                  <Check /> 7-day refund policy
                </li>
                <li className="flex gap-3">
                  <Check /> No automatic renewal
                </li>
              </ul>

              <a
                href={`mailto:${supportEmail}?subject=${encodeURIComponent("Markivo 6-month licence enquiry")}`}
                className="mt-9 block rounded-full border border-[#253B31] px-6 py-4 text-center text-sm font-bold text-[#253B31] transition hover:bg-[#253B31] hover:text-white"
              >
                Enquire about this plan
              </a>
            </div>

            <div className="relative rounded-3xl border-2 border-[#35A85B] bg-[#253B31] p-8 text-white shadow-2xl shadow-[#253B31]/15">
              <div className="absolute right-7 top-7 rounded-full bg-[#35B85A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Best value
              </div>

              <p className="text-sm font-bold text-[#91D69F]">
                12-MONTH LICENCE
              </p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-extrabold tracking-tight">
                  $999
                </span>
                <span className="pb-2 text-sm text-white/60">/ year</span>
              </div>
              <p className="mt-3 text-sm text-white/60">Per store</p>

              <div className="my-8 border-t border-white/15" />

              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex gap-3">
                  <Check /> Twelve-month licence
                </li>
                <li className="flex gap-3">
                  <Check /> Per-store pricing
                </li>
                <li className="flex gap-3">
                  <Check /> 7-day refund policy
                </li>
                <li className="flex gap-3">
                  <Check /> No automatic renewal
                </li>
              </ul>

              <a
                href={`mailto:${supportEmail}?subject=${encodeURIComponent("Markivo 12-month licence enquiry")}`}
                className="mt-9 block rounded-full bg-[#35B85A] px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-[#279448]"
              >
                Enquire about this plan →
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Need more than 10 store licences?{" "}
            <a
              href={`mailto:${supportEmail}?subject=${encodeURIComponent("Markivo enterprise pricing enquiry")}`}
              className="font-bold text-[#278348] underline underline-offset-4"
            >
              Contact us for enterprise pricing.
            </a>
          </p>
        </div>
      </section>

      {/* Refund policy */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#edf7ef] p-8 sm:flex-row sm:items-center sm:p-12">
          <div className="flex max-w-2xl gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl text-[#278348]">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#278348]">
                Customer assurance
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[#253B31]">
                Try Markivo with confidence.
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                All purchases are covered by our 7-day refund policy,
                including initial purchases, renewals and repeat purchases.
                Terms and conditions apply.
              </p>
            </div>
          </div>
          <Link
            href="/refund-policy"
            className="shrink-0 rounded-full border border-[#b9d7c0] bg-white px-6 py-3 text-sm font-bold text-[#253B31] transition hover:border-[#35B85A]"
          >
            Read refund policy →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-[#f7f9f7] py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <SectionLabel>Frequently asked questions</SectionLabel>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#253B31] sm:text-5xl">
              Got questions?
            </h2>
            <p className="mt-4 text-gray-600">
              Here are a few things you might want to know.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#253B31]">
                  {faq.question}
                  <span className="text-xl text-[#35A85B] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#253B31] px-5 py-24 text-center text-white lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91D69F]">
            Make your next move
          </p>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Your store deserves a smarter way to operate.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/65">
            Talk to our team about bringing Markivo to your supermarket or
            retail business.
          </p>
          <a
            href={`mailto:${supportEmail}`}
            className="mt-9 inline-flex rounded-full bg-[#35B85A] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#279448]"
          >
            Contact Markivo <span className="ml-2">↗</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5EBE4] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-[#65736A] sm:flex-row">
          <p>© 2026 Markivo. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/about">About Us</Link><Link href="/terms">Terms &amp; Conditions</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
