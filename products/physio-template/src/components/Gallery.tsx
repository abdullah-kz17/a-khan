"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Camera } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "/images/a-khan-image1.jpeg", alt: "Clinic Reception", category: "Interior", size: "large" },
  { src: "/images/a-khan-image2.jpeg", alt: "Therapy Room", category: "Clinical", size: "small" },
  { src: "/images/a-khan-image3.jpeg", alt: "Treatment Area", category: "Facility", size: "medium" },
  { src: "/images/a-khan-image4.jpeg", alt: "Equipment Setup", category: "Clinical", size: "small" },
  { src: "/images/a-khan-image5.jpeg", alt: "Consultation", category: "Interior", size: "medium" },
  { src: "/images/WhatsApp Image 2026-01-01 at 5.30.28 PM.jpeg", alt: "Rehab Session", category: "Treatment", size: "large" },
  { src: "/images/WhatsApp Image 2026-01-01 at 5.30.34 PM.jpeg", alt: "Manual Therapy", category: "Treatment", size: "medium" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section className="section-padding bg-[#FCFAFA] min-h-screen overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-[11px] font-bold uppercase tracking-[0.3em]"
            >
              <Camera size={14} />
              Visual Tour
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-primary tracking-tighter leading-none">
              Modern Clinic <br /> 
              <span className="text-brand-secondary italic">Gallery.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Experience the pinnacle of clinical excellence through our state-of-the-art facility in Lahore.
            </p>
          </div>
          <div className="hidden lg:block pb-4">
             <div className="flex gap-4 items-center">
                <div className="h-[1px] w-32 bg-slate-200" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Scroll to Explore</span>
             </div>
          </div>
        </div>

        {/* Artistic Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
           {GALLERY_IMAGES.map((img, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
               className={`relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-xl border border-slate-100 bg-white
                  ${img.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}
                  ${img.size === 'medium' ? 'lg:row-span-2' : ''}
               `}
               onClick={() => setSelectedImage(img)}
             >
                <img 
                   src={img.src} 
                   alt={img.alt} 
                   className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                />
                
                {/* Advanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     className="space-y-2"
                   >
                      <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em]">
                        {img.category}
                      </span>
                      <h4 className="text-xl font-bold text-white tracking-tight">{img.alt}</h4>
                      <div className="pt-4 flex items-center justify-between">
                         <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 backdrop-blur-md">
                            <Maximize2 size={18} />
                         </div>
                         <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                            View Details
                         </div>
                      </div>
                   </motion.div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-primary/95 backdrop-blur-3xl flex flex-col items-center justify-center p-6 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
             <button 
                className="absolute top-10 right-10 text-white/30 hover:text-brand-secondary transition-all hover:scale-110"
                onClick={() => setSelectedImage(null)}
             >
                <X size={48} />
             </button>
             
             <div className="relative max-w-6xl w-full">
                <motion.img
                   initial={{ y: 40, opacity: 0, scale: 0.95 }}
                   animate={{ y: 0, opacity: 1, scale: 1 }}
                   exit={{ y: 40, opacity: 0, scale: 0.95 }}
                   src={selectedImage.src}
                   alt={selectedImage.alt}
                   className="w-full h-auto max-h-[75vh] object-contain rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-8 border-white/5"
                   onClick={(e) => e.stopPropagation()}
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-12 text-center space-y-2"
                >
                   <p className="text-brand-secondary font-bold uppercase tracking-[0.4em] text-xs">
                     {selectedImage.category}
                   </p>
                   <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                     {selectedImage.alt}
                   </h3>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
