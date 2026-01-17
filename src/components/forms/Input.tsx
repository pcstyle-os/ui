"use client";

import React from "react";
import { useUI } from "../../provider";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", ...props }: InputProps) {
  const { theme } = useUI();
  const isCyber = theme === "cyber";
  
  const baseStyles = "w-full font-mono transition-all outline-none disabled:opacity-50";
  
  const cyberStyles = "bg-black/80 border border-[#ff00ff]/20 text-[#ff00ff] placeholder-[#ff00ff]/30 focus:border-[#ff00ff] focus:shadow-[0_0_15px_#ff00ff33] px-4 py-3";
  
  const minimalStyles = "bg-white border border-zinc-200 text-black placeholder-zinc-400 focus:border-black rounded-lg px-4 py-2.5 shadow-sm";
  
  const currentStyles = isCyber ? cyberStyles : minimalStyles;
  
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className={`text-[10px] uppercase tracking-widest font-bold ${isCyber ? "text-[#ff00ff]/60" : "text-zinc-500"}`}>
          {label}
        </label>
      )}
      <input 
        className={`${baseStyles} ${currentStyles} ${className}`}
        {...props}
      />
      {error && (
        <span className={`text-[10px] uppercase tracking-widest font-black ${isCyber ? "text-[#ff0000]" : "text-red-500"}`}>
          ERROR_CODE: {error}
        </span>
      )}
    </div>
  );
}
