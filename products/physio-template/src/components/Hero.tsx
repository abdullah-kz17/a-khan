"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Activity, Clock, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-[800px] flex items-center overflow-hidden bg-brand-primary">
        {/* Background Image Placeholder with better overlay */}
        <div className="absolute inset-0">
          {/* Simulated Image with gradient */}
          {/* <div className="absolute inset-0 bg-[url('/images/image11.webp')] bg-cover bg-center opacity-40 mix-blend-overlay" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent z-10" />
        </div>

        <div className="container-custom relative z-20 pt-20 pb-40">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="header-chip !bg-white/10 !text-brand-secondary !border-white/20"
            >
              <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
              Trusted Physiotherapy Center in Lahore
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.1] md:leading-[1] tracking-tighter text-white"
            >
              A-Khan Physiotherapy <br />
              <span className="text-brand-secondary">& Kinetic Expert Clinic</span> <br />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-medium italic"
            >
              "Say Goodbye to Pain — Start Living Freely Again!"
            </motion.p>
            
            <div className="flex items-center gap-6 mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 max-w-md">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-secondary p-1">
                   <div className="w-full h-full rounded-full overflow-hidden">
                       <img src="/images/owner-pic.jpeg" className="w-full h-full object-cover" alt="Dr Moez" />
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">Dr. Moez Khan</h3>
                   <div className="flex flex-col text-brand-secondary font-bold text-sm uppercase tracking-wider">
                      <span>Physio Therapist</span>
                      <span className="text-white/60 text-[10px]">Chiropractor</span>
                   </div>
                </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5 pt-8"
            >
              <a
                href="#booking"
                className="w-full sm:w-auto bg-brand-secondary text-brand-primary px-10 py-5 rounded-soft font-bold text-[14px] uppercase tracking-wider hover:bg-white transition-all shadow-xl active:scale-95 text-center"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-soft font-bold text-[14px] uppercase tracking-wider hover:bg-white/20 transition-all active:scale-95 text-center"
              >
                Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Bar - Refined Spacing */}
      <div className="relative z-30 -mt-10 md:-mt-20">
        <div className="container-custom">
          <div className="bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border border-slate-100">
             
             <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center shrink-0">
                   <Activity size={40} />
                </div>
                <div>
                   <div className="text-4xl font-black text-brand-primary leading-none mb-2">98%</div>
                   <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest leading-none">Success Rates</p>
                </div>
             </div>

             <div className="flex items-center gap-8 border-y md:border-y-0 md:border-x border-slate-100 py-10 md:py-0 md:px-14">
                <div className="w-20 h-20 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center shrink-0">
                   <Clock size={40} />
                </div>
                <div>
                   <div className="text-4xl font-black text-brand-primary leading-none mb-2">16+</div>
                   <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest leading-none">Years Clinical exp.</p>
                </div>
             </div>

             <div className="flex items-center gap-8 md:pl-14">
                <div className="w-20 h-20 bg-brand-secondary/10 text-brand-secondary rounded-2xl flex items-center justify-center shrink-0">
                   <Users size={40} />
                </div>
                <div>
                   <div className="text-4xl font-black text-brand-primary leading-none mb-2">10+</div>
                   <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest leading-none">Specialist Doctors</p>
                </div>
             </div>

          </div>
        </div>
      </div>
    </>
  );
}
