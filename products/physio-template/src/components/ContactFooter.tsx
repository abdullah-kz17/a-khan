"use client";

import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowRight, User, CheckCircle2, Stethoscope, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactFooter() {
  return (
    <div id="contact" className="bg-[#FCFAFA]">
      {/* Latest News / Blog Preview - Inspired by Reference */}
      <section id="blog" className="section-padding">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
               <div className="max-w-2xl space-y-6">
                  <div className="text-brand-primary font-bold uppercase tracking-[0.4em] text-[11px]">Latest Insights</div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Providing Excellent & Expert Therapy Service According to Need
                  </h2>
               </div>
               <button className="btn-secondary whitespace-nowrap">View All News</button>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               {[
                 { title: "Effective Dry Needling - Pros vs Cons", date: "Jan 05, 2026", cat: "Technique", desc: "Understanding the clinical benefits of dry needling for deep muscular tension release." },
                 { title: "Physical Therapy vs Chiro Therapy", date: "Jan 02, 2026", cat: "Clinical", desc: "How to choose the right path for your specific musculoskeletal condition and recovery goal." }
               ].map((post, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="aspect-video rounded-[2.5rem] mb-8 overflow-hidden group-hover:shadow-2xl transition-all duration-500 bg-brand-primary/5 relative">
                       <Image 
                          src={i === 0 ? "/images/Hospital bed-bro.png" : "/images/Forensic medicine-pana.png"} 
                          alt={post.title} 
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700" 
                          sizes="(max-width: 768px) 100vw, 50vw"
                       />
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-4 text-[11px] font-bold text-brand-secondary uppercase tracking-widest">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span>{post.cat}</span>
                       </div>
                       <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{post.title}</h3>
                       <p className="text-slate-500 font-medium leading-relaxed">{post.desc}</p>
                       <div className="pt-2">
                          <span className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-[11px] group-hover:gap-4 transition-all">
                             Read Article <ArrowRight size={14} />
                          </span>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

       {/* Footer - Inspired by Reference */}
       <footer className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
         <div className="container-custom">
           {/* Google Maps Embed - Upward Footer */}
           <div className="mb-20">
             <div className="rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274446554!2d74.00471526778064!3d31.483103653925408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191100483fd88f%3A0xf07c586e0443c25b!2sA%20Khan%20Physiotherapy%20And%20Kinetic%20Expert%20Clinic!5e0!3m2!1sen!2s!4v1769091520828!5m2!1sen!2s" 
                 width="100%" 
                 height="450" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="w-full"
               />
             </div>
           </div>

           {/* Newsletter Section - De-congested */}
           <div className="relative mb-32 group">
            <div className="absolute inset-0 bg-brand-secondary rounded-[3rem] translate-y-2 translate-x-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="relative bg-white text-brand-primary rounded-[3rem] p-12 md:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-16 border border-slate-100">
               <div className="flex-1 space-y-6">
                  <div className="header-chip">Newsletter Signup</div>
                  <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-brand-primary">Join Our Clinic</h2>
                  <p className="text-xl text-slate-600 font-medium">
                     Subscribe for clinical updates and wellness tips directly from Dr. Moez. 
                  </p>
               </div>
               <div className="w-full lg:w-[500px]">
                  <form className="flex flex-col sm:flex-row gap-4">
                     <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="flex-1 bg-slate-50 border-2 border-slate-100 px-8 py-5 rounded-soft text-brand-primary font-bold focus:outline-none focus:border-brand-secondary transition-all"
                     />
                     <button className="bg-brand-primary text-white px-10 py-5 rounded-soft font-bold uppercase tracking-widest text-[13px] hover:bg-brand-accent transition-all whitespace-nowrap active:scale-95 shadow-lg">
                        Join Now
                     </button>
                  </form>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/10">
             {/* Column 1: Brand */}
              <div className="space-y-10">
                 <div className="flex items-center gap-4 group">
               <Image src="/images/a-khan-logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
                    <div className="flex flex-col">
                       <span className="text-xl font-bold tracking-tighter text-white">A-Khan <span className="text-brand-secondary">Physio</span></span>
                       <span className="text-[10px] uppercase font-bold text-brand-secondary tracking-[0.4em] leading-none mt-1">Expert Clinic</span>
                    </div>
                 </div>
                <p className="text-white/60 leading-relaxed font-medium">
                   Pioneering evidence-based physiotherapy and clinical chiropractic care in Lahore. Your movement, our clinical priority.
                </p>
                <div className="flex gap-4">
                      <a href="https://www.facebook.com/share/1CEMJEnaL6/" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-secondary hover:text-brand-primary transition-all">
                        <Facebook size={20} />
                      </a>
                      <a href="https://www.instagram.com/dr.moezkhan?igsh=MTVtdWY2amNxc212cg==" target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-secondary hover:text-brand-primary transition-all">
                        <Instagram size={20} />
                      </a>
                </div>
             </div>

             {/* Column 2: Navigation */}
             <div className="space-y-10 lg:pl-10">
                <h4 className="text-lg font-bold text-white uppercase tracking-widest">Navigation</h4>
                <ul className="space-y-5">
                   {["Our Services", "About Clinic", "Team Members", "Why Choose Us", "Pricing Plans"].map((link) => (
                     <li key={link}>
                        <a href="#" className="text-white/60 hover:text-brand-secondary transition-colors font-bold flex items-center gap-2 group">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary scale-0 transition-transform group-hover:scale-100" />
                           {link}
                        </a>
                     </li>
                   ))}
                </ul>
             </div>

             {/* Column 3: Contact */}
             <div className="space-y-10 lg:pl-10">
                <h4 className="text-lg font-bold text-white uppercase tracking-widest">Get in Touch</h4>
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <MapPin className="text-brand-secondary mt-1 min-w-[20px]" size={20} />
                      <p className="text-white/60 font-medium leading-relaxed">House 14, Mehar Fiaz Colony, BB Block, Fateh Garh, Lahore</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <Phone className="text-brand-secondary" size={20} />
                      <p className="text-white/60 font-bold">0315-4289654</p>
                   </div>
                   <div className="flex items-center gap-4 group">
                       <Mail className="text-brand-secondary shrink-0" size={20} />
                       <p className="text-white/60 font-bold text-sm md:text-base break-all">a.khanphysioandkinetic@gmail.com</p>
                    </div>
                    <a href="https://wa.me/923084687707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:translate-x-1 transition-transform">
                       <MessageSquare className="text-brand-secondary" size={20} />
                       <p className="text-white/60 font-bold group-hover:text-brand-secondary transition-colors">WhatsApp: 0308-4687707</p>
                    </a>
                 </div>
             </div>

             {/* Column 4: Hours */}
             <div className="bg-white/5 rounded-soft p-8 border border-white/10 space-y-6">
                <h4 className="text-sm font-bold text-brand-secondary uppercase tracking-[0.2em] flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                   Clinic Hours
                </h4>
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60 font-bold">Mon - Sat</span>
                      <span className="text-white font-bold">3:00 PM - 10:00 PM</span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-white/60 font-bold">Sunday</span>
                      <span className="text-brand-secondary font-bold uppercase tracking-tighter">Emergency Only</span>
                   </div>
                </div>
                <button className="w-full bg-brand-secondary text-brand-primary py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg hover:bg-white transition-all active:scale-95">
                   Book Now
                </button>
             </div>
          </div>

          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-white/40 text-sm font-medium">© {new Date().getFullYear()} A-Khan Physiotherapy. All rights reserved.</p>
             <div className="flex gap-10 text-white/40 text-sm font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
