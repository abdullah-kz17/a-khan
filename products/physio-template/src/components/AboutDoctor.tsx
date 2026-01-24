"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, User } from "lucide-react";

export default function AboutDoctor() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white group">
              <Image 
                src="/images/owner-pic.jpeg" 
                alt="Dr. Moez Khan" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent opacity-60 z-10" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl"
              >
                 <div className="flex items-center justify-between">
                    <div>
                        <div className="text-4xl font-black text-white">6+</div>
                        <div className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] mt-1">
                           Years Clinic Exp.
                        </div>
                    </div>
                    <div className="h-12 w-[1px] bg-white/20" />
                    <div className="text-right">
                        <div className="text-4xl font-black text-white">500+</div>
                        <div className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] mt-1">
                           Happy Patients
                        </div>
                    </div>
                 </div>
              </motion.div>
            </div>
            {/* Pattern */}
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full border-2 border-brand-secondary/10 rounded-[4rem]" />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div className="space-y-6">
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-[11px] font-black uppercase tracking-[0.3em]"
                >
                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                Meet The Expert
                </motion.div>
                
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-brand-primary tracking-tighter">
                Dr. Moez Khan <br />
                <span className="text-brand-secondary">Physio Therapist</span>
                </h2>
                
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  Dr. Moez Khan is an expert in helping people recover from pain and movement problems. With over 6 years of experience, he provides personalized care to help you live a pain-free life.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
               {[
                 { title: "Back & Neck Pain", label: "Expertise" },
                 { title: "Chiropractic Care", label: "Specialty" },
                 { title: "Stroke Recovery", label: "Technique" },
                 { title: "Sports Injuries", label: "Focus" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col gap-1 border-l-4 border-slate-100 pl-6 group hover:border-brand-secondary transition-colors">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                    <span className="text-lg font-bold text-brand-primary transition-colors">{item.title}</span>
                 </div>
               ))}
            </div>

            <div className="pt-10">
               <a href="#booking" className="group bg-brand-primary text-white px-10 py-5 rounded-soft font-bold text-sm uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl active:scale-95 flex items-center gap-2 w-fit">
                  <User size={18} />
                  Book Your Session
               </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
