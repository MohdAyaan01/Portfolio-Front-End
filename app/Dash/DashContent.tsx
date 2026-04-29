'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Zap, Plus, Download, LayoutGrid, Globe, FileText, User, Share2, Bot, X, Send, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { workspaceApps, communityApps } from './data';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';

type Stats = {
    docs: number,
    users: number,
    shares: number
};

type ProjectCardProps = {
    title: string;
    type: 'Workspace' | 'Community';
    date: string;
    image: string;
    stats: Stats;
    isPremium?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, type, date, image, stats, isPremium }) => (
    <motion.div
        whileHover={{ y: -8 }}
        className="group relative bg-[#121212]/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-teal-500/40 transition-all duration-500 shadow-2xl"
    >
        <Link href="/Dash" className="absolute inset-0 z-10" aria-label="View Dashboard"></Link>
        {/* Card Image & Hover Overlay */}
        <div className="aspect-video relative overflow-hidden bg-zinc-900">
            <img
                src={image}
                alt=""
                onError={(e) => e.currentTarget.style.opacity = '0'}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Interactive Hover Buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <button className="px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[11px] font-bold text-white hover:bg-white/20 transition shadow-xl">
                    Live Preview
                </button>
                <button className="px-5 py-2.5 bg-teal-500 text-black rounded-full text-[11px] font-bold hover:scale-105 active:scale-95 transition shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                    Use Template
                </button>
            </div>

            {/* Desktop Badge */}
            <div className={`absolute top-4 left-4 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[9px] font-bold uppercase tracking-widest ${isPremium ? 'text-teal-400' : 'text-emerald-400'}`}>
                {isPremium ? 'Premium Demo' : 'Free'}
            </div>
        </div>

        {/* Card Details */}
        <div className="p-5 flex items-center justify-between border-t border-white/[0.03] bg-white/[0.01]">
            <div className="flex items-center gap-3.5">
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center text-[11px] font-extrabold ${type === 'Workspace' ? 'bg-teal-500/10 text-teal-400' : 'bg-indigo-500/10 text-indigo-400'} border border-white/5 shadow-inner`}>
                    {title.charAt(0)}
                </div>
                <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-white group-hover:text-teal-400 transition-colors uppercase tracking-tight">{title}</span>
                    <div className="flex items-center gap-2 mt-1.5 grayscale group-hover:grayscale-0 transition-all">
                        <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-bold">
                            <FileText size={10} className="text-teal-500/60" /> {stats.docs}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-bold">
                            <User size={10} className="text-indigo-500/60" /> {stats.users}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-bold">
                            <Share2 size={10} className="text-purple-500/60" /> {stats.shares}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest opacity-60">{date}</div>
        </div>
    </motion.div>
);

const DashboardContent = () => {
    const [activeTab, setActiveTab] = useState<'Workspace' | 'Community'>('Workspace');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [promptValue, setPromptValue] = useState("");
    const [aiInput, setAiInput] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(null);
    const [activeCategory, setActiveCategory] = useState('Featured');

    const [theme, setTheme] = useState({
        primaryColor: '#14b8a6', // Default Teal
        accentColor: '#6366f1',  // Default Indigo
        fontFamily: 'sans'
    });

    const [editableContent, setEditableContent] = useState<any>(null);

    const categories = ["Featured", "New"];
    const [history, setHistory] = useState<any[]>([]);
    useEffect(() => {
        const FetchUser = async () => {
            const StoredUser = localStorage.getItem('user');
            const Token = localStorage.getItem('token');
            if (!StoredUser || StoredUser === 'undefined') {
                try {
                    const res = await axios.get("http://localhost:5000/api/auth/user/me", {
                        headers: {
                            Authorization: `Bearer ${Token}`
                        }
                    })
                    if (res.data.success) {
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        FetchHistory(res.data.user._id)
                    }
                } catch (err) {
                    console.error("Failed To Fetch User Porfoile", err);
                }
            }
        }
        const FetchHistory = async (userId?:string) => {
            const user = userId ? { _id: userId } : JSON.parse(localStorage.getItem('user') || "{}");
            const Token = localStorage.getItem('token');
            console.log("Current User For History", user);
            if (user?._id) {
                try {
                    const res = await axios.get(`http://localhost:5000/api/auth/user/history/${user._id}`, {
                        headers: {
                            Authorization: `Bearer ${Token}`
                        }
                    })
                    setHistory(res.data);
                } catch (err) {
                    console.error("Failed To Fetch History", err);
                }
            }
        }
        FetchUser();
        FetchHistory();
    }, [])

    const handleApplyPrompt = () => {
        setPromptValue(aiInput);
        setIsChatOpen(false);
    };


    const handleGenerate = async () => {
        // 1. Check for token BEFORE doing anything
        const token = localStorage.getItem('token');
        if (!token || token === 'undefined') {
            toast.error("Your session has expired. Redirecting to Login...");
            setTimeout(() => window.location.href = '/Login', 2000);
            return;
        }

        setLoading(true);
        const userStr = localStorage.getItem('user');
        const user = userStr ? JSON.parse(userStr) : null;
        const formData = new FormData();
        if (file) formData.append("resume", file);
        formData.append("prompt", promptValue);
        formData.append("style", activeTab);
        formData.append("userId", user?._id || "");


        try {
            const response = await axios.post("http://localhost:5000/api/portfolio/generate", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setResult(response.data);
            setEditableContent(response.data);
            setHistory((prev: any) => [response.data, ...prev]);
            toast.success("Portfolio Generated Successfully!");
        } catch (error:any){
           toast.error("Generation Failed. Try Again Later")
        } finally {
            setLoading(false);
        }
    };
    return (
        <main className="ml-24 pt-28 px-10 pb-20 min-h-screen bg-[#050505] relative overflow-hidden">
            {/* Hidden File Input */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                accept=".pdf,.doc,.docx"
            />

            <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-indigo-600/[0.03] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-teal-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

            {/* AI Chat Window */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-32 right-12 w-96 z-50 overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/80 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-teal-500 text-black rounded-full flex items-center justify-center">
                                    <Bot size={18} />
                                </div>
                                <span className="font-bold text-sm text-white">AI Assistant</span>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="text-zinc-500 hover:text-white transition">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Generate Your Vision</p>
                                <textarea
                                    value={aiInput}
                                    onChange={(e) => setAiInput(e.target.value)}
                                    placeholder="e.g., Create a minimalist portfolio for a full-stack developer with dark mode and neon accents..."
                                    className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-xs font-medium text-white placeholder:text-zinc-600 focus:outline-none focus:border-teal-500/50 transition-all resize-none shadow-inner"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button className="flex-1 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-[10px] font-bold text-white hover:bg-white/10 transition uppercase tracking-widest group">
                                    <Wand2 size={14} className="text-teal-400 group-hover:scale-110 transition" />
                                    Magic Help
                                </button>
                                <button
                                    onClick={handleApplyPrompt}
                                    className="flex-1 h-12 bg-teal-500 text-black rounded-xl flex items-center justify-center gap-2 text-[10px] font-bold hover:scale-105 active:scale-95 transition shadow-lg shadow-teal-500/20 uppercase tracking-widest"
                                >
                                    <Send size={14} />
                                    Apply
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-col items-center text-center mb-16 relative z-10 transition-all">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                    Make Your Portfolio. <span className="bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">More Professional.</span>
                </h1>
                <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase">Powered By Pro Folio X.</p>

                <div className="mt-12 w-full max-w-2xl relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/30 to-purple-500/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-4 pl-8 flex items-center justify-between shadow-2xl">
                        <input
                            type="text"
                            value={promptValue}
                            onChange={(e) => setPromptValue(e.target.value)}
                            placeholder="Describe Your Portfolio..."
                            className="bg-transparent border-none outline-none text-zinc-300 text-sm w-full placeholder:text-zinc-600"
                        />
                        <div className="flex items-center gap-4 text-zinc-500 border-l border-white/5 pl-4 ml-2">
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className={`flex items-center gap-1.5 transition group ${file ? 'text-teal-400' : 'hover:text-teal-400'}`}
                            >
                                <FileText size={16} className={file ? 'scale-110' : 'group-hover:scale-110 transition-transform'} />
                                <span className={`text-[10px] font-extrabold uppercase tracking-widest transition-all ${file ? 'inline' : 'hidden group-hover:inline'}`}>
                                    {file ? file.name.split('.')[0].slice(0, 8) + '..' : 'Resume'}
                                </span>
                            </button>
                            <Plus size={18} className="hover:text-white transition cursor-pointer" />
                            <button
                                onClick={handleGenerate}
                                disabled={loading}
                                className="w-10 h-10 bg-teal-500 text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition shadow-lg shadow-teal-500/20 cursor-pointer disabled:opacity-50"
                            >
                                {loading ? (
                                    <Sparkles size={18} className="animate-spin" />
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            {result && (
                <div className="mt-12 mb-20 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                    <div className="flex items-center gap-2 mb-6 text-teal-400">
                        <Zap size={14} className="fill-teal-400" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Generated Preview</span>
                    </div>

                    <div className="bg-zinc-900/40 backdrop-blur-xl p-4 rounded-3xl border border-white/5 mb-8 flex items-center gap-8">
                        <div className="flex items-center gap-4 pl-2">
                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Theme Color</span>
                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={theme.primaryColor}
                                    onChange={(e) => setTheme({ ...theme, primaryColor: e.target.value })}
                                    className="w-8 h-8 bg-transparent border-none cursor-pointer rounded-lg overflow-hidden"
                                />
                                <span className="text-[10px] font-mono text-zinc-400 uppercase">{theme.primaryColor}</span>
                            </div>
                        </div>
                        <div className="h-4 w-px bg-white/10" />
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Font</span>
                            <select
                                value={theme.fontFamily}
                                onChange={(e) => setTheme({ ...theme, fontFamily: e.target.value })}
                                className="bg-zinc-800 text-white text-xs border border-white/10 rounded-lg px-3 py-1 outline-none cursor-pointer"
                            >
                                <option value="sans">Modern (Sans)</option>
                                <option value="serif">Classic (Serif)</option>
                                <option value="mono">Terminal (Mono)</option>
                            </select>
                        </div>
                    </div>

                    <div
                        className="bg-[#0C0C0C]/90 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden shadow-2xl"
                        style={{ fontFamily: theme.fontFamily === 'mono' ? 'monospace' : theme.fontFamily === 'serif' ? 'Georgia, serif' : 'system-ui, sans-serif' }}
                    >
                        {/* Ambient Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] rounded-full pointer-events-none opacity-20" style={{ backgroundColor: theme.primaryColor }} />

                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-1.5 opacity-50" style={{ backgroundColor: theme.primaryColor, boxShadow: `0 0 20px ${theme.primaryColor}` }} />

                        <div className="relative z-10 flex flex-col xl:flex-row gap-12">
                            {/* Left Column: Bio & Skills */}
                            <div className="flex-1 space-y-10">
                                <div>
                                    <input
                                        value={editableContent?.name || ""}
                                        onChange={(e) => setEditableContent({ ...editableContent, name: e.target.value })}
                                        className="text-5xl md:text-6xl font-black bg-transparent text-white placeholder:text-zinc-700 outline-none border-b border-white/0 hover:border-white/10 focus:border-white/20 transition-all w-full mb-6 py-2"
                                        placeholder="Your Name"
                                    />

                                    <textarea
                                        value={editableContent?.bio || ""}
                                        onChange={(e) => setEditableContent({ ...editableContent, bio: e.target.value })}
                                        className="text-zinc-300 text-lg leading-relaxed bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/5 outline-none w-full resize-none lg:h-48 scrollbar-hide hover:border-white/10 focus:border-white/20 transition-all font-medium"
                                        placeholder="Write an impactful bio highlighting your journey..."
                                    />
                                </div>

                                {/* Skills */}
                                {editableContent?.skills && (
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                                                <Zap size={14} style={{ color: theme.primaryColor }} />
                                            </div>
                                            <p className="text-xs font-black text-white uppercase tracking-widest">Core Skills</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {(Object.values(editableContent.skills) as string[][]).flat().map((skill: string, i: number) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 rounded-xl text-[11px] font-bold border outline-none bg-white/5 hover:bg-white/10 transition-colors"
                                                    style={{ color: theme.primaryColor, borderColor: 'rgba(255,255,255,0.05)' }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Projects */}
                            {editableContent?.projects && (
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                                            <FileText size={14} style={{ color: theme.primaryColor }} />
                                        </div>
                                        <p className="text-xs font-black text-white uppercase tracking-widest">Featured Projects</p>
                                    </div>
                                    <div className="space-y-4">
                                        {(editableContent.projects as Array<{ title: string; description: string }>).map((project, i: number) => (
                                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 hover:border-white/10 transition-all group">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: theme.primaryColor, boxShadow: `0 0 12px ${theme.primaryColor}` }} />
                                                    <input
                                                        value={project.title}
                                                        onChange={(e) => {
                                                            const updated = [...editableContent.projects];
                                                            updated[i] = { ...updated[i], title: e.target.value };
                                                            setEditableContent({ ...editableContent, projects: updated });
                                                        }}
                                                        className="bg-transparent font-bold text-white outline-none w-full text-lg placeholder:text-zinc-600 transition-colors"
                                                        placeholder="Project Name"
                                                    />
                                                </div>
                                                <textarea
                                                    value={project.description}
                                                    onChange={(e) => {
                                                        const updated = [...editableContent.projects];
                                                        updated[i] = { ...updated[i], description: e.target.value };
                                                        setEditableContent({ ...editableContent, projects: updated });
                                                    }}
                                                    className="bg-transparent text-zinc-400 text-sm leading-relaxed outline-none w-full resize-none scrollbar-hide h-20"
                                                    placeholder="Describe the problem you solved, the tech stack, and your impact."
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="animate-pulse w-3 h-3 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
                                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Generation Complete</span>
                            </div>
                            <button className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2 group text-white shadow-xl">
                                Publish to Web
                                <Wand2 size={14} className="group-hover:scale-110 transition-transform" style={{ color: theme.primaryColor }} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-2 p-1 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/5">
                    <button
                        onClick={() => setActiveTab('Workspace')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all ${activeTab === 'Workspace' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        <div className="w-5 h-5 bg-teal-500/10 rounded-lg flex items-center justify-center p-0.5">
                            <LayoutGrid size={12} className={activeTab === 'Workspace' ? 'text-teal-400' : 'text-zinc-500'} />
                        </div>
                        Projects
                        <span className="ml-1 px-1.5 py-0.5 bg-zinc-700/50 rounded-md text-[9px] text-zinc-400">{workspaceApps.length}/3</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('Community')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all ${activeTab === 'Community' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                        <Globe size={13} className={activeTab === 'Community' ? 'text-purple-400' : 'text-zinc-500'} />
                        Templates
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className={`w-10 h-10 bg-zinc-900/50 border border-white/10 rounded-full flex items-center justify-center transition group ${isChatOpen ? 'text-teal-400 border-teal-500/40' : 'text-zinc-400 hover:text-white'}`}
                    >
                        <Bot size={16} className={`${isChatOpen ? 'scale-110' : ''} transition`} />
                    </button>
                    <button className="w-10 h-10 bg-zinc-900/50 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition group">
                        <Zap size={16} className="group-hover:fill-yellow-500/20 group-hover:text-yellow-500" />
                    </button>
                    <button className="w-10 h-10 bg-zinc-900/50 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition">
                        <Download size={16} />
                    </button>
                    <button className="w-10 h-10 bg-zinc-900/50 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition">
                        <Plus size={18} />
                    </button>
                </div>
            </div>

            {activeTab === 'Community' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mb-8 overflow-x-auto hide-scrollbar pb-2"
                >
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-4 py-1.5 rounded-full text-[11px] font-bold border transition-all whitespace-nowrap ${i === 0 ? 'bg-zinc-100 text-black border-white' : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/30'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>
            )}

            <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 relative z-10"
            >
                {(activeTab === 'Workspace' ? history : communityApps).map((portfolio, index) => (
                    <ProjectCard
                        key={index}
                        title={portfolio.title || portfolio.content?.fullName || "Untitled Portfolio"}
                        type={activeTab}
                        date={portfolio.createdAt ? new Date(portfolio.createdAt).toDateString(): "Today"}
                        image={portfolio.image || "https://placeholder.com/image.png"}
                        stats={{ docs: 0, users: 0,shares:0 }}
                      
                    />
                ))}
            </motion.div>
        </main>
    );
};

export default DashboardContent;
