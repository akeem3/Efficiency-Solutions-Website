"use client";

import { useCart, CartItem } from "@/hooks/useCart";
import { formatNaira, generateWhatsAppLink } from "@/lib/whatsapp";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { LuTrash2, LuPlus, LuMinus, LuShoppingCart } from "react-icons/lu";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export const CartDrawer = ({ children }: { children: React.ReactElement }) => {
  const { items, removeItem, updateQuantity, getTotalPrice, getItemCount, clearCart } = useCart();
  const totalItems = getItemCount();
  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    const link = generateWhatsAppLink(items, totalPrice);
    window.open(link, "_blank");
    clearCart();
  };

  return (
    <Sheet>
      <SheetTrigger render={children} />
      <SheetContent className="flex flex-col w-full sm:max-w-md bg-white border-l border-brand-primary/10 p-0 shadow-2xl">
        <SheetHeader className="p-4 md:p-6 border-b border-brand-primary/5 bg-brand-primary/2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-[10px] bg-brand-primary text-white shadow-lg">
              <LuShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
            </div>
            <SheetTitle className="text-lg md:text-xl font-extrabold font-heading text-brand-primary">
              Your Selections
            </SheetTitle>
            {totalItems > 0 && (
              <Badge variant="secondary" className="bg-brand-secondary/10 text-brand-secondary border-none font-bold text-[10px]">
                {totalItems} items
              </Badge>
            )}
          </div>
        </SheetHeader>

        {totalItems === 0 ? (
          <div className="flex flex-col flex-1 items-center justify-center p-8 md:p-12 text-center">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-brand-primary/5 flex items-center justify-center mb-6 md:mb-8">
               <LuShoppingCart className="h-8 w-8 md:h-10 md:w-10 text-brand-muted/30" />
            </div>
            <h3 className="text-lg md:text-xl font-bold font-heading text-brand-primary mb-3">Your cart is currently empty</h3>
            <p className="text-brand-muted/70 mb-8 md:mb-10 max-w-[200px] text-sm md:text-base">Discover our premium services to start building your quote.</p>
            <Button variant="outline" className="rounded-[10px] px-6 md:px-8 text-brand-primary border-brand-primary/20 font-bold font-heading h-11 md:h-12">
               Explore Services
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-4 md:px-6 py-4">
              <AnimatePresence mode="popLayout" initial={false}>
                <div className="space-y-4 md:space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.type}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="group relative flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-[10px] bg-brand-primary/[0.02] border border-brand-primary/5 transition-all hover:bg-brand-primary/[0.04] hover:border-brand-primary/10"
                    >
                      {/* Product Image */}
                      <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 bg-white rounded-[10px] overflow-hidden border border-brand-primary/5 shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-1.5 md:p-2"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 space-y-0.5 md:space-y-1 overflow-hidden">
                        <h4 className="text-xs md:text-sm font-bold font-heading text-brand-primary truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                             {item.type}
                          </span>
                          {item.metadata?.days && (
                            <span className="text-[9px] md:text-[10px] font-medium text-brand-muted">
                               {item.metadata.days} days
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between mt-2 md:mt-4">
                           <div className="flex items-center gap-1 bg-white rounded-lg border border-brand-primary/5 p-0.5 md:p-1 shadow-sm">
                             <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 md:h-7 md:w-7 rounded-md md:rounded-lg text-brand-muted"
                                onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}
                             >
                               <LuMinus className="h-2.5 w-2.5 md:h-3 md:w-3" />
                             </Button>
                             <span className="w-6 md:w-8 text-center text-[10px] md:text-xs font-bold font-heading text-brand-primary font-heading">
                               {item.quantity}
                             </span>
                             <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 md:h-7 md:w-7 rounded-md md:rounded-lg text-brand-muted"
                                onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                             >
                               <LuPlus className="h-2.5 w-2.5 md:h-3 md:w-3" />
                             </Button>
                           </div>
                           
                           <span className="text-xs md:text-sm font-bold font-heading text-brand-primary">
                             {item.price 
                               ? formatNaira(item.price * item.quantity * (item.metadata?.days || 1))
                               : "Quote Required"
                             }
                           </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id, item.type)}
                        className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 h-6 w-6 md:h-7 md:w-7 rounded-full bg-white shadow-md flex items-center justify-center text-brand-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 border border-brand-primary/5"
                      >
                         <LuTrash2 className="h-3 w-3 md:h-3.5 md:w-3.5" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </ScrollArea>

            <SheetFooter className="mt-auto flex flex-col gap-4 p-5 md:p-8 bg-brand-primary/2 border-t border-brand-primary/5">
              <div className="space-y-2 md:space-y-4">
                {totalPrice > 0 && (
                  <>
                    <div className="flex items-center justify-between text-brand-muted">
                      <span className="text-xs md:text-sm font-medium">Fleet Subtotal</span>
                      <span className="text-sm md:text-base font-bold font-heading">{formatNaira(totalPrice)}</span>
                    </div>
                    <div className="flex items-center justify-between text-brand-primary">
                      <span className="text-sm md:text-base font-bold font-heading">Total Fleet Estimate</span>
                      <span className="text-xl md:text-2xl font-extrabold font-heading text-brand-secondary">
                        {formatNaira(totalPrice)}
                      </span>
                    </div>
                  </>
                )}
                {totalPrice === 0 && (
                  <div className="text-center py-2">
                    <p className="text-sm font-bold text-brand-primary font-heading uppercase tracking-widest opacity-80">
                      Pricing Available Upon Request
                    </p>
                  </div>
                )}
              </div>

              <Button
                size="lg"
                className="w-full h-12 md:h-16 rounded-[10px] bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold font-heading text-sm md:text-lg group shadow-xl"
                onClick={handleCheckout}
              >
                Send Request to WhatsApp
                <div className="ml-2 md:ml-3 h-6 w-6 md:h-7 md:w-7 flex items-center justify-center rounded-full bg-white transform transition-transform group-hover:translate-x-1 group-hover:rotate-12 overflow-hidden bg-transparent shrink-0">
                   <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} className="object-contain" />
                </div>
              </Button>
              
              <p className="text-[9px] md:text-[10px] text-center text-brand-muted tracking-tight font-medium opacity-60">
                 {totalPrice > 0 ? "Fleet prices are estimates • Agent verification required" : "Agent verification required"}
              </p>
              <p className="text-[9px] md:text-[10px] text-center text-brand-muted tracking-tight opacity-50">
                 By proceeding, you agree to our{" "}
                 <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-primary">
                   Terms & Conditions
                 </a>
              </p>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
