import { constructMetadata } from "@/lib/metadata";
import Link from "next/link";
import { env } from "@/env";

export const metadata = constructMetadata({
  title: "Terms & Conditions | Efficiency Solutions",
  description:
    "Read the Terms and Conditions governing use of Efficiency Solutions services including Luxury Logistics, Premium Branding, Accounting, Tailoring, and Digital Development in Lagos, Nigeria.",
});

export default function TermsPage() {
  const lastUpdated = "27 April 2026";

  return (
    <article className="w-full">
      {/* Hero */}
      <section className="w-full bg-brand-primary text-white py-16 lg:py-24 px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/70 text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto prose prose-brand-primary prose-headings:font-heading prose-headings:text-brand-primary prose-p:text-brand-muted prose-li:text-brand-muted prose-a:text-brand-secondary prose-a:no-underline hover:prose-a:underline">

          <h2>1. Introduction</h2>
          <p>
            Welcome to Efficiency Solutions (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms and Conditions govern your use of the Efficiency Solutions website
            located at{" "}
            <Link href="/" className="text-brand-secondary hover:underline">
              efficiencysolutions.ng
            </Link>{" "}
            and all related services. By accessing or using our website and services, you agree to be bound by these terms.
          </p>

          <h2>2. Services</h2>
          <p>
            Efficiency Solutions is a multi-disciplinary agency operating in Lagos, Nigeria. We provide the following services:
          </p>
          <ul>
            <li><strong>Luxury Logistics</strong> — Premium vehicle rental and escort services for corporate and personal use.</li>
            <li><strong>Premium Branding &amp; Printing</strong> — Custom apparel, corporate merchandise, and brand identity materials.</li>
            <li><strong>Accounting Services</strong> — Bookkeeping, tax preparation, financial advisory, and audit services for Nigerian businesses.</li>
            <li><strong>Tailoring &amp; Fashion Design</strong> — Bespoke garment construction and fashion consultancy.</li>
            <li><strong>Digital Product Development</strong> — Web applications, mobile apps, and UX/UI design services.</li>
          </ul>

          <h2>3. Ordering &amp; Communication</h2>
          <p>
            All orders, bookings, and service inquiries are processed via WhatsApp. When you submit a request through our website, you will be redirected to WhatsApp with a pre-filled message. This message serves as an initial inquiry and does not constitute a binding contract until confirmed by our team.
          </p>
          <p>
            Prices displayed on the website are estimates and may vary based on customization, availability, and other factors. Final pricing will be confirmed by an Efficiency Solutions representative before any transaction is completed.
          </p>

          <h2>4. Payment Terms</h2>
          <p>
            Payment terms, methods, and schedules will be communicated directly by our team upon confirmation of your order. We accept bank transfers and other payment methods as agreed upon during the WhatsApp consultation.
          </p>

          <h2>5. Cancellations &amp; Refunds</h2>
          <p>
            Cancellation policies vary by service type:
          </p>
          <ul>
            <li><strong>Logistics:</strong> Cancellations must be made at least 24 hours before the scheduled rental date. Late cancellations may incur a fee.</li>
            <li><strong>Branding &amp; Printing:</strong> Custom orders cannot be cancelled once production has commenced.</li>
            <li><strong>Accounting:</strong> Consultation cancellations require a minimum of 12 hours&apos; notice.</li>
            <li><strong>Tailoring:</strong> Orders in production cannot be cancelled. Alterations may be accommodated at additional cost.</li>
            <li><strong>Digital Development:</strong> Project cancellation terms are outlined in individual project agreements.</li>
          </ul>
          <p>
            Refunds, where applicable, will be processed within 7–14 business days.
          </p>

          <h2>6. User Responsibilities</h2>
          <p>By using our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when placing orders or making inquiries.</li>
            <li>Use our website and services only for lawful purposes.</li>
            <li>Not engage in any activity that disrupts or interferes with the operation of our website.</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website — including logos, text, images, and design elements — is the property of Efficiency Solutions and is protected by Nigerian copyright law. Unauthorized reproduction or distribution is prohibited.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            Efficiency Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service in question.
          </p>

          <h2>9. Privacy</h2>
          <p>
            We respect your privacy. Any personal information collected through our website or WhatsApp communication is used solely for processing your orders and inquiries. We do not sell or share your data with third parties without your consent.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with the updated effective date. Continued use of our services constitutes acceptance of the revised terms.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions about these Terms and Conditions, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <Link href="mailto:info@efficiencysolutions.ng">
                info@efficiencysolutions.ng
              </Link>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <Link
                href={`https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us
              </Link>
            </li>
            <li><strong>Location:</strong> Lagos, Nigeria</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
