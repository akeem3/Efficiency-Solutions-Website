import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Professional Accounting & Advisory",
  description: "Expert financial services including Tax Planning, Audit Preparation, and Corporate Advisory for Nigerian businesses.",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
});

export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
