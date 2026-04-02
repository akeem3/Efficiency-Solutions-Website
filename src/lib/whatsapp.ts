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
  
  let message = "Hi Efficiency Solutions! 👋\n";
  message += "I'd like to place an order for the following services:\n\n";

  // Group by type
  const brandingItems = items.filter((i) => i.type === "branding");
  const logisticsItems = items.filter((i) => i.type === "logistics");

  if (brandingItems.length > 0) {
    message += "🛒 *Premium Branding:*\n";
    brandingItems.forEach((item) => {
      message += `- ${item.name} x ${item.quantity} (${formatNaira(item.price * item.quantity)})\n`;
    });
    message += "\n";
  }

  if (logisticsItems.length > 0) {
    message += "🚗 *Luxury Logistics:*\n";
    logisticsItems.forEach((item) => {
      const days = item.metadata?.days || 1;
      message += `- ${item.name} (${days} days) @ ${formatNaira(item.price)}/day\n`;
    });
    message += "\n";
  }

  message += `💰 *Total Estimate:* ${formatNaira(total)}\n\n`;
  message += "Please confirm availability and procurement steps. Thank you!";

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generateConsultationLink(serviceName: string) {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  const message = `Hi Efficiency Solutions! 👋\n\nI would like to book a free consultation for your *${serviceName}* services.\n\nPlease let me know your available times for a brief introductory call. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
