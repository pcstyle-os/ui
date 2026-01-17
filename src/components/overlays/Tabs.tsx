"use client";

import React from "react";
import { useUI } from "../../provider";
import { motion } from "framer-motion";

interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className = "" }: TabsProps) {
  const { theme } = useUI();
  const isCyber = theme === "cyber";
  
  return (
    <div className={`flex gap-4 border-b ${isCyber ? "border-[#ff00ff]/20" : "border-zinc-100"} ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative pb-3 text-[10px] md:text-xs uppercase tracking-widest font-black transition-colors ${
              isActive 
                ? (isCyber ? "text-[#ff00ff]" : "text-black") 
                : (isCyber ? "text-zinc-700 hover:text-white" : "text-zinc-400 hover:text-zinc-600")
            }`}
          >
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className={`absolute bottom-0 left-0 right-0 h-[2px] ${isCyber ? "bg-[#ff00ff] shadow-[0_0_10px_#ff00ff]" : "bg-black"}`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
