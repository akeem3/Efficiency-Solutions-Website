import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Professional Accounting & Advisory",
  description: "Expert financial services including Tax Planning, Audit Preparation, and Corporate Advisory for Nigerian businesses.",
  image: "https://rpeexaiwtuwhkllqzlgg.supabase.co/storage/v1/object/public/es-bucket/Accounting%20Services/Certified%20Public%20Accountant%20_%20How%20CPAs%20Simplify%20Tax%20&%20Financial%20Management%20for%20Businesses.jpg",
});

export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
