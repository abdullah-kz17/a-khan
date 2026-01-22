"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check - you can change this password
    if (password === "akhan2026") {
      sessionStorage.setItem("adminAuth", "true");
      router.push("/admin/bookings");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary via-brand-accent to-brand-primary flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-2xl rounded-[3rem] border-2 border-white/20 p-12 shadow-2xl">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-brand-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Lock size={40} className="text-brand-primary" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-white/60 font-medium">Enter password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter admin password"
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border-2 border-white/20 text-white placeholder-white/40 font-bold focus:outline-none focus:border-brand-secondary transition-all"
              autoFocus
            />
            {error && (
              <p className="mt-3 text-red-300 text-sm font-bold">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-brand-secondary text-brand-primary py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white transition-all shadow-xl active:scale-95"
          >
            Access Dashboard
          </button>
        </form>

        <p className="mt-8 text-center text-white/40 text-xs font-medium">
          Default password: akhan2026
        </p>
      </div>
    </div>
  );
}
