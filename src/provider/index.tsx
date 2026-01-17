"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { colors, type ThemeMode } from "../theme/colors";

interface UIContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ 
  children, 
  initialTheme = "cyber" 
}: { 
  children: React.ReactNode;
  initialTheme?: ThemeMode;
}) {
  const [theme, setTheme] = useState<ThemeMode>(initialTheme);

  const toggleTheme = () => {
    setTheme(prev => prev === "cyber" ? "minimal" : "cyber");
  };

  // Sync with CSS variables if needed
  useEffect(() => {
    const root = document.documentElement;
    const currentColors = colors[theme];
    
    Object.entries(currentColors).forEach(([key, value]) => {
      root.style.setProperty(`--pc-${key}`, value);
    });
    
    root.setAttribute("data-pc-theme", theme);
  }, [theme]);

  return (
    <UIContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={`pcstyle-root pcstyle-theme-${theme}`}>
        {children}
      </div>
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}
