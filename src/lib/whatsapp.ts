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
  
  let message = "🌟 *EFFICIENCY SOLUTIONS: NEW ORDER REQUEST* 🌟\n\n";
  message += "Hello Team! I would like to proceed with the following selection from your catalog:\n\n";

  // Group by type
  const brandingItems = items.filter((i) => i.type === "branding");
  const logisticsItems = items.filter((i) => i.type === "logistics");

  if (brandingItems.length > 0) {
    message += "🛒 *PREMIUM BRANDING INVENTORY:*\n";
    brandingItems.forEach((item) => {
      message += `- ${item.name} x ${item.quantity} (${formatNaira(item.price * item.quantity)})\n`;
    });
    
    // Custom branding specification block as requested
    message += "\n📝 _CUSTOM BRANDING SPECIFICATIONS_\n";
    message += "(Please describe your design requirements, sizes, or custom colors here):\n";
    message += "___________________________________\n\n";
  }

  if (logisticsItems.length > 0) {
    message += "🚗 *LUXURY LOGISTICS FLEET:*\n";
    logisticsItems.forEach((item) => {
      const days = item.metadata?.days || 1;
      message += `- ${item.name} (${days} days) @ ${formatNaira(item.price)}/day\n`;
    });
    message += "\n";
  }

  message += `💎 *TOTAL ESTIMATE:* ${formatNaira(total)}\n\n`;
  message += "--- \n";
  message += "Please confirm availability and procurement timelines. Thank you!";

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function generateConsultationLink(serviceName: string) {
  const number = env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  const message = `🌟 *EFFICIENCY SOLUTIONS: CONSULTATION REQUEST* 🌟\n\nHello Team! I would like to book a professional consultation for your *${serviceName}* services.\n\nPlease let me know your available times for a brief introductory call. Thank you!`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
