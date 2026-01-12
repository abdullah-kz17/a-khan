"use client";

import { motion } from "framer-motion";
import { Activity, Zap, Shield, Heart, HandIcon, Accessibility, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    title: "Clinical Chiropractic",
    description: "Advanced spinal manipulation techniques to restore musculoskeletal function and alleviate chronic neuropathic pain.",
    icon: Zap,
    image: "/images/Orthopedic-amico.png",
    tags: ["Spinal Health", "No Drugs", "Clinical"]
  },
  {
    title: "Physiotherapy Rehab",
    description: "Evidence-based movement restoration protocols tailored for postoperative recovery and sports-related injuries.",
    icon: Activity,
    image: "/images/Physical therapy exercise-amico.png",
    tags: ["Recovery", "Strength", "Movement"]
  },
  {
    title: "Geriatric Care",
    description: "Specialized clinical mobility programs for seniors to maintain independence and improve biomechanical safety.",
    icon: Heart,
    image: "/images/Medical care-cuate.png",
    tags: ["Senior Care", "Balance", "Safety"]
  },
  {
    title: "Pediatric Physio",
    description: "Gentle corrective therapies for children to address developmental movement disorders and congenital conditions.",
    icon: HandIcon,
    image: "/images/Pediatrician-amico.png",
    tags: ["Gentle", "Growth", "Development"]
  },
  {
    title: "Sports Excellence",
    description: "Elite performance optimization focusing on injury prevention and high-impact mechanical resilience.",
    icon: Shield,
    image: "/images/Physical therapy exercise-pana.png",
    tags: ["Performance", "Elite", "Prevention"]
  },
  {
    title: "Acupuncture",
    description: "Clinical needling techniques to modulate neural pathways and accelerate systemic inflammation recovery.",
    icon: Accessibility,
    image: "/images/Phisiotherapy-pana.png",
    tags: ["Neural", "Healing", "Traditional"]
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="header-chip">Our Clinical Range</div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">Elite Clinical Services</h2>
          <p className="text-xl text-slate-600 font-medium">
             We offer a comprehensive suite of therapeutic modalities designed to restore your vitality and movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_40px_-12px_rgba(15,23,42,0.08)] hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="aspect-video relative overflow-hidden bg-brand-primary/5">
                 <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors" />
                 <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md text-brand-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:bg-brand-primary group-hover:text-brand-secondary transition-colors duration-500">
                    <service.icon size={24} />
                 </div>
              </div>

              <div className="p-10 flex flex-col flex-1 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-brand-secondary transition-colors">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                   {service.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        {tag}
                     </span>
                   ))}
                </div>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                   <button className="flex items-center gap-2 font-black text-brand-primary text-sm uppercase tracking-widest group-hover:gap-4 transition-all group-hover:text-brand-secondary">
                      Details 
                      <ChevronRight size={18} />
                   </button>
                   <div className="w-12 h-1 border-b-2 border-slate-100 group-hover:border-brand-secondary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <button className="btn-secondary !border-slate-200 !text-slate-500 hover:!border-brand-primary hover:!text-brand-primary translate-y-0 hover:-translate-y-1 transition-all">
               View All Clinical Specializations
            </button>
        </div>
      </div>
    </section>
  );
}
