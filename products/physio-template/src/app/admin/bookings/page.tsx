"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Phone, Mail, User, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react";

interface Booking {
  id: string;
  patientName: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status: string;
  createdAt: string;
}

export default function AdminBookings() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check authentication
    const auth = sessionStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin");
      return;
    }
    setIsAuthenticated(true);
    fetchBookings();
  }, [router]);

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings');
      const data = await response.json();
      
      if (response.ok) {
        setBookings(data.bookings);
      } else {
        setError(data.error || 'Failed to fetch bookings');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-primary via-brand-accent to-brand-primary flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-16 h-16 text-brand-secondary animate-spin mx-auto" />
          <p className="text-white text-xl font-bold">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4">
      <div className="container-custom max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
            <CheckCircle size={16} />
            Admin Dashboard
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary tracking-tighter mb-4">
            Patient <span className="text-brand-secondary">Bookings</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            Total Appointments: <span className="text-brand-primary font-bold">{bookings.length}</span>
          </p>
        </motion.div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-8 flex items-center gap-4">
            <XCircle className="text-red-500" size={24} />
            <p className="text-red-700 font-bold">{error}</p>
          </div>
        )}

        {/* Bookings Grid */}
        {bookings.length === 0 ? (
          <div className="text-center py-20">
            <Calendar className="w-24 h-24 text-slate-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-400 mb-2">No Bookings Yet</h3>
            <p className="text-slate-500">Patient appointments will appear here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-[2rem] border-2 border-slate-100 p-8 shadow-lg hover:shadow-2xl hover:border-brand-secondary transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                    <User size={28} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    #{booking.id.slice(0, 8)}
                  </span>
                </div>

                {/* Patient Info */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl font-bold text-brand-primary tracking-tight">{booking.patientName}</h3>
                  
                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone size={16} className="text-brand-secondary" />
                    <span className="font-bold text-sm">{booking.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={16} className="text-brand-secondary" />
                    <span className="font-medium text-sm">{booking.service}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar size={16} className="text-brand-secondary" />
                    <span className="font-bold text-sm">{new Date(booking.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock size={16} className="text-brand-secondary" />
                    <span className="font-bold text-sm">{booking.time}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Status</span>
                    <span className="text-xs font-bold text-orange-500">{booking.status}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
