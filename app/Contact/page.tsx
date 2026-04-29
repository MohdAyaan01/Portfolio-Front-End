'use client'
import React from "react"
import Header from "../NavbarPage/page"
import { Mail, MessageCircle, MapPin, Send, Twitter, Github, Linkedin, Sparkles } from "lucide-react"

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#0C0414] text-white relative overflow-hidden pb-20">
            <Header />

            {/* Background Decorations */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full point-events-none translate-x-1/2" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-600/10 blur-[150px] rounded-full point-events-none -translate-x-1/2" />

            <div className="relative pt-32 px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-teal-400 uppercase tracking-widest mb-6">
                        <Sparkles size={12} fill="currentColor" />
                        Get in touch
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                        Contact Us.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Have questions about our generator? Our team is here to help you build the perfect vision.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-8">
                            {[
                                { icon: <Mail size={24} />, title: "Email", value: "hello@profoliox.app", desc: "Support, legal, or inquiries." },
                                { icon: <MessageCircle size={24} />, title: "Chat", value: "Connect on Discord", desc: "Live community interaction." },
                                { icon: <MapPin size={24} />, title: "Studio", value: "Remote / Global", desc: "We build from all around the world." },
                            ].map((info, i) => (
                                <div key={i} className="flex gap-6 group hover:translate-x-2 transition duration-300">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-teal-500/50 transition shadow-lg shadow-black/50">
                                        <div className="text-teal-400 group-hover:scale-110 transition">{info.icon}</div>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">{info.title}</h3>
                                        <p className="text-lg font-semibold text-white mb-0.5">{info.value}</p>
                                        <p className="text-sm text-slate-400">{info.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="p-8 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-400">Socials</span>
                            <div className="flex gap-4">
                                {[Twitter, Github, Linkedin].map((Icon, i) => (
                                    <button key={i} className="p-3 bg-white/5 rounded-xl border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition text-slate-400 hover:text-white">
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="relative group">
                            {/* Form Border Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-teal-500/20 rounded-[3rem] blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                            
                            <form className="relative bg-[#0C0C0C] border border-white/10 p-10 md:p-12 rounded-[3rem] space-y-8 shadow-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Your name" 
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-teal-500/50 transition placeholder:text-slate-600 focus:bg-white/[0.08]"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Email Address</label>
                                        <input 
                                            type="email" 
                                            placeholder="Your email" 
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:border-teal-500/50 transition placeholder:text-slate-600 focus:bg-white/[0.08]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Message</label>
                                    <textarea 
                                        rows={5} 
                                        placeholder="Tell us about your project..." 
                                        className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-5 text-sm font-medium focus:outline-none focus:border-teal-500/50 transition placeholder:text-slate-600 focus:bg-white/[0.08] resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full h-16 bg-teal-500 hover:bg-teal-400 text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:scale-[1.01] active:scale-95 group"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                                </button>
                                
                                <p className="text-center text-xs text-slate-500">
                                    Estimated response time: Within 24 hours
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage