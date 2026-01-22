"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Clock, User, Phone, ArrowRight, ShieldCheck, HeartPulse, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slots = [
  "09:00 AM", "10:30 AM", "12:00 PM",
  "02:00 PM", "03:30 PM", "05:00 PM", "06:30 PM"
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [time, setTime] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!time) return alert("Please select a clinical time window.");
    
    setLoading(true);
    
    try {
        // Collect form data
        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            patientName: (e.target as HTMLFormElement).querySelector('input[type="text"]')?.value,
            phone: (e.target as HTMLFormElement).querySelector('input[type="tel"]')?.value,
            date: (e.target as HTMLFormElement).querySelector('input[type="date"]')?.value,
            service: (e.target as HTMLFormElement).querySelector('select')?.value,
            time: time
        };

        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setDone(true);
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Booking error:", error);
        alert("Failed to submit booking.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="booking" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)] overflow-hidden border border-slate-100">
            
            {/* Left Detail Panel - Midnight */}
            <div className="lg:col-span-5 bg-brand-primary p-12 md:p-20 text-white relative flex flex-col justify-between">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(197,160,89,0.1)_0%,transparent_70%)]" />
               
               <div className="relative z-10 space-y-12">
                  <div className="header-chip !bg-white/10 !text-brand-secondary !border-white/10">
                    Clinical Portal
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white">Secure Your Clinical Evaluation.</h2>
                    <p className="text-white/60 font-medium leading-relaxed text-lg">
                      LHR's premier physiotherapy specialists are ready to guide your recovery journey.
                    </p>
                  </div>

                  <div className="space-y-10 pt-10">
                     {[
                       { icon: HeartPulse, title: "Elite Protocols", desc: "Evidence-Based Care" },
                       { icon: Clock, title: "Zero Lag", desc: "Instant Confirmation" },
                       { icon: ShieldCheck, title: "Data Safety", desc: "Encoded Health Records" }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-6 items-center">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary shrink-0">
                             <item.icon size={28} />
                          </div>
                          <div>
                             <p className="font-black text-white text-lg leading-none mb-1">{item.title}</p>
                             <p className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest">{item.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               <div className="relative z-10 pt-16 border-t border-white/5">
                  <p className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em] leading-relaxed">
                     Emergency Hotline <br />
                     <span className="text-white text-lg font-bold tracking-normal">0315-4289654</span>
                  </p>
               </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-7 p-12 md:p-20 bg-white relative">
               <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center space-y-10"
                    >
                       <div className="w-24 h-24 bg-brand-secondary/10 text-brand-primary rounded-full flex items-center justify-center shadow-xl">
                          <CheckCircle2 size={56} className="text-brand-secondary" />
                       </div>
                       <div className="space-y-4">
                         <h3 className="text-4xl font-bold text-brand-primary">Request Logged!</h3>
                         <p className="text-slate-500 font-medium max-w-xs mx-auto text-lg">
                            Our clinical coordinator will contact you via WhatsApp shortly to finalize your schedule.
                         </p>
                       </div>
                       <button 
                        onClick={() => setDone(false)}
                        className="btn-secondary !border-slate-200 !text-slate-500 hover:!border-brand-primary"
                       >
                         Book Another Session
                       </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={submit} 
                      className="space-y-10"
                    >
                      <div className="space-y-4">
                         <div className="header-chip !bg-brand-primary/5">Patient Intake</div>
                         <h2 className="text-3xl font-bold text-brand-primary tracking-tight">Reserve Appointment</h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative">
                               <User className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-secondary" size={18} />
                               <input required type="text" placeholder="Dr. Abdullah" className="w-full bg-slate-50 border-2 border-slate-50 rounded-soft py-5 pl-14 pr-6 text-brand-primary font-bold text-sm focus:border-brand-secondary outline-none transition-all" />
                            </div>
                         </div>
                         <div className="space-y-3">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp contact</label>
                            <div className="relative">
                               <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-secondary" size={18} />
                               <input required type="tel" placeholder="+92 XXX XXXXXXX" className="w-full bg-slate-50 border-2 border-slate-50 rounded-soft py-5 pl-14 pr-6 text-brand-primary font-bold text-sm focus:border-brand-secondary outline-none transition-all" />
                            </div>
                         </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Preference Date</label>
                            <input required type="date" className="w-full bg-slate-50 border-2 border-slate-50 rounded-soft p-5 text-brand-primary font-bold text-sm focus:border-brand-secondary outline-none transition-all" />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Clinical Need</label>
                            <select className="w-full bg-slate-50 border-2 border-slate-50 rounded-soft p-5 text-brand-primary font-bold text-sm focus:border-brand-secondary outline-none transition-all appearance-none cursor-pointer">
                               <option>Physiotherapy Rehab</option>
                               <option>Chiropractic Screen</option>
                               <option>Sports Injury Fix</option>
                               <option>Acupuncture Session</option>
                            </select>
                         </div>
                      </div>

                      <div className="space-y-5">
                         <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Time Window</label>
                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {slots.map(s => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => setTime(s)}
                                className={cn(
                                  "py-4 rounded-xl text-[10px] font-black transition-all duration-300 border-2 uppercase tracking-tighter",
                                  time === s 
                                    ? "bg-brand-primary border-brand-primary text-brand-secondary shadow-lg scale-105" 
                                    : "bg-white border-slate-100 text-slate-500 hover:border-brand-secondary hover:text-brand-primary"
                                )}
                              >
                                {s}
                              </button>
                            ))}
                         </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-primary hover:bg-brand-accent text-brand-secondary font-black py-6 rounded-soft shadow-2xl transition-all flex items-center justify-center gap-4 text-[13px] uppercase tracking-widest active:scale-[0.98]"
                      >
                         {loading ? "Registering..." : (
                           <>
                             Initialize Clinical Session
                             <ChevronRight size={20} />
                           </>
                         )}
                      </button>
                    </motion.form>
                  )}
               </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
