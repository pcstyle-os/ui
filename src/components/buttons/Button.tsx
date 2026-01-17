"use client";

import React from "react";
import { useUI } from "../../provider";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant" | "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading,
  className = "",
  ...props
}: ButtonProps) {
  const { theme } = useUI();
  
  const isCyber = theme === "cyber";
  
  const baseStyles = "relative inline-flex items-center justify-center font-mono uppercase tracking-widest transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-[10px]",
    md: "px-6 py-2.5 text-[12px]",
    lg: "px-8 py-4 text-[14px]",
  };
  
  const cyberStyles = {
    primary: "bg-[#ff00ff] text-black font-black hover:shadow-[0_0_20px_#ff00ffaa] active:scale-95",
    secondary: "bg-[#00ffff] text-black font-black hover:shadow-[0_0_20px_#00ffffaa] active:scale-95",
    outline: "bg-transparent text-[#ff00ff] border border-[#ff00ff]/40 hover:border-[#ff00ff] hover:bg-[#ff00ff]/5",
    ghost: "bg-transparent text-[#ff00ff]/60 hover:text-[#ff00ff] hover:bg-[#ff00ff]/5",
  };
  
  const minimalStyles = {
    primary: "bg-black text-white hover:bg-zinc-800 active:scale-[0.98]",
    secondary: "bg-zinc-100 text-black hover:bg-zinc-200 active:scale-[0.98]",
    outline: "bg-transparent text-black border border-zinc-200 hover:border-black hover:bg-zinc-50",
    ghost: "bg-transparent text-zinc-500 hover:text-black hover:bg-zinc-50",
  };
  
  const currentStyles = isCyber ? cyberStyles[variant] : minimalStyles[variant];
  
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${currentStyles} ${className}`}
      disabled={loading || props.disabled}
      {...(props as any)}
    >
      {loading && (
        <span className="mr-2 animate-spin">◌</span>
      )}
      <span className="relative z-10">{children as React.ReactNode}</span>
      
      {isCyber && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
           {/* Cyber-specific hover effects like scanlines can be added here */}
        </div>
      )}
    </motion.button>
  );
}
