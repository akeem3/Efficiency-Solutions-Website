import Link from "next/link";
import { Icons } from "@/components/ui/icons"; // Assuming you have an Icons component for social media/service icons
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { env } from "@/env";

const footerNavItems = {
  services: [
    { name: "Premium Branding", href: "/services/branding" },
    { name: "Luxury Logistics", href: "/services/logistics" },
    { name: "Accounting Services", href: "/services/accounting" },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: `https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}` },
  ],
  contact: [
    { name: "info@efficiencysolutions.ng", type: "email" },
    { name: "+234 800 000 0000", type: "phone" }, // Placeholder number
    { name: "Lagos, Nigeria", type: "location" },
  ],
};

const socialMedia = [
  { icon: Icons.Facebook, href: "#", name: "Facebook" },
  { icon: Icons.Twitter, href: "#", name: "Twitter" },
  { icon: Icons.LinkedIn, href: "#", name: "LinkedIn" },
  { icon: Icons.Instagram, href: "#", name: "Instagram" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full bg-brand-primary text-brand-secondary py-12 px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Icons.Logo className="h-10 w-10 text-brand-secondary" />
            <span className="text-2xl font-bold font-heading">
              <span className="text-white">Efficiency</span>{" "}
              <span className="text-brand-secondary">Solutions</span>
            </span>
          </div>
          <p className="text-sm text-secondary/80 leading-relaxed">
            Premium Branding, Luxury Logistics, and Accounting Services. We drive your
            business forward with unparalleled expertise and dedication.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-heading">Services</h3>
          <ul>
            {footerNavItems.services.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className="text-sm text-secondary/80 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
          <ul>
            {footerNavItems.quickLinks.map((item) => (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className="text-sm text-secondary/80 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-heading">Contact Us</h3>
          <ul>
            {footerNavItems.contact.map((item) => (
              <li key={item.name} className="mb-2 text-sm text-secondary/80">
                {item.type === "email" && (
                  <Link href={`mailto:${item.name}`} className="hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                )}
                {item.type === "phone" && (
                  <Link href={`tel:${item.name.replace(/\s+/g, '')}`} className="hover:text-white transition-colors duration-200">
                    {item.name}
                  </Link>
                )}
                {item.type === "location" && item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section: Social Media & Copyright */}
      <div className="mt-12 pt-8 border-t border-secondary/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-4">
          {socialMedia.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Our ${social.name} profile`}
            >
              <social.icon className="h-6 w-6 text-secondary hover:text-white transition-colors duration-200" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-secondary/70">
          © {currentYear} Efficiency Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
