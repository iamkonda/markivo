
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

export default function RefundPolicyPage() {
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

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#35B85A]">Customer information</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Refund Policy</h1>
        <p className="mt-4 text-sm text-[#65736A]">Last updated: November 2026</p>

        <div className="mt-10 rounded-3xl bg-[#EAF4E8] p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#278B45]">Our refund commitment</p>
          <p className="mt-3 text-3xl font-bold text-[#253B31]">7-day refund period</p>
          <p className="mt-3 leading-7 text-[#536158]">You can request a refund within 7 days of your purchase. This applies to first purchases, renewals and repeat purchases.</p>
        </div>

        <div className="mt-10 space-y-9 leading-7 text-[#536158]">
          <section>
            <h2 className="text-xl font-bold text-[#253B31]">1. Eligibility</h2>
            <p className="mt-3">Markivo offers a 7-day refund period starting from the date of purchase. The policy applies to all licence purchases, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>First-time purchases.</li>
              <li>Renewals and purchases of a new licence term.</li>
              <li>Repeat purchases by existing customers.</li>
              <li>6-month and 12-month store licences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">2. How to request a refund</h2>
            <p className="mt-3">To request a refund, email <a className="font-semibold text-[#278B45] underline" href="mailto:markivo@ornge.space">markivo@ornge.space</a> within 7 days of the purchase date.</p>
            <p className="mt-3">Please include the following details so we can locate your purchase:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your name and business name.</li>
              <li>The email address used for the purchase.</li>
              <li>Your order number or payment reference, if available.</li>
              <li>A short description confirming that you are requesting a refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">3. Processing refunds</h2>
            <p className="mt-3">We will review your request and, where approved under this policy, arrange the refund to the original payment method where possible. The time it takes for the funds to appear depends on the payment provider and your bank or card issuer.</p>
            <p className="mt-3">If we need additional information to identify the transaction, we may contact you before processing the request.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">4. After a refund</h2>
            <p className="mt-3">Where a licence purchase is refunded, the associated licence may be cancelled or deactivated. You should export or retain any business information you need before access ends, where export functionality is available.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">5. Your statutory rights</h2>
            <p className="mt-3">This policy is additional to, and does not reduce, any rights or remedies you may have under applicable consumer protection laws. If the law gives you a right to a refund or other remedy, nothing in this policy limits that right.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">6. Contact</h2>
            <p className="mt-3">For refund requests or questions about this policy, contact:</p>
            <p className="mt-3"><strong>Markivo Support</strong><br /><a className="font-semibold text-[#278B45] underline" href="mailto:markivo@ornge.space">markivo@ornge.space</a><br />Operated by Ornge Tech Limited, United Kingdom.</p>
          </section>
        </div>
      </article>

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
