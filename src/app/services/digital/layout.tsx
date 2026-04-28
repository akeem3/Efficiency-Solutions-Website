import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Digital Product Development",
  description: "Enterprise-grade web and mobile applications, branding identity, and continuous digital product support.",
  image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Digital%20Product%20Developement/Digital-Product-Development_Content-1024x639.jpg",
});

export default function DigitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
