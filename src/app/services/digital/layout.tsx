import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Digital Product Development",
  description: "Enterprise-grade web and mobile applications, branding identity, and continuous digital product support.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
});

export default function DigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
