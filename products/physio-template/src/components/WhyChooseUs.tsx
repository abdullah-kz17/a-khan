"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Activity, Zap, Shield, Heart } from "lucide-react";

const DEPARTMENTS = [
  {
    id: "physio",
    title: "Physio Center",
    subtitle: "Precision Physical Rehabilitation",
    description: "Expert recovery programs focused on restoring full range of motion through evidence-based physiotherapy techniques.",
    points: ["Post-Op Recovery", "Sport Injury Rehab", "Postural Correction"],
    icon: Activity,
  },
  {
    id: "chiro",
    title: "Chiropractic",
    subtitle: "Precision Chiropractic Adjustments",
    description: "Expert spinal alignment and musculoskeletal nervous system support to eliminate pain cycles and restore structural integrity from the core.",
    points: ["Spinal Alignment", "Nerve Compression Relief", "Lower Back Specialists"],
    icon: Zap,
  },
  {
    id: "manual",
    title: "Physical Therapy",
    subtitle: "Manual Force Therapy",
    description: "Hands-on manipulation and soft tissue mobilization to release chronic tension and improve joint mechanics.",
    points: ["Deep Tissue Release", "Joint Mobilization", "Trigger Point Therapy"],
    icon: Heart,
  },
  {
    id: "acu",
    title: "Acupuncture",
    subtitle: "Dry Needling & Acupuncture",
    description: "Traditional and modern clinical needling to stimulate neural pathways and accelerate natural healing processes.",
    points: ["Pain Inhibition", "Neural Stimulation", "Stress Management"],
    icon: Shield,
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(DEPARTMENTS[0]);

  return (
    <div id="about" className="space-y-0">
      {/* About Section 1 - Fixed Overlap & New Theme */}
      <section className="section-padding bg-slate-50/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] shadow-2xl overflow-hidden group">
                 <Image 
                   src="/images/Doctors-amico.png" 
                   alt="Expert Medical Specialist" 
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
                 <div className="absolute inset-0 bg-brand-primary/10" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-secondary text-brand-primary p-12 rounded-[2rem] shadow-2xl hidden md:block">
                 <div className="text-5xl font-black mb-1">20+</div>
                 <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Years Excellence</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                 <div className="header-chip">Personalized Excellence</div>
                 <h2 className="text-5xl md:text-6xl font-bold leading-[1.1]">Expert Therapy Service Tailored to Your Need</h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                 We believe in treating the person, not just the symptom. Our clinical approach combines years of hands-on experience with the latest rehabilitation protocols.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                 {[
                   "Certified Movement Experts",
                   "Personalized Recovery Plans",
                   "Advanced Clinical Equipment",
                   "Doctor-Led Supervision"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary transition-colors group-hover:bg-brand-secondary group-hover:text-brand-primary">
                         <CheckCircle2 size={16} />
                      </div>
                      <span className="font-bold text-brand-primary/80 text-[15px]">{item}</span>
                   </div>
                 ))}
              </div>
              <div className="pt-4">
                 <button className="btn-primary">Learn More About Us</button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DEPARTMENT OF EXCELLENCE - Tabs inspired by request */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="header-chip">Department of Excellence</div>
            <h2 className="text-4xl md:text-5xl font-bold">Providing Excellent & Expert Therapy Service</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
             {/* Tab Sidebar */}
             <div className="lg:col-span-4 space-y-3">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setActiveTab(dept)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center justify-between border-2 ${
                      activeTab.id === dept.id 
                      ? "bg-brand-primary text-white border-brand-primary shadow-xl scale-[1.02]" 
                      : "bg-slate-50 text-brand-primary border-slate-50 hover:border-brand-secondary/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <dept.icon size={24} className={activeTab.id === dept.id ? "text-brand-secondary" : "text-brand-secondary"} />
                      <span className="font-bold text-lg">{dept.title}</span>
                    </div>
                    <ChevronRight size={20} className={activeTab.id === dept.id ? "opacity-100" : "opacity-0"} />
                  </button>
                ))}
             </div>

             {/* Tab Content Display */}
             <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-slate-50 rounded-[3rem] p-10 md:p-14 border border-slate-100 grid md:grid-cols-2 gap-12 items-center"
                  >
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <h4 className="text-brand-secondary font-bold uppercase tracking-widest text-sm">{activeTab.subtitle}</h4>
                          <p className="text-slate-600 leading-relaxed font-medium text-lg">{activeTab.description}</p>
                       </div>
                       
                       <div className="space-y-4">
                          {activeTab.points.map((point, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                               <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                               <span className="font-bold text-brand-primary text-base">{point}</span>
                            </div>
                          ))}
                       </div>

                       <button className="flex items-center gap-2 font-bold text-brand-primary group">
                          Read More Details 
                          <ChevronRight size={18} className="transition-transform group-hover:translate-x-1 text-brand-secondary" />
                       </button>
                    </div>

                    <div className="h-[400px] bg-white rounded-[2rem] overflow-hidden relative shadow-xl border border-slate-100 group">
                       <img 
                          src={
                           activeTab.id === 'physio' ? "/images/Phisiotherapy-amico.png" :
                            activeTab.id === 'chiro' ? "/images/Orthopedic-pana.png" :
                            activeTab.id === 'manual' ? "/images/Medical care-cuate.png" :
                            "/images/Rheumatology-pana.png"
                          } 
                          alt={activeTab.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                       />
                       <div className="absolute inset-0 bg-brand-primary/5" />
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </section>

      {/* Split Section - Midnight Background */}
      <section className="bg-brand-primary text-white overflow-hidden">
         <div className="container-custom py-0">
            <div className="grid lg:grid-cols-2">
               
               <div className="py-24 lg:pr-24 space-y-10">
                  <div className="space-y-6">
                     <div className="header-chip !bg-white/10 !text-brand-secondary !border-white/20">Clinical Standards</div>
                     <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">Care for every patient, every day.</h2>
                  </div>
                  <p className="text-xl text-white/70 leading-relaxed font-medium">
                     Our facility is designed to be a sanctuary of healing. We provide the biomechanical support required for your specific clinical condition.
                  </p>
                  <button className="bg-brand-secondary text-brand-primary px-12 py-5 rounded-soft font-bold text-[14px] uppercase tracking-wider hover:bg-white transition-all shadow-xl active:scale-95">
                     View Our Facility
                  </button>
               </div>

               <div className="relative h-[500px] lg:h-auto overflow-hidden group bg-slate-50">
                   <img src="/images/Hospital room-rafiki.png" alt="Clinical Facility" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-l from-brand-primary/20 via-transparent to-transparent" />
                  <div className="absolute inset-0 border-l border-white/10" />
               </div>

            </div>
         </div>
      </section>
    </div>
  );
}
