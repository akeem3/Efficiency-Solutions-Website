"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuMenu, LuX, LuShoppingCart } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { env } from "@/env";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Close mobile menu on route change or window resize
  useEffect(() => {
    setMounted(true);
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 768) {
          setIsMobileMenuOpen(false);
        }
      });
    };
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const drawerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "sticky top-0 z-50 flex h-20 w-full items-center justify-between px-6 py-4 backdrop-blur-md",
          "lg:px-12",
          "bg-card/80 border-b border-border shadow-sm",
        )}
      >
        {/* Left Side: Logo */}
        <div className="flex-1 flex items-center">
          <Link 
            href="/" 
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <Icons.Logo className="h-8 w-8 text-brand-primary" />
            <span className="text-xl font-bold font-heading whitespace-nowrap">
              <span className="text-brand-primary">Efficiency</span>{" "}
              <span className="text-brand-secondary">Solutions</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 justify-center items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => {
                if (item.href === "/#services" && pathname === "/") {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                } else if (item.href === "/" && pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else if (pathname.startsWith(item.href) && item.href !== "/") {
                  // Handle case where we click a service link while already on that service's subpage
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-base font-medium text-brand-muted hover:text-brand-primary transition-colors",
                pathname === item.href && "text-brand-primary font-semibold",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Cart, CTA and Mobile Menu Button */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-4">
          {/* Cart Trigger */}
          <CartDrawer>
            <button 
              className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/5 text-brand-primary transition-all hover:bg-brand-primary hover:text-white"
              aria-label="View Cart"
            >
              <LuShoppingCart className="h-5 w-5" />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-secondary text-[10px] font-bold text-white ring-2 ring-white transition-transform group-hover:scale-110">
                  {itemCount}
                </span>
              )}
            </button>
          </CartDrawer>

          <Link
            href={`https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "bg-brand-primary hover:bg-brand-primary/90 text-white hidden lg:inline-flex rounded-full gap-2 px-8 h-12 shadow-lg shadow-brand-primary/10"
            )}
          >
            Contact
            <Image src="/whatsapp.png" alt="WhatsApp Icon" width={20} height={20} className="object-contain" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "lg:hidden h-11 w-11 rounded-full border-brand-primary/20 hover:bg-brand-primary/5",
            )}
            aria-label="Open mobile menu"
            onClick={toggleMobileMenu}
          >
            <LuMenu className="h-6 w-6 text-brand-primary" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={toggleMobileMenu}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={drawerVariants}
              transition={{ type: "tween", duration: 0.4 }}
              className={cn(
                "fixed inset-y-0 right-0 z-50 w-full max-w-sm flex flex-col bg-background shadow-2xl lg:hidden",
              )}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={toggleMobileMenu}
                >
                  <Icons.Logo className="h-8 w-8 text-brand-primary" />
                  <span className="text-lg font-bold font-heading">
                    <span className="text-brand-primary">Efficiency</span>{" "}
                    <span className="text-brand-secondary">Solutions</span>
                  </span>
                </Link>
                <button
                  aria-label="Close mobile menu"
                  onClick={toggleMobileMenu}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <LuX className="h-6 w-6 text-brand-primary" />
                </button>
              </div>

              {/* Drawer Body: Navigation Links */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-4 text-2xl font-bold font-heading py-4 border-b border-brand-primary/5",
                          pathname === item.href ? "text-brand-secondary" : "text-brand-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
              </div>

              {/* Drawer Footer: CTA */}
              <div className="p-6 border-t border-border">
                <Link
                  href={`https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full flex gap-2 h-14 text-lg",
                  )}
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                  <Image src="/whatsapp.png" alt="WhatsApp Icon" width={24} height={24} className="object-contain" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
