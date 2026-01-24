"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  { 
    name: "Sajid Mahmood", 
    msg: "Exceptional clinical care. Dr. Moez really knows the biomechanics of recovery. Highly recommended.", 
    role: "Patient",
    color: "bg-blue-100 text-blue-600" 
  },
  { 
    name: "Hina Pervez", 
    msg: "The best physiotherapy experience in Lahore. Professional, clean, and very effective results.", 
    role: "Patient",
    color: "bg-orange-100 text-orange-600" 
  },
  { 
    name: "Usman Ghani", 
    msg: "Found relief from chronic back pain after just 3 sessions. The diagnostic approach is world-class.", 
    role: "Professional",
    color: "bg-purple-100 text-purple-600" 
  },
  { 
    name: "Ayesha Khan", 
    msg: "Dr. Moez's chiropractic adjustments transformed my posture. I feel taller and more energetic than ever.", 
    role: "Patient",
    color: "bg-teal-100 text-teal-600" 
  },
  { 
    name: "Zubair Ahmed", 
    msg: "As an athlete, I've seen many physios, but her understanding of sports injuries is on another level. Back on the field in record time.", 
    role: "Athlete",
    color: "bg-red-100 text-red-600" 
  },
  { 
    name: "Mariam Saeed", 
    msg: "The geriatric care for my mother has been a blessing. Her mobility has improved significantly, and she feels much more confident walking.", 
    role: "Caregiver",
    color: "bg-indigo-100 text-indigo-600" 
  },
  { 
    name: "Bilal Hassan", 
    msg: "Exceptional service for pediatric physio. My son's developmental delays were handled with such care and expertise.", 
    role: "Parent",
    color: "bg-emerald-100 text-emerald-600" 
  },
  { 
    name: "Farah Jamil", 
    msg: "Acupuncture session was incredibly relaxing and helped with my chronic migraines. A truly holistic clinical experience.", 
    role: "Patient",
    color: "bg-rose-100 text-rose-600" 
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div id="reviews">
      {/* Testimonials - Slider Version */}
      <section id="testimonials" className="section-padding bg-slate-50/30 overflow-hidden">
        <div className="container-custom">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-5 space-y-10">
                 <div className="space-y-6 text-center lg:text-left">
                    <div className="header-chip">Clinical Validation</div>
                    <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] text-brand-primary">Patient Stories.</h2>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed">
                       Real outcomes from patients who chose clinical precision over temporary fixes.
                    </p>
                 </div>

                 <div className="flex items-center justify-center lg:justify-start gap-4 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
                    <div className="flex flex-col gap-1">
                       <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-brand-secondary text-brand-secondary" />)}
                       </div>
                       <span className="text-2xl font-black text-brand-primary tracking-tighter">4.9/5.0 <span className="text-sm font-bold text-slate-400">Rating</span></span>
                    </div>
                    <div className="w-px h-12 bg-slate-100 mx-4" />
                    <div className="space-y-1">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Reviews</div>
                       <div className="font-bold text-brand-primary">500+ Patients</div>
                    </div>
                 </div>

                 {/* Navigation Desktop */}
                 <div className="hidden lg:flex gap-4 pt-10">
                    <button onClick={prev} className="w-16 h-16 rounded-full border-2 border-slate-100 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all shadow-lg active:scale-95">
                       <ChevronLeft size={24} />
                    </button>
                    <button onClick={next} className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-brand-secondary shadow-xl hover:bg-brand-accent transition-all active:scale-95">
                       <ChevronRight size={24} />
                    </button>
                 </div>
              </div>

              {/* Right Slider */}
              <div className="lg:col-span-7 relative">
                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />
                 
                 <div className="relative h-[450px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, x: 100, scale: 0.9 }}
                         animate={{ opacity: 1, x: 0, scale: 1 }}
                         exit={{ opacity: 0, x: -100, scale: 0.9 }}
                         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                         className="absolute inset-0 bg-white rounded-[3.5rem] p-12 md:p-16 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.1)] border border-slate-50 flex flex-col justify-between"
                       >
                          <div className="space-y-8">
                             <div className="flex justify-between items-start">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner font-black text-xl", TESTIMONIALS[index].color)}>
                                   {TESTIMONIALS[index].name[0]}
                                </div>
                                <Quote size={60} className="text-brand-secondary/5" />
                             </div>
                             <p className="text-2xl md:text-3xl font-bold text-brand-primary leading-tight italic">
                                "{TESTIMONIALS[index].msg}"
                             </p>
                          </div>

                          <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                             <div>
                                <h4 className="text-xl font-bold text-brand-primary leading-none mb-2">{TESTIMONIALS[index].name}</h4>
                                <p className="text-sm font-bold text-brand-secondary uppercase tracking-widest">{TESTIMONIALS[index].role}</p>
                             </div>
                             <div className="flex gap-1 text-brand-secondary">
                                {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-current" />)}
                             </div>
                          </div>
                       </motion.div>
                    </AnimatePresence>
                 </div>

                 {/* Navigation Mobile */}
                 <div className="flex lg:hidden gap-6 justify-center mt-12">
                    <button onClick={prev} className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-brand-primary">
                       <ChevronLeft size={20} />
                    </button>
                    <div className="flex items-center gap-2">
                       {TESTIMONIALS.map((_, i) => (
                         <div key={i} className={cn("w-1.5 h-1.5 rounded-full transition-all", i === index ? "w-6 bg-brand-primary" : "bg-slate-200")} />
                       ))}
                    </div>
                    <button onClick={next} className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center text-brand-secondary">
                       <ChevronRight size={20} />
                    </button>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Clinical Framework Section - Solo Practice Focus */}
      <section id="philosophy" className="section-padding bg-brand-primary text-white">
         <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
               <div className="space-y-6">
                  <div className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-[11px]">The Specialist Advantage</div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                     A Solo Practice Built on Clinical Precision.
                  </h2>
               </div>
               <p className="text-xl text-white/70 leading-relaxed font-medium">
                  By operating as a specialized solo clinic, I ensure that every patient receives my direct clinical attention, consistent care protocols, and a personalized roadmap to recovery.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { 
                   title: "Diagnostic Depth", 
                   desc: "I dedicate extensive time to decode your biomechanical metrics, finding the root cause rather than just treating pain.", 
                   img: "/images/Radiography-amico.png",
                   tag: "Phase 01"
                 },
                 { 
                   title: "Manual Expertise", 
                   desc: "My hands-on clinical manipulation techniques are refined through 6+ years of specialized physical therapy practice.", 
                   img: "/images/Phisiotherapy-amico (1).png",
                   tag: "Phase 02"
                 },
                 { 
                   title: "Empowered Recovery", 
                   desc: "My goal is your autonomy. I provide the tools and protocols needed for you to maintain a pain-free life independently.", 
                   img: "/images/Physical therapy exercise-rafiki.png",
                   tag: "Phase 03"
                 }
               ].map((item, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.2 }}
                   className="flex flex-col space-y-8 group"
                 >
                    <div className="relative w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-white/5 border border-white/10 group-hover:border-brand-secondary transition-all shadow-2xl">
                       <Image 
                          src={item.img} 
                          alt={item.title} 
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                          sizes="(max-width: 768px) 100vw, 33vw"
                       />
                       <div className="absolute top-8 left-8 bg-brand-secondary text-brand-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10">
                          {item.tag}
                       </div>
                    </div>
                    <div className="space-y-4 px-4 text-center lg:text-left">
                       <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-brand-secondary transition-colors">{item.title}</h3>
                       <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
