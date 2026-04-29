"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, CreditCard, Layout, Terminal, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';


type GuideStatus = 'CORE' | 'OPTIONAL' | 'PRO';

interface GuideStep {
    tag: string;
    chapter: string;
    title: string;
    status: GuideStatus;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const steps: GuideStep[] = [
    {
        tag: "Step 1",
        chapter: "Integration",
        title: "Connect Your Data",
        status: "CORE",
        description: "Link your GitHub, LinkedIn, or upload a raw resume. Our underlying AI will securely parse your history to extract your core achievements and skills automatically.",
        icon: <Layout className="text-rose-500" size={20} />,
        color: "rose"
    },
    {
        tag: "Step 2",
        chapter: "Design",
        title: "Choose a Framework",
        status: "CORE",
        description: "Select from our highly-optimized, premium templates. Whether you need a slick Minimalist dark theme or a vibrant Creative layout, lock in your starting point.",
        icon: <Sparkles className="text-amber-400" size={20} />,
        color: "amber"
    },
    {
        tag: "Step 3",
        chapter: "Generation",
        title: "Live Engine Building",
        status: "CORE",
        description: "Drop into the Live Studio and watch the engine dynamically generate your personalized portfolio. It instantly crafts your bio, structures your projects, and assigns skill levels.",
        icon: <Terminal className="text-purple-400" size={20} />,
        color: "purple"
    },
    {
        tag: "Step 4",
        chapter: "Deployment",
        title: "Deploy & Custom Domain",
        status: "PRO",
        description: "Attach your custom domain or utilize our blazing-fast native subdomains to instantly push your portfolio live to the global edge network.",
        icon: <Zap className="text-blue-400" size={20} />,
        color: "blue"
    }
];

interface GuideBadgeProps {
    status: GuideStatus
}

const GuideBadge = ({ status }: GuideBadgeProps) => {
    const styles: Record<GuideStatus, string> = {
        CORE: "bg-rose-500/10 text-rose-500 border-rose-500/20",
        OPTIONAL: "bg-amber-500/10 text-amber-500 border-amber-500/20",
        PRO: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    };
    return (
        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${styles[status]}`}>
            {status}
        </span>
    );
};

export default function GuidePage() {
    return (
        <div className="min-h-screen bg-[#09090B] text-zinc-100 font-sans selection:bg-rose-500/30 overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 py-24">
                {/* Header */}
                <header className="mb-24 text-center">
                    <Link
                        href="/Dash"
                        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-zinc-500 hover:text-rose-500 transition-colors font-bold text-[10px] uppercase tracking-widest group bg-white/5 w-fit px-4 py-2.5 rounded-full border border-white/5 hover:border-rose-500/20"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Dashboard
                    </Link>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
                    >
                        Project <span className="text-rose-500">Guide</span>
                    </motion.h1>
                    <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
                        A centralized manual on exactly how to train our AI engine, construct your layout, and deploy your professional portfolio live to the web.
                    </p>
                </header>

                {/* Timeline */}
                <div className="relative border-l border-zinc-900 ml-4 md:ml-0">
                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                key={index}
                                className="relative pl-12 md:pl-20"
                            >
                                {/* Node */}
                                <div className="absolute left-0 -translate-x-1/2 mt-1 w-4 h-4 bg-[#09090B] border-2 border-zinc-800 rounded-full z-10">
                                    <div className={`absolute inset-1 rounded-full ${step.status === 'CORE' ? 'bg-[#F81156] shadow-[0_0_15px_rgba(244,63,94,0.5)]' : 'bg-zinc-700'}`} />
                                </div>

                                {/* Content */}
                                <div className="group bg-[#09090b] border border-white/5 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:border-white/10 hover:shadow-2xl">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                                                {step.icon}
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-1">{step.chapter}</div>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-rose-500 transition-colors">{step.title}</h3>
                                            </div>
                                        </div>
                                        <GuideBadge status={step.status} />
                                    </div>

                                    <p className="text-zinc-500 leading-relaxed mb-10 text-lg">
                                        {step.description}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-zinc-900/50 pt-8">
                                        <div className="flex items-center gap-2 text-zinc-600">
                                            <Clock size={14} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">{step.tag}</span>
                                        </div>
                                        {step.status === 'CORE' ? (
                                            <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest">Required</span>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-1">
                                                    {[1, 2, 3].map(i => (
                                                        <div key={i} className="w-1 h-1 bg-zinc-800 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                                                    ))}
                                                </div>
                                                <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Optional</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Timeline Line Extension */}
                    <div className="absolute top-0 bottom-0 left-0 -translate-x-1/2 w-[1px] bg-gradient-to-b from-rose-500/50 via-zinc-900 to-transparent" />
                </div>

                {/* Footer Section */}
                <footer className="mt-40 text-center">
                    <div className="inline-block p-12 bg-zinc-900/40 border border-white/5 rounded-[40px] text-center backdrop-blur-xl">
                        <Shield className="mx-auto mb-6 text-rose-500" size={32} />
                        <h4 className="text-xl font-bold mb-4">Complete Integration</h4>
                        <p className="text-zinc-500 text-sm max-w-xs mx-auto leading-relaxed">
                            Following this guide ensures your portfolio is highly optimized and securely deployed.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
