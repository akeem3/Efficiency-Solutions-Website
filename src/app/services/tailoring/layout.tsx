import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Bespoke Tailoring & Fashion",
  description: "Custom corporate wear, luxury agbadas, and bespoke fashion design. Tailored to perfection for the modern professional.",
  image: "https://images.unsplash.com/photo-1594938298595-df6c039ab6d0?auto=format&fit=crop&q=80&w=1200",
});

export default function TailoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
