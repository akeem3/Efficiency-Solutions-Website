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
        <SheetHeader className="p-6 border-b border-brand-primary/5 bg-brand-primary/2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-primary text-white shadow-lg">
              <LuShoppingCart className="h-5 w-5" />
            </div>
            <SheetTitle className="text-xl font-extrabold font-heading text-brand-primary">
              Your Selections
            </SheetTitle>
            {totalItems > 0 && (
              <Badge variant="secondary" className="bg-brand-secondary/10 text-brand-secondary border-none font-bold">
                {totalItems} items
              </Badge>
            )}
          </div>
        </SheetHeader>

        {totalItems === 0 ? (
          <div className="flex flex-col flex-1 items-center justify-center p-12 text-center">
            <div className="h-24 w-24 rounded-full bg-brand-primary/5 flex items-center justify-center mb-8">
               <LuShoppingCart className="h-10 w-10 text-brand-muted/30" />
            </div>
            <h3 className="text-xl font-bold font-heading text-brand-primary mb-3">Your cart is currently empty</h3>
            <p className="text-brand-muted/70 mb-10 max-w-[200px]">Discover our premium services to start building your quote.</p>
            <Button variant="outline" className="rounded-full px-8 text-brand-primary border-brand-primary/20 font-bold font-heading">
               Explore Services
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6 py-4">
              <AnimatePresence mode="popLayout" initial={false}>
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.id}-${item.type}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="group relative flex items-start gap-4 p-4 rounded-3xl bg-brand-primary/[0.02] border border-brand-primary/5 transition-all hover:bg-brand-primary/[0.04] hover:border-brand-primary/10"
                    >
                      {/* Product Image */}
                      <div className="relative h-20 w-20 flex-shrink-0 bg-white rounded-2xl overflow-hidden border border-brand-primary/5 shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 space-y-1">
                        <h4 className="text-sm font-bold font-heading text-brand-primary line-clamp-1">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
                             {item.type}
                          </span>
                          {item.metadata?.days && (
                            <span className="text-[10px] font-medium text-brand-muted">
                               {item.metadata.days} days
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                           <div className="flex items-center gap-1 bg-white rounded-xl border border-brand-primary/5 p-1 shadow-sm">
                             <Button
                               variant="ghost"
                               size="icon"
                               className="h-7 w-7 rounded-lg text-brand-muted"
                               onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}
                             >
                               <LuMinus className="h-3 w-3" />
                             </Button>
                             <span className="w-8 text-center text-xs font-bold font-heading text-brand-primary">
                               {item.quantity}
                             </span>
                             <Button
                               variant="ghost"
                               size="icon"
                               className="h-7 w-7 rounded-lg text-brand-muted"
                               onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                             >
                               <LuPlus className="h-3 w-3" />
                             </Button>
                           </div>
                           
                           <span className="text-sm font-bold font-heading text-brand-primary">
                             {formatNaira(item.price * item.quantity * (item.metadata?.days || 1))}
                           </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id, item.type)}
                        className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-white shadow-md flex items-center justify-center text-brand-muted hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110"
                      >
                         <LuTrash2 className="h-3.5 w-3.5" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </ScrollArea>

            <SheetFooter className="mt-auto flex flex-col gap-4 p-8 bg-brand-primary/2 border-t border-brand-primary/5">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-brand-muted">
                  <span className="text-sm font-medium">Subtotal</span>
                  <span className="text-base font-bold font-heading">{formatNaira(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between text-brand-primary">
                  <span className="text-base font-bold font-heading">Total Estimate</span>
                  <span className="text-2xl font-extrabold font-heading text-brand-secondary">
                    {formatNaira(totalPrice)}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-16 rounded-full bg-brand-primary hover:bg-brand-primary/90 text-white font-extrabold font-heading text-lg group shadow-xl"
                onClick={handleCheckout}
              >
                Checkout to WhatsApp
                <div className="ml-3 h-7 w-7 flex items-center justify-center rounded-full bg-white transform transition-transform group-hover:translate-x-1 group-hover:rotate-12 overflow-hidden bg-transparent">
                   <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} className="object-contain" />
                </div>
              </Button>
              
              <p className="text-[10px] text-center text-brand-muted tracking-tight font-medium uppercase opacity-60">
                 All prices are estimates • Agent verification required
              </p>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
