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
      message += `${item.name} x${item.quantity} – ${formatNaira(item.price * item.quantity)}\n`;
    });
    message += `\nTotal: ${formatNaira(total)}\n\n`;
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
      message += "*Premium Branding:*\n";
      brandingItems.forEach((item) => {
        message += `- ${item.name} x${item.quantity} – ${formatNaira(item.price * item.quantity)}\n`;
      });
      message += "\n";
    }

    message += `Total Estimate: ${formatNaira(total)}\n\n`;
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

export function generateConsultationLink(serviceName: string) {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  const message = `🌟 *EFFICIENCY SOLUTIONS: CONSULTATION REQUEST* 🌟\n\nHello Team! I would like to book a professional consultation for your *${serviceName}* services.\n\nPlease let me know your available times for a brief introductory call. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
