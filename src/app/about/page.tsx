import { constructMetadata } from "@/lib/metadata";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { env } from "@/env";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = constructMetadata({
  title: "About Efficiency Solutions | Premium Agency in Lagos, Nigeria",
  description: "Efficiency Solutions is a premier agency in Lagos, Nigeria offering Luxury Logistics, Premium Branding, Accounting, Fashion Design, and Digital Product Development.",
});

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Efficiency Solutions",
    "image": `${env.NEXT_PUBLIC_SITE_URL}/gpt es logo.png`,
    "@id": `${env.NEXT_PUBLIC_SITE_URL}/about`,
    "url": env.NEXT_PUBLIC_SITE_URL,
    "telephone": env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "description": "Premium Nigerian agency providing Luxury Logistics, Branding, Accounting, Fashion Design, and Digital Services.",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "6.5244",
        "longitude": "3.3792"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* Hero Section */}
      <section className="relative w-full bg-brand-primary text-white py-20 lg:py-32 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
            Premium Agency Services in <span className="text-brand-secondary">Lagos, Nigeria</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Efficiency Solutions is built on the foundation of absolute reliability. We are a multi-disciplinary agency dedicated to elevating your brand, managing your operations, and securing your financial future.
          </p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-brand-primary">
              Our Commitment to Excellence
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                Operating in the dynamic business environment of Nigeria requires more than just service delivery—it demands precision, reliability, and an unwavering commitment to quality. At Efficiency Solutions, we recognized the need for a cohesive, high-end approach to essential business services.
              </p>
              <p>
                Whether you need top-tier luxury car rentals for corporate executives in Lagos, professional tax preparation and bookkeeping for your growing SME, or bespoke branding materials that command attention, our team ensures seamless execution.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-[20px] bg-brand-primary/5 flex items-center justify-center border border-brand-primary/10 overflow-hidden">
               <Icons.Logo className="w-3/4 h-3/4 opacity-10 text-brand-primary absolute" />
               <div className="z-10 text-center p-8">
                 <h3 className="text-2xl font-bold font-heading text-brand-primary mb-2">Efficiency &</h3>
                 <h3 className="text-3xl font-bold font-heading text-brand-secondary">Reliability</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Verticals */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-brand-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-brand-primary mb-4">
              Comprehensive Solutions Under One Roof
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              We streamline your operations by offering the most critical services your business and lifestyle demand in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[15px] shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                <Icons.Logistics className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-primary mb-3">Luxury Logistics in Lagos</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Premium car rental and escort services. From executive sedans to armored SUVs, we provide reliable, secure, and prestigious transport solutions across Nigeria.
              </p>
              <Link href="/services/logistics" className="text-brand-primary font-semibold text-sm hover:underline flex items-center gap-1">
                Explore Logistics <Icons.ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-[15px] shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-emerald-600/10 text-emerald-600 flex items-center justify-center mb-6">
                <Icons.Accounting className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-primary mb-3">Accounting & Tax Services</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Professional bookkeeping, tax preparation, and financial advisory for small businesses and corporations operating in Nigeria. Stay compliant and profitable.
              </p>
              <Link href="/services/accounting" className="text-brand-primary font-semibold text-sm hover:underline flex items-center gap-1">
                Explore Accounting <Icons.ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-[15px] shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                <Icons.Services className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-primary mb-3">Premium Branding</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                High-quality corporate merchandise, apparel printing, and brand identity design. We make sure your business stands out in the competitive Lagos market.
              </p>
              <Link href="/services/branding" className="text-brand-primary font-semibold text-sm hover:underline flex items-center gap-1">
                Explore Branding <Icons.ExternalLink className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-[15px] shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-orange-600/10 text-orange-600 flex items-center justify-center mb-6">
                <Icons.Tailoring className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-primary mb-3">Fashion Design</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Bespoke garment construction and fashion consultancy. We create elegant, custom-fitted attire tailored to your precise measurements and style preferences.
              </p>
              <Link href="/services/tailoring" className="text-brand-primary font-semibold text-sm hover:underline flex items-center gap-1">
                Explore Fashion Design <Icons.ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-[15px] shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="h-12 w-12 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-6">
                <Icons.Digital className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-primary mb-3">Digital Development</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Modern web and mobile applications designed to scale. We build robust digital products that solve real problems and enhance user experiences.
              </p>
              <Link href="/services/digital" className="text-brand-primary font-semibold text-sm hover:underline flex items-center gap-1">
                Explore Digital <Icons.ExternalLink className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-brand-primary mb-6">
            Ready to Optimize Your Business?
          </h2>
          <p className="text-lg text-brand-muted mb-8">
            Contact us today to discuss your logistics, branding, or accounting needs in Lagos.
          </p>
          <Link
            href={getWhatsAppLink("/about")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-[10px] font-bold text-lg hover:bg-brand-primary/90 transition-colors shadow-lg"
          >
            Chat with Us on WhatsApp
            <Icons.ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
