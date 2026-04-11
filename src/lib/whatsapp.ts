import { CartItem } from "@/hooks/useCart";
import { env } from "@/env";

export const formatNaira = (amount: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
};

export function generateWhatsAppLink(items: CartItem[], total: number) {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  const brandingItems = items.filter((i) => i.type === "branding");
  const logisticsItems = items.filter((i) => i.type === "logistics");

  const isPureLogistics = logisticsItems.length > 0 && brandingItems.length === 0;
  const isPureBranding = brandingItems.length > 0 && logisticsItems.length === 0;

  let message = "";

  if (isPureLogistics) {
    message = "Hi, I’d like to book:\n\n";
    logisticsItems.forEach((item) => {
      const days = item.metadata?.days || 1;
      message += `${item.name} – ${days} day\n`;
    });
    message += `Total: ${formatNaira(total)}\n\n`;
    message += "Is this available?";
  } else if (isPureBranding) {
    message = "Hi, I want to order:\n\n";
    brandingItems.forEach((item) => {
      message += `${item.name} x${item.quantity}\n`;
    });
    message += `\nPlease provides a quote for these items.\n\n`;
    message += "Customization:\n";
    message += "[Please describe design, text, size, colors]";
  } else {
    // Mixed Order: Combine templates professionally
    message = "Hi, I'd like to place an order for the following:\n\n";
    
    if (logisticsItems.length > 0) {
      message += "*Luxury Logistics:*\n";
      logisticsItems.forEach((item) => {
        const days = item.metadata?.days || 1;
        message += `- ${item.name} – ${days} day\n`;
      });
      message += "\n";
    }

    if (brandingItems.length > 0) {
      message += "*Premium Branding & Printing:*\n";
      brandingItems.forEach((item) => {
        message += `- ${item.name} x${item.quantity}\n`;
      });
      message += "\n";
    }

    // Only show total if there are logistics items
    if (logisticsItems.length > 0) {
      // Logic would need to be updated to only sum logistics items
      // For now, keeping total as passed but ideally it should be logistics only
      message += `Total Estimate (Fleet): ${formatNaira(total)}\n\n`;
    }

    if (brandingItems.length > 0) {
      message += "Customization (Branding):\n";
      message += "[Please describe design, text, size, colors]";
    }
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generateAccountingLink() {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  const message = `Hi, I’d like to book a consultation for Accounting & Financial Intelligence.\n\nNeed help with:\n[Briefly describe your requirements]\n\nIs this a good time to talk?`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generateTailoringLink() {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = "Hi 👗 I’m interested in a custom outfit. Here’s what I have in mind: [Describe your style, fabric, or idea]";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generateDigitalLink() {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = "Hi 🚀 I have a digital product idea I’d like to build. Here’s a brief overview: [Describe your app, website, or idea]";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generateConsultationLink(serviceName: string) {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  const message = `🌟 *EFFICIENCY SOLUTIONS: CONSULTATION REQUEST* 🌟\n\nHello Team! I would like to book a professional consultation for your *${serviceName}* services.\n\nPlease let me know your available times for a brief introductory call. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a consistent WhatsApp link for global CTAs (Navbar, Floating Button).
 * Supports optional service-specific messages based on the current pathname.
 */
export function getWhatsAppLink(pathname?: string) {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  // Requirement 1: Exact default message
  const defaultMessage = "Hi 👋 I’d like to get started. Please I’d like to know more about your services. Here’s what I need:";

  // Requirement 5: Service-specific overrides
  const serviceMap: Record<string, string> = {
    "/services/logistics": "Luxury Logistics",
    "/services/branding": "Premium Branding & Printing",
    "/services/digital": "Digital Product Development",
    "/services/accounting": "Accounting Services",
    "/services/tailoring": "Tailoring & Fashion Design",
  };

  let finalMessage = defaultMessage;

  // If path is a direct service match, use customized message
  if (pathname && serviceMap[pathname]) {
    finalMessage = `Hi 👋 I'm interested in your ${serviceMap[pathname]} services. I’d like to know more. Here’s what I need:`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(finalMessage)}`;
}
