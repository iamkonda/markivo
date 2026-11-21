
import Link from "next/link";
import Image from "next/image";

const supportEmail = "markivo@ornge.space";

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF7] text-[#253B31]">
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

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#35B85A]">About Markivo</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Helping retailers run their stores with confidence.</h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#65736A]">
          Markivo is a retail point-of-sale platform designed to help supermarkets,
          grocery stores and retail businesses manage everyday store operations
          with greater clarity and control.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-9 shadow-sm ring-1 ring-[#E5EBE4]">
          <h2 className="text-2xl font-bold">Built for retail operations</h2>
          <p className="mt-4 leading-7 text-[#65736A]">
            Retail businesses need reliable tools to handle sales, products,
            inventory and the daily work of serving customers. Markivo is being
            developed around these practical needs, with a focus on a clear,
            straightforward experience for store teams.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-9 shadow-sm ring-1 ring-[#E5EBE4]">
          <h2 className="text-2xl font-bold">Our approach</h2>
          <p className="mt-4 leading-7 text-[#65736A]">
            We believe store technology should make work simpler. Our goal is
            to provide retailers with accessible tools that support day-to-day
            decisions and help them manage their operations more effectively.
          </p>
        </div>
      </section>

      <section className="bg-[#253B31] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">A product by Ornge Tech Limited</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
          Markivo is a product operated by Ornge Tech Limited, a company
          registered in the United Kingdom.
        </p>
        <a href="mailto:markivo@ornge.space" className="mt-8 inline-flex rounded-full bg-[#35B85A] px-7 py-3 font-semibold text-white hover:bg-[#2DA34F]">
          Contact Markivo
        </a>
      </section>

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
