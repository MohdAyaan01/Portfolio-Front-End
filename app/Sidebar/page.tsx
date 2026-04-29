'use client'
import React from "react"
import { Search, Users, Megaphone, HelpCircle, Settings } from "lucide-react"
import Link from "next/link"
interface SidebarItem{
    icon: React.ReactNode;
    label: string;
    href: string;
    primary?: boolean
}
const SidebarPage = () => {
    // I added 'primary: false' to these so the check on line 34 doesn't crash
    const items:SidebarItem[] = [
        { icon: <Search size={20} />, label: "Search", href: "/Search", primary: false },
        { icon: <Users size={20} />, label: "Team", href: "/Team", primary: false },
        { icon: <Megaphone size={20} />, label: "Updates", href: "/Updates", primary: false },
        { icon: <Settings size={20} />, label: "Settings", href: "/Settings", primary: false },
    ]

    return (
        <aside className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-50 max-md:hidden">
            <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-b from-teal-500/20 via-purple-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex flex-col gap-3 p-3 bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Link your Logo to Profile */}
                    <Link href="/Profile">
                        <div className="w-12 h-12 mb-2 rounded-full overflow-hidden border border-white/10 p-1 hover:scale-110 transition duration-300 cursor-pointer">
                            <img src="/MyLogo.jpeg" alt="Logo" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </Link>

                    {items.map((item, index) => (
                        <div key={index} className="relative group/item">
                            <Link href={item.href || "#"}>
                                <button
                                    className={`
                                        relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300
                                        ${item.primary ? 'bg-teal-500 text-black shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:scale-105 active:scale-95' : 'text-slate-400 hover:text-white hover:bg-white/5'}
                                    `}
                                >
                                    <span className="relative z-10">{item.icon}</span>
                                </button>
                            </Link>

                            <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-[11px] font-medium rounded-lg opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/5 shadow-xl">
                                {item.label}
                                <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-zinc-900 border-l border-b border-white/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 relative group/help">
                <Link href="/Help">
                    <button className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition shadow-lg hover:bg-white/10">
                        <HelpCircle size={20} />
                    </button>
                </Link>
                <div className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-zinc-900 text-white text-[11px] font-medium rounded-lg opacity-0 -translate-x-2 group-hover/help:opacity-100 group-hover/help:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/5">
                    Help & Support
                    <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-zinc-900 border-l border-b border-white/5" />
                </div>
            </div>
        </aside>
    )
}

export default SidebarPage
