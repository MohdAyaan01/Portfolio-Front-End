"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, UserCircle, ArrowRight, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingTwo() {
  const [selectedFocus, setSelectedFocus] = useState<string | null>(null);
  const router = useRouter();

  const handleFinish = () => {
    if (selectedFocus) {
      // Save data, then redirect to dashboard
      sessionStorage.setItem("profoliox_focus", selectedFocus);
      // Let's redirect to Dashboard or Home
      router.push('/Dash'); // Assuming dashboard is the final dest
    }
  };

  const focusOptions = [
    {
      id: "work",
      icon: <Briefcase size={28} />,
      title: "For Work",
      description: "Professional portfolio, job seeking, and clients"
    },
    {
      id: "education",
      icon: <GraduationCap size={28} />,
      title: "For Education",
      description: "Student projects, university applications"
    },
    {
      id: "personal",
      icon: <UserCircle size={28} />,
      title: "For Personal Use",
      description: "Hobby projects, personal blog, side hustles"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0C0414] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Premium Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Logo Area */}
      <div className="absolute top-8 left-0 right-0 flex justify-center items-center z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-xl font-bold">P</span>
          </div>
          <span className="text-xl font-semibold tracking-wide">ProfolioX</span>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 w-full max-w-4xl px-6 flex flex-col items-center mt-12 mb-12"
      >
        <h1 className="text-4xl font-bold mb-2 text-center">Pick your focus</h1>
        <p className="text-gray-400 mb-10 text-center">How will you use ProfolioX? We'll tailor the experience.</p>

        {/* Options Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {focusOptions.map((option) => {
            const isSelected = selectedFocus === option.id;
            
            return (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedFocus(option.id)}
                className={`relative cursor-pointer rounded-2xl p-6 text-center flex flex-col items-center gap-4 transition-all duration-300 border backdrop-blur-sm ${
                  isSelected 
                    ? 'border-pink-500 bg-pink-500/10 shadow-[0_0_20px_var(--tw-shadow-color)] shadow-pink-500/20' 
                    : 'border-white/5 bg-[#1A1125]/80 hover:border-white/20 hover:bg-[#1A1125]'
                }`}
              >
                {/* Active Checkmark */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 ${isSelected ? 'bg-pink-500/20 text-pink-400' : 'bg-white/5 text-gray-400'}`}>
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{option.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{option.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Continue Button */}
        <button 
          onClick={handleFinish}
          disabled={!selectedFocus}
          className="w-[250px] bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-pink-500/50"
        >
          Go to Dashboard <ArrowRight size={18} />
        </button>

        {/* Progress Dots/Lines */}
        <div className="flex items-center gap-2 mt-12">
          <div className="w-8 h-1.5 rounded-full bg-white/20" />
          <div className="w-8 h-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-pink-500/50" />
        </div>
      </motion.div>
    </div>
  );
}
