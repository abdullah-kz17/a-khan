"use client";

import { motion } from "framer-motion";
import { CheckCircle2, User } from "lucide-react";

export default function AboutDoctor() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white">
              <img 
                src="/images/owner-pic.jpeg" 
                alt="Dr. Moez Khan" 
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-[200px] animate-bounce-slow">
                 <div className="text-4xl font-black text-brand-secondary mb-1">100+</div>
                 <div className="text-xs font-bold text-brand-primary uppercase tracking-widest leading-relaxed">
                    Satisfied Patients treated this month
                 </div>
              </div>
            </div>
            {/* Pattern */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-brand-secondary/20 rounded-[3rem]" />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="header-chip">Meet The Expert</div>
            
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-brand-primary">
              Dr. Moez Khan
            </h2>
            
            <div className="flex flex-col gap-2 border-l-4 border-brand-secondary pl-6">
                <span className="text-2xl font-bold text-slate-700">Physio Therapist</span>
                <span className="text-xl font-bold text-brand-secondary">Chiropractor</span>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              With specialized expertise in neurological rehabilitation and movement therapy, Dr. Moez Khan provides personalized care addressing the root cause of pain and mobility issues.
            </p>

            <div className="space-y-4 pt-4">
               {[
                 "Neurological Rehabilitation Expert",
                 "Advanced Movement Therapy",
                 "Root Cause Analysis & Treatment",
                 "Personalized Care Plans"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                       <CheckCircle2 size={16} />
                    </div>
                    <span className="font-bold text-brand-primary">{item}</span>
                 </div>
               ))}
            </div>

            <div className="pt-8">
               <a href="#booking" className="btn-primary flex items-center gap-3 w-fit">
                  <User size={18} />
                  Book Consultation
               </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
