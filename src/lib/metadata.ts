import { Metadata } from "next";
import { env } from "@/env";

/**
 * Standard utility to generate SEO and Open Graph metadata for the application.
 * Ensures that Title, Descriptions, and OpenGraph tags are handled uniformly 
 * across the entire Next.js Application.
 */
export function constructMetadata({
  title = "Efficiency Solutions",
  description = "A premium Nigerian agency providing Luxury Logistics, Branding, and Corporate Services.",
  image = "/og/default-hero.jpg",
  icons = "/gpt es logo.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      url: env.NEXT_PUBLIC_SITE_URL,
      siteName: "Efficiency Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@EfficiencySolutions",
    },
    icons,
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
