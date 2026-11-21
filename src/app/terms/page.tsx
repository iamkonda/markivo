
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

export default function TermsPage() {
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
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#35B85A]">Legal</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-[#65736A]">Last updated: November 2026</p>

        <div className="mt-10 space-y-9 leading-7 text-[#536158]">
          <section>
            <h2 className="text-xl font-bold text-[#253B31]">1. About these terms</h2>
            <p className="mt-3">These Terms &amp; Conditions govern your access to and use of Markivo, including its software, features, website and related services (the “Service”). Markivo is operated by Ornge Tech Limited (“we”, “us” or “our”), a company registered in the United Kingdom.</p>
            <p className="mt-3">By purchasing, accessing or using the Service, you agree to these terms. If you do not agree, you must not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">2. Eligibility and accounts</h2>
            <p className="mt-3">You must have the authority to accept these terms on behalf of yourself or the business you represent. You agree to provide accurate account and contact information, keep your login credentials secure, and notify us promptly if you suspect unauthorised access.</p>
            <p className="mt-3">You are responsible for activity carried out through your account and for ensuring that staff members who use the Service are authorised to do so.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">3. Licence and permitted use</h2>
            <p className="mt-3">Subject to payment of the applicable fees and compliance with these terms, we grant you a limited, non-exclusive, non-transferable and revocable licence to use Markivo for your internal business operations during the purchased subscription term.</p>
            <p className="mt-3">A store licence is intended for use by the store covered by that purchase. Additional stores require the appropriate additional licences unless we agree otherwise in writing.</p>
            <p className="mt-3">You must not copy, resell, sublicense, reverse engineer, attempt to extract source code from, interfere with, or misuse the Service, except where applicable law expressly permits this restriction to be overridden.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">4. Pricing and payment</h2>
            <p className="mt-3">The listed standard licence prices are:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>US$550 per store for a 6-month licence.</li>
              <li>US$999 per store for a 12-month licence.</li>
            </ul>
            <p className="mt-3">Prices are stated in US dollars unless expressly shown otherwise. Any applicable taxes, payment terms and payment-provider charges will be presented during the purchase process or on the relevant invoice.</p>
            <p className="mt-3">We may update prices for future purchases. A price change will not alter a licence term that you have already paid for.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">5. Licence duration and renewal</h2>
            <p className="mt-3">Your licence begins on the activation date or other start date communicated at purchase and continues for the term selected.</p>
            <p className="mt-3">Licences do not automatically renew. At the end of the purchased term, the licence expires unless you actively purchase a new term. We may restrict access to paid features after expiry until a new licence is purchased.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">6. Refunds</h2>
            <p className="mt-3">We offer a 7-day refund period from the date of purchase. This policy applies to initial purchases, renewals and repeat purchases. To request a refund, contact <a className="font-semibold text-[#278B45] underline" href="mailto:markivo@ornge.space">markivo@ornge.space</a> within the 7-day period and include your purchase details.</p>
            <p className="mt-3">This policy does not limit any consumer rights that cannot legally be excluded or restricted. Further details are set out in our Refund Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">7. Your data and responsibilities</h2>
            <p className="mt-3">You are responsible for the accuracy, legality and appropriateness of the information you enter into Markivo, including product, transaction, employee and customer information. You must ensure you have the rights and permissions needed to provide that information to us.</p>
            <p className="mt-3">You are responsible for maintaining appropriate records and backups of business information and for complying with laws applicable to your retail business, including tax, employment, consumer protection and data protection requirements.</p>
            <p className="mt-3">Our handling of personal information is described in the Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">8. Availability and changes</h2>
            <p className="mt-3">We aim to keep the Service available and functioning reliably, but we do not guarantee uninterrupted or error-free operation. Maintenance, updates, connectivity issues, third-party services or events outside our reasonable control may affect availability.</p>
            <p className="mt-3">We may modify or improve features from time to time. Where a change materially affects your use of a paid Service, we will take reasonable steps to communicate it.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">9. Suspension and termination</h2>
            <p className="mt-3">We may suspend or restrict access where reasonably necessary to protect the Service, other users or our systems; to address suspected fraud, security issues or unlawful activity; or where you materially breach these terms. Where reasonably possible, we will give notice and an opportunity to resolve the issue.</p>
            <p className="mt-3">You may stop using the Service at any time. Stopping use does not itself create a right to a refund outside the Refund Policy or rights provided by applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">10. Intellectual property</h2>
            <p className="mt-3">Markivo, its software, branding, design, documentation and related intellectual property are owned by or licensed to Ornge Tech Limited. These terms do not transfer ownership of those rights to you.</p>
            <p className="mt-3">You retain your rights in the business information and content that you submit to the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">11. Disclaimers and liability</h2>
            <p className="mt-3">The Service is a business software tool. You remain responsible for checking the accuracy of business records, stock levels, prices, reports, tax calculations and operational decisions made using it.</p>
            <p className="mt-3">To the extent permitted by law, we exclude implied warranties and are not liable for indirect or consequential losses, loss of profits, revenue, goodwill or anticipated savings. Nothing in these terms excludes or limits liability where it would be unlawful to do so, including liability for fraud, fraudulent misrepresentation, or death or personal injury caused by negligence.</p>
            <p className="mt-3">Where you use the Service as a consumer, nothing in these terms affects your statutory rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">12. Changes to these terms</h2>
            <p className="mt-3">We may update these terms from time to time. The updated version will be published on this page with a revised date. If a change materially affects existing customers, we will take reasonable steps to notify them.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">13. Governing law</h2>
            <p className="mt-3">These terms are governed by the laws of England and Wales. The courts of England and Wales will have jurisdiction over disputes, subject to any mandatory rights or jurisdiction rules that apply to consumers in their country of residence.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">14. Contact</h2>
            <p className="mt-3">For questions about these terms, contact us at <a className="font-semibold text-[#278B45] underline" href="mailto:markivo@ornge.space">markivo@ornge.space</a>.</p>
            <p className="mt-2">Markivo is operated by Ornge Tech Limited, United Kingdom.</p>
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
