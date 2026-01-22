"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Activity, Clock, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-primary">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-secondary/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-brand-secondary/10 rounded-full blur-[140px]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary/40 z-10" />
        </div>

        <div className="container-custom relative z-20 pt-32 pb-24 lg:pt-48 lg:pb-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-sm font-bold uppercase tracking-widest backdrop-blur-md"
              >
                <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
                Top Rated Clinic in Lahore
              </motion.div>

              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[1] tracking-tight text-white"
                >
                  Get Rid of <br />
                  <span className="text-brand-secondary">
                    Pain
                  </span>
                  <br /> Start Living Freely!
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-normal"
                >
                  Expert physiotherapy and chiropractic care to help you move better and feel stronger.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <a
                  href="#booking"
                  className="group w-full sm:w-auto bg-brand-secondary text-brand-primary px-10 py-5 rounded-soft font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Book Appointment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-10 py-5 rounded-soft font-black text-sm uppercase tracking-widest text-white border border-white/20 hover:bg-white/10 transition-all text-center backdrop-blur-sm"
                >
                  View Services
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 pt-8 border-t border-white/10"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-primary bg-slate-800 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-brand-primary bg-brand-secondary flex items-center justify-center text-[10px] font-black text-brand-primary">
                    500+
                  </div>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">
                  <span className="text-white">4.9/5</span> from 500+ happy patients
                </div>
              </motion.div>
            </div>

            {/* Doctor Card UI */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/owner-pic.jpeg" className="w-full h-full object-cover" alt="Dr Moez Khan" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
                
                {/* Floating Info Card */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] space-y-2"
                >
                  <h3 className="text-3xl font-black text-white">Dr. Moez Khan</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-secondary font-bold text-xs uppercase tracking-[0.2em]">Physiotherapist & Chiropractor</span>
                    <div className="bg-brand-secondary/20 px-3 py-1 rounded-full text-[10px] font-black text-brand-secondary uppercase border border-brand-secondary/30">
                      Expert
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-primary/40 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Bar - Premium Refinement */}
      <div className="relative z-30 -mt-16 xl:-mt-24">
        <div className="container-custom">
          <div className="bg-white rounded-[2.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {[
                { icon: Activity, value: "98%", label: "Recovery Rate", sub: "Clinical success" },
                { icon: Clock, value: "6+", label: "Years Exp.", sub: "Medical practice" },
                { icon: Users, value: "500+", label: "Patients", sub: "Happy Patients" }
              ].map((stat, i) => (
                <div key={stat.label} className="p-10 flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-brand-secondary/10 rounded-[1.5rem] flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-500">
                    <stat.icon size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-brand-primary tracking-tighter leading-none mb-2 group-hover:scale-105 transition-transform">{stat.value}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
