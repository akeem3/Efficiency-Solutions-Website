import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Bespoke Tailoring & Fashion",
  description: "Custom corporate wear, luxury agbadas, and bespoke fashion design. Tailored to perfection for the modern professional.",
  image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Fashion%20Design/agbada.jpg",
});

export default function TailoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
