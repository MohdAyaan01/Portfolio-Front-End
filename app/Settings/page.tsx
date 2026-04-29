"use client";

import React, { useState } from "react";
import {
    User,
    CreditCard,
    Activity,
    Gift,
    Blocks,
    Bell,
    Archive,
    LayoutGrid,
    ChevronRight,
    Menu,
    Lightbulb,
    ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("Password");

    const sidebarItems = [
        { name: "General", icon: User, active: true },
        { name: "Plans", icon: Activity, active: false },
        { name: "Usage & Billing", icon: CreditCard, active: false },

    ]
    const contentTabs = [
        "Account",
        "Password",
        "Connected Accounts",
    ];

    return (

        <div className="min-h-screen bg-[#09090B] text-zinc-300 flex font-sans overflow-hidden">

            {/* Back Button */}
            {/* Background Pink/Red Glow effect (Left side) */}
            <div className="fixed top-[20%] left-[-15%] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="fixed top-[60%] right-[-10%] w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Sidebar */}
            <aside className="w-64 border-r border-zinc-800/50 bg-[#09090B]/95 backdrop-blur-xl flex-shrink-0 flex flex-col relative z-10 hidden md:flex">
                {/* Top Branding / Breadcrumb */}
                <div className="h-[100px] flex flex-col justify-center px-4 border-b border-zinc-800/50 gap-4">
                    <Link
                        href="/Dash"
                        className="flex items-center gap-2 text-zinc-500 hover:text-teal-400 transition-colors font-bold text-[10px] uppercase tracking-widest group bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/5 hover:border-teal-500/20"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Dashboard
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                            {/* Simple logo placeholder */}
                            <div className="w-3 h-3 bg-black rounded-sm" />
                        </div>
                        <span className="text-sm font-medium text-white/80">Settings</span>
                    </div>
                </div>

                {/* Sidebar Links */}
                <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {sidebarItems.map((item, index) => (
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            key={item.name}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${item.active
                                ? "bg-zinc-800/80 text-white font-medium"
                                : "text-zinc-500 hover:bg-zinc-800/50 hover:text-white"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className="w-4 h-4" />
                                {item.name}
                            </div>
                        </motion.button>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="pt-6 pb-2 px-3"
                    >
                        <span className="text-xs font-semibold text-zinc-500 tracking-wider">
                            WORKSPACE SETTINGS
                        </span>
                    </motion.div>


                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col relative z-10 overflow-y-auto w-full">
                {/* Mobile Header */}
                <div className="h-14 flex items-center px-4 border-b border-zinc-800/50 md:hidden bg-[#09090B]">
                    <button className="text-white/60 hover:text-white">
                        <Menu className="w-5 h-5" />
                    </button>
                    <span className="ml-3 text-sm font-medium">Settings</span>
                </div>

                {/* Content Area Container */}
                <div className="flex-1 p-6 lg:p-10 max-w-4xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">General</h1>
                        <p className="text-sm text-zinc-400">
                            Manage passwords, two-factor authentication, and API access tokens.{" "}
                            <a href="#" className="text-rose-500 hover:text-rose-400 transition-colors font-medium">
                                Learn more.
                            </a>
                        </p>
                    </div>

                    {/* Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-1 sm:gap-4 mb-8 border-b border-zinc-800/80 pb-4"
                    >
                        {contentTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`Relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab
                                    ? "bg-zinc-800 text-white"
                                    : "text-zinc-500 hover:text-white hover:bg-zinc-800/50"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Change Password Section */}

                            {activeTab === "Password" && (
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-lg font-semibold text-white mb-4">Change Password</h2>
                                    </div>

                                    <div className="space-y-5 max-w-md">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                                                CURRENT PASSWORD
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="Current Password"
                                                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 hover:border-zinc-700 focus:bg-zinc-900 focus:outline-none focus:border-rose-500/50 transition-all shadow-sm"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                                                NEW PASSWORD
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="New Password"
                                                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 hover:border-zinc-700 focus:bg-zinc-900 focus:outline-none focus:border-rose-500/50 transition-all shadow-sm"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                                                CONFIRM PASSWORD
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 hover:border-zinc-700 focus:bg-zinc-900 focus:outline-none focus:border-rose-500/50 transition-all shadow-sm"
                                            />
                                        </div>

                                        <button className="bg-[#F81156] hover:bg-[#E00F4E] text-white px-8 py-3 rounded-xl text-sm font-bold transition-colors shadow-[0_0_20px_rgba(248,17,86,0.3)] active:scale-[0.98]">
                                            Update
                                        </button>

                                    </div>
                                </div>
                            )}

                            {activeTab === "Account" && (
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-lg font-semibold text-white mb-4">Account Settings</h2>
                                        <p className="text-sm text-zinc-500">Manage your profile and fundamental account details here.</p>
                                    </div>
                                    <div className="space-y-5 max-w-md">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                                                EMAIL ADDRESS
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 hover:border-zinc-700 focus:bg-zinc-900 focus:outline-none focus:border-rose-500/50 transition-all shadow-sm"
                                            />
                                        </div>
                                        <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-lg active:scale-[0.98]">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeTab === "Connected Accounts" && (
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-lg font-semibold text-white mb-4">Connected Accounts</h2>
                                        <p className="text-sm text-zinc-500">Manage your connected providers like Google or GitHub.</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
