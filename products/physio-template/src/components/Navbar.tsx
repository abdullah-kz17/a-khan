"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, User, Stethoscope, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Clinic", href: "/about" },
    { name: "Booking", href: "/booking" },
    // { name: "Reviews", href: "/reviews" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      {/* Top Bar - Midnight & Gold Clinical Elite */}
      <div className={cn(
        "hidden lg:block bg-brand-primary text-white py-3 border-b border-white/5 transition-all duration-500",
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
      )}>
        <div className="container-custom flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-secondary" />
              <span className="opacity-70">House 14, Mehar Fiaz Colony, BB Block, Fateh Garh, Lahore</span>
            </div>
            <div className="flex items-center gap-2 max-w-[200px] xl:max-w-none">
              <Mail size={14} className="text-brand-secondary shrink-0" />
              <span className="opacity-70 truncate xl:whitespace-normal">a.khanphysioandkinetic@gmail.com</span>
            </div>
            <a href="https://wa.me/923084687707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-secondary transition-colors">
              <MessageSquare size={14} className="text-brand-secondary" />
              <span className="opacity-70">0308-4687707</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-white/50 pr-6 border-r border-white/10">
               <span className="text-[9px] uppercase tracking-widest">Mon-Sat: 3PM - 10PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-brand-secondary" />
              <span className="text-[12px]">0315-4289654</span>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-2xl py-3 border-b border-slate-100" 
            : "bg-white py-6"
        )}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-4 group">
             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-secondary transition-transform group-hover:scale-110 shadow-lg border border-slate-100">
               <Image src="/images/a-khan-logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
            </div>
             <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold tracking-tighter text-brand-primary leading-none">
                  A-Khan <span className="text-brand-secondary">Physiotherapy</span>
                </span>
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary/50 mt-1">
                  & Kinetic Expert Clinic
                </span>
             </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[12px] font-black text-brand-primary uppercase tracking-[0.2em] hover:text-brand-secondary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full" />
              </Link>
            ))}
            <div className="h-8 w-[1px] bg-slate-100 mx-2" />
            <Link
              href="#booking"
              className="bg-brand-primary text-brand-secondary px-8 py-3.5 rounded-soft font-bold text-[11px] uppercase tracking-widest hover:bg-brand-secondary hover:text-brand-primary transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              <User size={16} />
              Book Slot
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-primary hover:text-brand-secondary transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-primary p-12 flex flex-col pt-32"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold text-white hover:text-brand-secondary transition-colors border-b border-white/5 pb-4"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto space-y-8">
               <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-4 text-white">
                     <Phone size={24} className="text-brand-secondary" />
                     <span className="text-xl font-bold">0315-4289654</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/60 overflow-hidden">
                     <Mail size={20} className="text-brand-secondary shrink-0" />
                     <span className="font-medium text-xs sm:text-sm break-all">a.khanphysioandkinetic@gmail.com</span>
                  </div>
               </div>
               <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-brand-secondary text-brand-primary py-6 rounded-2xl font-bold uppercase tracking-widest text-[13px] shadow-2xl"
               >
                  Start Clinical Recovery
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
