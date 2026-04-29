"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    if (name.trim()) {
      // In a real app, you might save this to React Context, Redux, or localStorage.
      sessionStorage.setItem("profoliox_name", name);
      router.push('/OnboardingTwo');
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0414] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Premium Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Logo Area */}
   <div className="absolute top-8 left-0 right-0 flex justify-center z-10">
  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
    
    {/* Logo */}
    <img
      src="MyLogo.jpeg"
      alt="ProFolioX Logo"
      className="w-10 h-10 object-contain"
    />

    {/* Text */}
    <h1 className="text-lg font-semibold text-white tracking-wide">
      Pro<span className="text-indigo-400">Folio</span>X
    </h1>

  </div>
</div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 w-full max-w-md px-6 flex flex-col items-center"
      >
        <h1 className="text-4xl font-bold mb-2">Make it yours!</h1>
        <p className="text-gray-400 mb-10 text-center">Let's start with the basics. What should we call you?</p>

        {/* Input Container */}
        <div className="w-full bg-[#1A1125] border border-white/5 rounded-2xl p-6 mb-10 shadow-2xl relative group focus-within:border-pink-500/50 transition-colors duration-300">
          <label className="text-xs text-gray-400 mb-2 block uppercase tracking-wider font-semibold">Your Name</label>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-focus-within:bg-pink-500/20 group-focus-within:text-pink-400 transition-colors duration-300">
              <User size={18} />
            </div>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="bg-transparent text-white w-full outline-none placeholder:text-gray-600 text-lg"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleContinue();
              }}
            />
          </div>
        </div>

        {/* Continue Button */}
        <button 
          onClick={handleContinue}
          disabled={!name.trim()}
          className="w-[200px] bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-pink-500/50"
        >
          Continue <ArrowRight size={18} />
        </button>

        {/* Progress Dots/Lines */}
        <div className="flex items-center gap-2 mt-12">
          <div className="w-8 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-pink-500/50" />
          <div className="w-8 h-1.5 rounded-full bg-white/10" />
        </div>
      </motion.div>
    </div>
  );
}
