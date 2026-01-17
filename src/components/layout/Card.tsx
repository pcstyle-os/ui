"use client";

import React from "react";
import { useUI } from "../../provider";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "outline";
}

export function Card({ 
  children, 
  className = "", 
  variant = "default" 
}: CardProps) {
  const { theme } = useUI();
  const isCyber = theme === "cyber";
  
  const baseStyles = "relative p-6 overflow-hidden transition-all";
  
  const cyberStyles = {
    default: "bg-black/80 border border-[#ff00ff]/20 text-gray-300",
    glass: "bg-black/40 backdrop-blur-xl border border-[#ff00ff]/10 shadow-[0_0_30px_rgba(255,0,255,0.05)]",
    outline: "bg-transparent border border-[#ff00ff]/20",
  };
  
  const minimalStyles = {
    default: "bg-white border border-zinc-100 shadow-sm text-zinc-900 rounded-lg",
    glass: "bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-xl",
    outline: "bg-transparent border border-zinc-200 rounded-lg",
  };
  
  const currentStyles = isCyber ? cyberStyles[variant] : minimalStyles[variant];
  
  return (
    <div className={`${baseStyles} ${currentStyles} ${className}`}>
      {isCyber && variant !== "outline" && (
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff00ff]/20 to-transparent" />
      )}
      {children}
    </div>
  );
}
