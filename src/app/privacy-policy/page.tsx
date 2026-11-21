
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

export default function PrivacyPolicyPage() {
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
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[#65736A]">Last updated: November 2026</p>

        <div className="mt-10 space-y-9 leading-7 text-[#536158]">
          <section>
            <h2 className="text-xl font-bold text-[#253B31]">1. Introduction</h2>
            <p className="mt-3">This Privacy Policy explains how Ornge Tech Limited (“we”, “us” or “our”), the operator of Markivo, collects, uses, stores and shares personal information when you visit our website, contact us, create an account or use the Markivo service.</p>
            <p className="mt-3">We aim to handle personal information fairly, transparently and in accordance with applicable data protection laws, including the UK GDPR and the Data Protection Act 2018 where they apply.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">2. Information we may collect</h2>
            <p className="mt-3">Depending on how you interact with Markivo, information may include:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong>Account and contact information:</strong> name, business name, email address, telephone number and account credentials.</li>
              <li><strong>Subscription and transaction information:</strong> selected licence, purchase dates, payment status, invoices and transaction references.</li>
              <li><strong>Store and operational information:</strong> product details, stock information, sales records, pricing, staff accounts and other information you choose to enter into Markivo.</li>
              <li><strong>Technical information:</strong> device, browser, operating system, log and diagnostic information that may be generated when you use the website or Service.</li>
              <li><strong>Communications:</strong> information you provide when contacting support or sending us feedback.</li>
            </ul>
            <p className="mt-3">Please do not submit information that is not needed for your use of the Service, particularly sensitive personal information, unless the Service specifically requires it and you have a lawful basis to provide it.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">3. How we use information</h2>
            <p className="mt-3">We may use personal information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Create and administer accounts and provide the Markivo Service.</li>
              <li>Process purchases, manage licences and maintain transaction records.</li>
              <li>Provide customer support and respond to enquiries.</li>
              <li>Maintain the security, availability and performance of our systems.</li>
              <li>Diagnose errors, improve the Service and develop features.</li>
              <li>Meet legal, regulatory, accounting and record-keeping obligations.</li>
              <li>Protect our rights, users and business against fraud, misuse and security threats.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">4. Legal bases for processing</h2>
            <p className="mt-3">Where required by applicable data protection law, we rely on one or more of the following legal bases: performance of a contract with you; compliance with a legal obligation; our legitimate interests in operating, securing and improving Markivo, where those interests are not overridden by your rights; and your consent where consent is required.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">5. Sharing information</h2>
            <p className="mt-3">We may share information with service providers who help us operate Markivo, such as hosting, infrastructure, payment processing, customer support, security and technical service providers. These providers may process information on our behalf under appropriate contractual and security arrangements.</p>
            <p className="mt-3">We may also disclose information where required by law, to protect rights and safety, in connection with a business transfer, or where you direct us to share it.</p>
            <p className="mt-3">We do not sell personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">6. International transfers</h2>
            <p className="mt-3">Our service providers or systems may process information in countries outside the United Kingdom or your country of residence. Where data protection law requires safeguards for an international transfer, we will take steps to use an appropriate transfer mechanism and protections.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">7. Data retention</h2>
            <p className="mt-3">We retain personal information for as long as reasonably necessary for the purposes described in this policy, including providing the Service, maintaining business and financial records, resolving disputes, enforcing agreements and meeting legal obligations. Retention periods depend on the type of information and the reason it is held.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">8. Security</h2>
            <p className="mt-3">We use reasonable technical and organisational measures designed to protect information against unauthorised access, loss, alteration or disclosure. No online service or method of storage can be guaranteed to be completely secure.</p>
            <p className="mt-3">You are responsible for keeping account credentials confidential and for controlling access to devices and accounts used to access Markivo.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">9. Your rights</h2>
            <p className="mt-3">Depending on your location and applicable law, you may have rights to request access to personal information, correction, deletion, restriction of processing, data portability, or to object to certain processing. Where processing is based on consent, you may withdraw consent at any time without affecting processing carried out before withdrawal.</p>
            <p className="mt-3">To make a privacy request, contact <a className="font-semibold text-[#278B45] underline" href="mailto:markivo@ornge.space">markivo@ornge.space</a>. You may also have the right to complain to the Information Commissioner's Office (ICO) or your local data protection authority.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">10. Cookies and similar technologies</h2>
            <p className="mt-3">Our website or Service may use cookies or similar technologies that are necessary for functionality, security and account sessions. If we use analytics, advertising or other non-essential cookies, we will provide any notices and consent controls required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">11. Children's privacy</h2>
            <p className="mt-3">Markivo is designed for business use and is not directed at children. We do not knowingly seek to collect personal information directly from children through the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">12. Changes to this policy</h2>
            <p className="mt-3">We may update this Privacy Policy as our practices or legal requirements change. We will publish the updated version on this page and revise the “Last updated” date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#253B31]">13. Contact us</h2>
            <p className="mt-3">For privacy questions or requests, contact:</p>
            <p className="mt-3"><strong>Ornge Tech Limited</strong><br />Markivo Support<br /><a className="font-semibold text-[#278B45] underline" href="mailto:markivo@ornge.space">markivo@ornge.space</a><br />United Kingdom</p>
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
