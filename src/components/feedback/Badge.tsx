"use client";

import React from "react";
import { useUI } from "../../provider";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const { theme } = useUI();
  const isCyber = theme === "cyber";
  
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest";
  
  const cyberStyles = {
    primary: "bg-[#ff00ff] text-black shadow-[0_0_10px_#ff00ff55]",
    secondary: "bg-[#00ffff] text-black shadow-[0_0_10px_#00ffff55]",
    outline: "bg-transparent border border-[#ff00ff]/40 text-[#ff00ff]",
  };
  
  const minimalStyles = {
    primary: "bg-black text-white rounded-full",
    secondary: "bg-zinc-100 text-zinc-800 rounded-full",
    outline: "bg-transparent border border-zinc-200 text-zinc-600 rounded-full",
  };
  
  const currentStyles = isCyber ? cyberStyles[variant] : minimalStyles[variant];
  
  return (
    <span className={`${baseStyles} ${currentStyles} ${className}`}>
      {children}
    </span>
  );
}
