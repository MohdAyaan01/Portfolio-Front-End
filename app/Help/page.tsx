"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, MessageSquare, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setSubmitting(false);
            alert("Your message has been sent to our team.");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#09090B] text-[#E0E0E0] flex flex-col items-center justify-center px-6 py-20 font-sans">
            {/* Back Button */}
            <Link
                href="/Dash"
                className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-rose-500 transition-colors font-bold text-[10px] uppercase tracking-widest group bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/5 hover:border-rose-500/20"
            >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </Link>

            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-xl relative"
            >
                {/* Branding Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/10 to-rose-900/20 rounded-[2.5rem] blur-xl" />

                <div className="relative bg-[#09090B]/60 backdrop-blur-3xl border border-zinc-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col items-center text-center mb-10">
                        <div className="w-16 h-16 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                            <Sparkles className="text-rose-500" size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">How can we help?</h1>
                        <p className="text-zinc-500 text-sm font-medium">Send us a message and we'll get back to you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                            <input
                                type="email"
                                required
                                placeholder="name@example.com"
                                className="w-full h-14 bg-[#18181B] border border-zinc-800/80 rounded-2xl px-6 text-sm font-medium focus:outline-none focus:border-rose-500/50 hover:border-zinc-700 transition-all placeholder:text-zinc-600 shadow-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                            <textarea
                                required
                                rows={5}
                                placeholder="Describe your issue or question..."
                                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-2xl p-6 text-sm font-medium focus:outline-none focus:border-rose-500/50 hover:border-zinc-700 transition-all placeholder:text-zinc-600 resize-none shadow-sm"
                            />
                        </div>

                        <button
                            disabled={submitting}
                            className="w-full h-14 bg-[#F81156] hover:bg-[#E00F4E] text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale shadow-[0_0_20px_rgba(248,17,86,0.3)]"
                        >
                            {submitting ? (
                                <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                            <MessageSquare size={14} className="text-zinc-400" />
                            Support is active 24/7
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
