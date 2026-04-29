'use client'
import React from "react"
import Header from "../NavbarPage/page"
import { motion } from "framer-motion"
import { Zap, Paintbrush, Layers, Star, Users, Layout, Sparkles, MoveRight } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function About() {
    return (
        <div className="min-h-screen bg-[#0C0414] text-white relative overflow-hidden pb-20">
            <Header />

            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

            <div className="relative pt-32 px-4 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="max-w-3xl mb-20"
                >
                    <motion.div 
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-teal-400 uppercase tracking-widest mb-6"
                    >
                        <Sparkles size={12} fill="currentColor" />
                        Who We Are
                    </motion.div>
                    
                    <motion.h1 
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent leading-[1.1]"
                    >
                        Crafting Portfolios That <br />
                        <span className="text-white">Leave a Impression.</span>
                    </motion.h1>
                    
                    <motion.p 
                        variants={fadeInUp}
                        className="text-xl text-slate-400 leading-relaxed max-w-2xl"
                    >
                        We empower creators and professionals to showcase their work through AI-driven, 
                        high-performance portfolio sites. No code, no limits, just pure creativity.
                    </motion.p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    
                    {/* Left: Interactive Image/Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0C0C0C]">
                            <img
                                src="About.jpeg"
                                alt="About ProFolioX"
                                className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent" />
                            
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                                        <Sparkles size={20} className="text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">ProFolioX Studio</h4>
                                        <p className="text-xs text-slate-400 font-medium">Est. 2024 • Remote Workspace</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Features List */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div 
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={stagger}
                            className="space-y-8"
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white">
                                Why Choose <span className="text-teal-400">ProFolioX?</span>
                            </motion.h2>

                            {[
                                { 
                                    icon: <Zap size={24} />, 
                                    title: "Lightning Performance", 
                                    desc: "Optimized delivery for sub-second load times across all global regions.",
                                    color: "teal"
                                },
                                { 
                                    icon: <Paintbrush size={24} />, 
                                    title: "Premium Aesthetics", 
                                    desc: "Pixel-perfect designs curated by top-tier UI experts to make you stand out.",
                                    color: "purple"
                                },
                                { 
                                    icon: <Layers size={24} />, 
                                    title: "Seamless Integration", 
                                    desc: "Connect your existing tools, domains, and content effortlessly in minutes.",
                                    color: "indigo"
                                }
                            ].map((feature, i) => (
                                <motion.div 
                                    key={i}
                                    variants={fadeInUp}
                                    className="flex gap-6 group cursor-default"
                                >
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-all duration-300">
                                        <div className="text-slate-400 group-hover:text-teal-400 transition-colors duration-300">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed text-sm">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: "Active Users", value: "12,000+", icon: <Users size={20} /> },
                        { label: "Templates", value: "85+", icon: <Layout size={20} /> },
                        { label: "Satisfaction", value: "4.9/5", icon: <Star size={20} /> },
                        { label: "Pro Portfolios", value: "25k+", icon: <Sparkles size={20} /> },
                    ].map((stat, i) => (
                        <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-teal-500/50 transition-all duration-500">
                            <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA / Bottom Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 md:p-20 bg-gradient-to-br from-teal-500/10 to-purple-500/10 border border-white/10 rounded-[3.5rem] text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                        Join thousands of creators who have already built their professional identity with ProFolioX.
                    </p>
                    <button className="h-16 px-10 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 mx-auto hover:bg-teal-400 hover:text-black transition-all duration-300 hover:scale-105 active:scale-95">
                        Create Your Portfolio
                        <MoveRight size={20} />
                    </button>
                </motion.div>
            </div>
        </div>
    )
}