/**
 * PCSTYLE Color Palettes
 */

export const colors = {
  // Cyber Theme (Aggressive)
  cyber: {
    background: "#000000",
    foreground: "#ffffff",
    primary: "#ff00ff", // Neon Pink
    secondary: "#00ffff", // Cyan
    accent: "#ff00ff",
    muted: "#111111",
    border: "rgba(255, 0, 255, 0.2)",
    surface: "rgba(0, 0, 0, 0.95)",
    glow: "rgba(255, 0, 255, 0.4)",
    success: "#00ff00",
    error: "#ff0000",
    warning: "#ffff00",
  },
  
  // Minimal Theme (Clean/Modern)
  minimal: {
    background: "#ffffff",
    foreground: "#0a0a0a",
    primary: "#0a0a0a",
    secondary: "#666666",
    accent: "#000000",
    muted: "#f5f5f5",
    border: "#e5e5e5",
    surface: "#ffffff",
    glow: "rgba(0, 0, 0, 0.05)",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
  }
};

export type ThemeMode = "cyber" | "minimal";
