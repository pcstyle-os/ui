/**
 * PCSTYLE Design Tokens
 */

export const tokens = {
  typography: {
    fontFamily: {
      mono: '"JetBrains Mono", "Fira Code", monospace',
      sans: 'Inter, system-ui, sans-serif',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
      black: "900",
    },
    letterSpacing: {
      tight: "-0.02em",
      normal: "0",
      wide: "0.1em",
      widest: "0.4em",
    }
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
  },
  radii: {
    none: "0",
    sm: "2px",
    md: "4px",
    lg: "8px",
    full: "9999px",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
  }
};
