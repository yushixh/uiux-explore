import React from 'react';
"use client";
/*!
 * Halaska Kit v1.0: UX patterns & components for AI products
 * (c) Halaska · https://ui.halaska.com · MIT License
 * Single-file React kit: import { Button, Orb, PlanPreviewPattern } from "./halaska-kit"
 */
import { useState, useRef, useEffect, useCallback, createContext, useContext, Fragment } from "react";
const GLOBAL_STYLES = `
  @media (max-width: 719px) { html, body { overflow-x: hidden; } }
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');

@keyframes halaska-blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
@keyframes halaska-spin { to { transform: rotate(360deg) } }
@keyframes halaska-shimmer { 0% { background-position: 200% 0 } 100% { background-position: -200% 0 } }
@keyframes halaska-fade-in { from { opacity: 0 } to { opacity: 1 } }
@keyframes halaska-scale-in { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }

@keyframes halaska-check-draw {
  0% { stroke-dashoffset: 14; }
  100% { stroke-dashoffset: 0; }
}

@keyframes halaska-radio-dot-in {
  0% { transform: scale(0); }
  45% { transform: scale(1.45); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}
@keyframes halaska-radio-dot-out {
  0% { transform: scale(1); }
  100% { transform: scale(0); }
}
@keyframes halaska-radio-ring-in {
  0% { border-color: var(--ring-idle); }
  100% { border-color: var(--ring-active); }
}

@keyframes halaska-rolodex-out {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-40%); opacity: 0; }
}
@keyframes halaska-rolodex-in {
  0% { transform: translateY(40%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes halaska-blur-out {
  0% { filter: blur(0); opacity: 1; transform: translateY(0); }
  100% { filter: blur(3px); opacity: 0; transform: translateY(-30%); }
}
@keyframes halaska-blur-in {
  0% { filter: blur(3px); opacity: 0; transform: translateY(30%); }
  100% { filter: blur(0); opacity: 1; transform: translateY(0); }
}
@keyframes halaska-dropdown-expand {
  0% { opacity: 0; transform: scaleY(0.6) translateY(-4px); }
  100% { opacity: 1; transform: scaleY(1) translateY(0); }
}

@keyframes halaska-thinking-dot {
  0%, 80%, 100% { transform: scale(0.55); opacity: 0.35; }
  40% { transform: scale(1); opacity: 1; }
}
@keyframes halaska-thinking-pulse {
  0% { transform: scale(0.4); opacity: 0.9; }
  40% { opacity: 0.5; }
  100% { transform: scale(3.4); opacity: 0; }
}
@keyframes halaska-live-pulse {
  0% { transform: scale(0.5); opacity: 0.7; }
  70% { opacity: 0.2; }
  100% { transform: scale(2.4); opacity: 0; }
}
@keyframes halaska-star-burst {
  0% { transform: scale(1); opacity: 0.9; }
  60% { opacity: 0.4; }
  100% { transform: scale(1.6); opacity: 0; }
}
@keyframes halaska-bar-bounce {
  0% { transform: scaleY(1); }
  40% { transform: scaleY(1.08); }
  70% { transform: scaleY(0.97); }
  100% { transform: scaleY(1); }
}
@keyframes halaska-tab-fade {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes halaska-step-in {
  0% { opacity: 0; transform: translateY(6px); filter: blur(2px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0); }
}

/* Orb: compact agent-activity indicators. One shared keyframe per family;
   per-dot negative delays turn identical animations into wavefronts,
   comets, and orbits. */
@keyframes halaska-orb-swell {
  0%, 60%, 100% { transform: scale(0.4); opacity: 0.25; }
  25% { transform: scale(1); opacity: 1; }
}
@keyframes halaska-orb-globe {
  0%    { transform: translate(9px, 0) scale(1); opacity: 0.9; }
  12.5% { transform: translate(6.4px, 3.2px) scale(0.95); opacity: 0.75; }
  25%   { transform: translate(0, 4.5px) scale(0.85); opacity: 0.55; }
  37.5% { transform: translate(-6.4px, 3.2px) scale(0.76); opacity: 0.4; }
  50%   { transform: translate(-9px, 0) scale(0.7); opacity: 0.3; }
  62.5% { transform: translate(-6.4px, -3.2px) scale(0.76); opacity: 0.4; }
  75%   { transform: translate(0, -4.5px) scale(0.85); opacity: 0.55; }
  87.5% { transform: translate(6.4px, -3.2px) scale(0.95); opacity: 0.75; }
  100%  { transform: translate(9px, 0) scale(1); opacity: 0.9; }
}
@keyframes halaska-orb-spark {
  0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.9; }
  50% { transform: rotate(90deg) scale(0.7); opacity: 0.5; }
}
@media (prefers-reduced-motion: reduce) {
  [data-halaska-orb] span { animation: none !important; opacity: 0.6 !important; transform: none !important; }
}

/* Keyboard focus is always visible. Components set outline:none inline for
   pointer users; :focus-visible restores a ring for keyboard users only. */
button:focus-visible, a:focus-visible, [tabindex]:focus-visible {
  outline: 2px solid #3b82f6 !important;
  outline-offset: 2px !important;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px; height: 14px; border-radius: 7px;
  background: #1a1a1a; border: none; cursor: pointer;
}

textarea::-webkit-resizer {
  display: none;
}
`;
let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const el = document.createElement("style");
  el.textContent = GLOBAL_STYLES;
  document.head.appendChild(el);
}
if (typeof document !== "undefined") injectStyles();
const tokens = {
  space: { xs: 4, sm: 8, md: 16, lg: 32, xl: 40, xxl: 80, xxxl: 160, xxxxl: 240 },
  radius: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, pill: 999 },
  type: {
    xxs: { fontSize: 9, lineHeight: 1.3 },
    xs: { fontSize: 10, lineHeight: 1.45 },
    sm: { fontSize: 12, lineHeight: 1.55, letterSpacing: "0.01em" },
    base: { fontSize: 13, lineHeight: 1.6, letterSpacing: "0.01em" },
    md: { fontSize: 14, lineHeight: 1.6, letterSpacing: "0.005em" },
    lg: { fontSize: 16, lineHeight: 1.5 },
    xl: { fontSize: 20, lineHeight: 1.35 },
    xxl: { fontSize: 24, lineHeight: 1.3 },
    xxxl: { fontSize: 32, lineHeight: 1.2 },
    display: { fontSize: 40, lineHeight: 1.15 }
  },
  font: {
    // CSS variables so the whole kit can switch typeface at runtime (setKitFont)
    sans: "var(--halaska-sans, 'Geist'), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "var(--halaska-mono, 'Geist Mono'), 'SF Mono', 'Fira Code', monospace"
  },
  weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  light: {
    bg: "#fafafa",
    bgElevated: "#ffffff",
    bgSubtle: "#f3f3f3",
    bgMuted: "#eeeeee",
    bgHover: "#e8e8e8",
    bgInput: "#f0f0f0",
    border: "#e5e5e5",
    borderSubtle: "#eeeeee",
    borderInput: "rgba(0,0,0,0.06)",
    borderFocus: "#444444",
    text: "#3d3d3d",
    textSecondary: "#888888",
    textTertiary: "#aaaaaa",
    textMuted: "#cccccc",
    textInverse: "#ffffff",
    shadow: "rgba(0,0,0,0.04)",
    shadowMd: "rgba(0,0,0,0.06)",
    shadowLg: "rgba(0,0,0,0.1)",
    accent: "#3b82f6",
    accentHover: "#2563eb",
    accentBg: "#eff6ff",
    accentText: "#3b82f6",
    success: "#22c55e",
    successHover: "#16a34a",
    successBg: "#f0fdf4",
    warning: "#f59e0b",
    warningHover: "#d97706",
    warningBg: "#fffbeb",
    danger: "#ef4444",
    dangerHover: "#dc2626",
    dangerBg: "#fef2f2"
  },
  dark: {
    bg: "#1a1a1a",
    bgElevated: "#2a2a2a",
    bgSubtle: "#222222",
    bgMuted: "#333333",
    bgHover: "#3d3d3d",
    bgInput: "#252525",
    border: "#3a3a3a",
    borderSubtle: "#2f2f2f",
    borderInput: "rgba(255,255,255,0.06)",
    borderFocus: "#cccccc",
    text: "#d8d8d8",
    textSecondary: "#999999",
    textTertiary: "#6a6a6a",
    textMuted: "#4a4a4a",
    textInverse: "#1a1a1a",
    shadow: "rgba(0,0,0,0.2)",
    shadowMd: "rgba(0,0,0,0.3)",
    shadowLg: "rgba(0,0,0,0.4)",
    accent: "#60a5fa",
    accentHover: "#3b82f6",
    accentBg: "rgba(96,165,250,0.12)",
    accentText: "#60a5fa",
    success: "#4ade80",
    successHover: "#22c55e",
    successBg: "rgba(74,222,128,0.1)",
    warning: "#fbbf24",
    warningHover: "#f59e0b",
    warningBg: "rgba(251,191,36,0.1)",
    danger: "#f87171",
    dangerHover: "#ef4444",
    dangerBg: "rgba(248,113,113,0.1)"
  }
};
const motion = {
  fast: "var(--halaska-t-fast, 0.15s)",
  // micro-interactions, state changes
  normal: "var(--halaska-t-normal, 0.25s)",
  // most UI transitions
  smooth: "var(--halaska-t-smooth, 0.35s)",
  // expanding panels, color transitions
  spring: "var(--halaska-t-spring, 0.4s)",
  // bouncy elements (radio, segmented)
  slow: "var(--halaska-t-slow, 0.5s)",
  // page-level transitions
  easeInOut: "var(--halaska-e-inout, cubic-bezier(0.4, 0, 0.2, 1))",
  // standard, on-screen movement
  easeOut: "var(--halaska-e-out, cubic-bezier(0.0, 0, 0.2, 1))",
  // deceleration, entering elements
  easeIn: "var(--halaska-e-in, cubic-bezier(0.4, 0, 1, 1))",
  // acceleration, exiting elements
  emphasized: "var(--halaska-e-emph, cubic-bezier(0.2, 0, 0, 1))",
  // dramatic deceleration
  springCurve: "var(--halaska-e-spring, cubic-bezier(0.34, 1.56, 0.64, 1))"
  // Apple-style overshoot
};
const KIT_MOTION_PRESETS = {
  spring: {},
  smooth: {
    "--halaska-t-fast": "0.22s",
    "--halaska-t-normal": "0.4s",
    "--halaska-t-smooth": "0.55s",
    "--halaska-t-spring": "0.6s",
    "--halaska-t-slow": "0.8s",
    "--halaska-e-inout": "cubic-bezier(0.2, 0, 0, 1)",
    "--halaska-e-out": "cubic-bezier(0.2, 0, 0, 1)",
    "--halaska-e-emph": "cubic-bezier(0.16, 1, 0.3, 1)",
    "--halaska-e-spring": "cubic-bezier(0.2, 0, 0, 1)"
  },
  instant: {
    "--halaska-t-fast": "0.05s",
    "--halaska-t-normal": "0.08s",
    "--halaska-t-smooth": "0.1s",
    "--halaska-t-spring": "0.1s",
    "--halaska-t-slow": "0.15s",
    "--halaska-e-inout": "cubic-bezier(0.2, 0, 0, 1)",
    "--halaska-e-out": "cubic-bezier(0.2, 0, 0, 1)",
    "--halaska-e-emph": "cubic-bezier(0.2, 0, 0, 1)",
    "--halaska-e-spring": "cubic-bezier(0.2, 0, 0, 1)"
  }
};
const KIT_MOTION_VARS = Object.keys(KIT_MOTION_PRESETS.smooth);
function setKitMotion(mode = "spring") {
  if (typeof document === "undefined") return;
  const root = document.documentElement.style;
  KIT_MOTION_VARS.forEach((v) => root.removeProperty(v));
  Object.entries(KIT_MOTION_PRESETS[mode] || {}).forEach(([k, v]) => root.setProperty(k, v));
}
const KIT_FONT_PRESETS = ["Geist", "Inter", "IBM Plex Sans", "Manrope"];
const kitFontsLoaded = /* @__PURE__ */ new Set(["Geist"]);
function setKitFont(name = "Geist") {
  if (typeof document === "undefined") return;
  if (!kitFontsLoaded.has(name)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name).replace(/%20/g, "+")}:wght@400;500;600;700&display=swap`;
    document.head.appendChild(link);
    kitFontsLoaded.add(name);
  }
  document.documentElement.style.setProperty("--halaska-sans", `'${name}'`);
}
const ThemeContext = createContext("light");
function ThemeProvider({ theme = "light", children }) {
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, { value: theme }, children);
}
function useThemeContext() {
  return useContext(ThemeContext);
}
const AccentContext = createContext(null);
function useAccent() {
  return useContext(AccentContext);
}
function p(theme) {
  const base = theme === "dark" ? tokens.dark : tokens.light;
  return base;
}
function usePal(themeProp) {
  const ctxTheme = useThemeContext();
  const theme = themeProp || ctxTheme;
  const accent = useAccent();
  const base = p(theme);
  if (!accent || accent === base.accent) return base;
  const hex = accent;
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  const hR = Math.max(0, r - 30), hG = Math.max(0, g - 30), hB = Math.max(0, b - 30);
  const hoverHex = `#${hR.toString(16).padStart(2, "0")}${hG.toString(16).padStart(2, "0")}${hB.toString(16).padStart(2, "0")}`;
  const bgAlpha = theme === "dark" ? 0.12 : 0.08;
  return {
    ...base,
    accent: hex,
    accentText: hex,
    accentHover: hoverHex,
    accentBg: `rgba(${r},${g},${b},${bgAlpha})`
  };
}
const interactiveBase = {
  fontFamily: tokens.font.sans,
  cursor: "pointer",
  border: "none",
  outline: "none",
  transition: `all ${motion.normal} ${motion.easeInOut}`
};
const AVATAR_COLORS = [
  { bg: "#fee2e2", text: "#b91c1c" },
  // red
  { bg: "#fef3c7", text: "#92400e" },
  // amber
  { bg: "#d1fae5", text: "#065f46" },
  // emerald
  { bg: "#dbeafe", text: "#1e40af" },
  // blue
  { bg: "#ede9fe", text: "#5b21b6" },
  // violet
  { bg: "#fce7f3", text: "#9d174d" },
  // pink
  { bg: "#e0f2fe", text: "#075985" },
  // sky
  { bg: "#fef9c3", text: "#854d0e" },
  // yellow
  { bg: "#f0fdf4", text: "#166534" },
  // green
  { bg: "#f5f3ff", text: "#6d28d9" }
  // purple
];
function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < (name || "").length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
function useRolodex(text, active) {
  const [animClass, setAnimClass] = useState("");
  const timeoutRef = useRef(null);
  const animatingRef = useRef(false);
  useEffect(() => {
    if (!active || !text || animatingRef.current) return;
    animatingRef.current = true;
    setAnimClass("halaska-rolodex-out");
    timeoutRef.current = setTimeout(() => {
      setAnimClass("halaska-rolodex-in");
      timeoutRef.current = setTimeout(() => {
        setAnimClass("");
        animatingRef.current = false;
      }, 120);
    }, 100);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active]);
  return animClass;
}
function useBlurSwap(text, active) {
  const [animClass, setAnimClass] = useState("");
  const timeoutRef = useRef(null);
  const animatingRef = useRef(false);
  useEffect(() => {
    if (!active || !text || animatingRef.current) return;
    animatingRef.current = true;
    setAnimClass("halaska-blur-out");
    timeoutRef.current = setTimeout(() => {
      setAnimClass("halaska-blur-in");
      timeoutRef.current = setTimeout(() => {
        setAnimClass("");
        animatingRef.current = false;
      }, 140);
    }, 110);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active]);
  return animClass;
}
function Text({
  children,
  size = "base",
  weight = "regular",
  color,
  mono,
  muted,
  secondary,
  align,
  truncate,
  theme: tp,
  style: sp,
  as: C = "span"
}) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  let c = pal.text;
  if (color) c = color;
  else if (muted) c = pal.textMuted;
  else if (secondary) c = pal.textSecondary;
  return /* @__PURE__ */ React.createElement(C, { style: {
    ...tokens.type[size],
    fontWeight: tokens.weight[weight],
    fontFamily: mono ? tokens.font.mono : tokens.font.sans,
    color: c,
    textAlign: align,
    transition: `color ${motion.smooth} ${motion.easeInOut}`,
    ...truncate && { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
    ...sp
  } }, children);
}
function Heading({ children, level = 1, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const sizes = { 1: "xxxl", 2: "xxl", 3: "xl", 4: "lg", 5: "md", 6: "base" };
  const Tag2 = `h${level}`;
  return /* @__PURE__ */ React.createElement(Tag2, { style: {
    ...tokens.type[sizes[level]],
    fontWeight: level <= 2 ? tokens.weight.bold : tokens.weight.semibold,
    fontFamily: tokens.font.sans,
    color: pal.text,
    margin: 0,
    letterSpacing: level <= 2 ? "-0.02em" : "0em",
    transition: `color ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, children);
}
function Label({ children, required, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("label", { style: {
    ...tokens.type.sm,
    fontWeight: tokens.weight.medium,
    fontFamily: tokens.font.sans,
    color: pal.textSecondary,
    display: "flex",
    alignItems: "center",
    gap: 4,
    transition: `color ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, children, required && /* @__PURE__ */ React.createElement("span", { style: { color: pal.danger } }, "*"));
}
function Caption({ children, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textTertiary, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}`, ...sp } }, children);
}
function Code({ children, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("code", { style: {
    ...tokens.type.sm,
    fontFamily: tokens.font.mono,
    background: pal.bgMuted,
    color: pal.accentText,
    padding: `${2}px ${8}px`,
    borderRadius: tokens.radius.xs,
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, children);
}
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  disabled,
  loading,
  fullWidth,
  onClick,
  theme: tp,
  style: sp
}) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const sizes = {
    sm: { padding: `${8 - 1}px ${12}px`, ...tokens.type.sm, height: 30 },
    md: { padding: `${8}px ${16}px`, ...tokens.type.base, height: 36 },
    lg: { padding: `${12}px ${24}px`, ...tokens.type.md, height: 42 },
    xl: { padding: `${16}px ${32}px`, ...tokens.type.lg, height: 48 }
  };
  const shadowColors = {
    primary: "inset 0 -2px 0 0 rgba(0,0,0,0.35)",
    secondary: "inset 0 -2px 0 0 rgba(0,0,0,0.05)",
    outline: "inset 0 -2px 0 0 rgba(0,0,0,0.08)",
    ghost: "inset 0 -2px 0 0 rgba(0,0,0,0.06)",
    accent: "inset 0 -2px 0 0 rgba(0,0,0,0.3)",
    danger: "inset 0 -2px 0 0 rgba(0,0,0,0.3)"
  };
  const brightnessMap = {
    primary: 1.15,
    secondary: 1.04,
    outline: 1.12,
    ghost: 1.12,
    accent: 1.06,
    danger: 1.06
  };
  const variants = {
    primary: {
      background: disabled ? pal.bgMuted : pal.text,
      color: disabled ? pal.textMuted : pal.textInverse
    },
    secondary: {
      background: disabled ? "transparent" : pal.bgMuted,
      color: disabled ? pal.textMuted : pal.text
    },
    outline: {
      background: disabled ? "transparent" : "transparent",
      color: disabled ? pal.textMuted : pal.text,
      border: `1.5px solid ${disabled ? pal.borderSubtle : pal.borderInput}`
    },
    ghost: {
      background: disabled ? "transparent" : "transparent",
      color: disabled ? pal.textMuted : pal.textSecondary
    },
    accent: {
      background: disabled ? pal.bgMuted : pal.accent,
      color: disabled ? pal.textMuted : "#ffffff"
    },
    danger: {
      background: disabled ? pal.bgMuted : pal.danger,
      color: disabled ? pal.textMuted : "#ffffff"
    }
  };
  const s = sizes[size];
  const v = variants[variant] || variants.primary;
  const isHover = hover && !disabled && !loading;
  const shadow = shadowColors[variant] || shadowColors.primary;
  const brightness = brightnessMap[variant] || 1.12;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: disabled || loading ? void 0 : onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => {
        setHover(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      disabled,
      style: {
        ...interactiveBase,
        ...s,
        border: "none",
        ...v,
        fontWeight: tokens.weight.medium,
        borderRadius: tokens.radius.md,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: fullWidth ? "100%" : "auto",
        transform: pressed && !disabled ? "scale(0.97)" : "scale(1)",
        opacity: loading ? 0.7 : 1,
        pointerEvents: disabled || loading ? "none" : "auto",
        letterSpacing: "-0.01em",
        boxShadow: isHover ? shadow : "none",
        filter: isHover ? `brightness(${brightness})` : "brightness(1)",
        transition: `all ${motion.normal} ${motion.easeInOut}, box-shadow ${motion.fast} ${motion.easeOut}, filter ${motion.fast} ${motion.easeOut}`,
        ...sp
      }
    },
    loading && /* @__PURE__ */ React.createElement(Spinner, { size: s.fontSize, color: v.color }),
    !loading && icon && /* @__PURE__ */ React.createElement("span", { style: { fontSize: s.fontSize + 2, lineHeight: 1, display: "flex" } }, icon),
    /* @__PURE__ */ React.createElement("span", { style: { fontFamily: tokens.font.sans, fontWeight: tokens.weight.medium } }, children),
    iconRight && /* @__PURE__ */ React.createElement("span", { style: { fontSize: s.fontSize + 2, lineHeight: 1, display: "flex" } }, iconRight)
  );
}
function IconButton({ icon, size = 36, variant = "ghost", onClick, theme: tp, label: ariaLabel, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const bgMap = {
    ghost: hover ? pal.bgSubtle : "transparent",
    secondary: hover ? pal.bgHover : pal.bgMuted,
    outline: hover ? pal.bgSubtle : "transparent"
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      "aria-label": ariaLabel,
      style: {
        ...interactiveBase,
        width: size,
        height: size,
        borderRadius: tokens.radius.md,
        background: bgMap[variant] || bgMap.ghost,
        color: pal.textSecondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.45,
        transform: hover ? "scale(1.12)" : "scale(1)",
        ...sp
      }
    },
    icon
  );
}
function ButtonGroup({ children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", borderRadius: tokens.radius.md, overflow: "hidden", border: `1px solid ${pal.borderInput}`, transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, Array.isArray(children) ? children.map((child, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { borderRight: i < children.length - 1 ? `1px solid ${pal.borderInput}` : "none" } }, child)) : children);
}
function LinkButton({ children, onClick, icon, iconRight, size = "md", theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const sizes = {
    sm: tokens.type.sm,
    md: tokens.type.base,
    lg: tokens.type.md
  };
  const s = sizes[size];
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => {
        setLeaving(false);
        setHover(true);
      },
      onMouseLeave: () => {
        setLeaving(true);
        setHover(false);
      },
      onTransitionEnd: () => {
        if (leaving) setLeaving(false);
      },
      style: {
        ...interactiveBase,
        ...s,
        background: "transparent",
        color: pal.textSecondary,
        fontWeight: tokens.weight.medium,
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: 0,
        textDecoration: "none",
        position: "relative",
        overflow: "hidden",
        paddingBottom: 3,
        ...sp
      }
    },
    icon && /* @__PURE__ */ React.createElement("span", { style: { display: "flex", lineHeight: 1 } }, icon),
    children,
    iconRight && /* @__PURE__ */ React.createElement("span", { style: { display: "flex", lineHeight: 1 } }, iconRight),
    /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: 1,
      background: pal.textTertiary,
      transformOrigin: hover ? "left center" : "right center",
      transform: hover ? "scaleX(1)" : leaving ? "scaleX(0)" : "scaleX(0)",
      transition: `transform ${motion.normal} ${motion.emphasized}`
    } })
  );
}
function TextInput({
  value,
  onChange,
  placeholder,
  label,
  caption,
  error,
  icon,
  disabled,
  type = "text",
  size = "md",
  theme: tp,
  style: sp
}) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [focused, setFocused] = useState(false);
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: { paddingTop: 8, paddingBottom: 8, paddingLeft: 16, paddingRight: 16, ...tokens.type.sm, height: 32 },
    md: { paddingTop: 10, paddingBottom: 10, paddingLeft: 16, paddingRight: 16, ...tokens.type.base, height: 38 },
    lg: { paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 16, ...tokens.type.md, height: 44 }
  };
  const s = sizes[size];
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, ...sp } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { position: "relative" },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false)
    },
    icon && /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      left: 16,
      top: "50%",
      transform: "translateY(-50%)",
      color: pal.textTertiary,
      fontSize: s.fontSize + 2,
      pointerEvents: "none",
      display: "flex"
    } }, icon),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        type,
        value,
        onChange: (e) => onChange?.(e.target.value),
        placeholder,
        disabled,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        style: {
          ...s,
          width: "100%",
          boxSizing: "border-box",
          fontFamily: tokens.font.sans,
          color: disabled ? pal.textMuted : pal.text,
          background: disabled ? pal.bgSubtle : pal.bgInput,
          border: error ? `1.5px solid ${pal.danger}` : focused ? `1.5px solid ${pal.borderFocus}` : hover && !disabled ? `1.5px solid ${pal.borderSubtle}` : "1.5px solid transparent",
          borderRadius: tokens.radius.md,
          outline: "none",
          transition: `all ${motion.normal} ${motion.easeInOut}`,
          paddingLeft: icon ? 42 : 16
        }
      }
    )
  ), (caption || error) && /* @__PURE__ */ React.createElement(Caption, { theme, style: error ? { color: pal.danger } : void 0 }, error || caption));
}
function TextArea({ value, onChange, placeholder, label, caption, rows = 3, disabled, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [focused, setFocused] = useState(false);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, ...sp } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { position: "relative" },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false)
    },
    /* @__PURE__ */ React.createElement(
      "textarea",
      {
        value,
        onChange: (e) => onChange?.(e.target.value),
        placeholder,
        rows,
        disabled,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        style: {
          ...tokens.type.base,
          width: "100%",
          boxSizing: "border-box",
          fontFamily: tokens.font.sans,
          color: disabled ? pal.textMuted : pal.text,
          background: disabled ? pal.bgSubtle : pal.bgInput,
          border: focused ? `1.5px solid ${pal.borderFocus}` : hover && !disabled ? `1.5px solid ${pal.borderSubtle}` : "1.5px solid transparent",
          borderRadius: tokens.radius.md,
          padding: `${12}px ${16}px`,
          outline: "none",
          resize: "vertical",
          transition: `all ${motion.normal} ${motion.easeInOut}`
        }
      }
    ),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      bottom: 6,
      right: 8,
      pointerEvents: "none",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      opacity: 0.25
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 1, background: pal.textTertiary, borderRadius: 1, alignSelf: "flex-end" } }), /* @__PURE__ */ React.createElement("div", { style: { width: 12, height: 1, background: pal.textTertiary, borderRadius: 1, alignSelf: "flex-end" } }))
  ), caption && /* @__PURE__ */ React.createElement(Caption, { theme }, caption));
}
function Select({ value, onChange, options, placeholder, label, disabled, size = "md", theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [hoverIdx, setHoverIdx] = useState(-1);
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const sizes = {
    sm: { ...tokens.type.sm, height: 32, px: 12 },
    md: { ...tokens.type.base, height: 38, px: 16 },
    lg: { ...tokens.type.md, height: 44, px: 16 }
  };
  const s = sizes[size];
  const selectedLabel = options.reduce((acc, opt) => {
    const val = typeof opt === "string" ? opt : opt.value;
    const lab = typeof opt === "string" ? opt : opt.label;
    return val === value ? lab : acc;
  }, null);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, ...sp } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement("div", { ref, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => !disabled && setOpen(!open),
      style: {
        ...interactiveBase,
        ...s,
        width: "100%",
        boxSizing: "border-box",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `0 ${s.px}px`,
        color: !value ? pal.textMuted : pal.text,
        background: disabled ? pal.bgSubtle : pal.bgInput,
        border: open ? `1.5px solid ${pal.borderFocus}` : "1.5px solid transparent",
        borderRadius: tokens.radius.md
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, selectedLabel || placeholder || "Select..."),
    /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, display: "inline-flex" } }, /* @__PURE__ */ React.createElement(ChevronIcon, { size: 12, direction: open ? "up" : "down" }))
  ), open && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    right: 0,
    zIndex: 50,
    background: pal.bgElevated,
    borderRadius: tokens.radius.md,
    boxShadow: `0 4px 20px ${pal.shadowLg}`,
    padding: 4,
    maxHeight: 200,
    overflowY: "auto",
    transformOrigin: "top center",
    animation: `halaska-dropdown-expand ${motion.fast} ${motion.easeOut} both`
  } }, options.map((opt, i) => {
    const val = typeof opt === "string" ? opt : opt.value;
    const lab = typeof opt === "string" ? opt : opt.label;
    const isActive = val === value;
    const isHover = hoverIdx === i;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: val,
        onMouseEnter: () => setHoverIdx(i),
        onMouseLeave: () => setHoverIdx(-1),
        onClick: () => {
          onChange?.(val);
          setOpen(false);
        },
        style: {
          ...interactiveBase,
          width: "100%",
          textAlign: "left",
          padding: `${8 + 1}px ${12}px`,
          ...tokens.type.base,
          borderRadius: tokens.radius.sm,
          color: isActive ? pal.text : pal.textSecondary,
          fontWeight: isActive ? tokens.weight.medium : tokens.weight.regular,
          background: isHover ? pal.bgSubtle : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: `background ${motion.normal} ${motion.easeInOut}, color ${motion.normal} ${motion.easeInOut}`
        }
      },
      lab,
      isActive && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: pal.textTertiary } }, "\u2713")
    );
  }))));
}
function Checkbox({ checked, onChange, label, disabled, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 12, cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.5 : 1 } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: (e) => {
        e.preventDefault();
        if (!disabled) onChange?.(!checked);
      },
      style: {
        width: 18,
        height: 18,
        borderRadius: tokens.radius.xs,
        background: checked ? pal.accent : pal.bgInput,
        border: checked ? "none" : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: `background ${motion.fast} ${motion.easeInOut}`,
        flexShrink: 0
      }
    },
    checked && /* @__PURE__ */ React.createElement("svg", { width: "10", height: "8", viewBox: "0 0 10 8", fill: "none" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M1 4L3.5 6.5L9 1",
        stroke: pal.textInverse,
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: { strokeDasharray: 14, strokeDashoffset: 0, animation: "halaska-check-draw 0.3s ease forwards" }
      }
    ))
  ), label && /* @__PURE__ */ React.createElement(Text, { size: "base", theme, style: { color: disabled ? pal.textMuted : pal.text } }, label));
}
function Radio({ checked, onChange, label, disabled, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 12, cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.5 : 1 } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: (e) => {
        e.preventDefault();
        if (!disabled) onChange?.();
      },
      style: {
        width: 18,
        height: 18,
        borderRadius: 9,
        background: pal.bgInput,
        border: `1.5px solid ${checked ? pal.accent : "transparent"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: `border-color ${motion.smooth} ${motion.easeInOut}`,
        transitionDelay: checked ? "0.15s" : "0s",
        flexShrink: 0
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: pal.accent,
      animation: checked ? `halaska-radio-dot-in ${motion.spring} ${motion.springCurve} forwards` : `halaska-radio-dot-out ${motion.fast} ${motion.easeIn} forwards`
    } })
  ), label && /* @__PURE__ */ React.createElement(Text, { size: "base", theme, style: { color: disabled ? pal.textMuted : pal.text } }, label));
}
function RadioGroup({ options, value, onChange, label, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, options.map((opt) => {
    const val = typeof opt === "string" ? opt : opt.value;
    const lab = typeof opt === "string" ? opt : opt.label;
    return /* @__PURE__ */ React.createElement(Radio, { key: val, checked: value === val, onChange: () => onChange?.(val), label: lab, theme });
  })));
}
function SwitchToggle({ checked, onChange, label, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 12, cursor: "pointer" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onChange?.(!checked),
      role: "switch",
      "aria-checked": checked,
      style: {
        ...interactiveBase,
        width: 44,
        height: 24,
        borderRadius: 12,
        background: checked ? pal.accent : pal.bgMuted,
        position: "relative",
        padding: 0,
        flexShrink: 0
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      width: 20,
      height: 20,
      borderRadius: 10,
      background: checked ? "#fff" : pal.bgElevated,
      position: "absolute",
      top: 2,
      left: checked ? 22 : 2,
      transition: `left ${motion.spring} ${motion.springCurve}`,
      boxShadow: "0 1px 3px rgba(0,0,0,0.15)"
    } })
  ), label && /* @__PURE__ */ React.createElement(Text, { size: "base", theme }, label));
}
function ThemeToggle({ theme, onChange, size = 32 }) {
  const isDark = theme === "dark";
  const pad = 3;
  const trackW = size * 2 + pad * 2;
  const trackH = size + pad * 2;
  const lightPal = tokens.light;
  const darkPal = tokens.dark;
  const trackBg = isDark ? darkPal.bgMuted : lightPal.bgMuted;
  const thumbBg = isDark ? darkPal.bgHover : "#fff";
  const thumbShadow = isDark ? "0 1px 3px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.1)";
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onChange(isDark ? "light" : "dark"),
      style: {
        ...interactiveBase,
        width: trackW,
        height: trackH,
        borderRadius: tokens.radius.pill,
        background: trackBg,
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: 0,
        transition: `background ${motion.smooth} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      width: size,
      height: size,
      borderRadius: size / 2,
      background: thumbBg,
      boxShadow: thumbShadow,
      left: isDark ? pad + size : pad,
      top: pad,
      transition: `left ${motion.smooth} ${motion.emphasized}, background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
    } }),
    /* @__PURE__ */ React.createElement("div", { style: {
      width: size + pad,
      height: trackH,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.42,
      color: !isDark ? lightPal.text : darkPal.textTertiary,
      position: "relative",
      zIndex: 1,
      transition: `color ${motion.normal} ${motion.easeInOut}`
    } }, "\u2600"),
    /* @__PURE__ */ React.createElement("div", { style: {
      width: size + pad,
      height: trackH,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size * 0.42,
      color: isDark ? darkPal.text : lightPal.textTertiary,
      position: "relative",
      zIndex: 1,
      transition: `color ${motion.normal} ${motion.easeInOut}`
    } }, "\u263E")
  );
}
function SegmentedControl({ options, value, onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [indicator, setIndicator] = useState({});
  const containerRef = useRef(null);
  const btnRefs = useRef({});
  const update = useCallback(() => {
    const btn = btnRefs.current[value];
    const container = containerRef.current;
    if (btn && container) {
      const cR = container.getBoundingClientRect();
      const bR = btn.getBoundingClientRect();
      setIndicator({ left: bR.left - cR.left, width: bR.width });
    }
  }, [value]);
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, style: {
    display: "flex",
    alignItems: "center",
    background: theme === "dark" ? "rgba(51,51,51,0.5)" : "rgba(238,238,238,0.6)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: tokens.radius.md,
    padding: 3,
    position: "relative",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: 3,
    height: "calc(100% - 6px)",
    background: pal.bgElevated,
    borderRadius: tokens.radius.sm + 2,
    boxShadow: `0 1px 3px ${pal.shadow}`,
    transition: `left ${motion.smooth} ${motion.emphasized}, width ${motion.normal} ${motion.easeInOut}, background ${motion.smooth} ${motion.easeInOut}`,
    ...indicator
  } }), options.map((opt) => /* @__PURE__ */ React.createElement("button", { key: opt, ref: (el) => btnRefs.current[opt] = el, onClick: () => onChange(opt), style: {
    ...interactiveBase,
    position: "relative",
    zIndex: 1,
    padding: `6px 0`,
    background: "transparent",
    ...tokens.type.sm,
    flex: 1,
    fontWeight: value === opt ? tokens.weight.medium : tokens.weight.regular,
    color: value === opt ? pal.text : pal.textTertiary,
    borderRadius: tokens.radius.sm + 2,
    whiteSpace: "nowrap",
    textAlign: "center"
  } }, opt)));
}
function Card({ children, theme: tp, padding, hover, onClick, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hovered, setHovered] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: theme === "dark" ? "rgba(42,42,42,0.7)" : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
        borderRadius: tokens.radius.lg,
        padding: padding ?? 24,
        boxShadow: hovered && hover ? `0 4px 16px ${pal.shadowMd}` : `0 1px 4px ${pal.shadow}`,
        transition: `all ${motion.normal} ${motion.easeInOut}`,
        fontFamily: tokens.font.sans,
        cursor: onClick ? "pointer" : "default",
        ...sp
      }
    },
    children
  );
}
function CardHeader({ title, subtitle, action, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.md, fontWeight: tokens.weight.semibold, color: pal.text, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, title), subtitle && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textTertiary, fontFamily: tokens.font.sans, marginTop: 2, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, subtitle)), action);
}
function Divider({ theme: tp, spacing }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { height: 1, background: pal.borderSubtle, margin: `${spacing ?? 16}px 0`, transition: `background ${motion.smooth} ${motion.easeInOut}` } });
}
function Stack({ children, gap = "md", direction = "column", align, justify, wrap, style: sp }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    flexDirection: direction === "row" ? "row" : "column",
    gap: tokens.space[gap] ?? gap,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? "wrap" : void 0,
    ...sp
  } }, children);
}
function DotGrid({ theme: tp, spacing = 20 }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(circle, ${theme === "light" ? "#d4d4d4" : "#333"} 1px, transparent 1px)`,
    backgroundSize: `${spacing}px ${spacing}px`,
    borderRadius: "inherit",
    pointerEvents: "none"
  } });
}
function Badge({ children, variant = "default", theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const v = {
    default: { bg: pal.bgMuted, color: pal.textSecondary },
    accent: { bg: pal.accentBg, color: pal.accentText },
    success: { bg: pal.successBg, color: pal.success },
    warning: { bg: pal.warningBg, color: pal.warning },
    danger: { bg: pal.dangerBg, color: pal.danger }
  }[variant] || { bg: pal.bgMuted, color: pal.textSecondary };
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    ...tokens.type.xs,
    fontWeight: tokens.weight.medium,
    color: v.color,
    background: v.bg,
    padding: `3px ${8}px`,
    borderRadius: tokens.radius.sm,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    fontFamily: tokens.font.sans,
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, children);
}
function Tag({ children, color, removable, onRemove, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    ...tokens.type.sm,
    fontWeight: tokens.weight.medium,
    color: pal.text,
    background: pal.bgSubtle,
    padding: `${4}px ${12}px`,
    borderRadius: tokens.radius.pill,
    fontFamily: tokens.font.sans,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, color && /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: "50%", background: color, flexShrink: 0 } }), children, removable && /* @__PURE__ */ React.createElement("button", { onClick: onRemove, style: { ...interactiveBase, background: "transparent", color: pal.textMuted, fontSize: 12, padding: 0, marginLeft: 2, display: "flex" } }, "\xD7"));
}
function Spinner({ size = 16, color }) {
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 16 16", style: { animation: "halaska-spin 0.8s linear infinite" } }, /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "6", fill: "none", stroke: color || "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeDasharray: "28", strokeDashoffset: "8", opacity: "0.8" }));
}
function Progress({ value, theme: tp, height = 6 }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height, background: pal.bgMuted, borderRadius: height / 2, overflow: "hidden", transition: `background ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${Math.min(100, Math.max(0, value))}%`, height: "100%", background: pal.accent, borderRadius: height / 2, transition: `width 0.6s cubic-bezier(0.34,1.56,0.64,1), background ${motion.smooth} ${motion.easeInOut}` } }));
}
function Skeleton({ width, height = 16, rounded, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: width || "100%",
    height,
    borderRadius: rounded ? height / 2 : tokens.radius.sm,
    background: `linear-gradient(90deg, ${pal.bgMuted} 25%, ${pal.bgSubtle} 50%, ${pal.bgMuted} 75%) 0 0 / 200% 100%`,
    animation: "halaska-shimmer 1.5s ease-in-out infinite"
  } });
}
function Toast({ message, variant = "default", icon, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const bgMap = { default: pal.bgElevated, success: pal.successBg, warning: pal.warningBg, danger: pal.dangerBg };
  const colorMap = { default: pal.text, success: pal.success, warning: pal.warning, danger: pal.danger };
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    padding: `${12}px ${16}px`,
    background: bgMap[variant],
    borderRadius: tokens.radius.lg,
    boxShadow: `0 2px 8px ${pal.shadow}`,
    fontFamily: tokens.font.sans,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, icon && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, color: colorMap[variant] } }, icon), /* @__PURE__ */ React.createElement(Text, { size: "base", theme, style: { color: colorMap[variant] } }, message));
}
function Avatar({ name, src, size = 32, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const colors = getAvatarColor(name);
  const initials = name ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() : "?";
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: size,
    height: size,
    borderRadius: size / 2,
    background: src ? "transparent" : colors.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flexShrink: 0,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, src ? /* @__PURE__ */ React.createElement("img", { src, alt: name, style: { width: "100%", height: "100%", objectFit: "cover" } }) : /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: tokens.font.sans,
    fontWeight: tokens.weight.semibold,
    color: colors.text,
    fontSize: size * 0.36,
    letterSpacing: "-0.02em"
  } }, initials));
}
function AvatarGroup({ names, max = 4, size = 28, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const visible = names.slice(0, max);
  const overflow = names.length - max;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center" } }, visible.map((name, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    marginLeft: i > 0 ? -8 : 0,
    position: "relative",
    zIndex: max - i,
    borderRadius: size / 2,
    border: `2px solid ${pal.bgElevated}`
  } }, /* @__PURE__ */ React.createElement(Avatar, { name, size, theme }))), overflow > 0 && /* @__PURE__ */ React.createElement("div", { style: {
    width: size,
    height: size,
    borderRadius: size / 2,
    background: pal.bgMuted,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -8,
    position: "relative",
    zIndex: 0,
    border: `2px solid ${pal.bgElevated}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, fontWeight: tokens.weight.medium, fontSize: size * 0.32 } }, "+", overflow)));
}
function ListItem({ title, subtitle, left, right, divider = true, onClick, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: `${12}px ${16}px`,
        background: hover ? pal.bgSubtle : "transparent",
        borderBottom: divider ? `1px solid ${pal.borderSubtle}` : "none",
        borderRadius: tokens.radius.sm,
        cursor: onClick ? "pointer" : "default",
        transition: `background ${motion.normal} ${motion.easeInOut}`
      }
    },
    left,
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.base, fontWeight: tokens.weight.medium, color: pal.text, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, title), subtitle && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textTertiary, fontFamily: tokens.font.sans, marginTop: 1, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, subtitle)),
    right
  );
}
function Stat({ label, value, change, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const isPositive = change && !change.startsWith("-");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textTertiary, fontFamily: tokens.font.sans, marginBottom: 4, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xxl, fontWeight: tokens.weight.bold, color: pal.text, fontFamily: tokens.font.sans, fontVariantNumeric: "tabular-nums", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, value), change && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontWeight: tokens.weight.medium, color: isPositive ? pal.success : pal.danger, fontFamily: tokens.font.sans } }, isPositive ? "\u2191" : "\u2193", " ", change.replace("-", ""))));
}
function AISuggestionBadge({ theme: tp }) {
  return /* @__PURE__ */ React.createElement(Badge, { variant: "accent", theme: tp }, "\u2726 AI Suggestion");
}
function StreamingText({ text, speed = 30, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    setDisplayed("");
    setCursor(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setCursor(false), 800);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.base, color: pal.text, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, displayed, cursor && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 2, height: "1.1em", background: pal.accent, marginLeft: 1, verticalAlign: "text-bottom", animation: "halaska-blink 1s step-end infinite" } }));
}
function ConfidenceBar({ value, label, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const color = value > 80 ? pal.success : value > 50 ? pal.warning : pal.danger;
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { display: "flex", alignItems: "center", gap: 12, width: "100%" },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false)
    },
    label && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textSecondary, fontFamily: tokens.font.sans, minWidth: 60 } }, label),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 6, background: pal.bgMuted, borderRadius: 3, overflow: "hidden", transition: `background ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: `${value}%`,
      height: "100%",
      background: color,
      borderRadius: 3,
      transition: `width 0.6s cubic-bezier(0.34,1.56,0.64,1), background ${motion.normal} ${motion.easeInOut}, transform ${motion.normal} ${motion.easeInOut}`,
      transform: hover ? "scaleY(1.6)" : "scaleY(1)",
      transformOrigin: "center"
    } })),
    /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textTertiary, fontFamily: tokens.font.mono, fontVariantNumeric: "tabular-nums", minWidth: 36, textAlign: "right" } }, value, "%")
  );
}
function BeforeAfterToggle({ before, after, theme: tp }) {
  const [showAfter, setShowAfter] = useState(false);
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16, width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", borderRadius: tokens.radius.lg, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { gridArea: "1 / 1", transition: `opacity ${motion.smooth} ${motion.easeInOut}`, opacity: showAfter ? 0 : 1, pointerEvents: showAfter ? "none" : "auto" } }, before), /* @__PURE__ */ React.createElement("div", { style: { gridArea: "1 / 1", transition: `opacity ${motion.smooth} ${motion.easeInOut}`, opacity: showAfter ? 1 : 0, pointerEvents: showAfter ? "auto" : "none" } }, after)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 12 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { color: !showAfter ? pal.text : pal.textMuted } }, "Before"), /* @__PURE__ */ React.createElement(SwitchToggle, { checked: showAfter, onChange: setShowAfter, theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { color: showAfter ? pal.text : pal.textMuted } }, "After")));
}
function ZoomControl({ zoom, onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", background: pal.bgSubtle, borderRadius: tokens.radius.md, padding: 4, transition: `background ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("button", { onClick: () => onChange(Math.max(25, zoom - 10)), style: { ...interactiveBase, width: 36, height: 32, background: "transparent", ...tokens.type.lg, color: pal.textSecondary, borderRadius: tokens.radius.sm, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: tokens.font.mono } }, "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { minWidth: 48, textAlign: "center", ...tokens.type.base, color: pal.textSecondary, fontFamily: tokens.font.sans, fontVariantNumeric: "tabular-nums" } }, zoom, "%"), /* @__PURE__ */ React.createElement("button", { onClick: () => onChange(Math.min(200, zoom + 10)), style: { ...interactiveBase, width: 36, height: 32, background: "transparent", ...tokens.type.lg, color: pal.textSecondary, borderRadius: tokens.radius.sm, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: tokens.font.mono } }, "+"));
}
function Pagination({ current, total, onChange, variant = "numbers", theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  if (variant === "dots") {
    return /* @__PURE__ */ React.createElement("div", { role: "group", "aria-label": `Page ${current} of ${total}`, style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6 } }, Array.from({ length: total }, (_, i) => {
      const active = i + 1 === current;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: i,
          onClick: () => onChange(i + 1),
          "aria-label": `Page ${i + 1}`,
          "aria-current": active ? "page" : void 0,
          style: {
            ...interactiveBase,
            padding: 0,
            height: 6,
            width: active ? 18 : 6,
            borderRadius: 3,
            background: active ? pal.text : pal.textMuted,
            transition: `width ${motion.normal} ${motion.emphasized}, background ${motion.normal} ${motion.easeInOut}`
          }
        }
      );
    }));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: `0 ${4}px` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => current > 1 && onChange(current - 1), style: { ...interactiveBase, background: "transparent", ...tokens.type.md, color: current > 1 ? pal.textTertiary : pal.textMuted, padding: `${4}px ${8}px` } }, "\u2039"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.base, color: pal.textTertiary, fontFamily: tokens.font.sans, fontVariantNumeric: "tabular-nums" } }, current, "/", total), /* @__PURE__ */ React.createElement("button", { onClick: () => current < total && onChange(current + 1), style: { ...interactiveBase, background: "transparent", ...tokens.type.md, color: current < total ? pal.textTertiary : pal.textMuted, padding: `${4}px ${8}px` } }, "\u203A")), /* @__PURE__ */ React.createElement("button", { onClick: () => current < total && onChange(current + 1), style: { ...interactiveBase, background: "transparent", ...tokens.type.base, color: current < total ? pal.textSecondary : pal.textMuted, fontWeight: tokens.weight.medium, padding: `${4}px ${8}px` } }, "Next"));
}
function Slider({ value, onChange, min = 0, max = 100, label, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const pct = (value - min) / (max - min) * 100;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min,
      max,
      value,
      onChange: (e) => onChange(Number(e.target.value)),
      style: { flex: 1, height: 4, appearance: "none", background: `linear-gradient(to right, ${pal.accent} ${pct}%, ${pal.bgMuted} ${pct}%)`, borderRadius: 2, outline: "none", cursor: "pointer" }
    }
  ), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textTertiary, fontFamily: tokens.font.mono, fontVariantNumeric: "tabular-nums", minWidth: 32, textAlign: "right" } }, value)));
}
const ORB_STAGE = 24;
const ORB_TASKS = {
  pulse: "Thinking",
  orbit: "Searching",
  sweep: "Writing",
  globe: "Planning",
  spark: "Waiting"
};
const ORB_LATTICE = (() => {
  const cells = [];
  for (let y = 0; y < 3; y++) for (let x = 0; x < 3; x++) cells.push({ x, y });
  return cells;
})();
const ORB_RING = Array.from({ length: 8 }, (_, i) => i);
function Orb({ variant = "pulse", size = 20, label, pill, color, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const text = label || `${ORB_TASKS[variant] || "Working"}\u2026`;
  let cells = null;
  if (variant === "pulse" || variant === "sweep") {
    cells = ORB_LATTICE.map(({ x, y }) => {
      const delay = variant === "pulse" ? Math.hypot(x - 1, y - 1) * 260 : x * 220;
      return /* @__PURE__ */ React.createElement("span", { key: `${x}${y}`, style: {
        position: "absolute",
        left: x * 8 + 2,
        top: y * 8 + 2,
        width: 4,
        height: 4,
        borderRadius: 2,
        background: "currentColor",
        opacity: 0.25,
        transform: "scale(0.4)",
        animation: `halaska-orb-swell 1.6s ${motion.easeInOut} ${Math.round(delay)}ms infinite`
      } });
    });
  } else if (variant === "orbit") {
    cells = ORB_RING.map((i) => {
      const a = i / 8 * Math.PI * 2;
      return /* @__PURE__ */ React.createElement("span", { key: i, style: {
        position: "absolute",
        width: 3.5,
        height: 3.5,
        borderRadius: 2,
        left: 12 + Math.cos(a) * 9 - 1.75,
        top: 12 + Math.sin(a) * 9 - 1.75,
        background: "currentColor",
        opacity: 0.2,
        transform: "scale(0.5)",
        animation: `halaska-orb-swell 1.4s ${motion.easeInOut} ${-(i / 8) * 1.4}s infinite`
      } });
    });
  } else if (variant === "globe") {
    cells = ORB_RING.map((i) => /* @__PURE__ */ React.createElement("span", { key: i, style: {
      position: "absolute",
      left: 12 - 1.75,
      top: 12 - 1.75,
      width: 3.5,
      height: 3.5,
      borderRadius: 2,
      background: "currentColor",
      animation: `halaska-orb-globe 3.2s linear ${-(i / 8) * 3.2}s infinite`
    } }));
  } else if (variant === "spark") {
    cells = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
      lineHeight: 1,
      animation: `halaska-orb-spark 2.4s ${motion.easeInOut} infinite`
    } }, "\u2726"), /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
      lineHeight: 1,
      opacity: 0,
      animation: "halaska-star-burst 2.4s ease-out infinite"
    } }, "\u2726"));
  }
  const glyph = /* @__PURE__ */ React.createElement(
    "span",
    {
      "data-halaska-orb": "",
      role: pill ? void 0 : "img",
      "aria-label": pill ? void 0 : text,
      "aria-hidden": pill ? true : void 0,
      style: {
        position: "relative",
        display: "inline-block",
        width: size,
        height: size,
        flexShrink: 0,
        color: color || pal.textSecondary,
        transition: `color ${motion.smooth} ${motion.easeInOut}`,
        ...pill ? void 0 : sp
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: ORB_STAGE,
      height: ORB_STAGE,
      transform: `scale(${size / ORB_STAGE})`,
      transformOrigin: "top left"
    } }, cells)
  );
  if (!pill) return glyph;
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    height: 30,
    padding: "0 12px 0 6px",
    borderRadius: tokens.radius.pill,
    background: pal.bgElevated,
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 1px 2px ${pal.shadow}`,
    fontFamily: tokens.font.sans,
    transition: `background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, glyph, /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.sm,
    color: pal.textSecondary,
    whiteSpace: "nowrap",
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, text));
}
function ThinkingIndicator({ label = "Thinking", size = "md", theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const dot = size === "sm" ? 4 : 6;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 10, fontFamily: tokens.font.sans } }, label && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textSecondary, letterSpacing: "0.01em", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, label), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", gap: 4, alignItems: "center", height: dot * 1.8 } }, [0, 1, 2].map((i) => /* @__PURE__ */ React.createElement("span", { key: i, style: {
    width: dot,
    height: dot,
    borderRadius: dot,
    background: pal.text,
    display: "inline-block",
    animation: `halaska-thinking-dot 1.2s ${motion.easeInOut} ${i * 0.15}s infinite both`,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }))));
}
function ThinkingSteps({ steps, current = 0, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, fontFamily: tokens.font.sans } }, steps.map((s, i) => {
    const done = i < current;
    const active = i === current;
    const reached = i <= current;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      opacity: reached ? 1 : 0.45,
      animation: reached ? `halaska-step-in 0.4s ${motion.emphasized} both` : "none",
      transition: `opacity ${motion.smooth} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement("span", { style: { position: "relative", width: 14, height: 14, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: active ? 10 : done ? 8 : 6,
      height: active ? 10 : done ? 8 : 6,
      borderRadius: 10,
      background: done || active ? pal.accent : "transparent",
      border: done || active ? "none" : `1px solid ${pal.border}`,
      transition: `all ${motion.spring} ${motion.springCurve}`
    } }), active && /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      width: 14,
      height: 14,
      borderRadius: 14,
      border: `1.5px solid ${pal.accent}`,
      animation: `halaska-thinking-pulse 1.4s ${motion.easeOut} infinite`
    } })), /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.sm,
      fontWeight: active ? tokens.weight.medium : tokens.weight.regular,
      color: done ? pal.textSecondary : active ? pal.text : pal.textTertiary,
      transition: `color ${motion.smooth} ${motion.easeInOut}, font-weight ${motion.normal} ${motion.easeInOut}`
    } }, s));
  }));
}
function SpringToggle({ checked, onChange, label, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [press, setPress] = useState(false);
  const thumbW = press ? 24 : 20;
  return /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 12, cursor: "pointer" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onChange?.(!checked),
      onMouseDown: () => setPress(true),
      onMouseUp: () => setPress(false),
      onMouseLeave: () => setPress(false),
      role: "switch",
      "aria-checked": checked,
      style: {
        ...interactiveBase,
        width: 44,
        height: 24,
        borderRadius: 12,
        background: checked ? pal.accent : pal.bgMuted,
        position: "relative",
        padding: 0,
        flexShrink: 0,
        transition: `background ${motion.normal} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      width: thumbW,
      height: 20,
      borderRadius: 10,
      background: checked ? "#fff" : pal.bgElevated,
      position: "absolute",
      top: 2,
      left: checked ? 44 - thumbW - 2 : 2,
      transition: `left ${motion.spring} ${motion.springCurve}, width ${motion.fast} ${motion.easeOut}, background ${motion.smooth} ${motion.easeInOut}`,
      boxShadow: "0 1px 3px rgba(0,0,0,0.15)"
    } })
  ), label && /* @__PURE__ */ React.createElement(Text, { size: "base", theme }, label));
}
function SpringSlider({ value, onChange, min = 0, max = 100, label, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [dragging, setDragging] = useState(false);
  const [hover, setHover] = useState(false);
  const trackRef = useRef(null);
  const pct = (value - min) / (max - min) * 100;
  const applyEvent = (clientX) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    onChange?.(Math.round(min + x * (max - min)));
  };
  useEffect(() => {
    if (!dragging) return;
    const m = (e) => applyEvent(e.clientX);
    const u = () => setDragging(false);
    window.addEventListener("mousemove", m);
    window.addEventListener("mouseup", u);
    return () => {
      window.removeEventListener("mousemove", m);
      window.removeEventListener("mouseup", u);
    };
  }, [dragging]);
  const thumbScale = dragging ? 1.3 : hover ? 1.12 : 1;
  const thumbTrans = dragging ? `transform ${motion.fast} ${motion.easeOut}, box-shadow ${motion.normal} ${motion.easeOut}` : `transform ${motion.spring} ${motion.springCurve}, box-shadow ${motion.normal} ${motion.easeOut}, left ${motion.spring} ${motion.springCurve}`;
  const fillTrans = dragging ? "none" : `width ${motion.spring} ${motion.springCurve}`;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: trackRef,
      onMouseDown: (e) => {
        setDragging(true);
        applyEvent(e.clientX);
      },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: "relative",
        flex: 1,
        height: 20,
        cursor: "pointer",
        display: "flex",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 4,
      borderRadius: 2,
      background: pal.bgMuted,
      transition: `background ${motion.smooth} ${motion.easeInOut}`
    } }),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: 0,
      height: 4,
      width: `${pct}%`,
      borderRadius: 2,
      background: pal.accent,
      transition: fillTrans
    } }),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      left: `${pct}%`,
      transform: `translate(-50%, 0) scale(${thumbScale})`,
      width: 14,
      height: 14,
      borderRadius: 7,
      background: "#fff",
      border: `1.5px solid ${pal.accent}`,
      boxShadow: dragging ? `0 0 0 6px ${pal.accent}22, 0 1px 3px rgba(0,0,0,0.18)` : "0 1px 3px rgba(0,0,0,0.15)",
      transition: thumbTrans
    } })
  ), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textTertiary, fontFamily: tokens.font.mono, fontVariantNumeric: "tabular-nums", minWidth: 32, textAlign: "right" } }, value)));
}
function CopyInput({ value, label, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [copied, setCopied] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hover, setHover] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard?.writeText(value);
    } catch {
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, ...sp } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        background: pal.bgInput,
        borderRadius: tokens.radius.md,
        border: focused ? `1.5px solid ${pal.borderFocus}` : hover ? `1.5px solid ${pal.borderSubtle}` : "1.5px solid transparent",
        transition: `border-color ${motion.normal} ${motion.easeInOut}, background ${motion.smooth} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        readOnly: true,
        value,
        onFocus: (e) => {
          e.target.select();
          setFocused(true);
        },
        onBlur: () => setFocused(false),
        style: {
          ...tokens.type.base,
          flex: 1,
          minWidth: 0,
          padding: "10px 8px 10px 16px",
          background: "transparent",
          border: "none",
          outline: "none",
          color: pal.text,
          fontFamily: tokens.font.mono,
          textOverflow: "ellipsis"
        }
      }
    ),
    /* @__PURE__ */ React.createElement("button", { onClick: copy, style: {
      ...interactiveBase,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      margin: 4,
      borderRadius: tokens.radius.sm,
      background: copied ? pal.accentBg : "transparent",
      color: copied ? pal.accent : pal.textSecondary,
      ...tokens.type.xs,
      fontWeight: tokens.weight.medium,
      fontFamily: tokens.font.sans,
      transition: `background ${motion.normal} ${motion.easeInOut}, color ${motion.normal} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      width: 12,
      height: 12,
      transform: copied ? "scale(1.15)" : "scale(1)",
      transition: `transform ${motion.spring} ${motion.springCurve}`
    } }, copied ? /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3", style: { strokeDasharray: 14, strokeDashoffset: 14, animation: `halaska-check-draw 0.3s ${motion.easeOut} forwards` } })) : /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "3.5", width: "7", height: "7", rx: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M2 7.5V3a1.5 1.5 0 0 1 1.5-1.5H8" }))), /* @__PURE__ */ React.createElement("span", { style: { transition: `opacity ${motion.fast} ${motion.easeInOut}` } }, copied ? "Copied" : "Copy"))
  ));
}
function SubtleTabs({ tabs, value, onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const containerRef = useRef(null);
  const [rect, setRect] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!containerRef.current) return;
    const measure = () => {
      const btn = containerRef.current?.querySelector(`[data-subtle-tab="${value}"]`);
      if (btn) {
        const p2 = containerRef.current.getBoundingClientRect();
        const r = btn.getBoundingClientRect();
        setRect({ left: r.left - p2.left, width: r.width });
        setReady(true);
      }
    };
    measure();
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [value, tabs]);
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, style: {
    position: "relative",
    display: "inline-flex",
    gap: 2,
    padding: 4,
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    top: 4,
    bottom: 4,
    left: rect.left,
    width: rect.width,
    background: pal.bgElevated,
    borderRadius: tokens.radius.sm,
    boxShadow: `0 1px 2px ${pal.shadow}, 0 0 0 1px ${pal.borderSubtle}`,
    opacity: ready ? 1 : 0,
    pointerEvents: "none",
    transition: `left ${motion.spring} ${motion.springCurve}, width ${motion.spring} ${motion.springCurve}, opacity ${motion.fast} ${motion.easeOut}, background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
  } }), tabs.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t,
      "data-subtle-tab": t,
      onClick: () => onChange(t),
      style: {
        ...interactiveBase,
        ...tokens.type.sm,
        fontFamily: tokens.font.sans,
        fontWeight: value === t ? tokens.weight.semibold : tokens.weight.medium,
        color: value === t ? pal.text : pal.textSecondary,
        padding: "8px 16px",
        background: "transparent",
        position: "relative",
        zIndex: 1,
        transition: `color ${motion.normal} ${motion.easeInOut}, font-weight ${motion.normal} ${motion.easeInOut}`
      }
    },
    t
  )));
}
function ProgressCircle({ value = 0, size = 48, stroke = 4, label, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const clamped = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - clamped / 100 * c;
  return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("svg", { width: size, height: size, style: { transform: "rotate(-90deg)" } }, /* @__PURE__ */ React.createElement("circle", { cx: size / 2, cy: size / 2, r, fill: "none", stroke: pal.bgMuted, strokeWidth: stroke, style: { transition: `stroke ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(
    "circle",
    {
      cx: size / 2,
      cy: size / 2,
      r,
      fill: "none",
      stroke: pal.accent,
      strokeWidth: stroke,
      strokeDasharray: c,
      strokeDashoffset: off,
      strokeLinecap: "round",
      style: { transition: `stroke-dashoffset ${motion.smooth} ${motion.emphasized}, stroke ${motion.smooth} ${motion.easeInOut}` }
    }
  )), label != null && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: Math.round(size * 0.28), fontWeight: tokens.weight.semibold, color: pal.text, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" } }, label));
}
function Rating({ value = 0, onChange, max = 5, size = 18, readOnly, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(0);
  const [burst, setBurst] = useState(-1);
  const click = (n) => {
    if (readOnly) return;
    onChange?.(n);
    setBurst(n - 1);
    setTimeout(() => setBurst(-1), 500);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", gap: 4, alignItems: "center" }, onMouseLeave: () => setHover(0) }, Array.from({ length: max }).map((_, i) => {
    const isCurrent = i < value;
    const isPreview = hover > 0 && i < hover;
    let color, opacity;
    if (isPreview && !isCurrent) {
      color = pal.warning;
      opacity = 0.45;
    } else if (isCurrent) {
      color = pal.warning;
      opacity = 1;
    } else {
      color = pal.bgMuted;
      opacity = 1;
    }
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        disabled: readOnly,
        onClick: () => click(i + 1),
        onMouseEnter: () => !readOnly && setHover(i + 1),
        style: {
          ...interactiveBase,
          background: "transparent",
          padding: 0,
          lineHeight: 1,
          color,
          opacity,
          fontSize: size,
          position: "relative",
          transform: hover === i + 1 ? "scale(1.15)" : "scale(1)",
          transition: `color ${motion.fast} ${motion.easeInOut}, opacity ${motion.fast} ${motion.easeInOut}, transform ${motion.spring} ${motion.springCurve}`,
          cursor: readOnly ? "default" : "pointer"
        }
      },
      "\u2605",
      burst === i && /* @__PURE__ */ React.createElement("span", { "aria-hidden": true, style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: pal.warning,
        fontSize: size,
        pointerEvents: "none",
        animation: `halaska-star-burst 0.5s ${motion.easeOut} forwards`
      } }, "\u2605")
    );
  }));
}
function StatusBadge({ status = "default", children, pulse, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const colorMap = {
    default: pal.textSecondary,
    online: pal.success,
    offline: pal.textTertiary,
    pending: pal.warning,
    error: pal.danger,
    accent: pal.accent
  };
  const color = colorMap[status] || colorMap.default;
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "3px 10px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    ...tokens.type.xs,
    fontWeight: tokens.weight.medium,
    color: pal.text,
    fontFamily: tokens.font.sans,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { position: "relative", width: 6, height: 6, borderRadius: 3, background: color, flexShrink: 0, transition: `background ${motion.smooth} ${motion.easeInOut}` } }, pulse && /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", inset: 0, borderRadius: 3, background: color, animation: `halaska-live-pulse 1.4s ${motion.easeOut} infinite` } })), children);
}
function Stepper({ steps, current = 0, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", width: "100%", fontFamily: tokens.font.sans } }, steps.map((s, i) => {
    const done = i < current;
    const active = i === current;
    const nextReached = i + 1 <= current;
    const last = i === steps.length - 1;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", minWidth: 0 } }, !last && /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: 11,
      left: "50%",
      right: "-50%",
      height: 2,
      background: nextReached ? pal.accent : pal.bgMuted,
      transition: `background ${motion.smooth} ${motion.easeInOut}`,
      zIndex: 0
    } }), /* @__PURE__ */ React.createElement("div", { style: {
      position: "relative",
      zIndex: 1,
      width: active ? 24 : 16,
      height: active ? 24 : 16,
      borderRadius: active ? 12 : 8,
      background: done ? pal.accent : active ? pal.bgElevated : pal.bgMuted,
      border: active ? `2px solid ${pal.accent}` : "none",
      color: done ? "#fff" : active ? pal.accent : pal.textTertiary,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: active ? 11 : 9,
      fontWeight: tokens.weight.semibold,
      fontFamily: tokens.font.sans,
      marginTop: active ? 0 : 4,
      transition: `all ${motion.spring} ${motion.springCurve}`
    } }, done ? "\u2713" : i + 1), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 6,
      ...tokens.type.xs,
      textAlign: "center",
      color: active ? pal.text : pal.textTertiary,
      fontWeight: active ? tokens.weight.medium : tokens.weight.regular,
      transition: `color ${motion.smooth} ${motion.easeInOut}, font-weight ${motion.normal} ${motion.easeInOut}`,
      padding: "0 4px"
    } }, s));
  }));
}
function CommandPalette({ items = [], placeholder = "Type a command or search\u2026", theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [query, setQuery] = useState("");
  const [idx, setIdx] = useState(0);
  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    setIdx(0);
  }, [query]);
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 420,
    maxWidth: "100%",
    fontFamily: tokens.font.sans,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.lg,
    boxShadow: `0 16px 48px ${pal.shadowLg}`,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: `1px solid ${pal.borderSubtle}` } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, fontSize: 14, display: "inline-flex" } }, "\u2315"), /* @__PURE__ */ React.createElement(
    "input",
    {
      value: query,
      onChange: (e) => setQuery(e.target.value),
      placeholder,
      onKeyDown: (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setIdx((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setIdx((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
          e.preventDefault();
          filtered[idx]?.onSelect?.();
        }
      },
      style: { flex: 1, background: "transparent", border: "none", outline: "none", color: pal.text, fontFamily: tokens.font.sans, ...tokens.type.base }
    }
  ), /* @__PURE__ */ React.createElement(Kbd, { theme }, "\u2318K")), /* @__PURE__ */ React.createElement("div", { style: { maxHeight: 240, overflowY: "auto", padding: 8 } }, filtered.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 16px", textAlign: "center", color: pal.textTertiary, ...tokens.type.sm } }, 'No results for "', query, '"') : filtered.map((item, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: i,
      onClick: () => item.onSelect?.(),
      onMouseEnter: () => setIdx(i),
      style: {
        ...interactiveBase,
        width: "100%",
        padding: "8px 12px",
        borderRadius: tokens.radius.sm,
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: idx === i ? pal.bgSubtle : "transparent",
        color: pal.text,
        ...tokens.type.sm,
        fontFamily: tokens.font.sans,
        textAlign: "left",
        border: "none",
        transition: `background ${motion.fast} ${motion.easeInOut}`
      }
    },
    item.icon && /* @__PURE__ */ React.createElement("span", { style: { color: idx === i ? pal.text : pal.textSecondary, width: 18, display: "inline-flex", justifyContent: "center" } }, item.icon),
    /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, item.label),
    item.shortcut && /* @__PURE__ */ React.createElement(Kbd, { theme }, item.shortcut)
  ))));
}
function CommandMenu({ open, onClose, items = [], placeholder = "Type a command or search\u2026", theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [query, setQuery] = useState("");
  const [idx, setIdx] = useState(0);
  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    if (open) {
      setQuery("");
      setIdx(0);
    }
  }, [open]);
  useEffect(() => {
    setIdx(0);
  }, [query]);
  useEffect(() => {
    if (!open) return;
    const h = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose?.();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setIdx((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        filtered[idx]?.onSelect?.();
        onClose?.();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, filtered, idx, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    zIndex: 1e4,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "14vh",
    animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both`
  } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    width: 520,
    maxWidth: "92vw",
    fontFamily: tokens.font.sans,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.lg,
    boxShadow: `0 16px 48px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: `1px solid ${pal.borderSubtle}` } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, fontSize: 14, display: "inline-flex" } }, "\u2315"), /* @__PURE__ */ React.createElement(
    "input",
    {
      autoFocus: true,
      value: query,
      onChange: (e) => setQuery(e.target.value),
      placeholder,
      style: {
        flex: 1,
        background: "transparent",
        border: "none",
        outline: "none",
        color: pal.text,
        fontFamily: tokens.font.sans,
        ...tokens.type.base
      }
    }
  ), /* @__PURE__ */ React.createElement(Kbd, { theme }, "Esc")), /* @__PURE__ */ React.createElement("div", { style: { maxHeight: 320, overflowY: "auto", padding: 8 } }, filtered.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 16px", textAlign: "center", color: pal.textTertiary, ...tokens.type.sm } }, 'No results for "', query, '"') : filtered.map((item, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: i,
      onClick: () => {
        item.onSelect?.();
        onClose?.();
      },
      onMouseEnter: () => setIdx(i),
      style: {
        ...interactiveBase,
        width: "100%",
        padding: "8px 12px",
        borderRadius: tokens.radius.sm,
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: idx === i ? pal.bgSubtle : "transparent",
        color: pal.text,
        ...tokens.type.sm,
        fontFamily: tokens.font.sans,
        textAlign: "left",
        border: "none",
        transition: `background ${motion.fast} ${motion.easeInOut}`
      }
    },
    item.icon && /* @__PURE__ */ React.createElement("span", { style: { color: idx === i ? pal.text : pal.textSecondary, width: 18, display: "inline-flex", justifyContent: "center", transition: `color ${motion.fast} ${motion.easeInOut}` } }, item.icon),
    /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, item.label),
    item.shortcut && /* @__PURE__ */ React.createElement(Kbd, { theme }, item.shortcut)
  ))), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 16px", borderTop: `1px solid ${pal.borderSubtle}`, background: pal.bgSubtle, ...tokens.type.xs, color: pal.textTertiary, display: "flex", gap: 16, transition: `background ${motion.smooth} ${motion.easeInOut}, border-color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("span", null, "\u2191\u2193 navigate"), /* @__PURE__ */ React.createElement("span", null, "\u21B5 select"), /* @__PURE__ */ React.createElement("span", null, "esc close"))));
}
function Chip({ children, selected, onToggle, onRemove, icon, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggle,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: tokens.radius.pill,
        background: selected ? pal.accentBg : hover ? pal.bgMuted : pal.bgSubtle,
        color: selected ? pal.accent : pal.text,
        border: `1px solid ${selected ? pal.accent + "55" : "transparent"}`,
        ...tokens.type.xs,
        fontWeight: tokens.weight.medium,
        fontFamily: tokens.font.sans,
        letterSpacing: "0.01em",
        transition: `all ${motion.normal} ${motion.easeInOut}`
      }
    },
    icon && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex" } }, icon),
    children,
    onRemove && /* @__PURE__ */ React.createElement(
      "span",
      {
        role: "button",
        onClick: (e) => {
          e.stopPropagation();
          onRemove();
        },
        style: { marginLeft: 2, color: pal.textTertiary, fontSize: 12, lineHeight: 1, cursor: "pointer" }
      },
      "\xD7"
    )
  );
}
function InputGroup({ prefix, suffix, value, onChange, placeholder, label, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [focused, setFocused] = useState(false);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "stretch",
        height: 38,
        background: pal.bgInput,
        borderRadius: tokens.radius.md,
        border: focused ? `1.5px solid ${pal.borderFocus}` : hover ? `1.5px solid ${pal.borderSubtle}` : "1.5px solid transparent",
        transition: `border-color ${motion.normal} ${motion.easeInOut}, background ${motion.smooth} ${motion.easeInOut}`,
        overflow: "hidden",
        ...sp
      }
    },
    prefix != null && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", padding: "0 12px", color: pal.textTertiary, ...tokens.type.sm, fontFamily: tokens.font.sans, borderRight: `1px solid ${pal.borderSubtle}`, background: pal.bgSubtle, transition: `all ${motion.smooth} ${motion.easeInOut}` } }, prefix),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        value,
        onChange: (e) => onChange?.(e.target.value),
        placeholder,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        style: { flex: 1, minWidth: 0, padding: "0 16px", border: "none", outline: "none", background: "transparent", color: pal.text, fontFamily: tokens.font.sans, ...tokens.type.base }
      }
    ),
    suffix != null && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", padding: "0 12px", color: pal.textTertiary, ...tokens.type.sm, fontFamily: tokens.font.sans, borderLeft: `1px solid ${pal.borderSubtle}`, background: pal.bgSubtle, transition: `all ${motion.smooth} ${motion.easeInOut}` } }, suffix)
  ));
}
function Combobox({ options = [], value, onChange, placeholder = "Select\u2026", label, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [query, setQuery] = useState("");
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  const filtered = options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()));
  const selected = options.find((o) => o.value === value);
  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { ref, style: { position: "relative", display: "flex", flexDirection: "column", gap: 4, minWidth: 220 } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen((o) => !o),
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 38,
        padding: "0 16px",
        background: pal.bgInput,
        borderRadius: tokens.radius.md,
        border: open ? `1.5px solid ${pal.borderFocus}` : hover ? `1.5px solid ${pal.borderSubtle}` : "1.5px solid transparent",
        color: selected ? pal.text : pal.textTertiary,
        ...tokens.type.base,
        fontFamily: tokens.font.sans,
        transition: `border-color ${motion.normal} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("span", null, selected ? selected.label : placeholder),
    /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, display: "inline-flex" } }, /* @__PURE__ */ React.createElement(ChevronIcon, { size: 12, direction: open ? "up" : "down" }))
  ), open && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    right: 0,
    zIndex: 100,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.md,
    boxShadow: `0 8px 24px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      autoFocus: true,
      value: query,
      onChange: (e) => setQuery(e.target.value),
      placeholder: "Filter\u2026",
      onKeyDown: (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setIdx((i) => Math.min(i + 1, filtered.length - 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setIdx((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (filtered[idx]) {
            onChange?.(filtered[idx].value);
            setOpen(false);
          }
        } else if (e.key === "Escape") setOpen(false);
      },
      style: { width: "100%", padding: "10px 16px", background: "transparent", border: "none", outline: "none", borderBottom: `1px solid ${pal.borderSubtle}`, color: pal.text, fontFamily: tokens.font.sans, ...tokens.type.sm, boxSizing: "border-box" }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { maxHeight: 200, overflowY: "auto", padding: 4 } }, filtered.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: 12, textAlign: "center", color: pal.textTertiary, ...tokens.type.sm } }, "No results") : filtered.map((o, i) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: o.value,
      onClick: () => {
        onChange?.(o.value);
        setOpen(false);
      },
      onMouseEnter: () => setIdx(i),
      style: {
        ...interactiveBase,
        width: "100%",
        padding: "8px 12px",
        borderRadius: tokens.radius.sm,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: idx === i ? pal.bgSubtle : "transparent",
        color: pal.text,
        ...tokens.type.sm,
        textAlign: "left",
        fontFamily: tokens.font.sans,
        transition: `background ${motion.fast} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("span", null, o.label),
    o.value === value && /* @__PURE__ */ React.createElement("span", { style: { color: pal.accent, fontSize: 12 } }, "\u2713")
  )))));
}
function Calendar({ value, onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const today = /* @__PURE__ */ new Date();
  const [view, setView] = useState(value || today);
  const year = view.getFullYear();
  const month = view.getMonth();
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  const monthName = first.toLocaleString("default", { month: "long" });
  const sameDate = (a, b) => a && b && a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
  return /* @__PURE__ */ React.createElement("div", { style: { width: 260, padding: 16, background: pal.bgElevated, borderRadius: tokens.radius.md, border: `1px solid ${pal.borderSubtle}`, fontFamily: tokens.font.sans, transition: `all ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setView(new Date(year, month - 1, 1)), style: { ...interactiveBase, background: "transparent", padding: "4px 8px", color: pal.textSecondary, borderRadius: tokens.radius.sm, ...tokens.type.base } }, "\u2039"), /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, fontWeight: tokens.weight.medium, color: pal.text } }, monthName, " ", year), /* @__PURE__ */ React.createElement("button", { onClick: () => setView(new Date(year, month + 1, 1)), style: { ...interactiveBase, background: "transparent", padding: "4px 8px", color: pal.textSecondary, borderRadius: tokens.radius.sm, ...tokens.type.base } }, "\u203A")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 } }, ["S", "M", "T", "W", "T", "F", "S"].map((d, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { ...tokens.type.xxs, color: pal.textTertiary, textAlign: "center", padding: "6px 0", textTransform: "uppercase", letterSpacing: 0.5 } }, d)), cells.map((d, i) => {
    const date = d ? new Date(year, month, d) : null;
    const isToday = sameDate(date, today);
    const isSelected = sameDate(date, value);
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        disabled: !d,
        onClick: () => d && onChange?.(date),
        style: {
          ...interactiveBase,
          padding: "6px 0",
          borderRadius: tokens.radius.sm,
          background: isSelected ? pal.accent : "transparent",
          color: !d ? "transparent" : isSelected ? "#fff" : isToday ? pal.accent : pal.text,
          fontWeight: isToday || isSelected ? tokens.weight.semibold : tokens.weight.regular,
          ...tokens.type.sm,
          border: isToday && !isSelected ? `1px solid ${pal.accent}` : "1px solid transparent",
          transition: `all ${motion.fast} ${motion.easeInOut}`
        }
      },
      d || ""
    );
  })));
}
function DatePicker({ value, onChange, label, placeholder = "Pick a date", theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const h = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const formatted = value ? value.toLocaleDateString("default", { year: "numeric", month: "short", day: "numeric" }) : null;
  return /* @__PURE__ */ React.createElement("div", { ref, style: { position: "relative", display: "flex", flexDirection: "column", gap: 4, minWidth: 220 } }, label && /* @__PURE__ */ React.createElement(Label, { theme }, label), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen((o) => !o),
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 38,
        padding: "0 16px",
        background: pal.bgInput,
        borderRadius: tokens.radius.md,
        border: open ? `1.5px solid ${pal.borderFocus}` : hover ? `1.5px solid ${pal.borderSubtle}` : "1.5px solid transparent",
        color: formatted ? pal.text : pal.textTertiary,
        ...tokens.type.base,
        fontFamily: tokens.font.sans,
        transition: `border-color ${motion.normal} ${motion.easeInOut}`,
        textAlign: "left"
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, fontSize: 14, display: "inline-flex" } }, "\u232F"),
    /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, formatted || placeholder)
  ), open && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "calc(100% + 4px)", left: 0, zIndex: 100 } }, /* @__PURE__ */ React.createElement(Calendar, { theme, value, onChange: (d) => {
    onChange?.(d);
    setOpen(false);
  } })));
}
function ContextMenu({ items, children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [menu, setMenu] = useState(null);
  const handle = (e) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    if (!menu) return;
    const close = () => setMenu(null);
    document.addEventListener("click", close);
    document.addEventListener("contextmenu", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("contextmenu", close);
    };
  }, [menu]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { onContextMenu: handle }, children), menu && /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    position: "fixed",
    top: menu.y,
    left: menu.x,
    zIndex: 1e4,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.md,
    padding: 4,
    minWidth: 180,
    boxShadow: `0 8px 24px ${pal.shadowLg}`,
    fontFamily: tokens.font.sans,
    animation: `halaska-scale-in ${motion.fast} ${motion.emphasized} both`,
    transformOrigin: "top left"
  } }, items.map((it, i) => it.separator ? /* @__PURE__ */ React.createElement("div", { key: i, style: { height: 1, background: pal.borderSubtle, margin: "4px 0" } }) : /* @__PURE__ */ React.createElement(
    "button",
    {
      key: i,
      onClick: () => {
        it.onSelect?.();
        setMenu(null);
      },
      onMouseEnter: (e) => e.currentTarget.style.background = pal.bgSubtle,
      onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
      style: {
        ...interactiveBase,
        width: "100%",
        padding: "7px 10px",
        borderRadius: tokens.radius.sm,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "transparent",
        color: it.danger ? pal.danger : pal.text,
        ...tokens.type.sm,
        textAlign: "left",
        transition: `background ${motion.fast} ${motion.easeInOut}`
      }
    },
    it.icon && /* @__PURE__ */ React.createElement("span", { style: { color: pal.textSecondary, width: 14, display: "inline-flex" } }, it.icon),
    /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, it.label),
    it.shortcut && /* @__PURE__ */ React.createElement(Kbd, { theme }, it.shortcut)
  ))));
}
function Menubar({ menus, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(null);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", gap: 2, padding: 4, background: pal.bgSubtle, borderRadius: tokens.radius.md, fontFamily: tokens.font.sans, position: "relative", transition: `background ${motion.smooth} ${motion.easeInOut}` } }, menus.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: m.label, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen((o) => o === i ? null : i),
      onMouseEnter: () => {
        if (open !== null) setOpen(i);
      },
      style: {
        ...interactiveBase,
        padding: "6px 12px",
        borderRadius: tokens.radius.sm,
        background: open === i ? pal.bgElevated : "transparent",
        color: pal.text,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        transition: `background ${motion.fast} ${motion.easeInOut}`
      }
    },
    m.label
  ), open === i && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { onClick: () => setOpen(null), style: { position: "fixed", inset: 0, zIndex: 99 } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    zIndex: 100,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.md,
    padding: 4,
    minWidth: 180,
    boxShadow: `0 8px 24px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.fast} ${motion.emphasized} both`
  } }, m.items.map((it, j) => it.separator ? /* @__PURE__ */ React.createElement("div", { key: j, style: { height: 1, background: pal.borderSubtle, margin: "4px 0" } }) : /* @__PURE__ */ React.createElement(
    "button",
    {
      key: j,
      onClick: () => {
        it.onSelect?.();
        setOpen(null);
      },
      onMouseEnter: (e) => e.currentTarget.style.background = pal.bgSubtle,
      onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
      style: {
        ...interactiveBase,
        width: "100%",
        padding: "7px 10px",
        borderRadius: tokens.radius.sm,
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: it.danger ? pal.danger : pal.text,
        background: "transparent",
        ...tokens.type.sm,
        textAlign: "left",
        transition: `background ${motion.fast} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, it.label),
    it.shortcut && /* @__PURE__ */ React.createElement(Kbd, { theme }, it.shortcut)
  )))))));
}
function Sparkline({ data = [], width = 240, height = 72, color, fill = true, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  if (!data.length) return null;
  const values = typeof data[0] === "number" ? data : data.map((d2) => d2.value);
  const stroke = color || pal.accent;
  const W = 240, H = 72, PAD = 6;
  const min = Math.min(...values), max = Math.max(...values), span = max - min || 1;
  const pts = values.map((v, i) => [
    PAD + i / Math.max(values.length - 1, 1) * (W - PAD * 2),
    PAD + (1 - (v - min) / span) * (H - PAD * 2)
  ]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p2[0]} ${p2[1]}`;
  }
  const area = `${d} L ${pts[pts.length - 1][0]} ${H} L ${pts[0][0]} ${H} Z`;
  const gradId = `halaska-spark-${stroke.replace(/[^a-z0-9]/gi, "")}`;
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: `0 0 ${W} ${H}`,
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      style: { width, height, display: "block", overflow: "visible", animation: `halaska-fade-in ${motion.smooth} ${motion.easeOut} both`, ...sp }
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: gradId, x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: stroke, stopOpacity: 0.28 }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: stroke, stopOpacity: 0 }))),
    fill && /* @__PURE__ */ React.createElement("path", { d: area, fill: `url(#${gradId})` }),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d,
        fill: "none",
        stroke,
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        vectorEffect: "non-scaling-stroke",
        style: { transition: `stroke ${motion.smooth} ${motion.easeInOut}` }
      }
    ),
    /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: pts[pts.length - 1][0],
        cy: pts[pts.length - 1][1],
        r: 3,
        fill: stroke,
        stroke: pal.bgElevated,
        strokeWidth: 1.5,
        vectorEffect: "non-scaling-stroke"
      }
    )
  );
}
function DataTable({ columns, rows, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [sort, setSort] = useState({ key: null, dir: "asc" });
  const [selected, setSelected] = useState(/* @__PURE__ */ new Set());
  const [hoverRow, setHoverRow] = useState(-1);
  const sortedRows = sort.key != null ? [...rows].sort((a, b) => {
    const av = a[sort.key];
    const bv = b[sort.key];
    const sign = sort.dir === "asc" ? 1 : -1;
    return av > bv ? sign : av < bv ? -sign : 0;
  }) : rows;
  const toggleAll = () => {
    if (selected.size === rows.length) setSelected(/* @__PURE__ */ new Set());
    else setSelected(new Set(rows.map((_, i) => i)));
  };
  const toggleRow = (i) => {
    const s = new Set(selected);
    s.has(i) ? s.delete(i) : s.add(i);
    setSelected(s);
  };
  const toggleSort = (i) => {
    if (sort.key === i) setSort({ key: i, dir: sort.dir === "asc" ? "desc" : "asc" });
    else setSort({ key: i, dir: "asc" });
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", overflow: "auto", borderRadius: tokens.radius.md, border: `1px solid ${pal.borderSubtle}`, transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: `1px solid ${pal.borderSubtle}` } }, /* @__PURE__ */ React.createElement("th", { style: { padding: "10px 14px", width: 24 } }, /* @__PURE__ */ React.createElement(Checkbox, { theme, checked: selected.size === rows.length && rows.length > 0, onChange: toggleAll })), columns.map((col, i) => /* @__PURE__ */ React.createElement("th", { key: i, onClick: () => toggleSort(i), style: { ...tokens.type.xs, fontWeight: tokens.weight.semibold, color: pal.textTertiary, textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer", userSelect: "none", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 } }, col, sort.key === i && /* @__PURE__ */ React.createElement("span", { style: { color: pal.text } }, sort.dir === "asc" ? "\u2191" : "\u2193")))))), /* @__PURE__ */ React.createElement("tbody", null, sortedRows.map((row, ri) => /* @__PURE__ */ React.createElement(
    "tr",
    {
      key: ri,
      onMouseEnter: () => setHoverRow(ri),
      onMouseLeave: () => setHoverRow(-1),
      style: { borderBottom: ri < sortedRows.length - 1 ? `1px solid ${pal.borderSubtle}` : "none", background: selected.has(ri) ? pal.accentBg : hoverRow === ri ? pal.bgSubtle : "transparent", transition: `background ${motion.normal} ${motion.easeInOut}` }
    },
    /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 14px" } }, /* @__PURE__ */ React.createElement(Checkbox, { theme, checked: selected.has(ri), onChange: () => toggleRow(ri) })),
    row.map((cell, ci) => /* @__PURE__ */ React.createElement("td", { key: ci, style: { ...tokens.type.sm, color: pal.text, padding: "10px 14px", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, cell))
  )))));
}
function AlertDialog({ open, onClose, title, description, variant = "danger", confirmLabel = "Confirm", cancelLabel = "Cancel", onConfirm, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  if (!open) return null;
  const iconColor = variant === "danger" ? pal.danger : variant === "warning" ? pal.warning : pal.accent;
  const iconBg = variant === "danger" ? pal.dangerBg : variant === "warning" ? pal.warningBg : pal.accentBg;
  const icon = variant === "danger" ? "!" : variant === "warning" ? "\u26A0" : "\u2139";
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1e4,
    animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both`
  } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: tokens.radius.lg,
    padding: 24,
    minWidth: 320,
    maxWidth: 420,
    border: `1px solid ${pal.borderSubtle}`,
    boxShadow: `0 16px 48px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
    fontFamily: tokens.font.sans
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 40, borderRadius: 20, background: iconBg, color: iconColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: tokens.weight.bold, flexShrink: 0 } }, icon), /* @__PURE__ */ React.createElement("div", null, title && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.lg, fontWeight: tokens.weight.semibold, color: pal.text, marginBottom: 6 } }, title), description && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textSecondary, lineHeight: 1.6 } }, description))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8 } }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: onClose }, cancelLabel), /* @__PURE__ */ React.createElement(Button, { theme, variant: variant === "danger" ? "danger" : "primary", size: "sm", onClick: () => {
    onConfirm?.();
    onClose?.();
  } }, confirmLabel))));
}
function FormDialog({ open, onClose, title, description, children, submitLabel = "Save", onSubmit, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  if (!open) return null;
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1e4,
    animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both`
  } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: tokens.radius.lg,
    padding: 24,
    minWidth: 360,
    maxWidth: 480,
    border: `1px solid ${pal.borderSubtle}`,
    boxShadow: `0 16px 48px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
    fontFamily: tokens.font.sans
  } }, title && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.lg, fontWeight: tokens.weight.semibold, color: pal.text, marginBottom: description ? 4 : 16 } }, title), description && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textSecondary, marginBottom: 16, lineHeight: 1.6 } }, description), /* @__PURE__ */ React.createElement("form", { onSubmit: (e) => {
    e.preventDefault();
    onSubmit?.();
    onClose?.();
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, children), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20, display: "flex", justifyContent: "flex-end", gap: 8 } }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm" }, submitLabel)))));
}
function CardDialog({ open, onClose, cover, title, description, children, actions, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  if (!open) return null;
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1e4,
    animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both`
  } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: tokens.radius.lg,
    overflow: "hidden",
    minWidth: 360,
    maxWidth: 480,
    border: `1px solid ${pal.borderSubtle}`,
    boxShadow: `0 16px 48px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
    fontFamily: tokens.font.sans
  } }, cover && /* @__PURE__ */ React.createElement("div", { style: { height: 140, background: `linear-gradient(135deg, ${pal.accent}, ${pal.accentHover})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 32, transition: `background ${motion.smooth} ${motion.easeInOut}` } }, cover), /* @__PURE__ */ React.createElement("div", { style: { padding: 24 } }, title && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.lg, fontWeight: tokens.weight.semibold, color: pal.text, marginBottom: 4 } }, title), description && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textSecondary, marginBottom: 16, lineHeight: 1.6 } }, description), children && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, children), actions && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" } }, actions))));
}
function Accordion({ items, defaultOpen = -1, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [openIdx, setOpenIdx] = useState(defaultOpen);
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%" } }, items.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { borderBottom: `1px solid ${pal.borderSubtle}`, transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpenIdx(openIdx === i ? -1 : i), style: {
    ...interactiveBase,
    width: "100%",
    textAlign: "left",
    padding: "14px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...tokens.type.base,
    fontWeight: tokens.weight.medium,
    color: pal.text,
    background: "transparent",
    transition: `color ${motion.normal} ${motion.easeInOut}`
  } }, item.title, /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, display: "inline-flex" } }, /* @__PURE__ */ React.createElement(ChevronIcon, { size: 12, direction: openIdx === i ? "up" : "down" }))), /* @__PURE__ */ React.createElement("div", { style: {
    maxHeight: openIdx === i ? 200 : 0,
    overflow: "hidden",
    opacity: openIdx === i ? 1 : 0,
    transition: `max-height ${motion.smooth} ${motion.emphasized}, opacity ${motion.normal} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textSecondary, paddingBottom: 14, lineHeight: 1.6, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, item.content)))));
}
function Dialog({ open, onClose, title, children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  if (!open) return null;
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1e4,
    animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both`
  } }, /* @__PURE__ */ React.createElement("div", { onClick: (e) => e.stopPropagation(), style: {
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: tokens.radius.lg,
    padding: 24,
    minWidth: 320,
    maxWidth: 480,
    border: `1px solid ${pal.borderSubtle}`,
    boxShadow: `0 16px 48px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`
  } }, title && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.lg, fontWeight: tokens.weight.semibold, color: pal.text, marginBottom: 12, fontFamily: tokens.font.sans } }, title), /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.base, color: pal.textSecondary, lineHeight: 1.6, fontFamily: tokens.font.sans } }, children), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20, display: "flex", justifyContent: "flex-end", gap: 8 } }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", onClick: onClose }, "Confirm"))));
}
function Tooltip({ children, text, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { position: "relative", display: "inline-flex" },
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false)
    },
    children,
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: 6,
      padding: "5px 10px",
      borderRadius: tokens.radius.sm,
      background: theme === "dark" ? "#fff" : "#222",
      color: theme === "dark" ? "#222" : "#fff",
      ...tokens.type.xs,
      fontFamily: tokens.font.sans,
      whiteSpace: "nowrap",
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      transition: `opacity ${motion.fast} ${motion.easeInOut}`
    } }, text)
  );
}
function Popover({ trigger, children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "inline-flex" } }, /* @__PURE__ */ React.createElement("div", { onClick: () => setOpen(!open) }, trigger), open && /* @__PURE__ */ React.createElement("div", { onClick: () => setOpen(false), style: { position: "fixed", inset: 0, zIndex: 9999 } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "100%",
    left: 0,
    marginTop: 8,
    zIndex: 1e4,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.md,
    padding: 16,
    minWidth: 200,
    boxShadow: `0 8px 24px ${pal.shadowLg}`,
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0)" : "translateY(-4px)",
    pointerEvents: open ? "auto" : "none",
    transition: `opacity ${motion.fast} ${motion.easeOut}, transform ${motion.normal} ${motion.emphasized}`
  } }, children));
}
function Sheet({ open, onClose, title, children, side = "right", theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const isRight = side === "right";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, open && /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1e4, animation: `halaska-fade-in ${motion.fast} ${motion.easeOut} both` } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    top: 0,
    bottom: 0,
    [isRight ? "right" : "left"]: 0,
    width: 320,
    zIndex: 10001,
    background: theme === "dark" ? "rgba(26,26,26,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: `1px solid ${pal.borderSubtle}`,
    padding: 24,
    transform: open ? "translateX(0)" : `translateX(${isRight ? "100%" : "-100%"})`,
    transition: `transform ${motion.smooth} ${motion.emphasized}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, title && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.lg, fontWeight: tokens.weight.semibold, color: pal.text, fontFamily: tokens.font.sans } }, title), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { ...interactiveBase, background: "transparent", ...tokens.type.lg, color: pal.textTertiary, padding: 4 } }, "\u2715")), /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.base, color: pal.textSecondary, lineHeight: 1.6, fontFamily: tokens.font.sans } }, children)));
}
function Table({ columns, rows, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hoverRow, setHoverRow] = useState(-1);
  return /* @__PURE__ */ React.createElement("div", { style: { width: "100%", overflow: "auto", borderRadius: tokens.radius.md, border: `1px solid ${pal.borderSubtle}`, transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: `1px solid ${pal.borderSubtle}` } }, columns.map((col, i) => /* @__PURE__ */ React.createElement("th", { key: i, style: { ...tokens.type.xs, fontWeight: tokens.weight.semibold, color: pal.textTertiary, textAlign: "left", padding: "10px 14px", textTransform: "uppercase", letterSpacing: "0.05em", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, col)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((row, ri) => /* @__PURE__ */ React.createElement(
    "tr",
    {
      key: ri,
      onMouseEnter: () => setHoverRow(ri),
      onMouseLeave: () => setHoverRow(-1),
      style: { borderBottom: ri < rows.length - 1 ? `1px solid ${pal.borderSubtle}` : "none", background: hoverRow === ri ? pal.bgSubtle : "transparent", transition: `background ${motion.normal} ${motion.easeInOut}` }
    },
    row.map((cell, ci) => /* @__PURE__ */ React.createElement("td", { key: ci, style: { ...tokens.type.sm, color: pal.text, padding: "10px 14px", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, cell))
  )))));
}
function Tabs({ tabs, value, onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(null);
  const containerRef = useRef(null);
  const [rect, setRect] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!containerRef.current) return;
    const measure = () => {
      const btn = containerRef.current?.querySelector(`[data-tab="${value}"]`);
      if (btn) {
        const p2 = containerRef.current.getBoundingClientRect();
        const r = btn.getBoundingClientRect();
        setRect({ left: r.left - p2.left, width: r.width });
        setReady(true);
      }
    };
    measure();
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [value, tabs]);
  return /* @__PURE__ */ React.createElement("div", { ref: containerRef, style: { position: "relative", display: "flex", borderBottom: `1px solid ${pal.borderSubtle}`, gap: 0, transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, tabs.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t,
      "data-tab": t,
      onClick: () => onChange(t),
      onMouseEnter: () => setHover(t),
      onMouseLeave: () => setHover(null),
      style: {
        ...interactiveBase,
        ...tokens.type.sm,
        fontWeight: value === t ? tokens.weight.medium : tokens.weight.regular,
        color: value === t ? pal.text : hover === t ? pal.text : pal.textTertiary,
        padding: "10px 16px",
        background: "transparent",
        border: "none",
        transition: `color ${motion.normal} ${motion.easeInOut}, font-weight ${motion.normal} ${motion.easeInOut}`
      }
    },
    t
  )), /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    bottom: -1,
    height: 2,
    background: pal.accent,
    left: rect.left,
    width: rect.width,
    opacity: ready ? 1 : 0,
    transition: `left ${motion.spring} ${motion.springCurve}, width ${motion.spring} ${motion.springCurve}, opacity ${motion.fast} ${motion.easeOut}, background ${motion.smooth} ${motion.easeInOut}`,
    pointerEvents: "none"
  } }));
}
function Collapsible({ title, children, defaultOpen = false, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(defaultOpen);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: () => setOpen(!open), style: {
    ...interactiveBase,
    width: "100%",
    textAlign: "left",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ...tokens.type.base,
    fontWeight: tokens.weight.medium,
    color: pal.text,
    background: "transparent",
    transition: `color ${motion.normal} ${motion.easeInOut}`
  } }, title, /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, display: "inline-flex" } }, /* @__PURE__ */ React.createElement(ChevronIcon, { size: 12, direction: open ? "down" : "right" }))), /* @__PURE__ */ React.createElement("div", { style: { maxHeight: open ? 500 : 0, overflow: "hidden", opacity: open ? 1 : 0, transition: `max-height ${motion.smooth} ${motion.emphasized}, opacity ${motion.normal} ${motion.easeInOut}` } }, children));
}
function Toggle({ pressed, onPress, children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onPress?.(!pressed),
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        padding: "8px 14px",
        borderRadius: tokens.radius.md,
        color: pressed ? pal.text : pal.textTertiary,
        background: pressed ? pal.bgMuted : hover ? pal.bgSubtle : "transparent",
        border: `1px solid ${pressed ? pal.border : "transparent"}`,
        transition: `all ${motion.normal} ${motion.easeInOut}`
      }
    },
    children
  );
}
function ToggleGroup({ options, value, onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", borderRadius: tokens.radius.md, border: `1px solid ${pal.borderSubtle}`, overflow: "hidden", transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, options.map((opt, i) => {
    const active = Array.isArray(value) ? value.includes(opt) : value === opt;
    return /* @__PURE__ */ React.createElement("button", { key: opt, onClick: () => onChange(opt), style: {
      ...interactiveBase,
      ...tokens.type.sm,
      fontWeight: active ? tokens.weight.medium : tokens.weight.regular,
      padding: "8px 14px",
      color: active ? pal.text : pal.textTertiary,
      background: active ? pal.bgMuted : "transparent",
      borderRight: i < options.length - 1 ? `1px solid ${pal.borderSubtle}` : "none",
      transition: `all ${motion.normal} ${motion.easeInOut}`
    } }, opt);
  }));
}
function Breadcrumb({ items, maxVisible, home, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const homeIcon = home ? /* @__PURE__ */ React.createElement("span", { "aria-label": "Home", style: { display: "inline-flex", color: pal.textTertiary, marginRight: 2 } }, /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 10.5 12 3l9 7.5" }), /* @__PURE__ */ React.createElement("path", { d: "M5 9.5V21h14V9.5" }), /* @__PURE__ */ React.createElement("path", { d: "M10 21v-6h4v6" }))) : null;
  const truncated = maxVisible && items.length > maxVisible;
  const visible = truncated ? [items[0], { ellipsis: true, hidden: items.slice(1, -1) }, items[items.length - 1]] : items;
  return /* @__PURE__ */ React.createElement("nav", { style: { display: "flex", alignItems: "center", gap: 6, fontFamily: tokens.font.sans } }, homeIcon, visible.map((item, i) => {
    const isLast = i === visible.length - 1;
    const sep = (i > 0 || home) && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textMuted } }, "/");
    if (item.ellipsis) {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: `ell-${i}`,
          style: { position: "relative", display: "flex", alignItems: "center", gap: 6 },
          onMouseEnter: () => setHover(true),
          onMouseLeave: () => setHover(false)
        },
        sep,
        /* @__PURE__ */ React.createElement("span", { style: {
          ...tokens.type.sm,
          color: hover ? pal.text : pal.textTertiary,
          cursor: "default",
          padding: "2px 6px",
          borderRadius: tokens.radius.sm,
          background: hover ? pal.bgSubtle : "transparent",
          transition: `all ${motion.fast} ${motion.easeInOut}`
        } }, "\u2026"),
        /* @__PURE__ */ React.createElement("div", { style: {
          position: "absolute",
          top: "calc(100% + 6px)",
          left: "50%",
          transform: "translateX(-50%)",
          background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: `1px solid ${pal.borderSubtle}`,
          borderRadius: tokens.radius.md,
          padding: "8px 10px",
          boxShadow: `0 8px 24px ${pal.shadowLg}`,
          opacity: hover ? 1 : 0,
          pointerEvents: hover ? "auto" : "none",
          transition: `opacity ${motion.fast} ${motion.easeOut}, transform ${motion.normal} ${motion.emphasized}`,
          whiteSpace: "nowrap",
          zIndex: 10,
          ...tokens.type.xs,
          color: pal.text
        } }, /* @__PURE__ */ React.createElement(Stack, { gap: 4 }, item.hidden.map((h, j) => /* @__PURE__ */ React.createElement("div", { key: j, style: { color: pal.textSecondary } }, h.label))))
      );
    }
    return /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 6 } }, sep, /* @__PURE__ */ React.createElement("span", { onClick: item.onClick, style: {
      ...tokens.type.sm,
      color: isLast ? pal.text : pal.textTertiary,
      fontWeight: isLast ? tokens.weight.medium : tokens.weight.regular,
      cursor: item.onClick ? "pointer" : "default",
      transition: `color ${motion.normal} ${motion.easeInOut}`
    } }, item.label));
  }));
}
function HoverCard({ trigger, children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { position: "relative", display: "inline-flex" },
      onMouseEnter: () => setShow(true),
      onMouseLeave: () => setShow(false)
    },
    trigger,
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: "100%",
      left: 0,
      marginTop: 8,
      zIndex: 100,
      background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      border: `1px solid ${pal.borderSubtle}`,
      borderRadius: tokens.radius.md,
      padding: 16,
      minWidth: 240,
      boxShadow: `0 8px 24px ${pal.shadowLg}`,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(-4px)",
      pointerEvents: show ? "auto" : "none",
      transition: `opacity ${motion.normal} ${motion.easeOut}, transform ${motion.normal} ${motion.emphasized}`
    } }, children)
  );
}
function ChevronIcon({ size = 12, direction = "right", style }) {
  const rot = { right: 0, down: 90, left: 180, up: -90 }[direction] ?? 0;
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.25",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { display: "inline-block", flexShrink: 0, transform: `rotate(${rot}deg)`, transition: `transform ${motion.normal} ${motion.easeInOut}`, ...style }
    },
    /* @__PURE__ */ React.createElement("polyline", { points: "6,3 11,8 6,13" })
  );
}
function InputOTP({ length = 6, value = "", onChange, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const refs = useRef([]);
  const digits = value.split("").concat(Array(length - value.length).fill(""));
  const allFilled = value.length === length;
  const handleChange = (i, v) => {
    if (v.length > 1) v = v[v.length - 1];
    const arr = [...digits];
    arr[i] = v;
    const next = arr.join("").slice(0, length);
    onChange?.(next);
    if (v && i < length - 1) refs.current[i + 1]?.focus();
  };
  const handleKey = (i, e) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, digits.map((d, i) => /* @__PURE__ */ React.createElement(
    "input",
    {
      key: i,
      ref: (el) => refs.current[i] = el,
      value: d,
      onChange: (e) => handleChange(i, e.target.value),
      onKeyDown: (e) => handleKey(i, e),
      maxLength: 2,
      style: {
        ...interactiveBase,
        width: 40,
        height: 48,
        textAlign: "center",
        ...tokens.type.lg,
        fontWeight: tokens.weight.semibold,
        fontFamily: tokens.font.mono,
        color: pal.text,
        background: pal.bgInput,
        borderRadius: tokens.radius.md,
        border: `1.5px solid ${allFilled ? pal.borderFocus : d ? pal.border : "transparent"}`,
        outline: "none",
        transition: `border-color ${motion.normal} ${motion.easeInOut}`
      }
    }
  )));
}
function Kbd({ children, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("kbd", { style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...tokens.type.xs,
    fontFamily: tokens.font.mono,
    fontWeight: tokens.weight.medium,
    color: pal.textSecondary,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.xs,
    padding: "2px 6px",
    minWidth: 20,
    lineHeight: 1.4,
    boxShadow: `0 1px 0 ${pal.border}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, children);
}
function EmptyState({ icon, title, description, action, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", padding: 40, textAlign: "center" } }, icon && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 32, color: pal.textMuted, marginBottom: 16, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, icon), title && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.base, fontWeight: tokens.weight.semibold, color: pal.text, marginBottom: 4, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, title), description && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textTertiary, maxWidth: 280, lineHeight: 1.6, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, description), action && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } }, action));
}
function AlertBanner({ title, description, variant = "default", theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const styles = {
    default: { bg: pal.bgSubtle, border: pal.border, icon: "\u2139", color: pal.text },
    success: { bg: pal.successBg, border: pal.success, icon: "\u2713", color: pal.success },
    warning: { bg: pal.warningBg, border: pal.warning, icon: "\u26A0", color: pal.warning },
    danger: { bg: pal.dangerBg, border: pal.danger, icon: "\u2715", color: pal.danger }
  }[variant] || { bg: pal.bgSubtle, border: pal.border, icon: "\u2139", color: pal.text };
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 12,
    padding: "12px 16px",
    borderRadius: tokens.radius.md,
    background: styles.bg,
    border: `1px solid ${styles.border}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: styles.color, flexShrink: 0, marginTop: 1 } }, styles.icon), /* @__PURE__ */ React.createElement("div", null, title && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, fontWeight: tokens.weight.semibold, color: pal.text, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, title), description && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.textSecondary, marginTop: 2, lineHeight: 1.5, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, description)));
}
function DropdownMenu({ trigger, items, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  const [hoverIdx, setHoverIdx] = useState(-1);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "inline-flex" } }, /* @__PURE__ */ React.createElement("div", { onClick: () => setOpen(!open) }, trigger), open && /* @__PURE__ */ React.createElement("div", { onClick: () => setOpen(false), style: { position: "fixed", inset: 0, zIndex: 9999 } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: 6,
    zIndex: 1e4,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.md,
    padding: 4,
    minWidth: 180,
    boxShadow: `0 8px 24px ${pal.shadowLg}`,
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0) scale(1)" : "translateY(-4px) scale(0.97)",
    pointerEvents: open ? "auto" : "none",
    transition: `opacity ${motion.fast} ${motion.easeOut}, transform ${motion.normal} ${motion.emphasized}`
  } }, items.map((item, i) => item.separator ? /* @__PURE__ */ React.createElement("div", { key: i, style: { height: 1, background: pal.borderSubtle, margin: "4px 0" } }) : /* @__PURE__ */ React.createElement(
    "button",
    {
      key: i,
      onClick: () => {
        item.onClick?.();
        setOpen(false);
      },
      onMouseEnter: () => setHoverIdx(i),
      onMouseLeave: () => setHoverIdx(-1),
      style: {
        ...interactiveBase,
        width: "100%",
        textAlign: "left",
        ...tokens.type.sm,
        padding: "8px 12px",
        borderRadius: tokens.radius.sm,
        color: item.danger ? pal.danger : pal.text,
        background: hoverIdx === i ? pal.bgSubtle : "transparent",
        display: "flex",
        alignItems: "center",
        gap: 8,
        transition: `background ${motion.normal} ${motion.easeInOut}, color ${motion.normal} ${motion.easeInOut}`
      }
    },
    item.icon && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: item.danger ? pal.danger : pal.textTertiary } }, item.icon),
    item.label
  ))));
}
function ScrollArea({ children, maxHeight = 200, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    maxHeight,
    overflow: "auto",
    borderRadius: tokens.radius.sm,
    scrollbarWidth: "thin",
    scrollbarColor: `${pal.bgMuted} transparent`
  } }, children);
}
function Choicebox({ options, value, onChange, multiple, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const isSelected = (id) => multiple ? (value || []).includes(id) : value === id;
  const pick = (id) => {
    if (!multiple) return onChange(id);
    const set = new Set(value || []);
    set.has(id) ? set.delete(id) : set.add(id);
    onChange([...set]);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, options.map((opt) => {
    const selected = isSelected(opt.id);
    return /* @__PURE__ */ React.createElement("button", { key: opt.id, onClick: () => pick(opt.id), style: {
      ...interactiveBase,
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 14px",
      borderRadius: tokens.radius.md,
      textAlign: "left",
      background: selected ? pal.accentBg : pal.bgSubtle,
      border: `1px solid ${selected ? pal.accent : "transparent"}`,
      transition: `all ${motion.normal} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 16,
      height: 16,
      borderRadius: multiple ? 5 : 8,
      flexShrink: 0,
      marginTop: 1,
      border: `1.5px solid ${selected ? pal.accent : pal.textMuted}`,
      background: selected ? pal.accent : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: `all ${motion.normal} ${motion.easeInOut}`
    } }, selected && (multiple ? /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 10 10", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M1.5 5.5 4 8 8.5 2.5", stroke: "#fff", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" })) : /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 3, background: "#fff", animation: `halaska-scale-in 0.2s ${motion.easeOut} both` } }))), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontWeight: tokens.weight.medium, color: pal.text, display: "block", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, opt.title), opt.description && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textSecondary, display: "block", marginTop: 2, lineHeight: 1.5, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, opt.description)), opt.meta && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, fontFamily: tokens.font.mono, flexShrink: 0, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, opt.meta));
  }));
}
function SearchInput({ value, onChange, placeholder = "Search\u2026", shortcut = "\u2318K", theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [focus, setFocus] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 10px",
    height: 36,
    borderRadius: tokens.radius.sm,
    background: pal.bgInput,
    border: `1px solid ${focus ? pal.borderFocus : pal.borderInput}`,
    transition: `all ${motion.normal} ${motion.easeInOut}`,
    ...sp
  } }, /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: pal.textTertiary, strokeWidth: "1.5", strokeLinecap: "round", style: { flexShrink: 0, transition: `stroke ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ React.createElement("path", { d: "m20 20-3.5-3.5" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      value,
      onChange: (e) => onChange(e.target.value),
      placeholder,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      style: {
        flex: 1,
        minWidth: 0,
        border: "none",
        outline: "none",
        background: "transparent",
        ...tokens.type.sm,
        color: pal.text,
        fontFamily: tokens.font.sans
      }
    }
  ), value ? /* @__PURE__ */ React.createElement("button", { onClick: () => onChange(""), "aria-label": "Clear search", style: {
    ...interactiveBase,
    width: 16,
    height: 16,
    borderRadius: 8,
    padding: 0,
    flexShrink: 0,
    background: pal.bgMuted,
    color: pal.textSecondary,
    fontSize: 9,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, "\u2715") : shortcut ? /* @__PURE__ */ React.createElement(Kbd, { theme }, shortcut) : null);
}
function SplitButton({ children, onClick, items = [], variant = "primary", size = "md", theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "inline-flex" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex" } }, /* @__PURE__ */ React.createElement(
    Button,
    {
      theme,
      variant,
      size,
      onClick,
      style: { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
    },
    children
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      theme,
      variant,
      size,
      onClick: () => setOpen((o) => !o),
      style: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        padding: "0 10px",
        marginLeft: 1
      }
    },
    /* @__PURE__ */ React.createElement(ChevronIcon, { size: 11, direction: open ? "up" : "down" })
  )), open && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { onClick: () => setOpen(false), style: { position: "fixed", inset: 0, zIndex: 90 } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "calc(100% + 6px)",
    right: 0,
    zIndex: 91,
    minWidth: 200,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.md,
    padding: 4,
    boxShadow: `0 8px 24px ${pal.shadowLg}`,
    animation: `halaska-scale-in 0.15s ${motion.easeOut} both`,
    transformOrigin: "top right"
  } }, items.map((item, i) => /* @__PURE__ */ React.createElement(SplitButtonItem, { key: i, item, theme, onPick: () => {
    setOpen(false);
    item.onClick?.();
  } })))));
}
function SplitButtonItem({ item, onPick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onPick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        padding: "8px 10px",
        borderRadius: tokens.radius.sm,
        textAlign: "left",
        ...tokens.type.sm,
        color: item.danger ? pal.danger : hover ? pal.text : pal.textSecondary,
        background: hover ? pal.bgSubtle : "transparent"
      }
    },
    item.label,
    item.meta && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, fontFamily: tokens.font.mono } }, item.meta)
  );
}
function StatusDot({ status = "online", pulse, size = 8, theme: tp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const color = {
    online: pal.success,
    busy: pal.warning,
    error: pal.danger,
    offline: pal.textMuted,
    accent: pal.accent
  }[status] || pal.textMuted;
  return /* @__PURE__ */ React.createElement("span", { style: { position: "relative", display: "inline-flex", width: size, height: size, flexShrink: 0 } }, pulse && /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    inset: 0,
    borderRadius: size / 2,
    background: color,
    animation: "halaska-live-pulse 2s ease-out infinite"
  } }), /* @__PURE__ */ React.createElement("span", { style: { position: "relative", width: size, height: size, borderRadius: size / 2, background: color, transition: `background ${motion.smooth} ${motion.easeInOut}` } }));
}
function MiddleTruncate({ text, tail = 6, mono = true, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const head = text.slice(0, Math.max(0, text.length - tail));
  const end = text.slice(Math.max(0, text.length - tail));
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    minWidth: 0,
    maxWidth: "100%",
    whiteSpace: "nowrap",
    ...tokens.type.sm,
    color: pal.textSecondary,
    fontFamily: mono ? tokens.font.mono : tokens.font.sans,
    transition: `color ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 } }, head), /* @__PURE__ */ React.createElement("span", { style: { flexShrink: 0 } }, end));
}
function Snippet({ text, prompt = "$", theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = () => {
    try {
      navigator.clipboard?.writeText(text);
    } catch (e) {
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1500);
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 8px 10px 14px",
    borderRadius: tokens.radius.sm,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.textTertiary, flexShrink: 0, userSelect: "none", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, prompt), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.text, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, text), /* @__PURE__ */ React.createElement("button", { onClick: copy, "aria-label": "Copy command", style: {
    ...interactiveBase,
    width: 26,
    height: 26,
    borderRadius: tokens.radius.xs,
    padding: 0,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: copied ? pal.success : pal.textTertiary
  } }, copied ? /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 14 14", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2.5 7.5 5.5 10.5 11.5 3.5", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })) : /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "9", y: "9", width: "12", height: "12", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 15V5a2 2 0 0 1 2-2h10" }))));
}
function FileTreeFolderIcon({ open, color }) {
  return /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", style: { flexShrink: 0 } }, open ? /* @__PURE__ */ React.createElement("path", { d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" }) : /* @__PURE__ */ React.createElement("path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }));
}
function FileTreeFileIcon({ color }) {
  return /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", style: { flexShrink: 0 } }, /* @__PURE__ */ React.createElement("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }));
}
function FileTreeNode({ node, depth, theme }) {
  const pal = usePal(theme);
  const [open, setOpen] = useState(node.defaultOpen ?? true);
  const [hover, setHover] = useState(false);
  const isFolder = !!node.children;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => isFolder && setOpen((o) => !o),
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 7,
        width: "100%",
        padding: "4px 8px",
        paddingLeft: 8 + depth * 16,
        borderRadius: tokens.radius.xs,
        background: hover ? pal.bgSubtle : "transparent",
        textAlign: "left",
        cursor: isFolder ? "pointer" : "default"
      }
    },
    isFolder ? /* @__PURE__ */ React.createElement(ChevronIcon, { size: 9, direction: open ? "down" : "right", style: { color: pal.textTertiary, flexShrink: 0 } }) : /* @__PURE__ */ React.createElement("span", { style: { width: 9, flexShrink: 0 } }),
    isFolder ? /* @__PURE__ */ React.createElement(FileTreeFolderIcon, { open, color: pal.textSecondary }) : /* @__PURE__ */ React.createElement(FileTreeFileIcon, { color: pal.textTertiary }),
    /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: isFolder ? pal.text : pal.textSecondary, transition: `color ${motion.smooth} ${motion.easeInOut}`, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, node.name),
    node.badge && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xxs, fontFamily: tokens.font.mono, color: pal.accentText, background: pal.accentBg, padding: "1px 6px", borderRadius: tokens.radius.pill, marginLeft: "auto", flexShrink: 0, transition: `all ${motion.smooth} ${motion.easeInOut}` } }, node.badge)
  ), isFolder && /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: open ? node.children.length * 200 : 0,
    opacity: open ? 1 : 0,
    transition: `max-height 0.35s ${motion.emphasized}, opacity ${motion.normal} ${motion.easeInOut}`
  } }, node.children.map((child, i) => /* @__PURE__ */ React.createElement(FileTreeNode, { key: child.name + i, node: child, depth: depth + 1, theme }))));
}
function FileTree({ data = [], theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 1, fontFamily: tokens.font.sans, ...sp } }, data.map((node, i) => /* @__PURE__ */ React.createElement(FileTreeNode, { key: node.name + i, node, depth: 0, theme })));
}
function BrowserFrame({ url = "localhost:3000", children, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    borderRadius: tokens.radius.md,
    border: `1px solid ${pal.borderSubtle}`,
    background: pal.bgElevated,
    overflow: "hidden",
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "9px 12px",
    borderBottom: `1px solid ${pal.borderSubtle}`,
    background: pal.bgSubtle,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: 5, flexShrink: 0 } }, [0, 1, 2].map((i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { width: 8, height: 8, borderRadius: 4, background: pal.bgMuted, transition: `background ${motion.smooth} ${motion.easeInOut}` } }))), /* @__PURE__ */ React.createElement("span", { style: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "3px 10px",
    borderRadius: tokens.radius.pill,
    background: pal.bgInput,
    ...tokens.type.xs,
    fontFamily: tokens.font.mono,
    color: pal.textSecondary,
    maxWidth: 260,
    margin: "0 auto",
    overflow: "hidden",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })), /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, url)), /* @__PURE__ */ React.createElement("span", { style: { width: 34, flexShrink: 0 } })), /* @__PURE__ */ React.createElement("div", { style: { padding: 16 } }, children));
}
function PhoneFrame({ children, width = 300, height = 560, theme: tp, style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    width,
    height,
    borderRadius: 40,
    padding: 10,
    boxSizing: "border-box",
    background: theme === "dark" ? "#0d0d0d" : "#1a1a1a",
    boxShadow: `0 0 0 1px ${theme === "dark" ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.25)"}, 0 24px 48px ${pal.shadowLg}`,
    position: "relative",
    ...sp
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: "100%",
    height: "100%",
    borderRadius: 31,
    overflow: "hidden",
    position: "relative",
    background: pal.bg,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 84, height: 22, borderRadius: 11, background: theme === "dark" ? "#0d0d0d" : "#1a1a1a", zIndex: 2 } }), children));
}
const DESIGN_HEURISTICS = [
  {
    title: "Visibility of system status",
    body: "An agent that goes quiet reads as broken. Stream the thinking, show tool calls as they run, and keep a glanceable status for everything happening off-screen."
  },
  {
    title: "Match the real world",
    body: "Plans, permissions, and results in the user's language: \u201CClose 14 stale tickets,\u201D not tool names and JSON. Translate the machinery, don't expose it."
  },
  {
    title: "User control and freedom",
    body: "Pause, redirect, and undo beat confirmation dialogs. Delegating to an agent should never cost you the emergency exit."
  },
  {
    title: "Consistency and standards",
    body: "One status language everywhere. The same state looks the same in the thread, the board, and the log. Borrow conventions people already know."
  },
  {
    title: "Error prevention",
    body: "Consent before consequence: plan previews, approval gates, and autonomy caps catch mistakes upstream, styled as normal states, never as alarms."
  },
  {
    title: "Recognition over recall",
    body: "Never make people reconstruct what happened from a scrolling transcript. Receipts, boards, and digests keep the state of work visible."
  },
  {
    title: "Flexibility and efficiency",
    body: "Autonomy is a dial, not a switch. New users watch and confirm; experts let the agent run. The same surface serves both without forking the product."
  },
  {
    title: "Minimalist by default",
    body: "Focused, not sparse: every element earns its place. Collapse the machinery (traces, tool calls, sources) once it has done its job."
  },
  {
    title: "Recover from errors gracefully",
    body: "When the agent is wrong: acknowledge in plain words, show the correction it made, offer a human. What went wrong, why, what's next. No codes, no cheer."
  },
  {
    title: "Capability discovery over documentation",
    body: "Nobody reads the manual for an agent. Empty states that show what it can do, suggestions in context, and scope declared up front do the teaching."
  }
];
function HeuristicsSection({ theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { paddingLeft: 4, fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 } }, /* @__PURE__ */ React.createElement(Heading, { level: 3, theme, style: { margin: 0 } }, "Design Heuristics")), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, display: "block", maxWidth: 560, marginBottom: 32 } }, "The ten classic usability heuristics, restated for products where an agent does the work. Every pattern in the kit is an answer to one of these."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px 40px" } }, DESIGN_HEURISTICS.map((p2, i) => /* @__PURE__ */ React.createElement("div", { key: p2.title }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.accent, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme }, p2.title)), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, display: "block", lineHeight: 1.65, paddingLeft: 26 } }, p2.body)))));
}
const KIT_BP = { mobile: 720, rail: 1200 };
const kitViewport = { w: typeof window !== "undefined" ? window.innerWidth : 1280, subs: /* @__PURE__ */ new Set(), bound: false };
function useViewport() {
  const [w, setW] = useState(kitViewport.w);
  useEffect(() => {
    if (!kitViewport.bound && typeof window !== "undefined") {
      kitViewport.bound = true;
      window.addEventListener("resize", () => {
        kitViewport.w = window.innerWidth;
        kitViewport.subs.forEach((fn) => fn(kitViewport.w));
      }, { passive: true });
    }
    kitViewport.subs.add(setW);
    setW(kitViewport.w);
    return () => {
      kitViewport.subs.delete(setW);
    };
  }, []);
  return { width: w, isMobile: w < KIT_BP.mobile, compact: w < KIT_BP.rail };
}
function ShowcaseCard({ children, controls, label, theme = "light", height, align = "center", style: sp }) {
  const pal = usePal(theme);
  const { isMobile } = useViewport();
  const justify = align === "top" ? "flex-start" : "center";
  const innerRef = useRef(null);
  const [fit, setFit] = useState({ s: 1, w: 0, h: 0 });
  useEffect(() => {
    const el = innerRef.current;
    if (!isMobile || !el) {
      setFit({ s: 1, w: 0, h: 0 });
      return;
    }
    const measure = () => {
      el.style.width = "100%";
      el.style.transform = "none";
      const avail = el.clientWidth;
      let need = el.scrollWidth;
      let sc = need > avail + 1 ? Math.max(0.5, avail / need) : 1;
      let w = sc < 1 ? Math.round(avail / sc) : 0;
      if (w) {
        el.style.width = w + "px";
        need = el.scrollWidth;
        if (need > w + 1) {
          sc = Math.max(0.5, avail / need);
          w = Math.round(avail / sc);
          el.style.width = w + "px";
        }
      }
      const h = el.scrollHeight;
      el.style.transform = sc < 1 ? `scale(${sc})` : "none";
      setFit((f) => f.s === sc && f.w === w && f.h === h ? f : { s: sc, w, h });
    };
    measure();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) {
      ro.observe(el);
      ro.observe(el.parentElement);
    }
    window.addEventListener("resize", measure);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isMobile]);
  const padT = isMobile ? 44 : align === "top" ? 56 : 88;
  const padB = isMobile ? 28 : align === "top" ? 48 : 88;
  const padX = isMobile ? 16 : align === "top" ? 48 : 88;
  const stageH = height ? height - 104 : 0;
  const mobileH = isMobile ? padT + Math.max(Math.round(fit.h * fit.s), Math.round(stageH * fit.s)) + padB + 4 : 0;
  return /* @__PURE__ */ React.createElement(ThemeProvider, { theme }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, label && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.base, color: theme === "dark" ? "#555" : "#bbb", fontFamily: tokens.font.sans, paddingLeft: 8 } }, label), /* @__PURE__ */ React.createElement("div", { style: {
    background: theme === "dark" ? "rgba(26,26,26,0.85)" : "rgba(250,250,250,0.75)",
    borderRadius: isMobile ? tokens.radius.lg : tokens.radius.xl,
    border: theme === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.04)",
    padding: `${padT}px ${padX}px ${padB}px`,
    height: isMobile ? fit.h ? mobileH : void 0 : height || void 0,
    minHeight: isMobile ? void 0 : height ? void 0 : 532,
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: isMobile ? "flex-start" : justify,
    position: "relative",
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    overflow: "hidden",
    ...sp
  } }, /* @__PURE__ */ React.createElement("div", { ref: innerRef, style: {
    flex: align === "top" || isMobile ? "0 0 auto" : 1,
    display: "flex",
    alignItems: align === "top" || isMobile ? "flex-start" : "center",
    justifyContent: isMobile && fit.s < 1 ? "flex-start" : "center",
    width: isMobile && fit.w ? fit.w : "100%",
    transform: isMobile && fit.s < 1 ? `scale(${fit.s})` : "none",
    transformOrigin: "top left"
  } }, children), controls && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 14, right: 14, display: "flex", alignItems: "center", gap: 8 } }, controls))));
}
const STUDIO_URL = "https://halaska.com";
const REPO_URL = "https://github.com/Halaska-Studio/ui";
const STUDIO_BOOK_URL = "https://halaska.com/book";
function StudioLink({ theme, href = STUDIO_URL, children = "Halaska", style: sp }) {
  const isDark = theme === "dark";
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href,
      target: "_blank",
      rel: "noreferrer",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        color: hover ? isDark ? "#d8d8d8" : "#3d3d3d" : "inherit",
        textDecoration: "underline",
        textUnderlineOffset: 3,
        textDecorationColor: hover ? "currentColor" : isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)",
        transition: "color 0.25s ease, text-decoration-color 0.25s ease",
        ...sp
      }
    },
    children
  );
}
function writeClipboard(text, onDone) {
  const fallbackCopy = () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      onDone();
    } catch (e) {
    }
    document.body.removeChild(ta);
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(onDone).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}
function useCopyPrompt() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = useCallback(() => {
    writeClipboard(INSTALL_PROMPT, () => {
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2e3);
      try {
        window.dispatchEvent(new CustomEvent("halaska:prompt-copied"));
      } catch (e) {
      }
    });
  }, []);
  return { copied, copy };
}
function ShowcasePage({ children, title, subtitle, pageTheme = "light" }) {
  const isDark = pageTheme === "dark";
  const pal = usePal(pageTheme);
  const { isMobile } = useViewport();
  const { copied: installCopied, copy: copyInstallPrompt } = useCopyPrompt();
  const [installStage, setInstallStage] = useState("idle");
  const copyAndReveal = () => {
    copyInstallPrompt();
    setInstallStage("revealed");
  };
  const jump = (id, offset = 32) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const installPanel = installStage === "revealed" ? /* @__PURE__ */ React.createElement("div", { style: { marginTop: 28, animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme: pageTheme }, "Your install prompt"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8 }, /* @__PURE__ */ React.createElement(Button, { theme: pageTheme, variant: "ghost", size: "sm", onClick: () => setInstallStage("idle") }, "Hide"), /* @__PURE__ */ React.createElement(Button, { theme: pageTheme, variant: "secondary", size: "sm", icon: installCopied ? "\u2713" : "\u29C9", onClick: copyInstallPrompt }, installCopied ? "Copied" : "Copy again"))), /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    maxHeight: 260,
    overflow: "auto",
    padding: 16,
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    ...tokens.type.xs,
    fontFamily: tokens.font.mono,
    color: pal.textSecondary,
    whiteSpace: "pre-wrap",
    lineHeight: 1.6,
    transition: `background ${motion.smooth} ${motion.easeInOut}, border-color ${motion.smooth} ${motion.easeInOut}`
  } }, INSTALL_PROMPT), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme: pageTheme, style: { color: pal.textTertiary, display: "block", marginTop: 8 } }, "It's on your clipboard. Paste it as the first message to Claude Code or Cursor: it downloads the kit, wires it in, and applies it to what you've already built.")) : null;
  const bg = isDark ? "linear-gradient(180deg, #111 0%, #0a0a0a 50%, #111 100%)" : "linear-gradient(180deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)";
  const textColor = isDark ? "#d8d8d8" : "#3d3d3d";
  const dimColor = isDark ? "#666" : "#999";
  const mutedColor = isDark ? "#555" : "#aaa";
  const t = (prop) => `${prop} 0.35s ease`;
  return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: bg, padding: isMobile ? "40px 16px 150px" : "64px 32px 120px", fontFamily: tokens.font.sans, transition: "background 0.5s ease", overflowX: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 784, margin: "0 auto" } }, title && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: isMobile ? 72 : 128, paddingLeft: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { style: { ...isMobile ? tokens.type.xxl : tokens.type.xxxl, fontWeight: tokens.weight.bold, color: textColor, margin: 0, letterSpacing: "-0.02em", transition: t("color") } }, title), /* @__PURE__ */ React.createElement("p", { style: { ...tokens.type.md, color: dimColor, margin: "10px 0 0", transition: t("color") } }, "by ", /* @__PURE__ */ React.createElement(StudioLink, { theme: pageTheme }), " \xB7 built on top of ", /* @__PURE__ */ React.createElement(StudioLink, { theme: pageTheme, href: "https://ui.shadcn.com" }, "shadcn/ui"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 20, paddingTop: 8 } }, /* @__PURE__ */ React.createElement(DropdownMenu, { theme: pageTheme, trigger: /* @__PURE__ */ React.createElement(LinkButton, { theme: pageTheme, size: "sm", iconRight: "\u2193" }, "More"), items: [
    { label: "How to use", onClick: () => jump("how-to-use") },
    { label: "Before and after", onClick: () => jump("before-after") },
    { label: "FAQ", onClick: () => jump("faq") },
    { separator: true },
    { label: "GitHub", onClick: () => window.open(REPO_URL, "_blank", "noopener") }
  ] }), /* @__PURE__ */ React.createElement(Button, { theme: pageTheme, variant: "primary", size: "sm", icon: installCopied ? "\u2713" : "\u29C9", onClick: copyAndReveal }, installCopied ? "Copied" : "Copy prompt"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: isMobile ? 28 : 40, marginTop: isMobile ? 36 : 48 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: "1 1 260px" } }, /* @__PURE__ */ React.createElement("h3", { style: { ...tokens.type.base, fontWeight: tokens.weight.semibold, color: textColor, margin: "0 0 8px", transition: t("color") } }, "Intention"), /* @__PURE__ */ React.createElement("p", { style: { ...tokens.type.sm, color: dimColor, margin: 0, lineHeight: 1.65, transition: t("color") } }, "Made for founders building with coding agents. Prototyping tools ship with defaults which look like a designer never touched them. This kit gets you 85% of the way there: considered UI components and UX patterns built for AI products.")), /* @__PURE__ */ React.createElement("div", { style: { flex: "1 1 260px" } }, /* @__PURE__ */ React.createElement("h3", { style: { ...tokens.type.base, fontWeight: tokens.weight.semibold, color: textColor, margin: "0 0 8px", transition: t("color") } }, "Execution"), /* @__PURE__ */ React.createElement("p", { style: { ...tokens.type.sm, color: dimColor, margin: 0, lineHeight: 1.65, transition: t("color") } }, "Copy the install prompt, paste it into Claude Code or Cursor, and your project picks up the kit plus the rules for using it on what you've already built. It's an evolving resource: new patterns and components land as the work does."))), installPanel), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: isMobile ? 72 : 112 } }, children), /* @__PURE__ */ React.createElement("div", { id: "how-to-use", style: { marginTop: isMobile ? 96 : 144, paddingLeft: 4 } }, /* @__PURE__ */ React.createElement("h2", { style: { ...tokens.type.xxl, fontWeight: tokens.weight.bold, color: textColor, margin: "0 0 16px", letterSpacing: "-0.02em", transition: t("color") } }, "How to Use"), /* @__PURE__ */ React.createElement("p", { style: { ...tokens.type.md, color: dimColor, margin: "0 0 12px", lineHeight: 1.7, transition: t("color") } }, "The kit is one React file plus a prompt that teaches your coding agent how to use it. You don't install anything by hand and you don't read the file. You copy the prompt, paste it into the tool you're already building with, and the agent does the rest."), /* @__PURE__ */ React.createElement("p", { style: { ...tokens.type.md, color: dimColor, margin: "0 0 32px", lineHeight: 1.7, transition: t("color") } }, "Inside are 38 UX patterns for the moments every AI product has to get right (thinking, streaming, approvals, tool activity, receipts, recovery) and around 100 styled components underneath them. Geist type, 1px icons, an 8px spacing scale, and motion that stays out of the way."), /* @__PURE__ */ React.createElement("h3", { style: { ...tokens.type.lg, fontWeight: tokens.weight.semibold, color: textColor, margin: "0 0 16px", transition: t("color") } }, "Get started"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, [
    { step: "1", title: "Copy the prompt", desc: "Use the Copy prompt button at the top of this page." },
    { step: "2", title: "Paste it into your AI tool", desc: "Claude Code, Cursor, Codex, Windsurf, or any agent that can fetch a file. Send it as the first message in the project you want to improve." },
    { step: "3", title: "That's it", desc: "The agent downloads the kit, wires it in, and applies it to what you've already built, screen by screen. If your project is new, it starts from the kit instead." },
    { step: "4", title: "Keep building", desc: "Ask for components and patterns by name (Button, PlanPreviewPattern, Orb). The agent already has the full API reference." }
  ].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.step, style: { display: "flex", gap: 16, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontWeight: tokens.weight.semibold, color: isDark ? "#444" : "#ccc", fontFamily: tokens.font.mono, minWidth: 20, transition: t("color") } }, s.step, "."), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.base, fontWeight: tokens.weight.semibold, color: textColor, transition: t("color"), display: isMobile ? "block" : "inline" } }, s.title), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.base, color: dimColor, marginLeft: isMobile ? 0 : 8, transition: t("color"), display: isMobile ? "block" : "inline", marginTop: isMobile ? 2 : 0 } }, s.desc))))), /* @__PURE__ */ React.createElement("h3", { id: "faq", style: { ...tokens.type.lg, fontWeight: tokens.weight.semibold, color: textColor, margin: "48px 0 20px", transition: t("color") } }, "Frequently Asked Questions"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20, paddingBottom: 40 } }, [
    { q: "Which tools does this work with?", a: "Any coding agent that can fetch a file and edit your project: Claude Code, Cursor, Codex, Windsurf, and similar. For browser builders like Lovable or Bolt, paste the prompt and, if the tool can't fetch, upload the kit file from the link in the prompt." },
    { q: "Do I need to install anything?", a: "No. The kit is a single file with inline styles. It needs react and react-dom, which your project already has. No Tailwind, no CSS setup, no chart library." },
    { q: "Will it work on a project that already has a UI?", a: "Yes, that's the main use. The prompt tells the agent to keep your routing, state, and data, and to swap screens over to the kit one at a time." },
    { q: "Can I change the look?", a: "Accent, typeface, and motion are all switchable at runtime: pick an accent in the bar below, a typeface in Foundations, and a motion mode there too. Everything else is a token at the top of the file." },
    { q: "Is this the same as shadcn/ui?", a: "It's built on the same foundations and the same component vocabulary, so it feels familiar. The AI patterns on top, the trading of confirm dialogs for undo, and the opinionated styling are the difference." },
    { q: "Can I use this commercially?", a: "Yes. MIT licensed, use it in anything." },
    { q: "Where's the source?", a: "On GitHub at github.com/Halaska-Studio/ui. Star it, or open an issue there if something's missing or broken." }
  ].map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i }, /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.base, fontWeight: tokens.weight.semibold, color: textColor, marginBottom: 4, transition: t("color") } }, item.q), /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: dimColor, lineHeight: 1.65, transition: t("color") } }, item.a))))), /* @__PURE__ */ React.createElement("div", { id: "studio", style: { marginTop: isMobile ? 48 : 64 } }, /* @__PURE__ */ React.createElement(StudioHookCard, { theme: pageTheme }))));
}
const DEMOFORM_TEXT_VARIANTS = ["Default", "With icon", "Error", "Input group", "Copy input", "Search"];
function DemoButtons({ theme }) {
  const pal = usePal(theme);
  const [loading, setLoading] = useState(false);
  const loadTimer = useRef(null);
  useEffect(() => () => clearTimeout(loadTimer.current), []);
  const startLoading = () => {
    setLoading(true);
    clearTimeout(loadTimer.current);
    loadTimer.current = setTimeout(() => setLoading(false), 2e3);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" } }, nodes));
  return /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Buttons", height: 500, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 20, style: { width: "100%", maxWidth: 720 } }, row("Primary", /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary" }, "Send reply"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", icon: "\u2726" }, "AI triage"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", loading, onClick: startLoading, style: { width: 116 } }, loading ? "Syncing" : "Sync inbox"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "accent" }, "Deploy agent"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", disabled: true }, "Paused"))), row("Secondary", /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { theme, variant: "secondary" }, "Snooze"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline" }, "Set reminder"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", iconRight: "\u2192" }, "View ticket"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "secondary", disabled: true }, "Archived"))), row("Ghost", /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost" }, "Dismiss"), /* @__PURE__ */ React.createElement(LinkButton, { theme }, "View runbook"), /* @__PURE__ */ React.createElement(LinkButton, { theme, iconRight: "\u2192" }, "API docs"), /* @__PURE__ */ React.createElement(LinkButton, { theme, size: "sm" }, "Privacy policy"))), row("Destructive", /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { theme, variant: "danger" }, "Close ticket"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "danger", icon: "\u2715" }, "Delete agent"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "danger", disabled: true }, "Revoke access"))), row("Sizes", /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm" }, "Reply"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "md" }, "Assign"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "lg" }, "Escalate"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "xl" }, "Connect Intercom"))), row("Icon", /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, { theme, icon: "\u2699", variant: "secondary", label: "Settings" }), /* @__PURE__ */ React.createElement(IconButton, { theme, icon: "\u2715", variant: "ghost", label: "Close" }), /* @__PURE__ */ React.createElement(ButtonGroup, { theme }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", style: { borderRadius: 0 } }, "Inbox"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", style: { borderRadius: 0 } }, "Issues"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", style: { borderRadius: 0 } }, "Renewals")), /* @__PURE__ */ React.createElement(
    SplitButton,
    {
      theme,
      variant: "primary",
      items: [
        { label: "Run as dry run", meta: "safe" },
        { label: "Run live" },
        { label: "Schedule for tonight", meta: "9pm" }
      ]
    },
    "Run triage"
  )))));
}
function DemoMotion({ theme }) {
  const pal = usePal(theme);
  const [mode, setMode] = useState("spring");
  const [demo, setDemo] = useState(false);
  const pick = (m) => {
    setMode(m);
    setKitMotion(m);
  };
  return /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Motion", height: 392, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 24, align: "center", style: { width: 360 } }, /* @__PURE__ */ React.createElement(SegmentedControl, { theme, options: ["spring", "smooth", "instant"], value: mode, onChange: pick }), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, textAlign: "center", display: "block" } }, mode === "spring" ? "As designed. A little play in the easing, durations tuned per interaction." : mode === "smooth" ? "Generous durations and a fluid, decelerating curve. Calm and unhurried." : "Near-immediate. A hint of transition so state changes still read as changes."), /* @__PURE__ */ React.createElement(Card, { theme, padding: 16, style: { width: "100%" } }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, align: "center", justify: "space-between" }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, "Try it"), /* @__PURE__ */ React.createElement(SwitchToggle, { theme, checked: demo, onChange: setDemo, label: demo ? "On" : "Off" })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    height: 6,
    borderRadius: 3,
    background: pal.bgMuted,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: demo ? "100%" : "24%", background: pal.accent, borderRadius: 3, transition: `width ${motion.smooth} ${motion.emphasized}` } }))), /* @__PURE__ */ React.createElement(Caption, { theme }, "Applies to every component on this page. setKitMotion(mode) does the same in your project.")));
}
function DemoTypography({ theme }) {
  const [fonts, setFonts] = useState(KIT_FONT_PRESETS);
  const [font, setFont] = useState("Geist");
  const [customOpen, setCustomOpen] = useState(false);
  const [custom, setCustom] = useState("");
  const pick = (name) => {
    setFont(name);
    setKitFont(name);
  };
  const applyCustom = () => {
    const name = custom.trim();
    if (!name) return;
    if (!fonts.includes(name)) setFonts([...fonts, name]);
    pick(name);
    setCustom("");
    setCustomOpen(false);
  };
  return /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: `Typography \xB7 ${font}`, height: 680, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 32, style: { width: 360 } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, align: "center" }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(
    Select,
    {
      theme,
      value: font,
      onChange: pick,
      options: fonts.map((f) => ({ value: f, label: f === "Geist" ? "Geist (default)" : f }))
    }
  )), /* @__PURE__ */ React.createElement(
    IconButton,
    {
      theme,
      variant: "secondary",
      icon: "+",
      size: 38,
      label: customOpen ? "Hide custom font" : "Add any Google Font",
      onClick: () => setCustomOpen((o) => !o),
      style: { flexShrink: 0, transform: customOpen ? "rotate(45deg)" : "rotate(0deg)", transition: `transform ${motion.normal} ${motion.emphasized}, background ${motion.normal} ${motion.easeInOut}` }
    }
  )), /* @__PURE__ */ React.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        applyCustom();
      },
      "aria-hidden": !customOpen,
      style: {
        height: 38,
        display: "flex",
        alignItems: "center",
        gap: 8,
        margin: 0,
        opacity: customOpen ? 1 : 0,
        transform: customOpen ? "translateY(0)" : "translateY(-4px)",
        pointerEvents: customOpen ? "auto" : "none",
        transition: `opacity ${motion.normal} ${motion.easeOut}, transform ${motion.normal} ${motion.emphasized}`
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(TextInput, { theme, value: custom, onChange: setCustom, placeholder: "Any Google Font, e.g. Sora", disabled: !customOpen })),
    /* @__PURE__ */ React.createElement(Button, { theme, variant: "secondary", disabled: !custom.trim() }, "Apply")
  )), /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(Heading, { level: 1, theme }, "Operations overview"), /* @__PURE__ */ React.createElement(Heading, { level: 2, theme }, "Active workflows"), /* @__PURE__ */ React.createElement(Heading, { level: 3, theme }, "Agent performance"), /* @__PURE__ */ React.createElement(Heading, { level: 4, theme }, "Activity history"), /* @__PURE__ */ React.createElement(Text, { size: "md", theme, as: "p", style: { margin: 0 } }, "Alpha resolved 14 tickets across 3 queues in the last 24 hours, holding median first response at 6 minutes against a target of 15."), /* @__PURE__ */ React.createElement(Text, { size: "base", secondary: true, theme, as: "p", style: { margin: 0 } }, "Last synced 4m ago \xB7 Next digest in 22m"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Code, { theme }, "TKT-4821"), /* @__PURE__ */ React.createElement(Text, { size: "sm", mono: true, theme }, "Acme \xB7 Enterprise"), /* @__PURE__ */ React.createElement(Caption, { theme }, "CSAT 4.8")), /* @__PURE__ */ React.createElement(Caption, { theme }, "Applies to every component on this page. setKitFont(name) does the same in your project."))));
}
function DemoFormInputs({ theme }) {
  const [variant, setVariant] = useState(DEMOFORM_TEXT_VARIANTS[0]);
  const [amount, setAmount] = useState("2,500.00");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("alpha-support");
  const [search, setSearch] = useState("");
  const [tool, setTool] = useState("");
  const [account, setAccount] = useState("acme");
  const [memo, setMemo] = useState("");
  const textVariant = {
    "Default": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Credit amount (USD)", value: amount, onChange: setAmount, caption: "Remaining credit budget: 12,840.00 USD" }),
    "With icon": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Customer email", placeholder: "name@company.com", value: email, onChange: setEmail, icon: "\u25C6" }),
    "Error": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Webhook URL", placeholder: "https://", value: "", onChange: () => {
    }, error: "Connection timed out" }),
    "Input group": /* @__PURE__ */ React.createElement(InputGroup, { theme, label: "Agent handle", prefix: "@", suffix: ".halaska", value: handle, onChange: setHandle }),
    "Copy input": /* @__PURE__ */ React.createElement(CopyInput, { theme, label: "Webhook URL", value: "https://hooks.northwind.app/alpha/9f3a2c7d4e1b8a6f" }),
    "Search": /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement(Label, { theme }, "Search tickets"), /* @__PURE__ */ React.createElement(SearchInput, { theme, value: search, onChange: setSearch, placeholder: "Search tickets\u2026" }))
  }[variant];
  return /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Text Input", height: 280, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 24, style: { width: 480 } }, /* @__PURE__ */ React.createElement(SegmentedControl, { theme, options: DEMOFORM_TEXT_VARIANTS, value: variant, onChange: setVariant }), /* @__PURE__ */ React.createElement("div", { style: { height: 84 } }, /* @__PURE__ */ React.createElement("div", { key: variant, style: { animation: `halaska-tab-fade ${motion.normal} ${motion.easeOut} both` } }, textVariant)))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Select & Combobox", height: 420, align: "top" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 24, width: 480, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(
    Select,
    {
      theme,
      label: "Integration",
      placeholder: "Select tool...",
      value: tool,
      onChange: setTool,
      options: [{ value: "intercom", label: "Intercom" }, { value: "linear", label: "Linear" }, { value: "github", label: "GitHub" }, { value: "slack", label: "Slack" }]
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(
    Combobox,
    {
      theme,
      label: "Account",
      value: account,
      onChange: setAccount,
      options: [
        { value: "acme", label: "Acme" },
        { value: "lumen", label: "Lumen Labs" },
        { value: "fjord", label: "Fjord Health" },
        { value: "brightline", label: "Brightline" },
        { value: "cobalt", label: "Cobalt Dental" },
        { value: "northwind", label: "Northwind (internal)" }
      ]
    }
  )))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Text Area", height: 320, align: "top" }, /* @__PURE__ */ React.createElement("div", { style: { width: 320 } }, /* @__PURE__ */ React.createElement(TextArea, { theme, label: "Agent notes", placeholder: "Describe how Alpha should handle refunds...", value: memo, onChange: setMemo, rows: 3, caption: "Visible to your agent only" }))));
}
function DemoTogglesSelections({ theme }) {
  const [sw1, setSw1] = useState(true);
  const [sw2, setSw2] = useState(false);
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(true);
  const [radio, setRadio] = useState("moderate");
  const [tab, setTab] = useState("Inbox");
  return /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Toggles & Selections", height: 720, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 28, style: { width: 340 } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(CardHeader, { title: "Agent settings", theme }), /* @__PURE__ */ React.createElement(Stack, { gap: 14 }, /* @__PURE__ */ React.createElement(SwitchToggle, { checked: sw1, onChange: setSw1, label: "Auto-reply to known issues", theme }), /* @__PURE__ */ React.createElement(SwitchToggle, { checked: sw2, onChange: setSw2, label: "Escalation guardrails", theme }))), /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(CardHeader, { title: "Notifications", theme }), /* @__PURE__ */ React.createElement(Stack, { gap: 14 }, /* @__PURE__ */ React.createElement(Checkbox, { checked: c1, onChange: setC1, label: "Replies sent", theme }), /* @__PURE__ */ React.createElement(Checkbox, { checked: c2, onChange: setC2, label: "SLA breach warnings", theme }), /* @__PURE__ */ React.createElement(Checkbox, { checked: c3, onChange: setC3, label: "Weekly CSAT report", theme }))), /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(CardHeader, { title: "Autonomy level", theme }), /* @__PURE__ */ React.createElement(RadioGroup, { theme, options: [{ value: "conservative", label: "Suggest only" }, { value: "moderate", label: "Confirm first" }, { value: "aggressive", label: "Autonomous" }], value: radio, onChange: setRadio })), /* @__PURE__ */ React.createElement(SegmentedControl, { theme, options: ["Inbox", "Issues", "Renewals"], value: tab, onChange: setTab })));
}
const DEMOTBL_COLUMNS = ["Account", "Plan", "MRR", "Change"];
const DEMOTBL_ROWS = [
  ["Acme", "Enterprise", "$2,500", "+$142"],
  ["Lumen Labs", "Growth", "$1,200", "-$38"],
  ["Fjord Health", "Enterprise", "$5,000", "+$891"],
  ["Brightline", "Starter", "$800", "+$24"]
];
const DEMOTBL_VIEWS = ["Simple", "Data table"];
function DrawerPhonePreview({ theme }) {
  const pal = usePal(theme);
  const [open, setOpen] = useState(true);
  const tickets = [
    ["#4821", "Acme \xB7 Calendar sync failing", "warning", "Open"],
    ["#4819", "Lumen Labs \xB7 Invoice copy request", "accent", "Queued"],
    ["#4802", "Fjord Health \xB7 SSO login loop", "default", "Waiting"]
  ];
  return /* @__PURE__ */ React.createElement(PhoneFrame, { theme, width: 300, height: 560 }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, transform: "translateZ(0)", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, padding: "52px 14px 16px", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "0 6px" } }, /* @__PURE__ */ React.createElement(Text, { size: "lg", weight: "semibold", theme }, "Inbox"), /* @__PURE__ */ React.createElement(Caption, { theme }, "3 open")), /* @__PURE__ */ React.createElement(Card, { theme, padding: 0 }, tickets.map(([id, title, variant, state], i) => /* @__PURE__ */ React.createElement(
    ListItem,
    {
      key: id,
      theme,
      title,
      subtitle: id,
      right: /* @__PURE__ */ React.createElement(Badge, { theme, variant }, state),
      divider: i < tickets.length - 1,
      onClick: () => setOpen(true)
    }
  ))), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", fullWidth: true, onClick: () => setOpen(true) }, "Open ticket")), /* @__PURE__ */ React.createElement("div", { onClick: () => setOpen(false), style: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    opacity: open ? 1 : 0,
    pointerEvents: open ? "auto" : "none",
    transition: `opacity ${motion.smooth} ${motion.easeInOut}`
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    transform: open ? "translateY(0)" : "translateY(100%)",
    transition: `transform ${motion.smooth} ${motion.emphasized}`
  } }, /* @__PURE__ */ React.createElement(
    InlinePanelPreview,
    {
      theme,
      title: "Ticket #4821",
      shape: "drawer",
      actions: /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", fullWidth: true, onClick: () => setOpen(false) }, "Done")
    },
    "Acme reports calendar sync failing for two admins. Known issue LIN-302, fixed in 2.14. Reply with the workaround and a $180 credit."
  ))));
}
function DemoFeedbackStatus({ theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Feedback & Status", height: 800, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 28, style: { width: 360 } }, /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Badges"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, wrap: true }, /* @__PURE__ */ React.createElement(Badge, { theme }, "Pending"), /* @__PURE__ */ React.createElement(Badge, { theme, variant: "accent" }, "Processing"), /* @__PURE__ */ React.createElement(Badge, { theme, variant: "success" }, "Resolved"), /* @__PURE__ */ React.createElement(Badge, { theme, variant: "warning" }, "Waiting"), /* @__PURE__ */ React.createElement(Badge, { theme, variant: "danger" }, "Failed"))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Tags"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, wrap: true }, /* @__PURE__ */ React.createElement(Tag, { theme, color: pal.accent }, "Acme \xB7 Enterprise"), /* @__PURE__ */ React.createElement(Tag, { theme, color: pal.success }, "Resolved"), /* @__PURE__ */ React.createElement(Tag, { theme, removable: true, onRemove: () => {
  } }, "Auto-reply on"))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Progress"), /* @__PURE__ */ React.createElement(Card, { theme, padding: 16 }, /* @__PURE__ */ React.createElement(CardHeader, { title: "Syncing Intercom", subtitle: "1,373 of 2,019 threads", theme }), /* @__PURE__ */ React.createElement(Progress, { value: 68, theme }))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Toasts"), /* @__PURE__ */ React.createElement(Stack, { gap: 12, align: "flex-start" }, /* @__PURE__ */ React.createElement(Toast, { theme, message: "Reply sent \xB7 Ticket #4821 to Acme", variant: "success", icon: "\u2713" }), /* @__PURE__ */ React.createElement(Toast, { theme, message: "Intercom connection dropped", variant: "danger", icon: "!" }))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Skeleton"), /* @__PURE__ */ React.createElement(Stack, { gap: "sm" }, /* @__PURE__ */ React.createElement(Skeleton, { theme, width: "60%", height: 14 }), /* @__PURE__ */ React.createElement(Skeleton, { theme, width: "100%", height: 14 }), /* @__PURE__ */ React.createElement(Skeleton, { theme, width: "80%", height: 14 }), /* @__PURE__ */ React.createElement(Skeleton, { theme, width: 40, height: 40, rounded: true })))));
}
function DemoDataDisplay({ theme }) {
  return /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Data Display", height: 760, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 28, style: { width: 380 } }, /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Stats"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 28 }, /* @__PURE__ */ React.createElement(Stat, { theme, label: "MRR", value: "$142.8k", change: "+8.2%" }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "Credits issued", value: "$3,412", change: "-1.4%" }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "Resolved by Alpha", value: "72%", change: "+3.1%" }))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Avatar group"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, align: "center" }, /* @__PURE__ */ React.createElement(AvatarGroup, { theme, names: ["Alpha", "Triage bot", "Renewal watcher", "Release notes", "Onboarding guide", "Research scout"] }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, "6 active agents"))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "List"), /* @__PURE__ */ React.createElement(Card, { theme, padding: 0 }, /* @__PURE__ */ React.createElement(ListItem, { theme, left: /* @__PURE__ */ React.createElement(Avatar, { name: "Alpha", size: 36, theme }), title: "Alpha", subtitle: "Support inbox \xB7 Triage", right: /* @__PURE__ */ React.createElement(Badge, { theme, variant: "success" }, "Running") }), /* @__PURE__ */ React.createElement(ListItem, { theme, left: /* @__PURE__ */ React.createElement(Avatar, { name: "Renewal watcher", size: 36, theme }), title: "Renewal watcher", subtitle: "HubSpot \xB7 Weekly check-in", right: /* @__PURE__ */ React.createElement(Badge, { theme, variant: "accent" }, "Queued") }), /* @__PURE__ */ React.createElement(ListItem, { theme, left: /* @__PURE__ */ React.createElement(Avatar, { name: "Release notes", size: 36, theme }), title: "Release notes", subtitle: "GitHub \xB7 Changelog draft", right: /* @__PURE__ */ React.createElement(Badge, { theme }, "Paused"), divider: false }))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Middle truncate \xB7 identifiers keep their tail"), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, [280, 200, 140].map((w) => /* @__PURE__ */ React.createElement("div", { key: w, style: { width: w, padding: "6px 10px", borderRadius: tokens.radius.sm, background: theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.025)" } }, /* @__PURE__ */ React.createElement(MiddleTruncate, { theme, text: "conv_9f3a2c7d4e1b8a6f5c2d9e0b7a4c1f8e3d2b1a" })))))));
}
function DemoAIElements({ theme }) {
  const pal = usePal(theme);
  const [streamKey, setStreamKey] = useState(0);
  const [stepKey, setStepKey] = useState(0);
  const [step, setStep] = useState(0);
  const [zoom, setZoom] = useState(100);
  useEffect(() => {
    setStep(0);
    const timers = [1, 2, 3, 4].map((n) => setTimeout(() => setStep(n), n * 900));
    return () => timers.forEach(clearTimeout);
  }, [stepKey]);
  return /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Streaming Text", height: 280, align: "top", controls: /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: () => setStreamKey((k) => k + 1) }, "\u21BB Replay") }, /* @__PURE__ */ React.createElement("div", { key: streamKey, style: { width: 360 } }, /* @__PURE__ */ React.createElement(StreamingText, { text: "Acme's usage dropped 40% this week and two of their admins opened tickets about calendar sync. I'd recommend replying now with the workaround and flagging the account to Dana for a check-in before renewal.", speed: 22, theme }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Thinking Indicator", height: 180, align: "top" }, /* @__PURE__ */ React.createElement(ThinkingIndicator, { theme, label: "Streaming" })), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Thinking Steps", height: 260, align: "top", controls: /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: () => setStepKey((k) => k + 1) }, "\u21BB Replay") }, /* @__PURE__ */ React.createElement("div", { key: stepKey, style: { width: 300 } }, /* @__PURE__ */ React.createElement(ThinkingSteps, { theme, current: step, steps: [
    "Scanning the Intercom inbox",
    "Matching against known issues",
    "Checking the refund cap",
    "Drafting the reply"
  ] }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Orbs", height: 220, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 56, align: "flex-start", justify: "center" }, [["pulse", "Lattice"], ["orbit", "Ring"]].map(([variant, label]) => /* @__PURE__ */ React.createElement(Stack, { key: variant, gap: 14, align: "center" }, /* @__PURE__ */ React.createElement(Orb, { variant, size: 32, color: pal.accent, theme }), /* @__PURE__ */ React.createElement(Caption, { theme }, label))))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Confidence Bar", height: 240, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 14, style: { width: 300 } }, /* @__PURE__ */ React.createElement(ConfidenceBar, { value: 94, label: "Known issue", theme }), /* @__PURE__ */ React.createElement(ConfidenceBar, { value: 72, label: "Root cause", theme }), /* @__PURE__ */ React.createElement(ConfidenceBar, { value: 38, label: "Churn risk", theme }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "AI Suggestion Badge", height: 180, align: "top" }, /* @__PURE__ */ React.createElement(AISuggestionBadge, { theme })), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Before / After Toggle", height: 340, align: "top" }, /* @__PURE__ */ React.createElement("div", { style: { width: 320 } }, /* @__PURE__ */ React.createElement(
    BeforeAfterToggle,
    {
      theme,
      before: /* @__PURE__ */ React.createElement(Card, { theme, padding: 16 }, /* @__PURE__ */ React.createElement(Stack, { gap: 4 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Original"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, "Sorry for the trouble, we're looking into it and will get back to you soon."))),
      after: /* @__PURE__ */ React.createElement(Card, { theme, padding: 16 }, /* @__PURE__ */ React.createElement(Stack, { gap: 4 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Agent rewrite"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, "The calendar sync bug is fixed in 2.14, shipping Thursday. Here's the workaround until then, plus a $180 credit for the outage.")))
    }
  ))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Zoom Control", height: 180, align: "top" }, /* @__PURE__ */ React.createElement(ZoomControl, { theme, zoom, onChange: setZoom })));
}
function InlinePanelPreview({ title, children, actions, theme, shape = "dialog" }) {
  const pal = usePal(theme);
  const isSheet = shape === "sheet";
  const isDrawer = shape === "drawer";
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: isSheet ? 320 : 400,
    maxWidth: "100%",
    boxSizing: "border-box",
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderTop: `1px solid ${pal.borderSubtle}`,
    borderLeft: `1px solid ${pal.borderSubtle}`,
    borderRight: `1px solid ${pal.borderSubtle}`,
    borderBottom: isDrawer ? "none" : `1px solid ${pal.borderSubtle}`,
    borderRadius: isDrawer ? `${tokens.radius.lg}px ${tokens.radius.lg}px 0 0` : tokens.radius.lg,
    padding: 24,
    boxShadow: `0 16px 48px ${pal.shadowLg}`,
    fontFamily: tokens.font.sans
  } }, isDrawer && /* @__PURE__ */ React.createElement("div", { style: { width: 32, height: 4, borderRadius: 2, background: pal.bgMuted, margin: "0 auto 16px" } }), title && /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.lg, fontWeight: tokens.weight.semibold, color: pal.text, marginBottom: 12 } }, title), /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.base, color: pal.textSecondary, lineHeight: 1.6 } }, children), actions && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20, display: "flex", justifyContent: "flex-end", gap: 8 } }, actions));
}
function DemoOverlays({ theme }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [formName, setFormName] = useState("");
  return /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Drawer", height: 700, align: "top" }, /* @__PURE__ */ React.createElement(DrawerPhonePreview, { theme })), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Popover, Dropdown & Hover card", height: 360, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 16, align: "center", wrap: true, justify: "center" }, /* @__PURE__ */ React.createElement(TriggerPopover, { theme }), /* @__PURE__ */ React.createElement(TriggerDropdown, { theme }), /* @__PURE__ */ React.createElement(
    HoverCard,
    {
      theme,
      trigger: /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, height: 30, padding: "0 4px", cursor: "default" } }, /* @__PURE__ */ React.createElement(Avatar, { name: "Alpha", size: 24, theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme }, "Hover me"))
    },
    /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(Avatar, { name: "Alpha", size: 32, theme }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme, style: { display: "block" } }, "Alpha"), /* @__PURE__ */ React.createElement(Text, { size: "xs", secondary: true, theme }, "Support inbox \xB7 Triage"))), /* @__PURE__ */ React.createElement(Text, { size: "xs", secondary: true, theme }, "Running for 42 days \xB7 72% resolved solo \xB7 6m median first response."))
  ))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Dialogs", height: 220, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 16, align: "center" }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, wrap: true, justify: "center" }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", size: "sm", onClick: () => setDialogOpen(true) }, "Dialog"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", size: "sm", onClick: () => setAlertOpen(true) }, "Alert"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", size: "sm", onClick: () => setFormOpen(true) }, "Form"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", size: "sm", onClick: () => setCardOpen(true) }, "Card"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", size: "sm", onClick: () => setSheetOpen(true) }, "Sheet")), /* @__PURE__ */ React.createElement(Caption, { theme }, "Each button opens the real overlay above the page.")), /* @__PURE__ */ React.createElement(Dialog, { theme, open: dialogOpen, onClose: () => setDialogOpen(false), title: "Confirm credit" }, "Issue a $180 credit to Acme for the outage? This posts to Stripe and cannot be undone."), /* @__PURE__ */ React.createElement(
    AlertDialog,
    {
      theme,
      open: alertOpen,
      onClose: () => setAlertOpen(false),
      title: "Close ticket?",
      description: "This will close Ticket #4821 for Acme and notify the customer. This cannot be undone.",
      confirmLabel: "Close ticket",
      variant: "danger"
    }
  ), /* @__PURE__ */ React.createElement(
    FormDialog,
    {
      theme,
      open: formOpen,
      onClose: () => setFormOpen(false),
      title: "Create workflow",
      description: "Name your workflow and set a refund cap.",
      onSubmit: () => {
      }
    },
    /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Workflow name", value: formName, onChange: setFormName, placeholder: "Refund triage" }),
    /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Refund cap (USD)", placeholder: "2,500" })
  ), /* @__PURE__ */ React.createElement(
    CardDialog,
    {
      theme,
      open: cardOpen,
      onClose: () => setCardOpen(false),
      cover: "\u25C6",
      title: "Alpha Pro upgrade",
      description: "Unlock unlimited workflows, HubSpot sync, and priority support.",
      actions: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: () => setCardOpen(false) }, "Later"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", onClick: () => setCardOpen(false) }, "Upgrade"))
    }
  ), /* @__PURE__ */ React.createElement(Sheet, { theme, open: sheetOpen, onClose: () => setSheetOpen(false), title: "Ticket details" }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, "View the full thread history and account context in this side panel."), /* @__PURE__ */ React.createElement(Divider, { theme }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "Account", value: "Acme" }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "CSAT", value: "4.8", change: "+4.4%" }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "Open tickets", value: "3" }), /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", fullWidth: true, onClick: () => setSheetOpen(false) }, "Close ticket")))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Tooltip", height: 200, align: "top" }, /* @__PURE__ */ React.createElement(Tooltip, { theme, text: "Copy ticket link" }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm" }, "Hover me"))));
}
function TriggerPopover({ theme }) {
  return /* @__PURE__ */ React.createElement(Popover, { theme, trigger: /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", size: "sm" }, "Popover") }, /* @__PURE__ */ React.createElement(Stack, { gap: 6, style: { width: 220 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme }, "Refund cap"), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, "Alpha can issue credits up to $250 per ticket on its own. Anything larger routes to Dana for approval.")));
}
function TriggerDropdown({ theme }) {
  return /* @__PURE__ */ React.createElement(
    DropdownMenu,
    {
      theme,
      trigger: /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", size: "sm" }, "Menu"),
      items: [
        { label: "Edit ticket", icon: "\u270E" },
        { label: "Duplicate", icon: "\u29C9" },
        { separator: true },
        { label: "Close ticket", icon: "\u2715", danger: true }
      ]
    }
  );
}
function DemoNavigation({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Overview");
  const [subtleTab, setSubtleTab] = useState("Inbox");
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const resetStep = () => setStep(0);
  const ctxTimer = useRef(null);
  useEffect(() => () => clearTimeout(ctxTimer.current), []);
  const openContextMenu = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const clientX = e.clientX ?? rect.left + rect.width / 2;
    const clientY = e.clientY ?? rect.top + rect.height / 2;
    clearTimeout(ctxTimer.current);
    ctxTimer.current = setTimeout(() => {
      target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }));
    }, 0);
  };
  const tabContent = {
    Overview: {
      stat: [{ label: "MRR", value: "$142.8k", change: "+8.2%" }, { label: "Credits issued", value: "$3,412", change: "-1.4%" }],
      blurb: "Alpha resolved 14 tickets across 3 queues in the last 24 hours. Median first response: 6 minutes."
    },
    Tickets: {
      stat: [{ label: "Open", value: "7" }, { label: "Resolved today", value: "14" }],
      blurb: "Most recent: Ticket #4821 for Acme, replied 4m ago. Next digest in 22m."
    },
    Settings: {
      stat: [{ label: "Autonomy", value: "Confirm first" }, { label: "Refund cap", value: "$2,500" }],
      blurb: "Auto-reply is on for known issues. Anything over the refund cap waits for your approval."
    }
  }[tab];
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Breadcrumbs", height: 280, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 24, style: { width: 480 } }, row("Default", /* @__PURE__ */ React.createElement(Breadcrumb, { theme, home: true, items: [
    { label: "Workspace" },
    { label: "Agents" },
    { label: "Alpha" }
  ] })), row("Truncated", /* @__PURE__ */ React.createElement(Breadcrumb, { theme, maxVisible: 3, items: [
    { label: "Northwind" },
    { label: "Workspace" },
    { label: "Agents" },
    { label: "Alpha" },
    { label: "Settings" },
    { label: "Guardrails" }
  ] })), row("", /* @__PURE__ */ React.createElement(Caption, { theme }, "Hover the \u2026 to reveal the full path.")))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Tabs" }, /* @__PURE__ */ React.createElement(Stack, { gap: 20, style: { width: 340 } }, /* @__PURE__ */ React.createElement(Tabs, { theme, tabs: ["Overview", "Tickets", "Settings"], value: tab, onChange: setTab }), /* @__PURE__ */ React.createElement("div", { key: tab, style: { animation: `halaska-tab-fade 0.25s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 24 }, tabContent.stat.map((s, i) => /* @__PURE__ */ React.createElement(Stat, { key: i, theme, label: s.label, value: s.value, change: s.change }))), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, lineHeight: 1.6 } }, tabContent.blurb))))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Subtle Tabs" }, /* @__PURE__ */ React.createElement(SubtleTabs, { theme, tabs: ["Inbox", "Issues", "Renewals"], value: subtleTab, onChange: setSubtleTab })), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Stepper", controls: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: resetStep }, "Reset"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", iconRight: "\u2192", onClick: nextStep }, "Advance")) }, /* @__PURE__ */ React.createElement("div", { style: { width: 320 } }, /* @__PURE__ */ React.createElement(Stepper, { theme, current: step, steps: ["Connect", "Configure", "Review", "Deploy"] }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Accordion & Collapsible", height: 460, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 32, style: { width: 340 } }, /* @__PURE__ */ React.createElement(Accordion, { theme, items: [
    { title: "What does auto-reply do?", content: "Alpha answers tickets that match a known issue in the changelog or runbooks, and leaves everything else for you." },
    { title: "How are credits capped?", content: "Credits over $2,500 wait for your approval. Replies are never capped." },
    { title: "Can I pause Alpha?", content: "Yes. Use the pause switch in Agent Settings to stop all active workflows immediately." }
  ] }), /* @__PURE__ */ React.createElement(Collapsible, { theme, title: "Advanced settings" }, /* @__PURE__ */ React.createElement(Stack, { gap: 8, style: { paddingBottom: 8 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, secondary: true }, "Configure SLA rules, escalation contacts, and custom webhook endpoints."))))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Context Menu" }, /* @__PURE__ */ React.createElement(ContextMenu, { theme, items: [
    { label: "Edit ticket", icon: "\u270E", shortcut: "\u2318E" },
    { label: "Duplicate", icon: "\u29C9", shortcut: "\u2318D" },
    { separator: true },
    { label: "Close ticket", icon: "\u2715", danger: true }
  ] }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: openContextMenu,
      role: "button",
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openContextMenu(e);
        }
      },
      style: {
        width: 320,
        padding: "28px 32px",
        cursor: "context-menu",
        userSelect: "none",
        background: pal.bgSubtle,
        border: `1px dashed ${pal.borderInput}`,
        borderRadius: tokens.radius.md,
        fontFamily: tokens.font.sans,
        textAlign: "center",
        transition: `background ${motion.smooth} ${motion.easeInOut}, border-color ${motion.smooth} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { color: pal.textSecondary, display: "block" } }, "Right-click here"),
    /* @__PURE__ */ React.createElement(Caption, { theme, style: { display: "block", marginTop: 4 } }, "A normal click opens the same menu")
  ))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Menubar" }, /* @__PURE__ */ React.createElement(Menubar, { theme, menus: [
    { label: "File", items: [{ label: "New ticket", shortcut: "\u2318N" }, { label: "Open\u2026", shortcut: "\u2318O" }, { separator: true }, { label: "Save", shortcut: "\u2318S" }] },
    { label: "Edit", items: [{ label: "Undo", shortcut: "\u2318Z" }, { label: "Redo", shortcut: "\u21E7\u2318Z" }] },
    { label: "View", items: [{ label: "Toggle sidebar" }, { label: "Toggle DevTools" }] }
  ] })), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Command Menu" }, /* @__PURE__ */ React.createElement(CommandPalette, { theme, items: [
    { label: "New ticket", icon: "+", shortcut: "T" },
    { label: "Issue credit", icon: "$", shortcut: "D" },
    { label: "View open tickets", icon: "\u25E7" },
    { label: "Open workflow builder", icon: "\u2726", shortcut: "S" },
    { label: "Sync inbox", icon: "\u27F3" }
  ] })));
}
function DemoTable({ theme }) {
  const [view, setView] = useState(DEMOTBL_VIEWS[0]);
  const [page, setPage] = useState(1);
  const [dotPage, setDotPage] = useState(2);
  return /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Table", height: 400, align: "top", controls: /* @__PURE__ */ React.createElement("div", { style: { width: 200 } }, /* @__PURE__ */ React.createElement(SegmentedControl, { theme, options: DEMOTBL_VIEWS, value: view, onChange: setView })) }, /* @__PURE__ */ React.createElement(Stack, { gap: 12, style: { width: 460 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 220 } }, view === "Simple" ? /* @__PURE__ */ React.createElement(Table, { theme, columns: DEMOTBL_COLUMNS, rows: DEMOTBL_ROWS }) : /* @__PURE__ */ React.createElement(DataTable, { theme, columns: DEMOTBL_COLUMNS, rows: DEMOTBL_ROWS })), /* @__PURE__ */ React.createElement(Caption, { theme }, view === "Simple" ? "Plain rows with hover." : "Adds row selection and sortable column headers."))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Pagination", height: 260, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 28, style: { width: 320 } }, /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Numbers"), /* @__PURE__ */ React.createElement(Pagination, { theme, current: page, total: 8, onChange: setPage })), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Dots"), /* @__PURE__ */ React.createElement(Pagination, { theme, variant: "dots", current: dotPage, total: 5, onChange: setDotPage })))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Scroll Area", height: 320, align: "top" }, /* @__PURE__ */ React.createElement("div", { style: { width: 320 } }, /* @__PURE__ */ React.createElement(ScrollArea, { theme, maxHeight: 180 }, /* @__PURE__ */ React.createElement(Stack, { gap: 0 }, [
    ["14:36:41", "Reply sent \xB7 Ticket #4821 to Acme"],
    ["14:32:05", "Reply sent \xB7 Ticket #4819 to Lumen Labs"],
    ["14:18:52", "Credit issued \xB7 $180 to Acme"],
    ["13:57:20", "Signal \xB7 Acme usage down 40% this week"],
    ["13:41:03", "Triage \xB7 12 tickets tagged and routed"],
    ["13:22:48", "Issue filed \xB7 LIN-302 calendar sync"],
    ["12:58:31", "Escalated \xB7 Ticket #4802 to Priya"],
    ["12:40:07", "Inbox synced \xB7 2,500 threads"]
  ].map(([time, event], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", gap: 12, padding: "8px 4px", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement(Text, { size: "xs", mono: true, secondary: true, theme }, time), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, event))))))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Sparkline", height: 240, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 12, align: "center" }, /* @__PURE__ */ React.createElement(Sparkline, { theme, data: [12, 18, 14, 22, 19, 26, 24, 31, 28, 35, 33, 40], width: 220, height: 56 }), /* @__PURE__ */ React.createElement(Caption, { theme }, "Tickets resolved \xB7 30d \xB7 +22% \xB7 pure SVG, no chart library"))));
}
function DemoFormExtras({ theme }) {
  const [otp, setOtp] = useState("");
  return /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Form Extras" }, /* @__PURE__ */ React.createElement(Stack, { gap: 24, style: { width: 320 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { theme }, "Verification code"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8 } }, /* @__PURE__ */ React.createElement(InputOTP, { theme, length: 6, value: otp, onChange: setOtp }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { theme }, "Keyboard shortcuts"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 6, style: { marginTop: 8, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Kbd, { theme }, "\u2318"), /* @__PURE__ */ React.createElement(Kbd, { theme }, "K"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: "inherit", opacity: 0.4, margin: "0 4px" } }, "\xB7"), /* @__PURE__ */ React.createElement(Kbd, { theme }, "\u21E7"), /* @__PURE__ */ React.createElement(Kbd, { theme }, "Enter")))));
}
function DemoAlerts({ theme }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p2) => p2 >= 100 ? 0 : p2 + 4);
    }, 120);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Alert Banners", height: 520, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 20, style: { width: 400 } }, /* @__PURE__ */ React.createElement(AlertBanner, { theme, variant: "default", title: "Sync complete", description: "All Intercom threads have been updated." }), /* @__PURE__ */ React.createElement(AlertBanner, { theme, variant: "success", title: "Reply sent", description: "Ticket #4821 answered with the calendar sync workaround." }), /* @__PURE__ */ React.createElement(AlertBanner, { theme, variant: "warning", title: "SLA at risk", description: "3 tickets are within 15 minutes of breaching first response." }), /* @__PURE__ */ React.createElement(AlertBanner, { theme, variant: "danger", title: "Churn risk", description: "Acme's usage dropped 40% this week." }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Empty State", height: 400, align: "top" }, /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      theme,
      icon: "\u25C7",
      title: "No open tickets",
      description: "Sync your inbox or deploy an agent to get started.",
      action: /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm" }, "Sync inbox")
    }
  )), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Progress Circle", height: 240, align: "top" }, /* @__PURE__ */ React.createElement(ProgressCircle, { theme, value: progress, label: `${progress}%`, size: 64 })), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Spinner", height: 200, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 24, align: "center" }, /* @__PURE__ */ React.createElement(Spinner, { size: 14 }), /* @__PURE__ */ React.createElement(Spinner, { size: 20 }), /* @__PURE__ */ React.createElement(Spinner, { size: 28 }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Status", height: 300, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 28, style: { width: 360 } }, /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Badges"), /* @__PURE__ */ React.createElement(Stack, { gap: 10, direction: "row", wrap: true, align: "center" }, /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "online", pulse: true }, "Live"), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "pending" }, "Pending"), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "error" }, "Failed"), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "accent" }, "Beta"), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "offline" }, "Idle"))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Dots"), /* @__PURE__ */ React.createElement(Stack, { gap: 20, direction: "row", wrap: true, align: "center" }, [
    ["online", "Live", true],
    ["busy", "Degraded", false],
    ["error", "Down", false],
    ["offline", "Idle", false],
    ["accent", "Beta", false]
  ].map(([status, label, pulse]) => /* @__PURE__ */ React.createElement(Stack, { key: status, direction: "row", gap: 7, align: "center" }, /* @__PURE__ */ React.createElement(StatusDot, { theme, status, pulse }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, label))))))));
}
function AgentStatusStopIcon({ size = 12 }) {
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("rect", { x: "2.5", y: "2.5", width: "7", height: "7", rx: "1.5", fill: "currentColor", fillOpacity: "0.18" }));
}
function AgentStatusResumeIcon({ size = 12 }) {
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M3.5 2.5 L9.5 6 L3.5 9.5 Z", fill: "currentColor", fillOpacity: "0.18" }));
}
function AgentStatusBranchIcon({ size = 13 }) {
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 13 13", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("circle", { cx: "3.5", cy: "9.75", r: "1.75" }), /* @__PURE__ */ React.createElement("circle", { cx: "9.5", cy: "3.25", r: "1.75" }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 8 C3.5 5.25 9.5 7.5 9.5 5" }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 8 V4.5" }));
}
function diffviewRows(hunk) {
  const m = /@@ -(\d+)(?:,\d+)? \+(\d+)/.exec(hunk.header) || [];
  let oldN = Number(m[1]) || 1;
  let newN = Number(m[2]) || 1;
  const rows = [];
  const lines = hunk.lines;
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.t === "ctx") {
      rows.push({
        left: { n: oldN++, code: line.code, t: "ctx" },
        right: { n: newN++, code: line.code, t: "ctx" }
      });
      i += 1;
      continue;
    }
    const dels = [];
    const adds = [];
    while (i < lines.length && lines[i].t === "del") dels.push(lines[i++]);
    while (i < lines.length && lines[i].t === "add") adds.push(lines[i++]);
    const len = Math.max(dels.length, adds.length);
    for (let k = 0; k < len; k++) {
      rows.push({
        left: dels[k] ? { n: oldN++, code: dels[k].code, t: "del" } : null,
        right: adds[k] ? { n: newN++, code: adds[k].code, t: "add" } : null
      });
    }
  }
  return rows;
}
const NOTIFICATIONS_ITEMS = [
  { id: "n1", icon: "\u2713", tone: "success", title: "Reply sent", body: "Ticket #4821 \xB7 Acme \xB7 calendar sync workaround", time: "2m" },
  { id: "n2", icon: "!", tone: "warning", title: "Refund needs approval", body: "Lumen Labs asked for $3,200, over your $2,500 cap. Review before sending.", time: "14m" },
  { id: "n3", icon: "\u2726", tone: "accent", title: "New signal from Alpha", body: "Acme's usage dropped 40% this week.", time: "42m" },
  { id: "n4", icon: "\u2715", tone: "danger", title: "Intercom connection dropped", body: "Reconnecting to the inbox\u2026", time: "1h" },
  { id: "n5", icon: "\u29D7", tone: "muted", title: "Daily digest sent", body: "14 tickets resolved, 3 escalated to Priya.", time: "3h", read: true }
];
const COMMAND_RECENT = [
  { icon: "\u21BA", label: "Escalate #4821 to Priya" },
  { icon: "\u21BA", label: "Refund status for Lumen Labs" }
];
function CommandSearchChip({ icon, label, onPick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onMouseDown: (e) => e.preventDefault(),
      onClick: onPick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: tokens.radius.pill,
        background: hover ? pal.bgMuted : pal.bgSubtle,
        border: `1px solid ${hover ? pal.border : pal.borderSubtle}`,
        color: hover ? pal.text : pal.textSecondary,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        whiteSpace: "nowrap",
        transform: hover ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hover ? `0 4px 12px ${pal.shadowLg}` : "0 0 0 transparent"
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: pal.textTertiary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, icon),
    label
  );
}
function NotificationsDemo({ theme }) {
  const pal = usePal(theme);
  const [readIds, setReadIds] = useState(() => NOTIFICATIONS_ITEMS.filter((n) => n.read).map((n) => n.id));
  const [hoverId, setHoverId] = useState(null);
  const [hoverAll, setHoverAll] = useState(false);
  const tones = { success: pal.success, warning: pal.warning, accent: pal.accent, danger: pal.danger, muted: pal.textSecondary };
  const unread = NOTIFICATIONS_ITEMS.filter((n) => !readIds.includes(n.id)).length;
  const markRead = (id) => setReadIds((ids) => ids.includes(id) ? ids : [...ids, id]);
  const markAll = () => setReadIds(NOTIFICATIONS_ITEMS.map((n) => n.id));
  return /* @__PURE__ */ React.createElement("div", { style: { width: 400, maxWidth: "100%", display: "flex", flexDirection: "column", background: pal.bgElevated, borderRadius: tokens.radius.md, border: `1px solid ${pal.borderSubtle}`, overflow: "hidden", transition: `all ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderBottom: `1px solid ${pal.borderSubtle}` } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme }, "Notifications"), /* @__PURE__ */ React.createElement(Badge, { theme, variant: unread > 0 ? "accent" : "default", style: { fontVariantNumeric: "tabular-nums", minWidth: 22, justifyContent: "center" } }, unread), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: markAll,
      disabled: unread === 0,
      onMouseEnter: () => setHoverAll(true),
      onMouseLeave: () => setHoverAll(false),
      style: {
        ...interactiveBase,
        marginLeft: "auto",
        padding: "2px 0",
        background: "transparent",
        ...tokens.type.xs,
        fontWeight: tokens.weight.medium,
        color: unread === 0 ? pal.textMuted : hoverAll ? pal.text : pal.textSecondary,
        cursor: unread === 0 ? "default" : "pointer"
      }
    },
    unread === 0 ? "All read" : "Mark all read"
  )), NOTIFICATIONS_ITEMS.map((n, i) => {
    const read = readIds.includes(n.id);
    const color = tones[n.tone] || pal.textSecondary;
    const hovered = hoverId === n.id && !read;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: n.id,
        role: read ? void 0 : "button",
        tabIndex: read ? void 0 : 0,
        onClick: () => markRead(n.id),
        onKeyDown: (e) => {
          if (!read && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            markRead(n.id);
          }
        },
        onMouseEnter: () => setHoverId(n.id),
        onMouseLeave: () => setHoverId(null),
        style: {
          display: "flex",
          gap: 12,
          padding: "12px 16px",
          outline: "none",
          borderBottom: i < NOTIFICATIONS_ITEMS.length - 1 ? `1px solid ${pal.borderSubtle}` : "none",
          background: read ? "transparent" : hovered ? pal.bgSubtle : theme === "dark" ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.015)",
          cursor: read ? "default" : "pointer",
          transition: `background ${motion.normal} ${motion.easeInOut}`
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        width: 28,
        height: 28,
        borderRadius: 14,
        flexShrink: 0,
        background: `${color}22`,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: tokens.weight.semibold,
        opacity: read ? 0.55 : 1,
        transition: `all ${motion.smooth} ${motion.easeInOut}`
      } }, n.icon),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: read ? "medium" : "semibold", theme, style: { color: read ? pal.textSecondary : pal.text } }, n.title), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary, flexShrink: 0 } }, n.time)), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: read ? pal.textTertiary : pal.textSecondary, marginTop: 2, lineHeight: 1.5 } }, n.body)),
      /* @__PURE__ */ React.createElement("div", { style: {
        width: 6,
        height: 6,
        borderRadius: 3,
        background: pal.accent,
        alignSelf: "center",
        flexShrink: 0,
        opacity: read ? 0 : 1,
        transform: read ? "scale(0.4)" : "scale(1)",
        transition: `all ${motion.smooth} ${motion.easeInOut}`
      } })
    );
  }));
}
function NotificationCenterPattern({ theme }) {
  return /* @__PURE__ */ React.createElement(NotificationsDemo, { theme });
}
function DismissibleChipsDemo({ theme }) {
  const all = ["Acme \xB7 Enterprise", "Calendar sync", "Priority: high", "Assigned: Dana"];
  const [tags, setTags] = useState(all);
  return /* @__PURE__ */ React.createElement(Stack, { gap: 8, direction: "row", wrap: true, align: "center" }, tags.map((t, i) => /* @__PURE__ */ React.createElement(
    Chip,
    {
      key: t,
      theme,
      selected: true,
      onRemove: () => setTags(tags.filter((_, j) => j !== i))
    },
    t
  )), tags.length === 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, secondary: true }, "All dismissed."), /* @__PURE__ */ React.createElement(LinkButton, { theme, size: "sm", onClick: () => setTags(all) }, "Restore")));
}
function DemoInputsExtended({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Slider", height: 240, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 20, style: { width: 300 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement(SwitchToggle, { theme, checked: spring, onChange: setSpring, label: "Spring" })), /* @__PURE__ */ React.createElement("div", { style: { height: 52 } }, spring ? /* @__PURE__ */ React.createElement(SpringSlider, { theme, label: "Refund cap", value: slider, onChange: setSlider }) : /* @__PURE__ */ React.createElement(Slider, { theme, label: "Refund cap", value: slider, onChange: setSlider })))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Spring Toggle" }, /* @__PURE__ */ React.createElement(SpringToggle, { theme, checked: springToggle, onChange: setSpringToggle, label: "Auto-reply" })), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Toggle & Toggle Group" }, /* @__PURE__ */ React.createElement(Stack, { gap: 16, align: "center" }, /* @__PURE__ */ React.createElement(Toggle, { theme, pressed: togglePressed, onPress: setTogglePressed }, "SLA alerts"), /* @__PURE__ */ React.createElement(ToggleGroup, { theme, options: ["15m", "1h", "4h", "1d"], value: toggleGroupVal, onChange: setToggleGroupVal }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Choicebox" }, /* @__PURE__ */ React.createElement("div", { style: { width: 340 } }, /* @__PURE__ */ React.createElement(
    Choicebox,
    {
      theme,
      value: orderType,
      onChange: setOrderType,
      options: [
        { id: "auto", title: "Auto-reply", description: "Send the reply as soon as it matches a known issue.", meta: "instant" },
        { id: "confirm", title: "Confirm first", description: "Draft the reply and wait for your approval.", meta: "review" },
        { id: "batch", title: "Batch", description: "Bundle replies into a digest every 30 minutes.", meta: "30m" }
      ]
    }
  ))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Chips", height: 240, align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 20, style: { width: 520 } }, row("Toggle", /* @__PURE__ */ React.createElement(Stack, { gap: 8, direction: "row", wrap: true, align: "center" }, ["Open", "Waiting", "Escalated", "Resolved", "Snoozed"].map((c) => /* @__PURE__ */ React.createElement(Chip, { key: c, theme, selected: chips.has(c), onToggle: () => toggleChip(c) }, c)))), row("Dismissible", /* @__PURE__ */ React.createElement(DismissibleChipsDemo, { theme })))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Date Picker", height: 480, align: "top" }, /* @__PURE__ */ React.createElement("div", { style: { width: 260 } }, /* @__PURE__ */ React.createElement(DatePicker, { theme, label: "Renewal date", value: date, onChange: setDate }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ React.createElement(Calendar, { theme, value: date, onChange: setDate })))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Rating" }, /* @__PURE__ */ React.createElement(Rating, { theme, value: rating, onChange: setRating, size: 22 })));
}
function DemoDevSurfaces({ theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement(Stack, { gap: 24 }, /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Snippet" }, /* @__PURE__ */ React.createElement("div", { style: { width: 340 } }, /* @__PURE__ */ React.createElement(Snippet, { theme, text: "alpha deploy --workflow triage --dry-run" }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "File Tree", align: "top" }, /* @__PURE__ */ React.createElement("div", { style: { width: 300, paddingTop: 8 } }, /* @__PURE__ */ React.createElement(FileTree, { theme, data: [
    {
      name: "workflows",
      children: [
        { name: "triage.config.ts", badge: "editing" },
        { name: "escalation.config.ts" },
        { name: "sla.rules.ts" }
      ]
    },
    {
      name: "releases",
      defaultOpen: false,
      children: [
        { name: "release-notes.md" },
        { name: "onboarding-email.ts" }
      ]
    },
    { name: "alpha.config.ts" },
    { name: "README.md" }
  ] }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Browser Frame" }, /* @__PURE__ */ React.createElement("div", { style: { width: 400, maxWidth: "100%" } }, /* @__PURE__ */ React.createElement(BrowserFrame, { theme, url: "alpha.northwind.app/dashboard" }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 24 }, /* @__PURE__ */ React.createElement(Stat, { theme, label: "MRR", value: "$142.8k", change: "+8.2%" }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "Resolved by Alpha", value: "72%", change: "+3.1%" })), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary } }, "The page Alpha is building, framed for previews and demos."))))));
}
const FAKE_WALLET = { address: "northwind.app", name: "Alpha" };
const WIZARD_STEPS = ["Identity", "Job", "Autonomy", "Budget", "Tools", "Safety", "Review"];
const AGENT_VISUALS = ["\u25C6", "\u2726", "\u25C9", "\u25B2", "\u2B21", "\u25C8", "\u26A1", "\u263E"];
const STRATEGY_OPTIONS = [
  { id: "triage", icon: "\u2709", title: "Support triage", subtitle: "Reply, tag, and route incoming tickets" },
  { id: "release", icon: "\u2295", title: "Release notes", subtitle: "Draft the changelog from merged pull requests" },
  { id: "renewals", icon: "\u21BB", title: "Renewals", subtitle: "Flag churn risk and draft check-ins before renewal" },
  { id: "research", icon: "\u224B", title: "Research", subtitle: "Summarize customer calls and product analytics" }
];
const RISK_TIERS = [
  { id: "conservative", label: "Supervised", drawdown: 10, weight: 0.5 },
  { id: "moderate", label: "Balanced", drawdown: 40, weight: 1 },
  { id: "aggressive", label: "Autonomous", drawdown: 85, weight: 1.6 }
];
const PAIR_OPTIONS = [
  { value: "All customers", label: "All customers" },
  { value: "Enterprise", label: "Enterprise" },
  { value: "Intercom", label: "Intercom" },
  { value: "Linear", label: "Linear" },
  { value: "GitHub", label: "GitHub" },
  { value: "Slack", label: "Slack" },
  { value: "HubSpot", label: "HubSpot" },
  { value: "Stripe", label: "Stripe" }
];
const ALLOWED_PAIR_CHIPS = ["Intercom", "Linear", "GitHub", "Slack", "HubSpot", "Stripe"];
const PATTERN_GROUPS = [
  {
    id: "grp-conversation",
    title: "Conversation core",
    blurb: "The baseline chat surface. Every AI product ships these, so the play here is craft, not coverage.",
    patterns: [
      { id: "pat-prompt-input", title: "Prompt input", desc: "The composer: attachments, model pill, and a stop-while-streaming state.", component: "PromptInputPattern", height: 380 },
      { id: "pat-message", title: "Message thread", desc: "User and assistant turns with hover actions and response branches.", component: "MessageThreadPattern", height: 420 },
      { id: "pat-streaming", title: "Streaming answer", desc: "Streamed reply with inline sources and follow-ups.", component: "StreamingAnswerPattern", replay: true, height: 580 },
      { id: "pat-chat", title: "Agent chat", desc: "Chat panel with reasoning chips and a composer.", component: "AgentChatPattern", replay: true, height: 640 },
      { id: "pat-code", title: "Code block", desc: "Agent-written code streaming in line by line with syntax tint.", component: "CodeBlockPattern", replay: true, height: 460 },
      { id: "pat-model-context", title: "Model & context", desc: "Model picker with capability badges and a live context-window meter.", component: "ModelContextPattern", height: 480 }
    ]
  },
  {
    id: "grp-trust",
    title: "Trust & transparency",
    blurb: "Why the user should believe the output: reasoning made visible, sources attached, confidence stated honestly.",
    patterns: [
      { id: "pat-thinking", title: "Thinking", desc: "Expandable reasoning trace while the agent works.", component: "ThinkingTracePattern", replay: true, height: 460 },
      { id: "pat-citations", title: "Inline citations", desc: "Numbered source chips with an anchored popover pager.", component: "CitationsPattern", height: 480 },
      { id: "pat-context", title: "Context sources", desc: "Retrieved knowledge chunks with their sources.", component: "ContextSourcesPattern", height: 500 },
      { id: "pat-confidence", title: "Confidence states", desc: "One claim rendered at three confidence levels. Low is a designed state.", component: "ConfidencePattern", height: 520 },
      { id: "pat-recommendation", title: "Recommendation", desc: "Agent suggestion with confidence and clear actions.", component: "RecommendationPattern", replay: true, height: 580 },
      { id: "pat-feedback", title: "Feedback capture", desc: "Thumbs with a structured follow-up on negative.", component: "FeedbackPattern", height: 480 }
    ]
  },
  {
    id: "grp-control",
    title: "Agentic control",
    blurb: "The delegation lifecycle: consent before the agent acts, visibility while it works, accountability after. Intervention points that don't look like errors.",
    patterns: [
      { id: "pat-plan", title: "Plan preview", desc: "The agent states its plan in plain language. Proceed, edit, or take over.", component: "PlanPreviewPattern", replay: true, height: 540 },
      { id: "pat-approval", title: "Approval card", desc: "Human-in-the-loop question before the agent acts.", component: "ApprovalCardPattern", replay: true, height: 540 },
      { id: "pat-autonomy", title: "Autonomy levels", desc: "Per-task dial for how much the agent may do, observe through autonomous.", component: "AutonomyPattern", height: 620 },
      { id: "pat-permissions", title: "Permission scope", desc: "Tools, data, and limits the agent can touch, summarised in plain language.", component: "PermissionScopePattern", height: 740 },
      { id: "pat-queue", title: "Task queue", desc: "What the agent will work through. Reorder, remove, watch it clear.", component: "QueuePattern", replay: true, height: 560 },
      { id: "pat-status", title: "Agent status", desc: "Live status pill with rolling phases, a stop control, and a mid-run redirect.", component: "AgentStatusPattern", replay: true, height: 340 },
      { id: "pat-tools", title: "Tool calls", desc: "Edits, commands, and reads as a compact activity feed.", component: "ToolStreamPattern", replay: true, height: 600 },
      { id: "pat-tasks", title: "Task rows", desc: "Live agent task status: running, failed, completed.", component: "AgentTasksPattern", replay: true, height: 600 },
      { id: "pat-handoff", title: "Handoff", desc: "The agent escalates to a human with prepared context. Calm, not a failure.", component: "HandoffPattern", replay: true, height: 480 },
      { id: "pat-receipt", title: "Action receipt", desc: "Evidence of what changed, under whose authority, with a time-limited undo.", component: "ActionReceiptPattern", replay: true, height: 500 },
      { id: "pat-checkpoints", title: "Checkpoints", desc: "Named restore points. Confirm inline and roll back with re-verification.", component: "CheckpointPattern", replay: true, height: 460 },
      { id: "pat-audit", title: "Audit log", desc: "The filterable record of agent actions, with inline receipts.", component: "AuditLogPattern", height: 620 },
      { id: "pat-error-repair", title: "Error repair", desc: "The structured mistake: acknowledge, show the fix, offer recourse.", component: "ErrorRepairPattern", replay: true, height: 500 }
    ]
  },
  {
    id: "grp-output",
    title: "Output & generative UI",
    blurb: "Where responses stop being text: proposed edits, structured objects, artifacts, and charts.",
    patterns: [
      { id: "pat-artifact", title: "Artifact", desc: "Generated content in a versioned container with preview and raw views.", component: "ArtifactPattern", height: 540 },
      { id: "pat-diff-view", title: "Diff view", desc: "Proposed code edits side by side with per-hunk accept and reject.", component: "DiffViewPattern", replay: true, height: 560 },
      { id: "pat-diff", title: "Diff table", desc: "AI-proposed edits sweeping through tabular data.", component: "DiffTablePattern", replay: true, height: 540 },
      { id: "pat-structured", title: "Structured data", desc: "Schema output rendered as a readable card, raw JSON one toggle away.", component: "StructuredDataPattern", height: 520 },
      { id: "pat-insights", title: "Insight cards", desc: "Paged agent insights with live charts.", component: "InsightCardsPattern", height: 620 },
      { id: "pat-comparison", title: "Comparison", desc: "Two models stream the same prompt side by side. Pick a winner.", component: "ComparisonPattern", replay: true, height: 500 }
    ]
  },
  {
    id: "grp-ambient",
    title: "Ambient & beyond chat",
    blurb: "The agent outside the thread: boards, nudges, digests, and inline assists that don't make you scroll a transcript to reconstruct state.",
    patterns: [
      { id: "pat-taskboard", title: "Taskboard", desc: "The board is primary, chat is secondary. Work moves when decisions are needed.", component: "TaskboardPattern", replay: true, height: 440 },
      { id: "pat-inline-assist", title: "Inline assist", desc: "Ghost-text completions. Accept, dismiss, and watch the agent adapt.", component: "InlineAssistPattern", replay: true, height: 380 },
      { id: "pat-nudge", title: "Nudge", desc: "A proactive, non-blocking suggestion with a real escape hatch.", component: "NudgePattern", replay: true, height: 320 },
      { id: "pat-digest", title: "Digest", desc: "While-you-were-away summary with rationale and receipts per action.", component: "DigestPattern", height: 560 },
      { id: "pat-notifications", title: "Notification center", desc: "The classic panel: agent events with severity, read state, and actions.", component: "NotificationCenterPattern", height: 560 },
      { id: "pat-search", title: "Command search", desc: "Command palette with live filtering and an empty state.", component: "CommandSearchPattern", height: 540 },
      { id: "pat-agent-setup", title: "Agent setup", desc: "Full multi-step setup flow with live preview.", component: "AgentSetupPattern", height: 760, align: "top" }
    ]
  }
];
const UX_PATTERNS = PATTERN_GROUPS.flatMap((g) => g.patterns);
UX_PATTERNS.forEach((p2, i) => {
  p2.n = String(i + 1).padStart(2, "0");
});
const UX_PARADIGMS = [
  {
    id: "chat",
    title: "Chat",
    body: "The thread is the product. You talk to the agent; it thinks, answers, asks, and acts in the flow of the conversation.",
    groups: ["grp-conversation", "grp-trust", "grp-control"],
    example: "ChatParadigmExample"
  },
  {
    id: "canvas",
    title: "Canvas",
    body: "The agent works on something outside the thread: a document, a board, a diff, a screen. Chat becomes the secondary channel.",
    groups: ["grp-output", "grp-ambient", "grp-control"],
    example: "CanvasParadigmExample"
  }
];
const PATTERN_ROADMAP = [
  { id: "canvas", icon: "\u2B21", title: "Workflow canvas", desc: "Node-and-edge view of multi-agent pipelines" },
  { id: "voice", icon: "\u25C9", title: "Voice input", desc: "Push-to-talk capture with live transcription states" },
  { id: "preview", icon: "\u29C9", title: "Live preview", desc: "Embedded view of what the agent is building" },
  { id: "terminal", icon: "\u25A4", title: "Terminal output", desc: "Streamed command output for coding agents" },
  { id: "memory", icon: "\u2630", title: "Agent memory", desc: "What the agent knows about you, editable and revocable" },
  { id: "history", icon: "\u2261", title: "Conversation history", desc: "Past sessions with search, pin, and rename" }
];
function ConnectedWalletPill({ theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "4px 10px 4px 4px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    fontFamily: tokens.font.sans,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: FAKE_WALLET.name, size: 20, theme }), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textSecondary, fontFamily: tokens.font.mono } }, FAKE_WALLET.address), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "online", pulse: true }, "Live"));
}
function AgentVisualAvatar({ visual, size = 72, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: size,
    height: size,
    borderRadius: size / 2,
    background: visual ? `linear-gradient(135deg, ${pal.accent}, ${pal.accentHover})` : pal.bgMuted,
    border: `1px solid ${visual ? "transparent" : pal.borderSubtle}`,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: size * 0.42,
    flexShrink: 0,
    boxShadow: visual ? `0 4px 14px ${pal.accent}33` : "none",
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    fontFamily: tokens.font.sans
  } }, visual || /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, fontSize: size * 0.3 } }, "?"));
}
function AgentPreviewCard({ state, strategyObj, riskObj, budgetNum, theme }) {
  const pal = usePal(theme);
  const hasIdentity = !!(state.name.trim() || state.visual);
  const hasStrategy = !!state.strategy;
  const hasRisk = state.step >= 2;
  const hasCapital = state.step >= 3 && budgetNum > 0;
  const hasMarkets = state.step >= 4;
  const hasSafety = state.step >= 5;
  const anyBuilt = hasIdentity || hasStrategy;
  const fadeIn = { animation: `halaska-fade-in ${motion.smooth} ${motion.easeOut} both` };
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: 18,
    borderRadius: tokens.radius.lg,
    background: anyBuilt ? theme === "dark" ? "rgba(42,42,42,0.5)" : "rgba(255,255,255,0.6)" : "transparent",
    border: anyBuilt ? `1px solid ${pal.borderSubtle}` : `1.5px dashed ${pal.borderSubtle}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    fontFamily: tokens.font.sans
  } }, /* @__PURE__ */ React.createElement(Stack, { gap: 14 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, align: "center" }, /* @__PURE__ */ React.createElement(AgentVisualAvatar, { visual: state.visual, size: 44, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(
    Text,
    {
      size: "base",
      weight: "semibold",
      theme,
      style: { color: state.name.trim() ? pal.text : pal.textTertiary }
    },
    state.name.trim() || "New agent"
  ), /* @__PURE__ */ React.createElement("div", { key: `strat-${state.strategy}-${hasRisk}`, style: fadeIn }, hasStrategy ? /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textSecondary } }, strategyObj.title, hasRisk && ` \xB7 ${riskObj.label} tier`) : /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary } }, "Waiting for details\u2026"))), hasStrategy && hasRisk && /* @__PURE__ */ React.createElement("div", { key: `badge-${state.risk}`, style: fadeIn }, /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: state.risk === "aggressive" ? "error" : state.risk === "moderate" ? "accent" : "online" }, riskObj.label))), hasCapital && /* @__PURE__ */ React.createElement("div", { key: `cap-${budgetNum}-${state.allocPct}`, style: fadeIn }, /* @__PURE__ */ React.createElement(Divider, { theme }), /* @__PURE__ */ React.createElement("div", { style: { height: 12 } }), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 32 }, /* @__PURE__ */ React.createElement(Stat, { theme, label: "Budget", value: `$${budgetNum.toLocaleString()} \xB7 ${state.basePair}` }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "Auto-approve", value: `${state.allocPct}%` }))), hasMarkets && /* @__PURE__ */ React.createElement("div", { key: `pairs-${state.allowedPairs.join(",")}`, style: fadeIn }, /* @__PURE__ */ React.createElement(Stack, { gap: 6 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Tools"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 6, wrap: true }, state.allowedPairs.length === 0 ? /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary } }, "None selected") : state.allowedPairs.map((p2) => /* @__PURE__ */ React.createElement(Tag, { key: p2, theme }, p2, " \xB7 ", state.basePair))))), hasSafety && /* @__PURE__ */ React.createElement("div", { key: `safe-${state.stopLoss}-${state.takeProfit}`, style: fadeIn }, /* @__PURE__ */ React.createElement(Stack, { gap: 6 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Safety"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 6, wrap: true }, state.stopLoss && /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "online" }, "Escalation"), state.takeProfit && /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "online" }, "Human handoff"), !state.stopLoss && !state.takeProfit && /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary } }, "No escalation rules"))))));
}
function AgentSetupPattern({ theme }) {
  const pal = usePal(theme);
  const initial = {
    step: 0,
    name: "",
    visual: null,
    strategy: null,
    risk: "moderate",
    budgetUsdc: "",
    allocPct: 25,
    basePair: "All customers",
    allowedPairs: ["Intercom", "Linear"],
    stopLoss: true,
    takeProfit: true,
    deployed: false,
    agentId: null
  };
  const [state, setState] = useState(initial);
  const set = (patch) => setState((s) => ({ ...s, ...patch }));
  const strategyObj = STRATEGY_OPTIONS.find((s) => s.id === state.strategy);
  const riskObj = RISK_TIERS.find((r) => r.id === state.risk);
  const budgetNum = Number(String(state.budgetUsdc).replace(/[^0-9.]/g, "")) || 0;
  const confidenceScore = Math.max(5, Math.min(
    99,
    Math.round(95 - (riskObj?.weight || 1) * 18 - state.allocPct * 0.35)
  ));
  const canAdvance = [
    !!state.name.trim() && !!state.visual,
    // 0 Identity
    !!state.strategy,
    // 1 Job
    true,
    // 2 Autonomy (has default)
    budgetNum > 0,
    // 3 Budget
    state.allowedPairs.length > 0,
    // 4 Tools
    true,
    // 5 Safety (has defaults)
    true
    // 6 Review
  ];
  const next = () => {
    if (state.step < WIZARD_STEPS.length - 1) set({ step: state.step + 1 });
    else deploy();
  };
  const back = () => state.step > 0 && set({ step: state.step - 1 });
  const deploy = () => {
    const id = "agt_" + Math.random().toString(16).slice(2, 8);
    set({ deployed: true, agentId: id });
  };
  const reset = () => setState(initial);
  const togglePair = (p2) => {
    const has = state.allowedPairs.includes(p2);
    set({ allowedPairs: has ? state.allowedPairs.filter((x) => x !== p2) : [...state.allowedPairs, p2] });
  };
  const StepIdentity = () => /* @__PURE__ */ React.createElement(Stack, { gap: 20 }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      theme,
      label: "Name your agent",
      placeholder: "Alpha",
      value: state.name,
      onChange: (v) => set({ name: v })
    }
  ), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Label, { theme }, "Choose a visual"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8 } }, AGENT_VISUALS.map((g) => {
    const selected = state.visual === g;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: g,
        onClick: () => set({ visual: g }),
        style: {
          ...interactiveBase,
          aspectRatio: "1 / 1",
          borderRadius: tokens.radius.md,
          background: selected ? pal.accentBg : pal.bgSubtle,
          border: `1.5px solid ${selected ? pal.accent : "transparent"}`,
          color: selected ? pal.accent : pal.textSecondary,
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: tokens.font.sans,
          transition: `all ${motion.normal} ${motion.easeInOut}`
        }
      },
      g
    );
  }))));
  const StepStrategy = () => /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Label, { theme }, "Choose a job"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, STRATEGY_OPTIONS.map((s) => {
    const selected = state.strategy === s.id;
    return /* @__PURE__ */ React.createElement(
      Card,
      {
        key: s.id,
        theme,
        padding: 14,
        onClick: () => set({ strategy: s.id }),
        style: {
          cursor: "pointer",
          border: `1.5px solid ${selected ? pal.accent : pal.borderSubtle}`,
          background: selected ? pal.accentBg : void 0,
          transition: `all ${motion.normal} ${motion.easeInOut}`
        }
      },
      /* @__PURE__ */ React.createElement(Stack, { gap: 6 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, align: "center" }, /* @__PURE__ */ React.createElement("div", { style: {
        width: 28,
        height: 28,
        borderRadius: 14,
        background: selected ? pal.accent : pal.bgMuted,
        color: selected ? "#fff" : pal.textSecondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        flexShrink: 0,
        transition: `all ${motion.normal} ${motion.easeInOut}`
      } }, s.icon), /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme }, s.title)), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textSecondary, lineHeight: 1.5 } }, s.subtitle))
    );
  })));
  const StepRisk = () => /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Label, { theme }, "Autonomy tier"), /* @__PURE__ */ React.createElement(
    SegmentedControl,
    {
      theme,
      options: RISK_TIERS.map((r) => r.label),
      value: riskObj?.label || "Balanced",
      onChange: (label) => set({ risk: RISK_TIERS.find((r) => r.label === label).id })
    }
  ), /* @__PURE__ */ React.createElement(Caption, { theme }, "Resolves \u2248 ", riskObj?.drawdown, "% of tickets without asking \xB7 the rest wait for you."));
  const StepCapital = () => /* @__PURE__ */ React.createElement(Stack, { gap: 20 }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      theme,
      label: "Refund cap",
      placeholder: "2,500",
      icon: "$",
      value: state.budgetUsdc,
      onChange: (v) => set({ budgetUsdc: v.replace(/[^0-9.,]/g, "") }),
      caption: "The most Alpha can refund or credit each month without you. Change it any time."
    }
  ), /* @__PURE__ */ React.createElement(
    SpringSlider,
    {
      theme,
      label: `Auto-approve up to ${state.allocPct}% of the cap per refund`,
      value: state.allocPct,
      onChange: (v) => set({ allocPct: v }),
      min: 0,
      max: 100
    }
  ), /* @__PURE__ */ React.createElement(Card, { theme, padding: 14 }, /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", align: "center", justify: "space-between" }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme }, "Oversight score"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { fontFamily: tokens.font.mono, color: pal.text } }, confidenceScore, "%")), /* @__PURE__ */ React.createElement(ConfidenceBar, { value: confidenceScore, theme }), /* @__PURE__ */ React.createElement(Caption, { theme }, confidenceScore >= 70 ? "Supervised posture: most actions wait for you." : confidenceScore >= 40 ? "Balanced posture: routine work runs, exceptions wait." : "Autonomous posture: Alpha acts first, reports after."))));
  const StepMarkets = () => /* @__PURE__ */ React.createElement(Stack, { gap: 20 }, /* @__PURE__ */ React.createElement(
    Combobox,
    {
      theme,
      label: "Customer segment",
      options: PAIR_OPTIONS.filter((o) => ["All customers", "Enterprise"].includes(o.value)),
      value: state.basePair,
      onChange: (v) => set({ basePair: v })
    }
  ), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Label, { theme }, "Connected tools"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, wrap: true }, ALLOWED_PAIR_CHIPS.map((p2) => /* @__PURE__ */ React.createElement(
    Chip,
    {
      key: p2,
      theme,
      selected: state.allowedPairs.includes(p2),
      onToggle: () => togglePair(p2)
    },
    p2,
    " \xB7 ",
    state.basePair
  ))), /* @__PURE__ */ React.createElement(Caption, { theme }, "Alpha only acts inside these tools. Everything else stays read-only.")));
  const StepSafety = () => /* @__PURE__ */ React.createElement(Stack, { gap: 20 }, /* @__PURE__ */ React.createElement(Label, { theme }, "Safety controls"), /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(SwitchToggle, { theme, checked: state.stopLoss, onChange: (v) => set({ stopLoss: v }), label: "Escalate angry or legal tickets to Dana" }), /* @__PURE__ */ React.createElement(SwitchToggle, { theme, checked: state.takeProfit, onChange: (v) => set({ takeProfit: v }), label: "Hand off when a customer asks for a human" })), /* @__PURE__ */ React.createElement(Caption, { theme }, "Alpha hands off automatically when these rules fire."));
  const StepReview = () => /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, lineHeight: 1.6 } }, "Your agent is ready. Review the summary above and deploy when you're happy."), /* @__PURE__ */ React.createElement(
    AlertBanner,
    {
      theme,
      variant: "warning",
      title: "Alpha replies to real customers",
      description: "You can pause or stop Alpha at any time from Agent Settings."
    }
  ));
  const StepBody = [StepIdentity, StepStrategy, StepRisk, StepCapital, StepMarkets, StepSafety, StepReview][state.step];
  if (state.deployed) {
    return /* @__PURE__ */ React.createElement(Stack, { gap: 24, style: { width: 520, maxWidth: "100%", alignItems: "center", textAlign: "center" } }, /* @__PURE__ */ React.createElement(AgentVisualAvatar, { visual: state.visual, size: 72, theme }), /* @__PURE__ */ React.createElement(Stack, { gap: 4, align: "center" }, /* @__PURE__ */ React.createElement(Heading, { level: 4, theme }, state.name || "Agent", " deployed"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, fontFamily: tokens.font.mono } }, state.agentId)), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 32, justify: "center" }, /* @__PURE__ */ React.createElement(Stat, { theme, label: "Job", value: strategyObj?.title || "Not set" }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "Budget", value: `$${budgetNum.toLocaleString()} \xB7 ${state.basePair}` }), /* @__PURE__ */ React.createElement(Stat, { theme, label: "Status", value: "Running", change: "+live" })), /* @__PURE__ */ React.createElement(Button, { theme, variant: "outline", size: "sm", onClick: reset }, "Configure another"));
  }
  return /* @__PURE__ */ React.createElement(Stack, { gap: 20, style: { width: 520, maxWidth: "100%" } }, /* @__PURE__ */ React.createElement(Stepper, { theme, steps: WIZARD_STEPS, current: state.step }), /* @__PURE__ */ React.createElement(ConnectedWalletPill, { theme }), /* @__PURE__ */ React.createElement(AgentPreviewCard, { state, strategyObj, riskObj, budgetNum, theme }), /* @__PURE__ */ React.createElement(Divider, { theme }), /* @__PURE__ */ React.createElement("div", { style: { minHeight: 240 } }, /* @__PURE__ */ React.createElement(StepBody, null)), /* @__PURE__ */ React.createElement(Divider, { theme }), /* @__PURE__ */ React.createElement(Stack, { direction: "row", align: "center", justify: "space-between" }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", disabled: state.step === 0, onClick: back }, "\u2190 Back"), state.step < WIZARD_STEPS.length - 1 ? /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", disabled: !canAdvance[state.step], onClick: next }, "Next \u2192") : /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", disabled: !canAdvance[state.step] || !state.strategy || budgetNum <= 0 || !state.visual || !state.name.trim(), onClick: deploy }, "Deploy agent")));
}
function AgentGlyph({ size = 24, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: size,
    height: size,
    borderRadius: size / 2,
    flexShrink: 0,
    background: `linear-gradient(135deg, ${pal.accent}, ${pal.accentHover})`,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: Math.round(size * 0.46),
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, "\u2726");
}
const THINKING_TRACE_STEPS = [
  { label: "Reading 42 unread threads", detail: "Intercom \xB7 3 inboxes" },
  { label: "Matching senders to HubSpot", detail: "plan, owner, renewal date" },
  { label: "Checking the changelog", detail: "last 2 releases, open issues" },
  { label: "Drafting replies", detail: "workaround, tone, next step" }
];
function ThinkingTracePattern({
  theme,
  steps = THINKING_TRACE_STEPS,
  stepMs = 1100,
  thinkingLabel = "Thinking",
  doneLabel = (seconds) => `Thought for ${seconds.toFixed(1)} seconds`,
  collapseDelayMs = 1e3,
  autoCollapse = true,
  autoplay = true,
  defaultOpen = autoplay,
  onDone,
  onToggle
}) {
  const pal = usePal(theme);
  const total = steps.length * stepMs / 1e3;
  const [elapsed, setElapsed] = useState(autoplay ? 0 : total);
  const [stepIdx, setStepIdx] = useState(autoplay ? 0 : steps.length - 1);
  const [done, setDone] = useState(!autoplay);
  const [open, setOpen] = useState(defaultOpen);
  const [hover, setHover] = useState(false);
  const cbRef = useRef({ onDone, onToggle });
  cbRef.current = { onDone, onToggle };
  useEffect(() => {
    if (!autoplay) return;
    const t0 = Date.now();
    const stepSec = stepMs / 1e3;
    let collapse;
    const iv = setInterval(() => {
      const dt = (Date.now() - t0) / 1e3;
      setElapsed(dt);
      setStepIdx(Math.min(steps.length - 1, Math.floor(dt / stepSec)));
      if (dt >= total) {
        clearInterval(iv);
        setElapsed(total);
        setDone(true);
        cbRef.current.onDone?.(total);
        if (autoCollapse) {
          collapse = setTimeout(() => {
            setOpen(false);
            cbRef.current.onToggle?.(false);
          }, collapseDelayMs);
        }
      }
    }, 100);
    return () => {
      clearInterval(iv);
      clearTimeout(collapse);
    };
  }, [autoplay, steps.length, stepMs, total, autoCollapse, collapseDelayMs]);
  const toggle = () => {
    if (!done) return;
    const next = !open;
    setOpen(next);
    onToggle?.(next);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 400, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggle,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "10px 12px",
        borderRadius: tokens.radius.md,
        background: hover && done ? pal.bgSubtle : "transparent",
        cursor: done ? "pointer" : "default",
        textAlign: "left"
      }
    },
    done ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ChevronIcon, { size: 12, direction: open ? "down" : "right", style: { color: pal.textTertiary } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", secondary: true, theme }, doneLabel(elapsed))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: "", size: "sm", theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", secondary: true, theme }, thinkingLabel), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textTertiary, fontFamily: tokens.font.mono, fontVariantNumeric: "tabular-nums", marginLeft: "auto" } }, elapsed.toFixed(1), "s"))
  ), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: open ? 320 : 0,
    opacity: open ? 1 : 0,
    transition: `max-height 0.45s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 12px 12px 17px", display: "flex", flexDirection: "column", gap: 0 } }, steps.map((s, i) => {
    const reached = i <= stepIdx;
    const active = i === stepIdx && !done;
    if (!reached) return null;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      gap: 12,
      position: "relative",
      paddingBottom: 14,
      animation: `halaska-step-in 0.4s ${motion.emphasized} both`
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", width: 8 } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 7,
      height: 7,
      borderRadius: 4,
      marginTop: 5,
      flexShrink: 0,
      background: active ? pal.accent : pal.textMuted,
      transition: `background ${motion.smooth} ${motion.easeInOut}`
    } }), i < steps.length - 1 && i < stepIdx && /* @__PURE__ */ React.createElement("span", { style: { width: 1, flex: 1, background: pal.borderSubtle, marginTop: 4 } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(
      Text,
      {
        size: "sm",
        weight: active ? "medium" : "regular",
        theme,
        style: { color: active ? pal.text : pal.textSecondary, display: "block" }
      },
      s.label
    ), s.detail && /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary, fontFamily: tokens.font.mono } }, s.detail)));
  }))));
}
const STREAM_ANSWERS = {
  default: {
    segments: [
      { t: "Acme is your busiest account this week: 14 new tickets, all about calendar sync, and none of them escalated yet." },
      { chip: "intercom.com" },
      { t: " The same three users opened all of them, so this is one workflow breaking, not a wider outage." }
    ],
    followups: ["Which accounts drove the last three spikes?", "Is Acme's renewal at risk?"]
  },
  followup: {
    segments: [
      { t: "Acme renews in 19 days and their usage is down 40% since the sync issue started." },
      { chip: "stripe.com" },
      { t: " That mix usually turns into a churn call rather than a renewal, so loop Dana in before the invoice goes out." }
    ],
    followups: ["Show Acme's usage over 30 days", "Draft a check-in note for Dana to send"]
  }
};
const STREAM_SOURCES = [
  { name: "Intercom", domain: "intercom.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Notion runbooks", domain: "notion.so" }
];
function InlineSourceChip({ domain, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    verticalAlign: "baseline",
    padding: "1px 8px",
    margin: "0 3px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    ...tokens.type.xs,
    color: pal.textSecondary,
    fontFamily: tokens.font.sans,
    animation: `halaska-scale-in 0.25s ${motion.easeOut} both`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    whiteSpace: "nowrap"
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 3, background: pal.accent } }), domain);
}
function StreamingAnswerPattern({
  theme,
  segments = STREAM_ANSWERS.default.segments,
  sources = STREAM_SOURCES,
  followups = STREAM_ANSWERS.default.followups,
  thinkingLabel = "Checking the inbox",
  answerLabel = "Answer",
  sourcesLabel = (n) => `${n} sources`,
  followupsLabel = "Follow-ups",
  thinkMs = 700,
  charsPerTick = 2,
  tickMs = 18,
  autoplay = true,
  onFollowup,
  onDone
}) {
  const pal = usePal(theme);
  const [demoKey, setDemoKey] = useState(null);
  const activeSegments = demoKey ? STREAM_ANSWERS[demoKey].segments : segments;
  const activeFollowups = demoKey ? STREAM_ANSWERS[demoKey].followups : followups;
  const totalChars = activeSegments.reduce((n, s) => n + (s.t ? s.t.length : 0), 0);
  const segKey = activeSegments.map((s) => s.chip ? `\0${s.chip}` : s.t).join("");
  const [count, setCount] = useState(autoplay ? 0 : totalChars);
  const [phase, setPhase] = useState(autoplay ? "thinking" : "done");
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  useEffect(() => {
    if (!autoplay) {
      setCount(totalChars);
      setPhase("done");
      return;
    }
    setCount(0);
    setPhase("thinking");
    let iv;
    const think = setTimeout(() => {
      setPhase("streaming");
      iv = setInterval(() => {
        setCount((c) => {
          if (c + charsPerTick >= totalChars) {
            clearInterval(iv);
            setPhase("done");
            return totalChars;
          }
          return c + charsPerTick;
        });
      }, tickMs);
    }, thinkMs);
    return () => {
      clearTimeout(think);
      clearInterval(iv);
    };
  }, [segKey, totalChars, autoplay, thinkMs, charsPerTick, tickMs]);
  useEffect(() => {
    if (phase === "done" && autoplay) onDoneRef.current?.();
  }, [phase, segKey]);
  const handleFollowup = (text) => {
    if (onFollowup) onFollowup(text);
    else setDemoKey((k) => k === "followup" ? null : "followup");
  };
  let used = 0;
  const rendered = activeSegments.map((s, i) => {
    if (s.chip) return used <= count ? /* @__PURE__ */ React.createElement(InlineSourceChip, { key: i, domain: s.chip, theme }) : null;
    const remaining = Math.max(0, count - used);
    const shown = s.t.slice(0, remaining);
    used += s.t.length;
    return /* @__PURE__ */ React.createElement("span", { key: i }, shown);
  });
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), phase === "thinking" ? /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: thinkingLabel, size: "sm", theme }) : /* @__PURE__ */ React.createElement(Caption, { theme }, answerLabel)), /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.md, color: pal.text, lineHeight: 1.7, minHeight: 96, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, phase !== "thinking" && rendered, phase === "streaming" && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 2, height: "1.05em", background: pal.accent, marginLeft: 1, verticalAlign: "text-bottom", animation: "halaska-blink 1s step-end infinite" } })), phase === "done" && /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(Divider, { theme }), /* @__PURE__ */ React.createElement("div", { style: { height: 14 } }), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme }, sourcesLabel(sources.length)), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, wrap: true }, sources.map((s) => /* @__PURE__ */ React.createElement("span", { key: s.domain, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "5px 12px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    ...tokens.type.sm,
    color: pal.textSecondary,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 3, background: pal.accent } }), s.name, /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, fontFamily: tokens.font.mono, ...tokens.type.xs } }, s.domain))))), /* @__PURE__ */ React.createElement("div", { style: { height: 18 } }), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Caption, { theme }, followupsLabel), /* @__PURE__ */ React.createElement(Stack, { gap: 6 }, activeFollowups.map((f) => /* @__PURE__ */ React.createElement(FollowupRow, { key: f, label: f, theme, onClick: () => handleFollowup(f) })))))));
}
function FollowupRow({ label, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        padding: "9px 12px",
        borderRadius: tokens.radius.md,
        background: hover ? pal.bgSubtle : "transparent",
        textAlign: "left",
        ...tokens.type.sm,
        color: hover ? pal.text : pal.textSecondary,
        fontFamily: tokens.font.sans
      }
    },
    label,
    /* @__PURE__ */ React.createElement(ChevronIcon, { size: 11, direction: "right", style: { color: pal.textTertiary, opacity: hover ? 1 : 0.5 } })
  );
}
const APPROVAL_OPTIONS = [
  { id: "scale", title: "Reply now with a workaround", sub: "Unblocks Acme today, fix ships later" },
  { id: "now", title: "Wait for the fix to ship", sub: "Priya's patch lands Thursday" },
  { id: "wait", title: "Escalate to Priya", sub: "Loops engineering in on the thread" }
];
const APPROVAL_APPROVED_TEXT = (option) => `Approved \xB7 ${option.title.toLowerCase()}`;
const APPROVAL_SKIPPED_TEXT = "Skipped \xB7 nothing was changed";
function ApprovalCardPattern({
  theme,
  eyebrow = "Needs your call",
  badgeLabel = "Paused",
  question = "How should I reply to Acme's outage complaint?",
  options = APPROVAL_OPTIONS,
  approveLabel = "Approve",
  skipLabel = "Skip",
  approvedText = APPROVAL_APPROVED_TEXT,
  skippedText = APPROVAL_SKIPPED_TEXT,
  onSelect,
  onApprove,
  onSkip
}) {
  const pal = usePal(theme);
  const [choice, setChoice] = useState(null);
  const [resolved, setResolved] = useState(null);
  const chosen = options.find((o) => o.id === choice);
  const resolveText = (t, o) => typeof t === "function" ? t(o) : t;
  const select = (o) => {
    setChoice(o.id);
    onSelect?.(o);
  };
  const approve = () => {
    if (!chosen) return;
    setResolved("approved");
    onApprove?.(chosen);
  };
  const skip = () => {
    setResolved("skipped");
    onSkip?.();
  };
  if (resolved === "approved") {
    return /* @__PURE__ */ React.createElement("div", { style: { width: 420, maxWidth: "100%", animation: `halaska-scale-in 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, align: "center" }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 28,
      height: 28,
      borderRadius: 14,
      background: pal.successBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "12", height: "12", fill: "none", stroke: pal.success, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3", style: { strokeDasharray: 14, strokeDashoffset: 14, animation: `halaska-check-draw 0.3s ${motion.easeOut} 0.1s forwards` } }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme, style: { display: "block" } }, resolveText(approvedText, chosen)), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, "The agent picked up where it left off.")), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "online", pulse: true }, "Resumed"))));
  }
  if (resolved === "skipped") {
    return /* @__PURE__ */ React.createElement("div", { style: { width: 420, maxWidth: "100%", animation: `halaska-scale-in 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, align: "center" }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 28,
      height: 28,
      borderRadius: 14,
      background: pal.bgSubtle,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "12", height: "12", fill: "none", stroke: pal.textSecondary, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "6", x2: "9", y2: "6", style: { strokeDasharray: 6, strokeDashoffset: 6, animation: `halaska-check-draw 0.3s ${motion.easeOut} 0.1s forwards` } }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme, style: { display: "block" } }, resolveText(skippedText, chosen)), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, "The agent is holding until you decide.")), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "default" }, "On hold"))));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { width: 420, maxWidth: "100%" } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Caption, { theme }, eyebrow)), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "pending" }, badgeLabel)), /* @__PURE__ */ React.createElement(Text, { size: "md", weight: "semibold", theme }, question), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, options.map((o) => {
    const active = choice === o.id;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: o.id,
        onClick: () => select(o),
        style: {
          ...interactiveBase,
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: "100%",
          padding: "12px 14px",
          textAlign: "left",
          borderRadius: tokens.radius.md,
          background: active ? pal.accentBg : pal.bgSubtle,
          boxShadow: active ? `inset 0 0 0 1.5px ${pal.accent}` : `inset 0 0 0 1px ${pal.borderSubtle}`
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: {
        width: 14,
        height: 14,
        borderRadius: 7,
        flexShrink: 0,
        border: active ? "none" : `1.5px solid ${pal.border}`,
        background: active ? pal.accent : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: `all ${motion.spring} ${motion.springCurve}`
      } }, active && /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 3, background: "#fff", animation: `halaska-radio-dot-in 0.35s ${motion.springCurve} both` } })),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "medium", theme, style: { display: "block" } }, o.title), o.sub && /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, o.sub))
    );
  })), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, justify: "flex-end" }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: skip }, skipLabel), /* @__PURE__ */ React.createElement(Button, { theme, variant: "accent", size: "sm", disabled: !choice, onClick: approve }, approveLabel)))));
}
const TOOL_EVENTS = [
  { kind: "thinking", lines: [
    "Three of the new threads describe the same login error, so they route to one Linear issue.",
    "Anything from an Enterprise account with a billing keyword goes to Dana first."
  ] },
  { kind: "write", file: "triage.config.ts", meta: "Write \xB7 204 lines", lines: [
    { sign: "+", code: 'const urgent = threads.filter(t => t.plan === "enterprise")' },
    { sign: "+", code: 'return route(urgent, { owner: "dana", sla: "4h" })' }
  ] },
  { kind: "run", cmd: "npm run check-sla", out: ["\u2713 built in 1.2s", "\u2713 34 checks passed"] },
  { kind: "read", file: "acme-error.png", meta: "1280 \xD7 720 \xB7 screenshot, Acme ticket #4821", note: "The error is the expired-session bug from last week's release." }
];
const TOOL_FILE_CHIPS = [
  { file: "triage.config.ts", add: 74, del: 41 },
  { file: "sla.rules.ts", add: 8, del: 2 },
  { file: "escalation.config.ts", add: 13, del: 0 }
];
function ToolStreamPattern({ theme }) {
  const pal = usePal(theme);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setIdx((i) => {
        if (i >= TOOL_EVENTS.length) {
          clearInterval(iv);
          return i;
        }
        return i + 1;
      });
    }, 950);
    return () => clearInterval(iv);
  }, []);
  const finished = idx >= TOOL_EVENTS.length;
  const monoXs = { ...tokens.type.xs, fontFamily: tokens.font.mono };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 14 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", secondary: true, theme }, "4 tool calls, 2 messages"), !finished && /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: "", size: "sm", theme }))), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, TOOL_EVENTS.slice(0, idx).map((e, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, e.kind === "thinking" && /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 2px" } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { display: "block", marginBottom: 4 } }, "Thinking"), e.lines.map((l, j) => /* @__PURE__ */ React.createElement(Text, { key: j, size: "sm", secondary: true, theme, style: { display: "block", lineHeight: 1.6 } }, l))), e.kind === "write" && /* @__PURE__ */ React.createElement("div", { style: { borderRadius: tokens.radius.md, background: pal.bgSubtle, border: `1px solid ${pal.borderSubtle}`, overflow: "hidden", transition: `all ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderBottom: `1px solid ${pal.borderSubtle}` } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, mono: true }, e.file), /* @__PURE__ */ React.createElement("span", { style: { ...monoXs, color: pal.textTertiary, marginLeft: "auto" } }, e.meta)), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 12px" } }, e.lines.map((l, j) => /* @__PURE__ */ React.createElement("div", { key: j, style: { ...monoXs, lineHeight: 1.9, color: pal.success, whiteSpace: "pre", overflow: "hidden", textOverflow: "ellipsis" } }, l.sign, " ", l.code)))), e.kind === "run" && /* @__PURE__ */ React.createElement("div", { style: { borderRadius: tokens.radius.md, background: pal.bgSubtle, border: `1px solid ${pal.borderSubtle}`, padding: "8px 12px", transition: `all ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", mono: true, theme, style: { display: "block", marginBottom: 4 } }, "$ ", e.cmd), e.out.map((o, j) => /* @__PURE__ */ React.createElement("span", { key: j, style: { ...monoXs, color: pal.success, display: "block", lineHeight: 1.8 } }, o))), e.kind === "read" && /* @__PURE__ */ React.createElement("div", { style: { borderRadius: tokens.radius.md, background: pal.bgSubtle, border: `1px solid ${pal.borderSubtle}`, padding: "8px 12px", transition: `all ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", mono: true, theme }, e.file), /* @__PURE__ */ React.createElement("span", { style: { ...monoXs, color: pal.textTertiary, marginLeft: "auto" } }, e.meta)), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme, style: { display: "block", marginTop: 4 } }, e.note))))), finished && /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 6, wrap: true }, TOOL_FILE_CHIPS.map((c) => /* @__PURE__ */ React.createElement("span", { key: c.file, style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    ...monoXs,
    color: pal.textSecondary,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, c.file, /* @__PURE__ */ React.createElement("span", { style: { color: pal.success } }, "+", c.add), c.del > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: pal.danger } }, "\u2212", c.del)))))));
}
const AGENT_TASKS = [
  {
    title: "Verified customer records",
    meta: "12 accounts",
    status: "done",
    subs: [{ t: "Matched Intercom to HubSpot", v: "12/12" }, { t: "Flagged missing owners", v: "0" }]
  },
  {
    title: "Build the renewal follow-up list",
    meta: "7 accounts",
    status: "running",
    subs: [{ t: "Reading Stripe renewals export", v: "3 files" }, { t: "Scoring churn risk", v: "live" }]
  },
  {
    title: "Draft outage emails",
    meta: "2 messages",
    status: "failed",
    subs: [{ t: "Acme \xB7 service credit note", v: "draft" }, { t: "Fjord Health \xB7 status update", v: "draft" }]
  }
];
function TaskStatusIcon({ status, theme }) {
  const pal = usePal(theme);
  if (status === "done") return /* @__PURE__ */ React.createElement("span", { style: { width: 20, height: 20, borderRadius: 10, background: pal.successBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "10", height: "10", fill: "none", stroke: pal.success, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3" })));
  if (status === "failed") return /* @__PURE__ */ React.createElement("span", { style: { width: 20, height: 20, borderRadius: 10, background: pal.dangerBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...tokens.type.xs, color: pal.danger, fontWeight: tokens.weight.semibold } }, "!");
  return /* @__PURE__ */ React.createElement("span", { style: { width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(Spinner, { size: 14, color: pal.accent }));
}
function AgentTasksPattern({ theme }) {
  const pal = usePal(theme);
  const [pct, setPct] = useState(34);
  useEffect(() => {
    const iv = setInterval(() => setPct((v) => v >= 96 ? 34 : v + 1), 120);
    return () => clearInterval(iv);
  }, []);
  const badge = { done: ["online", "Completed"], running: ["accent", "Running"], failed: ["error", "Failed"] };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, AGENT_TASKS.map((task, i) => /* @__PURE__ */ React.createElement(Card, { key: i, theme, padding: 16 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, align: "center" }, /* @__PURE__ */ React.createElement(TaskStatusIcon, { status: task.status, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "medium", theme, truncate: true, style: { display: "block" } }, task.title), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, task.meta)), task.status === "running" && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.textSecondary, fontVariantNumeric: "tabular-nums" } }, pct, "%"), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: badge[task.status][0], pulse: task.status === "running" }, badge[task.status][1])), task.status === "running" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Progress, { value: pct, theme, height: 4 })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, paddingLeft: 32, display: "flex", flexDirection: "column", gap: 6 } }, task.subs.map((s, j) => /* @__PURE__ */ React.createElement("div", { key: j, style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, s.t), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, fontVariantNumeric: "tabular-nums" } }, task.status === "running" && s.v === "live" ? `${pct}%` : s.v))), task.status === "failed" && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ React.createElement(LinkButton, { theme, size: "sm" }, "Retry both drafts")))))));
}
const RECO_ALTERNATIVES = [
  { title: "Waive the overage fees instead", status: "pending", label: "Needs review" },
  { title: "Book a pricing call with Sam", status: "offline", label: "Last resort" }
];
function RecommendationPattern({ theme }) {
  const pal = usePal(theme);
  const [accepted, setAccepted] = useState(false);
  const [showAlts, setShowAlts] = useState(true);
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme }, "Renewal at risk"), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto" } }, /* @__PURE__ */ React.createElement(AISuggestionBadge, { theme }))), /* @__PURE__ */ React.createElement(Text, { size: "md", theme, as: "p", style: { margin: 0, lineHeight: 1.7 } }, "Offer ", /* @__PURE__ */ React.createElement(Code, { theme }, "Acme"), " a ", /* @__PURE__ */ React.createElement(Code, { theme }, "3-month"), " credit before renewal on ", /* @__PURE__ */ React.createElement(Code, { theme }, "Oct 14"), ", capped at ", /* @__PURE__ */ React.createElement(Code, { theme }, "$1,800"), "."), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Confidence"), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { color: pal.success } }, "High")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ React.createElement("span", { key: i, style: {
    flex: 1,
    height: 5,
    borderRadius: 3,
    background: i < 4 ? pal.success : pal.bgMuted,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } })))), showAlts && !accepted && /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Other options"), RECO_ALTERNATIVES.map((a, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "10px 12px",
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, a.title), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: a.status }, a.label)))), accepted ? /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-scale-in 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 24, borderRadius: 12, background: pal.successBg, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "11", height: "11", fill: "none", stroke: pal.success, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3", style: { strokeDasharray: 14, strokeDashoffset: 14, animation: `halaska-check-draw 0.3s ${motion.easeOut} 0.1s forwards` } }))), /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "medium", theme }, "Queued for Dana to send"), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto" } }, /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "online", pulse: true }, "Live")))) : /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, justify: "flex-end" }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: () => setShowAlts((s) => !s) }, showAlts ? "Hide alternatives" : "Alternatives"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "accent", size: "sm", onClick: () => setAccepted(true) }, "Accept")))));
}
const CONTEXT_CHUNKS = [
  {
    title: "Credit policy rule",
    chars: "290 characters",
    kind: "PDF",
    src: "Runbook.pdf",
    body: "Credits up to $500 per account can go out without sign-off; anything above needs Sam's approval before Alpha sends it."
  },
  {
    title: "Usage export row",
    chars: "1,250 characters",
    kind: "CSV",
    src: "Usage export.csv",
    body: "Weekly active seats: Acme 38 \u2192 23, Lumen Labs 41 \u2192 44, Fjord Health 12 \u2192 12. Accounts down 30% or more get a check-in draft."
  }
];
function ContextChunkCard({ chunk, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        padding: 16,
        borderRadius: tokens.radius.md,
        background: theme === "dark" ? "rgba(42,42,42,0.6)" : "rgba(255,255,255,0.7)",
        border: `1px solid ${hover ? pal.border : pal.borderSubtle}`,
        transform: hover ? "translateY(-1px)" : "none",
        boxShadow: hover ? `0 4px 16px ${pal.shadowMd}` : "none",
        transition: `all ${motion.normal} ${motion.easeInOut}`,
        cursor: "default"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme }, chunk.title), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, whiteSpace: "nowrap" } }, chunk.chars)),
    /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme, as: "p", style: { margin: "0 0 12px", lineHeight: 1.65 } }, chunk.body),
    /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "4px 10px 4px 5px",
      borderRadius: tokens.radius.pill,
      background: pal.bgSubtle,
      border: `1px solid ${pal.borderSubtle}`,
      transition: `all ${motion.smooth} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.xxs,
      fontWeight: tokens.weight.semibold,
      fontFamily: tokens.font.sans,
      padding: "2px 5px",
      borderRadius: tokens.radius.xs,
      background: pal.accentBg,
      color: pal.accent,
      letterSpacing: 0.4
    } }, chunk.kind), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textSecondary, fontFamily: tokens.font.sans } }, chunk.src))
  );
}
function ContextSourcesPattern({ theme }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Retrieved context"), /* @__PURE__ */ React.createElement(Badge, { theme }, "32 chunks")), CONTEXT_CHUNKS.map((c) => /* @__PURE__ */ React.createElement(ContextChunkCard, { key: c.title, chunk: c, theme }))));
}
const DIFF_ROWS = [
  { pair: "Acme", strategy: { v: "Enterprise" }, alloc: { was: "Unassigned", v: "Dana" } },
  { pair: "Lumen Labs", strategy: { was: "Starter", v: "Growth" }, alloc: { v: "Dana" } },
  { pair: "Fjord Health", strategy: { v: "Growth" }, alloc: { was: "Priya", v: "Dana" } },
  { pair: "Cobalt Dental", strategy: { v: "Starter" }, alloc: { v: "Dana" }, added: true }
];
function DiffCell({ cell, applied, theme }) {
  const pal = usePal(theme);
  if (!cell.was || applied) {
    return /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, mono: true }, cell.v);
  }
  return /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.danger, textDecoration: "line-through", opacity: 0.7 } }, cell.was), /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, fontSize: 10 } }, "\u2192"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.success, background: pal.successBg, padding: "1px 6px", borderRadius: tokens.radius.xs } }, cell.v));
}
function DiffTablePattern({ theme }) {
  const pal = usePal(theme);
  const [applied, setApplied] = useState(false);
  const cellPad = "10px 14px";
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme }, "Proposed record cleanup"), applied ? /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "online" }, "Applied") : /* @__PURE__ */ React.createElement(Caption, { theme }, "3 edits \xB7 1 addition")), /* @__PURE__ */ React.createElement("div", { style: { borderRadius: tokens.radius.md, border: `1px solid ${pal.borderSubtle}`, overflow: "hidden", transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { background: pal.bgSubtle, transition: `background ${motion.smooth} ${motion.easeInOut}` } }, ["Customer", "Plan", "Owner"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { ...tokens.type.xs, fontFamily: tokens.font.sans, fontWeight: tokens.weight.medium, color: pal.textTertiary, textAlign: "left", padding: cellPad, textTransform: "uppercase", letterSpacing: 0.4 } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, DIFF_ROWS.map((r, i) => /* @__PURE__ */ React.createElement("tr", { key: r.pair, style: {
    borderTop: `1px solid ${pal.borderSubtle}`,
    background: r.added && !applied ? pal.successBg : "transparent",
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("td", { style: { padding: cellPad } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, mono: true }, r.pair), r.added && !applied && /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xxs, fontWeight: tokens.weight.semibold, color: pal.success, letterSpacing: 0.4 } }, "NEW"))), /* @__PURE__ */ React.createElement("td", { style: { padding: cellPad } }, /* @__PURE__ */ React.createElement(DiffCell, { cell: r.strategy, applied, theme })), /* @__PURE__ */ React.createElement("td", { style: { padding: cellPad } }, /* @__PURE__ */ React.createElement(DiffCell, { cell: r.alloc, applied, theme }))))))), !applied && /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, justify: "flex-end" }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm" }, "Reject"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "accent", size: "sm", onClick: () => setApplied(true) }, "Apply edits"))));
}
const COMMAND_ITEMS = [
  { icon: "\u2709", label: "New reply" },
  { icon: "\u25CE", label: "Open Acme's account" },
  { icon: "\u2295", label: "Draft release notes" },
  { icon: "\u2726", label: "Check SLA status" },
  { icon: "\u224B", label: "Summarize this week's tickets" }
];
function CommandSearchPattern({ theme }) {
  const pal = usePal(theme);
  const inputRef = useRef(null);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const needle = q.trim().toLowerCase();
  const match = (list) => list.filter((c) => c.label.toLowerCase().includes(needle));
  const groups = [
    { label: "Suggested", items: match(COMMAND_ITEMS) },
    { label: "Recent", items: match(COMMAND_RECENT) }
  ].filter((g) => g.items.length > 0);
  const close = () => {
    setOpen(false);
    inputRef.current?.blur();
  };
  const pick = (label) => {
    setQ(label);
    close();
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 440,
    maxWidth: "100%",
    fontFamily: tokens.font.sans,
    background: theme === "dark" ? "rgba(30,30,30,0.95)" : "rgba(255,255,255,0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.lg,
    boxShadow: `0 16px 48px ${pal.shadowLg}`,
    overflow: "hidden",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 16px",
    borderBottom: `1px solid ${open ? pal.borderSubtle : "transparent"}`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: pal.textTertiary, strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", style: { flexShrink: 0 } }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ React.createElement("path", { d: "m21 21-4.3-4.3" })), /* @__PURE__ */ React.createElement(
    "input",
    {
      ref: inputRef,
      value: q,
      onChange: (e) => {
        setQ(e.target.value);
        setOpen(true);
      },
      onFocus: () => setOpen(true),
      onClick: () => setOpen(true),
      onBlur: () => setOpen(false),
      onKeyDown: (e) => {
        if (e.key === "Escape") close();
      },
      placeholder: "Ask the agent anything.",
      style: {
        ...tokens.type.md,
        flex: 1,
        minWidth: 0,
        background: "transparent",
        border: "none",
        outline: "none",
        color: pal.text,
        fontFamily: tokens.font.sans
      }
    }
  ), /* @__PURE__ */ React.createElement(Kbd, { theme }, "\u2318K")), open && /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px 16px", animation: `halaska-step-in 0.3s ${motion.emphasized} both` } }, groups.length > 0 ? groups.map((g, gi) => /* @__PURE__ */ React.createElement("div", { key: g.label, style: { marginTop: gi === 0 ? 0 : 12 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: tokens.weight.medium } }, g.label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 } }, g.items.map((c) => /* @__PURE__ */ React.createElement(CommandSearchChip, { key: c.label, icon: c.icon, label: c.label, theme, onPick: () => pick(c.label) }))))) : /* @__PURE__ */ React.createElement(Caption, { theme }, "No matches for \u201C", q.trim(), "\u201D. Try a customer, a ticket number, or ask in plain language.")));
}
const INSIGHTS = [
  {
    text: /* @__PURE__ */ React.createElement(React.Fragment, null, "Usage at ", /* @__PURE__ */ React.createElement("strong", null, "Acme"), " is falling fastest: down 6.2% this week, with $2,410 of MRR at risk."),
    stats: [{ label: "Acme", pct: "\u22126.2%", usd: "\u2212$2,410", neg: true }, { label: "Brightline", pct: "\u22121.8%", usd: "\u2212$540", neg: true }],
    data: [42, 44, 41, 39, 40, 36, 34, 33, 30, 31, 28, 26]
  },
  {
    text: /* @__PURE__ */ React.createElement(React.Fragment, null, "Seat growth at ", /* @__PURE__ */ React.createElement("strong", null, "Lumen Labs"), " is accelerating: ", /* @__PURE__ */ React.createElement("strong", null, "+9.4%"), " this week, worth $3,120 in new MRR."),
    stats: [{ label: "Lumen Labs", pct: "+9.4%", usd: "+$3,120" }, { label: "Fjord Health", pct: "+4.1%", usd: "+$610" }],
    data: [20, 22, 21, 25, 24, 28, 30, 29, 33, 36, 38, 42]
  },
  {
    text: /* @__PURE__ */ React.createElement(React.Fragment, null, "Refunds and credits cost ", /* @__PURE__ */ React.createElement("strong", null, "0.8%"), " of MRR last week, almost all of it outage credits."),
    stats: [{ label: "Outage credits", pct: "\u22120.6%", usd: "\u2212$890", neg: true }, { label: "Goodwill refunds", pct: "\u22120.2%", usd: "\u2212$260", neg: true }],
    data: [30, 28, 31, 27, 29, 25, 27, 24, 26, 23, 25, 22]
  }
];
function InsightCardsPattern({ theme }) {
  const pal = usePal(theme);
  const [page, setPage] = useState(1);
  const insight = INSIGHTS[page - 1];
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme }, "Insights"), /* @__PURE__ */ React.createElement(Badge, { theme }, INSIGHTS.length)), /* @__PURE__ */ React.createElement("div", { key: page, style: { animation: `halaska-tab-fade 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Text, { size: "md", theme, as: "p", style: { margin: "0 0 16px", lineHeight: 1.7 } }, insight.text), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 24, style: { marginBottom: 16 } }, insight.stats.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label }, /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme, style: { display: "block", marginBottom: 2 } }, s.label), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.base, fontWeight: tokens.weight.semibold, fontFamily: tokens.font.mono, color: s.neg ? pal.danger : pal.success, fontVariantNumeric: "tabular-nums" } }, s.pct), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.textTertiary, marginLeft: 8, fontVariantNumeric: "tabular-nums" } }, s.usd)))), /* @__PURE__ */ React.createElement(Sparkline, { key: page, data: insight.data, width: "100%", height: 120, theme })), /* @__PURE__ */ React.createElement(Divider, { theme }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 } }, /* @__PURE__ */ React.createElement("span", { style: { whiteSpace: "nowrap", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(LinkButton, { theme, size: "sm", iconRight: "\u2192" }, "What should I do next?")), /* @__PURE__ */ React.createElement("div", { style: { width: 180, flexShrink: 0 } }, /* @__PURE__ */ React.createElement(Pagination, { current: page, total: INSIGHTS.length, onChange: setPage, theme }))))));
}
const CHAT_SEED = [
  { role: "user", text: "Compare this week's ticket spike to March" },
  { role: "agent", chip: "Pulled 90 days of Intercom threads \xB7 4s", text: "This spike is bigger than March: 61 new tickets against 38, and 80% of them trace to one calendar sync bug." }
];
const CHAT_REPLIES = [
  { chip: "Cross-checked Linear and GitHub \xB7 2s", text: "Engineering confirms it. Priya has the fix in review, so a workaround reply now should hold most accounts until it ships." },
  { chip: "Checked renewal dates in HubSpot \xB7 3s", text: "Three affected accounts renew within 30 days. A $180 credit each keeps you well inside your $2,500 cap." }
];
function ChatReasoningChip({ label, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "3px 10px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    ...tokens.type.xs,
    color: pal.textTertiary,
    fontFamily: tokens.font.sans,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.accent, fontSize: 9 } }, "\u2726"), label);
}
function AgentChatPattern({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Inbox");
  const [messages, setMessages] = useState(CHAT_SEED);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const replyIdx = useRef(0);
  const scrollRef = useRef(null);
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);
  const send = () => {
    const text = draft.trim();
    if (!text || busy) return;
    setDraft("");
    setMessages((m) => [...m, { role: "user", text }]);
    setBusy(true);
    timers.current.push(setTimeout(() => {
      const reply = CHAT_REPLIES[replyIdx.current % CHAT_REPLIES.length];
      replyIdx.current += 1;
      setBusy(false);
      setMessages((m) => [...m, { role: "agent", chip: reply.chip, text: reply.text, stream: true }]);
    }, 1400));
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 440,
    maxWidth: "100%",
    fontFamily: tokens.font.sans,
    background: theme === "dark" ? "rgba(30,30,30,0.9)" : "rgba(255,255,255,0.9)",
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.lg,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 16px", borderBottom: `1px solid ${pal.borderSubtle}` } }, /* @__PURE__ */ React.createElement(SubtleTabs, { tabs: ["Inbox", "Agents"], value: tab, onChange: setTab, theme })), /* @__PURE__ */ React.createElement("div", { ref: scrollRef, style: { height: 320, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 16 } }, messages.map((m, i) => m.role === "user" ? /* @__PURE__ */ React.createElement("div", { key: i, style: { alignSelf: "flex-end", maxWidth: "80%", animation: `halaska-step-in 0.3s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "9px 14px",
    borderRadius: `${tokens.radius.md}px ${tokens.radius.md}px 4px ${tokens.radius.md}px`,
    background: pal.accent,
    color: "#fff",
    ...tokens.type.base,
    lineHeight: 1.55,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, m.text)) : /* @__PURE__ */ React.createElement("div", { key: i, style: { alignSelf: "flex-start", maxWidth: "88%", animation: `halaska-step-in 0.3s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, m.chip && /* @__PURE__ */ React.createElement(ChatReasoningChip, { label: m.chip, theme }), /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.base, color: pal.text, lineHeight: 1.65, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, m.stream ? /* @__PURE__ */ React.createElement(StreamingText, { text: m.text, speed: 16, theme }) : m.text)))), busy && /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "flex-start", animation: `halaska-fade-in 0.3s ease both` } }, /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: "Thinking", size: "sm", theme }))), /* @__PURE__ */ React.createElement("div", { style: { padding: 12, borderTop: `1px solid ${pal.borderSubtle}` } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "4px 4px 4px 14px",
    borderRadius: tokens.radius.pill,
    background: pal.bgInput,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      value: draft,
      onChange: (e) => setDraft(e.target.value),
      onKeyDown: (e) => e.key === "Enter" && send(),
      placeholder: "Ask about your customers\u2026",
      style: { ...tokens.type.base, flex: 1, minWidth: 0, background: "transparent", border: "none", outline: "none", color: pal.text, fontFamily: tokens.font.sans }
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: send,
      "aria-label": "Send",
      style: {
        ...interactiveBase,
        width: 32,
        height: 32,
        borderRadius: 16,
        flexShrink: 0,
        background: draft.trim() ? pal.accent : pal.bgMuted,
        color: draft.trim() ? "#fff" : pal.textTertiary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 19V5" }), /* @__PURE__ */ React.createElement("path", { d: "m5 12 7-7 7 7" }))
  ))));
}
function PatternsRoadmap({ theme, items }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, items.map((p2) => /* @__PURE__ */ React.createElement(Card, { theme, padding: 16, key: p2.id }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 14, align: "center" }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: tokens.radius.md,
    background: pal.accentBg,
    color: pal.accent,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    flexShrink: 0,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, p2.icon), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme }, p2.title), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, marginTop: 2 } }, p2.desc)), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "pending" }, "Soon")))));
}
const PROMPTIN_MODELS = [
  { id: "alpha-4-fast", label: "alpha-4 \xB7 fast", desc: "Quick replies, everyday triage", tags: ["200K", "\u25C7 vision"] },
  { id: "alpha-4", label: "alpha-4 \xB7 deep", desc: "Slower, reasons through edge cases", tags: ["200K", "\u2726 reasoning"] },
  { id: "alpha-mini", label: "alpha-mini", desc: "Cheapest, fine for summaries", tags: ["32K"] }
];
function PromptinModelPill({ index, onSelect, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ React.createElement("div", { ref: rootRef, style: { position: "relative", display: "inline-flex" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen((o) => !o),
      "aria-label": "Change model",
      "aria-haspopup": "menu",
      "aria-expanded": open,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: tokens.radius.pill,
        background: open || hover ? pal.bgMuted : pal.bgSubtle,
        border: `1px solid ${open ? pal.border : pal.borderSubtle}`
      }
    },
    /* @__PURE__ */ React.createElement("span", { key: index, style: {
      ...tokens.type.xs,
      fontFamily: tokens.font.mono,
      color: pal.textSecondary,
      whiteSpace: "nowrap",
      animation: `halaska-tab-fade 0.25s ${motion.easeOut} both`
    } }, PROMPTIN_MODELS[index].label),
    /* @__PURE__ */ React.createElement(ChevronIcon, { size: 9, direction: open ? "down" : "up", style: { color: pal.textTertiary } })
  ), open && /* @__PURE__ */ React.createElement("div", { role: "menu", style: {
    position: "absolute",
    bottom: "calc(100% + 6px)",
    left: 0,
    zIndex: 20,
    minWidth: 300,
    padding: 6,
    borderRadius: tokens.radius.md,
    background: theme === "dark" ? "rgba(30,30,30,0.96)" : "rgba(255,255,255,0.96)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${pal.borderSubtle}`,
    boxShadow: `0 12px 32px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
    transformOrigin: "bottom left"
  } }, PROMPTIN_MODELS.map((m, i) => /* @__PURE__ */ React.createElement(
    PromptinModelOption,
    {
      key: m.id,
      model: m,
      active: i === index,
      theme,
      onPick: () => {
        onSelect?.(i);
        setOpen(false);
      }
    }
  ))));
}
function PromptinModelOption({ model, active, onPick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      role: "menuitemradio",
      "aria-checked": active,
      onClick: onPick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "8px 10px",
        borderRadius: tokens.radius.sm,
        textAlign: "left",
        background: hover ? pal.bgSubtle : "transparent"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.text, whiteSpace: "nowrap" } }, model.label), model.tags.map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: { ...tokens.type.xxs, fontFamily: tokens.font.mono, color: pal.textTertiary, padding: "1px 6px", borderRadius: tokens.radius.pill, background: pal.bgSubtle, whiteSpace: "nowrap", flexShrink: 0 } }, t))), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textSecondary, display: "block", marginTop: 2 } }, model.desc)),
    /* @__PURE__ */ React.createElement("span", { style: { width: 14, textAlign: "center", ...tokens.type.sm, color: active ? pal.accent : "transparent" } }, "\u2713")
  );
}
const PROMPTIN_SUGGESTIONS = [
  "What's open with Acme?",
  "Close tickets idle over 30 days",
  "Summarize overnight tickets"
];
function PromptinIconBtn({ children, onClick, label, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      "aria-label": label,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        width: 28,
        height: 28,
        borderRadius: tokens.radius.sm,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        background: hover ? pal.bgMuted : "transparent",
        color: hover ? pal.text : pal.textTertiary
      }
    },
    children
  );
}
function PromptInputPattern({ theme }) {
  const pal = usePal(theme);
  const [value, setValue] = useState("");
  const [modelIdx, setModelIdx] = useState(0);
  const [streaming, setStreaming] = useState(false);
  const [attached, setAttached] = useState(false);
  const [focused, setFocused] = useState(false);
  const [sendHover, setSendHover] = useState(false);
  const taRef = useRef(null);
  const timerRef = useRef(null);
  useEffect(() => () => clearTimeout(timerRef.current), []);
  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(132, ta.scrollHeight) + "px";
  }, [value]);
  const canSend = value.trim().length > 0;
  const handleSubmit = () => {
    if (streaming) {
      clearTimeout(timerRef.current);
      setStreaming(false);
      return;
    }
    if (!canSend) return;
    setValue("");
    setAttached(false);
    setStreaming(true);
    timerRef.current = setTimeout(() => setStreaming(false), 3e3);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 480, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, wrap: true }, PROMPTIN_SUGGESTIONS.map((s, i) => /* @__PURE__ */ React.createElement(
    PromptinChip,
    {
      key: s,
      label: s,
      theme,
      delay: i * 0.06,
      onClick: () => {
        setValue(s);
        taRef.current?.focus();
      }
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    background: pal.bgInput,
    borderRadius: tokens.radius.lg,
    border: `1.5px solid ${focused ? pal.borderFocus : "transparent"}`,
    transition: `all ${motion.normal} ${motion.easeInOut}`
    /* no overflow:hidden: the model menu drops out of the surface */
  } }, streaming && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: 0,
    left: 12,
    right: 12,
    height: 2,
    borderRadius: 1,
    backgroundImage: `linear-gradient(90deg, transparent 25%, ${pal.accent} 50%, transparent 75%)`,
    backgroundSize: "200% 100%",
    animation: "halaska-shimmer 1.4s ease-in-out infinite"
  } }), attached && /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 12px 0" } }, /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "5px 6px 5px 10px",
    borderRadius: tokens.radius.sm,
    background: pal.bgElevated,
    border: `1px solid ${pal.borderSubtle}`,
    animation: `halaska-scale-in 0.25s ${motion.easeOut} both`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textSecondary } }, "tickets.csv"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary } }, "12 KB"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setAttached(false),
      "aria-label": "Remove attachment",
      style: {
        ...interactiveBase,
        width: 16,
        height: 16,
        padding: 0,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        color: pal.textTertiary,
        fontSize: 11,
        lineHeight: 1
      }
    },
    "\xD7"
  ))), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      ref: taRef,
      value,
      rows: 1,
      onChange: (e) => setValue(e.target.value),
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      onKeyDown: (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit();
        }
      },
      placeholder: "Ask Alpha about your inbox\u2026",
      style: {
        ...tokens.type.base,
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: tokens.font.sans,
        color: pal.text,
        background: "transparent",
        border: "none",
        outline: "none",
        resize: "none",
        padding: "14px 16px 4px",
        transition: `color ${motion.smooth} ${motion.easeInOut}`
      }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, padding: "6px 10px 10px" } }, /* @__PURE__ */ React.createElement(PromptinIconBtn, { label: "Attach file", theme, onClick: () => setAttached(true) }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 16 16", width: "15", height: "15", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "3.5", x2: "8", y2: "12.5" }), /* @__PURE__ */ React.createElement("line", { x1: "3.5", y1: "8", x2: "12.5", y2: "8" }))), /* @__PURE__ */ React.createElement(PromptinModelPill, { index: modelIdx, onSelect: setModelIdx, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(PromptinIconBtn, { label: "Voice input", theme, onClick: () => {
  } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 16 16", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "6", y: "1.5", width: "4", height: "7.5", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M3.5 7.5a4.5 4.5 0 0 0 9 0" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "12", x2: "8", y2: "14.5" }))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleSubmit,
      "aria-label": streaming ? "Stop" : "Send",
      onMouseEnter: () => setSendHover(true),
      onMouseLeave: () => setSendHover(false),
      style: {
        ...interactiveBase,
        width: 30,
        height: 30,
        borderRadius: 15,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: streaming || canSend ? sendHover ? pal.accentHover : pal.accent : pal.bgMuted,
        color: streaming || canSend ? "#fff" : pal.textMuted,
        cursor: streaming || canSend ? "pointer" : "default"
      }
    },
    streaming ? /* @__PURE__ */ React.createElement("span", { style: { width: 9, height: 9, borderRadius: 2, background: "#fff", animation: `halaska-scale-in 0.2s ${motion.easeOut} both` } }) : /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 16 16", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "12.5", x2: "8", y2: "3.5" }), /* @__PURE__ */ React.createElement("polyline", { points: "4,7.5 8,3.5 12,7.5" }))
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", gap: 6, alignItems: "center", minHeight: 18 } }, streaming ? /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: "Alpha is answering", size: "sm", theme }) : /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs } }, "Enter to send \xB7 Shift+Enter for a new line"))));
}
function PromptinChip({ label, onClick, delay = 0, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        padding: "5px 12px",
        borderRadius: tokens.radius.pill,
        background: hover ? pal.bgSubtle : "transparent",
        border: `1px solid ${hover ? pal.border : pal.borderSubtle}`,
        ...tokens.type.sm,
        color: hover ? pal.text : pal.textSecondary,
        animation: `halaska-step-in 0.4s ${motion.emphasized} ${delay}s both`
      }
    },
    label
  );
}
const MSGTHREAD_USER_MSG = "Should I refund Acme for Tuesday's outage or offer a credit?";
const MSGTHREAD_REPLIES = [
  "I'd offer a credit, not a refund. Acme was down for 3 hours and 12 minutes on Tuesday, still inside the 99.5% monthly uptime floor in their contract, so a refund isn't owed. A $180 credit on next month's invoice matches what you gave Fjord Health in June and stays under your approval cap. A refund also creates a Stripe reversal that Dana would have to explain on the renewal call.",
  "Yes, but split it. Issue a $180 credit now to close the ticket while it's fresh, and revisit a partial refund only if the calendar sync bug recurs before their renewal. You keep the account warm without setting a precedent for cash back on every incident.",
  "A refund costs roughly $420 plus a Stripe reversal fee. Offer a $180 credit instead: same goodwill, no cash out the door."
];
function MsgthreadActionBtn({ children, onClick, active, label, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      "aria-label": label,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        width: 26,
        height: 26,
        borderRadius: tokens.radius.sm,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        background: active ? pal.accentBg : hover ? pal.bgSubtle : "transparent",
        color: active ? pal.accentText : hover ? pal.text : pal.textTertiary
      }
    },
    children
  );
}
function MessageThreadPattern({ theme }) {
  const pal = usePal(theme);
  const [branch, setBranch] = useState(0);
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
  const [vote, setVote] = useState(null);
  const copyTimer = useRef(null);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  const handleCopy = () => {
    try {
      navigator.clipboard?.writeText(MSGTHREAD_REPLIES[branch]);
    } catch (e) {
    }
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1200);
  };
  const nextBranch = () => setBranch((b) => (b + 1) % MSGTHREAD_REPLIES.length);
  const prevBranch = () => setBranch((b) => (b + MSGTHREAD_REPLIES.length - 1) % MSGTHREAD_REPLIES.length);
  const thumbPath = "M5 7.2 7.6 2.6c.9 0 1.6.7 1.6 1.6L8.7 6.7h3.3c.9 0 1.6.9 1.3 1.8l-1.2 4c-.2.6-.7 1-1.3 1H5M5 7.2H2.8v6.3H5M5 7.2v6.3";
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 6 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: "82%",
    padding: "10px 14px",
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: `${tokens.radius.md}px ${tokens.radius.md}px ${tokens.radius.xs}px ${tokens.radius.md}px`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "base", theme }, MSGTHREAD_USER_MSG)), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, paddingRight: 4, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "2:46 PM")), /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: { display: "flex", gap: 10, animation: `halaska-step-in 0.4s ${motion.emphasized} 0.12s both` }
    },
    /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, paddingTop: 2 } }, /* @__PURE__ */ React.createElement("div", { key: branch, style: { animation: `halaska-tab-fade 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Text, { size: "base", theme, style: { display: "block", lineHeight: 1.65 } }, MSGTHREAD_REPLIES[branch])), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      marginTop: 10,
      opacity: hover || copied || vote ? 1 : 0,
      transition: `opacity ${motion.normal} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement(MsgthreadActionBtn, { label: "Copy", theme, onClick: handleCopy }, copied ? /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: pal.success, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", style: { animation: `halaska-scale-in 0.2s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement("polyline", { points: "3,8.5 6.5,12 13,4" })) : /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "5.5", y: "5.5", width: "8", height: "8", rx: "1.5" }), /* @__PURE__ */ React.createElement("path", { d: "M10.5 5.5v-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1" }))), /* @__PURE__ */ React.createElement(MsgthreadActionBtn, { label: "Retry", theme, onClick: nextBranch }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M13.5 8a5.5 5.5 0 1 1-1.7-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "13.6,1.8 13.6,5 10.4,5" }))), /* @__PURE__ */ React.createElement(
      MsgthreadActionBtn,
      {
        label: "Good response",
        theme,
        active: vote === "up",
        onClick: () => setVote((v) => v === "up" ? null : "up")
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: thumbPath }))
    ), /* @__PURE__ */ React.createElement(
      MsgthreadActionBtn,
      {
        label: "Bad response",
        theme,
        active: vote === "down",
        onClick: () => setVote((v) => v === "down" ? null : "down")
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round", style: { transform: "rotate(180deg)" } }, /* @__PURE__ */ React.createElement("path", { d: thumbPath }))
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2, marginLeft: 6 } }, /* @__PURE__ */ React.createElement(MsgthreadActionBtn, { label: "Previous version", theme, onClick: prevBranch }, /* @__PURE__ */ React.createElement(ChevronIcon, { size: 11, direction: "left" })), /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.xs,
      fontFamily: tokens.font.mono,
      fontVariantNumeric: "tabular-nums",
      color: pal.textTertiary,
      transition: `color ${motion.smooth} ${motion.easeInOut}`
    } }, branch + 1, " / ", MSGTHREAD_REPLIES.length), /* @__PURE__ */ React.createElement(MsgthreadActionBtn, { label: "Next version", theme, onClick: nextBranch }, /* @__PURE__ */ React.createElement(ChevronIcon, { size: 11, direction: "right" }))), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, marginLeft: "auto", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "2:47 PM")))
  )));
}
const CODEBLK_LINES = [
  [{ t: "// Route overdue tickets by severity and SLA tier", c: "c" }],
  [{ t: "import", c: "k" }, { t: " { getTickets, assign } ", c: "p" }, { t: "from", c: "k" }, { t: " ", c: "p" }, { t: '"./intercom"', c: "s" }, { t: ";", c: "p" }],
  [],
  [{ t: "const", c: "k" }, { t: " SLA_HOURS = { enterprise: 1, growth: 4, starter: 24 };", c: "p" }],
  [{ t: "export async function", c: "k" }, { t: " triage(inbox: ", c: "p" }, { t: "string", c: "k" }, { t: ") {", c: "p" }],
  [{ t: "  ", c: "p" }, { t: "const", c: "k" }, { t: " tickets = ", c: "p" }, { t: "await", c: "k" }, { t: " getTickets(inbox);", c: "p" }],
  [{ t: "  ", c: "p" }, { t: "const", c: "k" }, { t: " overdue = tickets.olderThan(SLA_HOURS);", c: "p" }],
  [{ t: "  ", c: "p" }, { t: "const", c: "k" }, { t: ' urgent = overdue.filter(t => t.severity !== "low");', c: "p" }],
  [{ t: "  ", c: "p" }, { t: "return", c: "k" }, { t: " assign(urgent, { owner: ", c: "p" }, { t: '"dana"', c: "s" }, { t: " });", c: "p" }],
  [{ t: "}", c: "p" }]
];
function CodeBlockPattern({ theme }) {
  const pal = usePal(theme);
  const [shown, setShown] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copyHover, setCopyHover] = useState(false);
  const copyTimer = useRef(null);
  useEffect(() => {
    const iv = setInterval(() => {
      setShown((n) => {
        if (n >= CODEBLK_LINES.length) {
          clearInterval(iv);
          return n;
        }
        return n + 1;
      });
    }, 380);
    return () => {
      clearInterval(iv);
      clearTimeout(copyTimer.current);
    };
  }, []);
  const done = shown >= CODEBLK_LINES.length;
  const tokenColor = { k: pal.accent, s: pal.success, c: pal.textTertiary, p: pal.text };
  const handleCopy = () => {
    const src = CODEBLK_LINES.map((l) => l.map((t) => t.t).join("")).join("\n");
    try {
      navigator.clipboard?.writeText(src);
    } catch (e) {
    }
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1500);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 500, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: {
    borderRadius: tokens.radius.md,
    border: `1px solid ${pal.borderSubtle}`,
    background: pal.bgSubtle,
    overflow: "hidden",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "9px 14px",
    borderBottom: `1px solid ${pal.borderSubtle}`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.text, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "triage.config.ts"), /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.xs,
    color: pal.textTertiary,
    padding: "1px 8px",
    borderRadius: tokens.radius.pill,
    border: `1px solid ${pal.borderSubtle}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, "TypeScript"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), !done && /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: "", size: "sm", theme }), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleCopy,
      onMouseEnter: () => setCopyHover(true),
      onMouseLeave: () => setCopyHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "3px 10px",
        borderRadius: tokens.radius.sm,
        background: copyHover ? pal.bgMuted : "transparent",
        ...tokens.type.xs,
        color: copied ? pal.success : copyHover ? pal.text : pal.textSecondary
      }
    },
    copied ? "Copied \u2713" : "Copy"
  )), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 0", overflowX: "auto" } }, CODEBLK_LINES.slice(0, shown).map((line, i) => {
    const isLast = i === shown - 1;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      alignItems: "baseline",
      padding: "1.5px 14px",
      animation: `halaska-step-in 0.3s ${motion.emphasized} both`
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.sm,
      fontFamily: tokens.font.mono,
      color: pal.textMuted,
      width: 22,
      flexShrink: 0,
      textAlign: "right",
      marginRight: 14,
      userSelect: "none",
      fontVariantNumeric: "tabular-nums",
      transition: `color ${motion.smooth} ${motion.easeInOut}`
    } }, i + 1), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, whiteSpace: "pre" } }, line.length === 0 && !isLast && "\xA0", line.map((tok, j) => /* @__PURE__ */ React.createElement("span", { key: j, style: { color: tokenColor[tok.c], transition: `color ${motion.smooth} ${motion.easeInOut}` } }, tok.t)), isLast && !done && /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-block",
      width: 7,
      height: "0.95em",
      marginLeft: 1,
      background: pal.accent,
      verticalAlign: "text-bottom",
      animation: "halaska-blink 1s step-end infinite"
    } })));
  })), done && /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px",
    borderTop: `1px solid ${pal.borderSubtle}`,
    animation: `halaska-step-in 0.4s ${motion.emphasized} both`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 16, theme }), /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs } }, "10 lines \xB7 written by Alpha"))));
}
const MODELCTX_MODELS = [
  { id: "alpha-4", name: "alpha-4", note: "Best judgment, slower", window: 200, caps: ["vision", "reasoning"] },
  { id: "alpha-4-fast", name: "alpha-4 \xB7 fast", note: "Low-latency replies", window: 150, caps: ["vision"] },
  { id: "alpha-mini", name: "alpha-mini", note: "Cheap bulk triage", window: 32, caps: [] }
];
const MODELCTX_USAGE = [
  { label: "system", k: 8 },
  { label: "files", k: 61 },
  { label: "chat", k: 63 }
];
const MODELCTX_CAP_GLYPHS = { vision: "\u25C7 vision", reasoning: "\u2726 reasoning" };
function ModelctxBadge({ children, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.xs,
    fontFamily: tokens.font.mono,
    color: pal.textTertiary,
    padding: "1px 7px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    whiteSpace: "nowrap",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, children);
}
function ModelctxRow({ model, active, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "9px 10px",
        textAlign: "left",
        borderRadius: tokens.radius.sm,
        background: active ? pal.accentBg : hover ? pal.bgSubtle : "transparent"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { display: "block", color: active ? pal.accentText : pal.text } }, model.name), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary } }, model.note)),
    /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", gap: 4 } }, model.caps.map((c) => /* @__PURE__ */ React.createElement(ModelctxBadge, { key: c, theme }, MODELCTX_CAP_GLYPHS[c])), /* @__PURE__ */ React.createElement(ModelctxBadge, { theme }, model.window, "K"))
  );
}
function ModelContextPattern({ theme }) {
  const pal = usePal(theme);
  const [modelId, setModelId] = useState("alpha-4");
  const [open, setOpen] = useState(false);
  const [triggerHover, setTriggerHover] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const model = MODELCTX_MODELS.find((m) => m.id === modelId);
  const used = MODELCTX_USAGE.reduce((n, s) => n + s.k, 0);
  const overflow = used > model.window;
  const pct = Math.min(100, used / model.window * 100);
  const segColors = overflow ? [pal.warning, `${pal.warning}B3`, `${pal.warning}66`] : [pal.accent, `${pal.accent}B3`, `${pal.accent}66`];
  return /* @__PURE__ */ React.createElement("div", { style: { width: 420, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: {
    borderRadius: tokens.radius.lg,
    border: `1px solid ${pal.borderSubtle}`,
    background: pal.bgElevated,
    padding: 16,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Model"), /* @__PURE__ */ React.createElement("div", { ref, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen((o) => !o),
      onMouseEnter: () => setTriggerHover(true),
      onMouseLeave: () => setTriggerHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        boxSizing: "border-box",
        padding: "9px 12px",
        textAlign: "left",
        background: pal.bgInput,
        borderRadius: tokens.radius.md,
        border: `1.5px solid ${open ? pal.borderFocus : triggerHover ? pal.borderSubtle : "transparent"}`
      }
    },
    /* @__PURE__ */ React.createElement("span", { key: model.id, style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flex: 1,
      minWidth: 0,
      animation: `halaska-tab-fade 0.25s ${motion.easeOut} both`
    } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "medium", theme }, model.name), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", gap: 4 } }, model.caps.map((c) => /* @__PURE__ */ React.createElement(ModelctxBadge, { key: c, theme }, MODELCTX_CAP_GLYPHS[c])), /* @__PURE__ */ React.createElement(ModelctxBadge, { theme }, model.window, "K"))),
    /* @__PURE__ */ React.createElement(ChevronIcon, { size: 12, direction: open ? "up" : "down", style: { color: pal.textTertiary } })
  ), open && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    right: 0,
    zIndex: 50,
    background: pal.bgElevated,
    borderRadius: tokens.radius.md,
    padding: 4,
    border: `1px solid ${pal.borderSubtle}`,
    boxShadow: `0 4px 20px ${pal.shadowLg}`,
    transformOrigin: "top center",
    animation: `halaska-scale-in ${motion.fast} ${motion.easeOut} both`
  } }, MODELCTX_MODELS.map((m) => /* @__PURE__ */ React.createElement(
    ModelctxRow,
    {
      key: m.id,
      model: m,
      active: m.id === modelId,
      theme,
      onClick: () => {
        setModelId(m.id);
        setOpen(false);
      }
    }
  )))), /* @__PURE__ */ React.createElement(Divider, { theme, spacing: 8 }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Context"), /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.xs,
    fontFamily: tokens.font.mono,
    fontVariantNumeric: "tabular-nums",
    color: overflow ? pal.warning : pal.textTertiary,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, used, "K / ", model.window, "K \xB7 ", Math.round(used / model.window * 100), "%")), /* @__PURE__ */ React.createElement("div", { style: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    background: pal.bgMuted,
    overflow: "hidden",
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    height: "100%",
    width: `${pct}%`,
    borderRadius: 4,
    transition: `width 0.6s ${motion.springCurve}`
  } }, MODELCTX_USAGE.map((seg, i) => /* @__PURE__ */ React.createElement("div", { key: seg.label, style: {
    flex: seg.k,
    height: "100%",
    background: segColors[i],
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" } }, MODELCTX_USAGE.map((seg, i) => /* @__PURE__ */ React.createElement("span", { key: seg.label, style: { display: "inline-flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 3, background: segColors[i], transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, seg.label, " ", seg.k, "K")))), overflow && /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    animation: `halaska-step-in 0.4s ${motion.emphasized} both`
  } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.warning, fontSize: 11, lineHeight: 1, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "\u25B2"), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textSecondary } }, "Conversation exceeds window. Older turns will be compacted.")))));
}
const CITE_SOURCES = [
  {
    name: "Intercom \xB7 #4821",
    domain: "intercom.io",
    tone: "accent",
    quote: "Our appointment reminders stopped going out on Monday. Nothing changed on our side."
  },
  {
    name: "Changelog \xB7 v2.14",
    domain: "northwind.app",
    tone: "success",
    quote: "Reminder delivery now respects clinic time zones. Existing schedules were migrated on release."
  },
  {
    name: "Notion runbook",
    domain: "notion.so",
    tone: "warning",
    quote: "Migrated schedules need a manual re-save if the clinic had no time zone set before v2.14."
  }
];
const CITE_SEGMENTS = [
  { t: "Acme's appointment reminders stopped sending after the v2.14 release" },
  { cite: 0 },
  { t: ", and the release notes say schedules were migrated, so this is a settings gap, not a delivery bug" },
  { cite: 1 },
  { t: ". The runbook covers exactly this case" },
  { cite: 2 },
  { t: ", so reply with the re-save steps and offer to do it for them." }
];
const CITE_W = 460;
const CITE_POP_W = 250;
function CiteChip({ n, active, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 18,
        padding: "1px 6px",
        margin: "0 2px",
        borderRadius: tokens.radius.pill,
        background: active ? pal.accentBg : hover ? pal.bgMuted : pal.bgSubtle,
        border: `1px solid ${active ? `${pal.accent}55` : pal.borderSubtle}`,
        ...tokens.type.xs,
        lineHeight: 1.4,
        fontFamily: tokens.font.sans,
        fontVariantNumeric: "tabular-nums",
        color: active ? pal.accentText : pal.textSecondary,
        verticalAlign: "super",
        position: "relative",
        top: -1
      }
    },
    n
  );
}
function CitePagerBtn({ direction, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 8px",
        borderRadius: tokens.radius.sm,
        background: hover ? pal.bgSubtle : "transparent",
        color: hover ? pal.text : pal.textTertiary
      }
    },
    /* @__PURE__ */ React.createElement(ChevronIcon, { size: 11, direction })
  );
}
function CitePopover({ srcIdx, left, top, onPrev, onNext, theme }) {
  const pal = usePal(theme);
  const src = CITE_SOURCES[srcIdx];
  const toneColor = { accent: pal.accent, success: pal.success, warning: pal.warning }[src.tone];
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: top + 8,
    left,
    width: CITE_POP_W,
    zIndex: 5,
    background: pal.bgElevated,
    border: `1px solid ${pal.border}`,
    borderRadius: tokens.radius.md,
    padding: 14,
    boxSizing: "border-box",
    boxShadow: `0 12px 32px ${pal.shadowLg}`,
    transformOrigin: "top center",
    animation: `halaska-scale-in 0.2s ${motion.easeOut} both`,
    transition: `background ${motion.smooth} ${motion.easeInOut}, border ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { key: srcIdx, style: { animation: `halaska-tab-fade 0.25s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 4, flexShrink: 0, background: toneColor, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, truncate: true }, src.name), /* @__PURE__ */ React.createElement(Text, { size: "xs", mono: true, theme, style: { color: pal.textTertiary, marginLeft: "auto", flexShrink: 0 } }, src.domain)), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    paddingLeft: 10,
    borderLeft: `2px solid ${pal.borderSubtle}`,
    ...tokens.type.sm,
    color: pal.textSecondary,
    fontFamily: tokens.font.sans,
    transition: `color ${motion.smooth} ${motion.easeInOut}, border-color ${motion.smooth} ${motion.easeInOut}`
  } }, "\u201C", src.quote, "\u201D")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 10,
    borderTop: `1px solid ${pal.borderSubtle}`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(CitePagerBtn, { direction: "left", onClick: onPrev, theme }), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, fontVariantNumeric: "tabular-nums", color: pal.textTertiary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, srcIdx + 1, " / ", CITE_SOURCES.length), /* @__PURE__ */ React.createElement(CitePagerBtn, { direction: "right", onClick: onNext, theme })));
}
function CitationsPattern({ theme }) {
  const pal = usePal(theme);
  const rootRef = useRef(null);
  const [openChip, setOpenChip] = useState(null);
  const [srcIdx, setSrcIdx] = useState(0);
  const [anchor, setAnchor] = useState({ left: 0, top: 0 });
  useEffect(() => {
    if (openChip === null) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpenChip(null);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [openChip]);
  const handleChip = (segIdx, cite) => (e) => {
    if (openChip === segIdx) {
      setOpenChip(null);
      return;
    }
    const r = e.currentTarget.getBoundingClientRect();
    const rootR = rootRef.current.getBoundingClientRect();
    const cx = r.left - rootR.left + r.width / 2;
    setAnchor({
      left: Math.max(0, Math.min(cx - CITE_POP_W / 2, rootR.width - CITE_POP_W)),
      top: r.bottom - rootR.top
    });
    setSrcIdx(cite);
    setOpenChip(segIdx);
  };
  return /* @__PURE__ */ React.createElement("div", { ref: rootRef, style: { width: CITE_W, maxWidth: "100%", fontFamily: tokens.font.sans, position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Caption, { theme }, "Answer \xB7 ", CITE_SOURCES.length, " sources")), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 14,
    ...tokens.type.md,
    lineHeight: 1.85,
    color: pal.text,
    transition: `color ${motion.smooth} ${motion.easeInOut}`,
    animation: `halaska-step-in 0.4s ${motion.emphasized} 0.08s both`
  } }, CITE_SEGMENTS.map(
    (s, i) => s.t !== void 0 ? /* @__PURE__ */ React.createElement("span", { key: i }, s.t) : /* @__PURE__ */ React.createElement(
      CiteChip,
      {
        key: i,
        n: s.cite + 1,
        active: openChip === i,
        onClick: handleChip(i, s.cite),
        theme
      }
    )
  )), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, animation: `halaska-step-in 0.4s ${motion.emphasized} 0.16s both` } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Tap a citation to inspect its source")), openChip !== null && /* @__PURE__ */ React.createElement(
    CitePopover,
    {
      srcIdx,
      left: anchor.left,
      top: anchor.top,
      onPrev: () => setSrcIdx((k) => (k + CITE_SOURCES.length - 1) % CITE_SOURCES.length),
      onNext: () => setSrcIdx((k) => (k + 1) % CITE_SOURCES.length),
      theme
    }
  ));
}
const CONF_LEVELS = ["High", "Medium", "Low"];
const CONF_STATES = {
  High: {
    tone: "success",
    meta: "High confidence \xB7 3 corroborating sources",
    segments: [
      { t: "Acme's churn risk rose because usage dropped 40% after the pricing change. Product analytics, Stripe and three Intercom threads all point the same way, and 9 of the last 10 accounts with a drop this size churned within 90 days." }
    ]
  },
  Medium: {
    tone: "warning",
    meta: "Medium confidence \xB7 2 sources, 1 stale",
    segments: [
      { t: "Acme's churn risk " },
      { hedge: "appears" },
      { t: " to have risen because usage dropped ~40% after the pricing change. Stripe and the Intercom threads agree, but the analytics export is 40 minutes stale." }
    ]
  },
  Low: {
    tone: "danger",
    dim: true,
    banner: "Low confidence: treat as a hypothesis",
    meta: "Low confidence \xB7 1 weak source",
    segments: [
      { t: "Acme's churn risk " },
      { hedge: "may" },
      { t: " have risen after the pricing change. The only signal is a usage export from 6 hours ago, and a holiday week would explain the drop just as well." }
    ]
  }
};
const CONF_MISSING = [
  "Product analytics from the last 6 hours",
  "A second source confirming the usage drop"
];
function ConfidencePattern({ theme }) {
  const pal = usePal(theme);
  const [level, setLevel] = useState("High");
  const [verifying, setVerifying] = useState(false);
  const [missingOpen, setMissingOpen] = useState(false);
  const verifyTimer = useRef(null);
  useEffect(() => () => clearTimeout(verifyTimer.current), []);
  const state = CONF_STATES[level];
  const toneColor = { success: pal.success, warning: pal.warning, danger: pal.danger }[state.tone];
  const changeLevel = (l) => {
    clearTimeout(verifyTimer.current);
    setVerifying(false);
    setMissingOpen(false);
    setLevel(l);
  };
  const verify = () => {
    if (verifying) return;
    setVerifying(true);
    verifyTimer.current = setTimeout(() => {
      setVerifying(false);
      setMissingOpen(false);
      setLevel("Medium");
    }, 1400);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(SegmentedControl, { options: CONF_LEVELS, value: level, onChange: changeLevel, theme })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 14,
    borderRadius: tokens.radius.lg,
    overflow: "hidden",
    background: pal.bgElevated,
    border: `1px solid ${pal.border}`,
    boxShadow: `0 1px 4px ${pal.shadow}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    animation: `halaska-step-in 0.4s ${motion.emphasized} 0.08s both`
  } }, /* @__PURE__ */ React.createElement("div", { key: level, style: { animation: `halaska-tab-fade 0.3s ${motion.easeOut} both` } }, state.banner && /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "9px 18px",
    background: pal.warningBg,
    borderBottom: `1px solid ${pal.borderSubtle}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 3, flexShrink: 0, background: pal.warning } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { color: pal.warning } }, state.banner)), /* @__PURE__ */ React.createElement("div", { style: { padding: 18 } }, /* @__PURE__ */ React.createElement("div", { style: {
    ...tokens.type.md,
    lineHeight: 1.7,
    color: state.dim ? pal.textSecondary : pal.text,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, state.segments.map(
    (s, i) => s.hedge ? /* @__PURE__ */ React.createElement("span", { key: i, style: {
      textDecoration: "underline dotted",
      textDecorationColor: pal.warning,
      textUnderlineOffset: 3
    } }, s.hedge) : /* @__PURE__ */ React.createElement("span", { key: i }, s.t)
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 7, marginTop: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 4, flexShrink: 0, background: toneColor, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(Caption, { theme }, state.meta)), level === "Low" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 14 } }, /* @__PURE__ */ React.createElement(Button, { variant: "secondary", size: "sm", theme, loading: verifying, onClick: verify }, verifying ? "Checking live data\u2026" : "Verify with live data"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", theme, onClick: () => setMissingOpen((o) => !o) }, "Show what's missing")), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: missingOpen ? 96 : 0,
    opacity: missingOpen ? 1 : 0,
    transition: `max-height 0.45s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 12, display: "flex", flexDirection: "column", gap: 6 } }, CONF_MISSING.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 3, flexShrink: 0, background: pal.textMuted, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, m))))))))));
}
const FDBK_REASONS = ["Inaccurate", "Too vague", "Wrong data", "Other"];
function FdbkThumbIcon({ size = 14, down, style }) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { display: "block", flexShrink: 0, transform: down ? "rotate(180deg)" : "none", ...style }
    },
    /* @__PURE__ */ React.createElement("path", { d: "M7 10v12" }),
    /* @__PURE__ */ React.createElement("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })
  );
}
function FdbkVoteBtn({ down, active, flash, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      "aria-label": down ? "Not helpful" : "Helpful",
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "7px 12px",
        borderRadius: tokens.radius.pill,
        background: flash ? pal.accent : active ? pal.accentBg : hover ? pal.bgSubtle : "transparent",
        border: `1px solid ${active || flash ? `${pal.accent}55` : pal.borderSubtle}`,
        color: flash ? "#fff" : active ? pal.accentText : hover ? pal.textSecondary : pal.textTertiary
      }
    },
    /* @__PURE__ */ React.createElement(FdbkThumbIcon, { size: 13, down })
  );
}
function FdbkReasonChip({ label, selected, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        padding: "5px 12px",
        borderRadius: tokens.radius.pill,
        background: selected ? pal.accentBg : hover ? pal.bgMuted : pal.bgSubtle,
        border: `1px solid ${selected ? `${pal.accent}55` : pal.borderSubtle}`,
        ...tokens.type.sm,
        fontFamily: tokens.font.sans,
        fontWeight: selected ? tokens.weight.medium : tokens.weight.regular,
        color: selected ? pal.accentText : pal.textSecondary,
        whiteSpace: "nowrap"
      }
    },
    label
  );
}
function FeedbackPattern({ theme }) {
  const pal = usePal(theme);
  const [vote, setVote] = useState(null);
  const [upFlash, setUpFlash] = useState(false);
  const [reasons, setReasons] = useState([]);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const flashTimer = useRef(null);
  useEffect(() => () => clearTimeout(flashTimer.current), []);
  const voteUp = () => {
    if (sent) return;
    setVote("up");
    setUpFlash(true);
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setUpFlash(false), 650);
  };
  const voteDown = () => {
    if (sent) return;
    setUpFlash(false);
    setVote((v) => v === "down" ? null : "down");
  };
  const toggleReason = (r) => setReasons((rs) => rs.includes(r) ? rs.filter((x) => x !== r) : [...rs, r]);
  const send = () => setSent(true);
  const panelOpen = vote === "down" && !sent;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Caption, { theme }, "Answer")), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 14,
    ...tokens.type.md,
    lineHeight: 1.7,
    color: pal.text,
    transition: `color ${motion.smooth} ${motion.easeInOut}`,
    animation: `halaska-step-in 0.4s ${motion.emphasized} 0.08s both`
  } }, "Closed 14 stale tickets older than 30 days and sent each requester a short check-in. Two replied within the hour; both were already resolved on their side."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 14, animation: `halaska-step-in 0.4s ${motion.emphasized} 0.16s both` } }, /* @__PURE__ */ React.createElement(FdbkVoteBtn, { active: vote === "up", flash: upFlash, onClick: voteUp, theme }), /* @__PURE__ */ React.createElement(FdbkVoteBtn, { down: true, active: vote === "down", onClick: voteDown, theme }), vote === "up" && !upFlash && /* @__PURE__ */ React.createElement("span", { style: { animation: `halaska-fade-in 0.35s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Thanks"))), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: panelOpen ? 240 : 0,
    opacity: panelOpen ? 1 : 0,
    transition: `max-height 0.45s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    padding: 16,
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme }, "What went wrong?"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 } }, FDBK_REASONS.map((r) => /* @__PURE__ */ React.createElement(
    FdbkReasonChip,
    {
      key: r,
      label: r,
      selected: reasons.includes(r),
      onClick: () => toggleReason(r),
      theme
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 12 } }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      value: note,
      onChange: setNote,
      placeholder: "Add a note (optional)",
      size: "sm",
      theme,
      style: { flex: 1 }
    }
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "primary",
      size: "sm",
      theme,
      disabled: reasons.length === 0 && !note.trim(),
      onClick: send
    },
    "Send"
  )))), sent && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 12, animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 4, flexShrink: 0, background: pal.success, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, "Feedback recorded. Alpha will avoid this.")));
}
const PLANPREV_STEPS = [
  "Close 14 stale tickets older than 30 days",
  "Reply to the 6 open Acme threads with the outage workaround",
  "Issue a $180 credit to Acme for the outage",
  "Open a Linear issue for the calendar sync bug"
];
function PlanPrevCheckMark({ pal }) {
  return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "11", height: "11", fill: "none", stroke: pal.success, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3", style: { strokeDasharray: 14, strokeDashoffset: 14, animation: `halaska-check-draw 0.3s ${motion.easeOut} 0.05s forwards` } }));
}
function PlanPrevStepRow({ index, displayNum, label, checked, editing, removed, onToggleRemove, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const [xHover, setXHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "8px 10px",
        borderRadius: tokens.radius.md,
        background: hover && editing ? pal.bgSubtle : "transparent",
        opacity: removed ? 0.55 : 1,
        animation: `halaska-step-in 0.4s ${motion.emphasized} both`,
        animationDelay: `${index * 0.07}s`,
        transition: `background ${motion.normal} ${motion.easeInOut}, opacity ${motion.smooth} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: {
      width: 22,
      height: 22,
      borderRadius: 11,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? pal.successBg : pal.bgSubtle,
      color: pal.textSecondary,
      ...tokens.type.xs,
      fontFamily: tokens.font.mono,
      fontVariantNumeric: "tabular-nums",
      transition: `all ${motion.smooth} ${motion.easeInOut}`
    } }, checked ? /* @__PURE__ */ React.createElement(PlanPrevCheckMark, { pal }) : removed ? "\xB7" : displayNum),
    /* @__PURE__ */ React.createElement(Text, { size: "base", theme, style: {
      flex: 1,
      minWidth: 0,
      color: removed ? pal.textMuted : checked ? pal.textSecondary : pal.text,
      textDecoration: removed ? "line-through" : "none",
      transition: `color ${motion.smooth} ${motion.easeInOut}`
    } }, label),
    editing && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: onToggleRemove,
        onMouseEnter: () => setXHover(true),
        onMouseLeave: () => setXHover(false),
        "aria-label": removed ? "Restore step" : "Remove step",
        style: {
          ...interactiveBase,
          width: 22,
          height: 22,
          borderRadius: tokens.radius.sm,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: xHover ? pal.bgMuted : "transparent",
          color: xHover ? pal.text : pal.textTertiary,
          ...tokens.type.sm,
          padding: 0,
          animation: `halaska-scale-in 0.2s ${motion.easeOut} both`
        }
      },
      removed ? "\u21BA" : "\xD7"
    )
  );
}
function PlanPreviewPattern({
  theme,
  title = "Alpha wants to clear the support backlog",
  subtitle = "Nothing runs until you say so.",
  steps = PLANPREV_STEPS,
  badgeLabel = "Proposed",
  proceedLabel = "Proceed",
  editLabel = "Edit plan",
  handoffLabel = "I'll do it myself",
  lockLabel = "Lock plan",
  doneText,
  handoffText = "Plan handed off. Alpha is standing by.",
  stepDelayMs = 700,
  onProceed,
  onComplete,
  onEdit,
  onHandoff
}) {
  const pal = usePal(theme);
  const [items] = useState(() => steps.slice());
  const [phase, setPhase] = useState("review");
  const [removed, setRemoved] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const activeIdx = items.map((_, i) => i).filter((i) => !removed.includes(i));
  const activeSteps = activeIdx.map((i) => items[i]);
  useEffect(() => {
    if (phase !== "running") return;
    const kept = items.filter((_, i) => !removed.includes(i));
    const total = kept.length;
    let n = 0;
    let finish;
    const iv = setInterval(() => {
      n += 1;
      setCheckedCount(n);
      if (n >= total) {
        clearInterval(iv);
        onCompleteRef.current?.(kept);
        finish = setTimeout(() => setPhase("done"), 800);
      }
    }, stepDelayMs);
    return () => {
      clearInterval(iv);
      clearTimeout(finish);
    };
  }, [phase, removed, items, stepDelayMs]);
  if (phase === "handoff") {
    return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans, animation: `halaska-scale-in 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center", style: { padding: "12px 4px" } }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 20, theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme, style: { flex: 1 } }, handoffText), /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: "default" }, "Standing by")));
  }
  const resolvedDoneText = typeof doneText === "function" ? doneText(activeIdx.length) : doneText;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Caption, { theme }, phase === "edit" ? "Editing plan" : "Plan preview")), /* @__PURE__ */ React.createElement(
    StatusBadge,
    {
      theme,
      status: phase === "running" ? "accent" : phase === "done" ? "online" : "default",
      pulse: phase === "running"
    },
    phase === "running" ? "Executing" : phase === "done" ? "Done" : badgeLabel
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, { size: "md", weight: "semibold", theme, style: { display: "block" } }, title), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, phase === "edit" ? "Tap \xD7 to drop a step. Nothing runs until you lock it." : subtitle)), /* @__PURE__ */ React.createElement(Stack, { gap: 2 }, items.map((label, i) => {
    const isRemoved = removed.includes(i);
    const pos = activeIdx.indexOf(i);
    return /* @__PURE__ */ React.createElement(
      PlanPrevStepRow,
      {
        key: i,
        index: i,
        displayNum: pos + 1,
        label,
        checked: !isRemoved && pos > -1 && pos < checkedCount,
        editing: phase === "edit",
        removed: isRemoved,
        onToggleRemove: () => setRemoved((r) => r.includes(i) ? r.filter((x) => x !== i) : [...r, i]),
        theme
      }
    );
  })), phase === "review" && /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, justify: "flex-end" }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: () => {
    onHandoff?.();
    setPhase("handoff");
  } }, handoffLabel), /* @__PURE__ */ React.createElement(Button, { theme, variant: "secondary", size: "sm", onClick: () => setPhase("edit") }, editLabel), /* @__PURE__ */ React.createElement(
    Button,
    {
      theme,
      variant: "accent",
      size: "sm",
      disabled: activeIdx.length === 0,
      onClick: () => {
        onProceed?.(activeSteps);
        setPhase("running");
      }
    },
    proceedLabel
  )), phase === "edit" && /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, justify: "flex-end", align: "center" }, /* @__PURE__ */ React.createElement(Caption, { theme }, activeIdx.length, " of ", items.length, " steps kept"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "accent", size: "sm", onClick: () => {
    onEdit?.(activeSteps);
    setPhase("review");
  } }, lockLabel)), phase === "running" && /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center", style: { minHeight: 30 } }, /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: "", size: "sm", theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, "Executing \xB7 ", checkedCount, " of ", activeIdx.length)), phase === "done" && /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center", style: { minHeight: 30, animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 22,
    height: 22,
    borderRadius: 11,
    background: pal.successBg,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(PlanPrevCheckMark, { pal })), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary } }, resolvedDoneText != null ? resolvedDoneText : /* @__PURE__ */ React.createElement(React.Fragment, null, "Done \xB7 ", activeIdx.length, " actions taken \xB7 ", /* @__PURE__ */ React.createElement("span", { style: { color: pal.accentText, cursor: "pointer" } }, "view receipt")))))));
}
const AUTONOMY_LEVELS = [
  {
    id: "observe",
    title: "Observe",
    sub: "Watches, never acts",
    status: "default",
    badge: "Watching",
    pulse: false,
    caps: ["Reads tickets, issues, and product analytics", "Flags what needs you in the daily digest"]
  },
  {
    id: "suggest",
    title: "Suggest",
    sub: "Proposes, you send",
    status: "default",
    badge: "Suggest only",
    pulse: false,
    caps: ["Drafts replies, credits, and issue reports", "You send every reply yourself"]
  },
  {
    id: "confirm",
    title: "Confirm",
    sub: "Acts after your OK",
    status: "accent",
    badge: "Asks first",
    pulse: false,
    caps: ["Can reply to tickets, with confirmation", "Refund cap $500/day", "One tap approves, one dismisses"]
  },
  {
    id: "autonomous",
    title: "Autonomous",
    sub: "Acts, reports after",
    status: "online",
    badge: "Acting solo",
    pulse: true,
    caps: ["Replies, refunds, and files issues solo", "Refund cap $500/day still applies", "Receipt posted after every action"]
  }
];
function AutonomyLevelRow({ level, selected, onSelect, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onSelect,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        width: "100%",
        padding: "12px 14px",
        textAlign: "left",
        borderRadius: tokens.radius.md,
        background: selected ? pal.accentBg : hover ? pal.bgMuted : pal.bgSubtle,
        boxShadow: selected ? `inset 0 0 0 1.5px ${pal.accent}` : `inset 0 0 0 1px ${pal.borderSubtle}`
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: {
      width: 14,
      height: 14,
      borderRadius: 7,
      flexShrink: 0,
      marginTop: 3,
      border: selected ? "none" : `1.5px solid ${pal.border}`,
      background: selected ? pal.accent : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: `all ${motion.spring} ${motion.springCurve}`
    } }, selected && /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 3, background: "#fff", animation: `halaska-radio-dot-in 0.35s ${motion.springCurve} both` } })),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "medium", theme, style: { display: "block" } }, level.title), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, level.sub), /* @__PURE__ */ React.createElement("div", { style: {
      overflow: "hidden",
      maxHeight: selected ? 110 : 0,
      opacity: selected ? 1 : 0,
      transition: `max-height 0.4s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 10, display: "flex", flexDirection: "column", gap: 6 } }, selected && level.caps.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: c, style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      animation: `halaska-step-in 0.35s ${motion.emphasized} both`,
      animationDelay: `${i * 0.05}s`
    } }, /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 3, background: pal.accent, flexShrink: 0, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, c))))))
  );
}
function AutonomyPattern({ theme }) {
  const pal = usePal(theme);
  const [levelId, setLevelId] = useState("confirm");
  const level = AUTONOMY_LEVELS.find((l) => l.id === levelId);
  return /* @__PURE__ */ React.createElement("div", { style: { width: 420, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme, style: { display: "block" } }, "Autonomy"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, "How much can Alpha do on this task?")), /* @__PURE__ */ React.createElement("span", { key: levelId, style: { display: "inline-flex", animation: `halaska-scale-in 0.25s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(StatusBadge, { theme, status: level.status, pulse: level.pulse }, level.badge))), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, AUTONOMY_LEVELS.map((l) => /* @__PURE__ */ React.createElement(
    AutonomyLevelRow,
    {
      key: l.id,
      level: l,
      selected: l.id === levelId,
      onSelect: () => setLevelId(l.id),
      theme
    }
  ))))));
}
const PERMSCOPE_TOOLS = [
  { id: "orders", label: "Intercom replies", sub: "Send and close support threads" },
  { id: "transfers", label: "Stripe refunds", sub: "Move money back to a customer" },
  { id: "market", label: "Linear issues", sub: "File and update engineering tickets" }
];
const PERMSCOPE_DATA = [
  { id: "history", label: "Ticket history", sub: "Threads, replies, CSAT scores" },
  { id: "exports", label: "Customer records", sub: "Plans, seats, and billing status from HubSpot" }
];
function PermScopeRow({ label, sub, checked, onChange, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", theme, style: { display: "block" } }, label), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, sub)), /* @__PURE__ */ React.createElement(SwitchToggle, { checked, onChange, theme }));
}
function PermScopeChip({ label, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        padding: "5px 12px",
        borderRadius: tokens.radius.pill,
        background: hover ? pal.bgHover : pal.bgElevated,
        boxShadow: `inset 0 0 0 1px ${pal.border}`,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        color: pal.text
      }
    },
    label
  );
}
function PermissionScopePattern({ theme }) {
  const pal = usePal(theme);
  const [on, setOn] = useState({ orders: true, transfers: false, market: true, history: true, exports: true });
  const [cap, setCap] = useState(500);
  const [transferMode, setTransferMode] = useState(null);
  const toggle = (id) => (next) => {
    setOn((o) => ({ ...o, [id]: next }));
    if (id === "transfers" && !next) setTransferMode(null);
  };
  const showStrip = on.transfers && !transferMode;
  const capPct = cap / 5e3 * 100;
  const summaryParts = [];
  summaryParts.push(on.orders ? `Alpha can reply in Intercom, with refunds capped at $${cap.toLocaleString()}/day.` : "Alpha can read tickets but can't reply.");
  if (!on.transfers) summaryParts.push("Stripe refunds stay off.");
  else if (transferMode === "every") summaryParts.push("Refunds need your approval every time.");
  else if (transferMode === "once") summaryParts.push("One refund approved, then it locks again.");
  else summaryParts.push("Refunds are on. Choose an approval rule.");
  const summary = summaryParts.join(" ");
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { gap: 18 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme, style: { display: "block" } }, "What Alpha can touch"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, "Scoped per agent \xB7 changes apply instantly"))), /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { textTransform: "uppercase", letterSpacing: 0.5, ...tokens.type.xs, fontWeight: tokens.weight.medium } }, "Tools"), PERMSCOPE_TOOLS.map((t) => /* @__PURE__ */ React.createElement(PermScopeRow, { key: t.id, label: t.label, sub: t.sub, checked: on[t.id], onChange: toggle(t.id), theme }))), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: showStrip ? 110 : 0,
    opacity: showStrip ? 1 : 0,
    marginTop: showStrip ? 0 : -18,
    transition: `max-height 0.4s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeInOut}, margin-top 0.4s ${motion.emphasized}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: pal.warningBg,
    borderRadius: tokens.radius.md,
    padding: "12px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.text } }, "Refunds let Alpha send money back to customers. Require approval each time?"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8 }, /* @__PURE__ */ React.createElement(PermScopeChip, { label: "Every time", onClick: () => setTransferMode("every"), theme }), /* @__PURE__ */ React.createElement(PermScopeChip, { label: "Just once", onClick: () => setTransferMode("once"), theme })))), /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { textTransform: "uppercase", letterSpacing: 0.5, ...tokens.type.xs, fontWeight: tokens.weight.medium } }, "Data"), PERMSCOPE_DATA.map((d) => /* @__PURE__ */ React.createElement(PermScopeRow, { key: d.id, label: d.label, sub: d.sub, checked: on[d.id], onChange: toggle(d.id), theme }))), /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { textTransform: "uppercase", letterSpacing: 0.5, ...tokens.type.xs, fontWeight: tokens.weight.medium } }, "Limits"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", theme }, "Daily refund cap"), /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.sm,
    fontFamily: tokens.font.mono,
    fontVariantNumeric: "tabular-nums",
    color: pal.accentText,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, "$", cap.toLocaleString(), "/day")), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "range",
      min: 0,
      max: 5e3,
      step: 50,
      value: cap,
      onChange: (e) => setCap(Number(e.target.value)),
      style: {
        width: "100%",
        height: 4,
        appearance: "none",
        WebkitAppearance: "none",
        background: `linear-gradient(to right, ${pal.accent} ${capPct}%, ${pal.bgMuted} ${capPct}%)`,
        borderRadius: 2,
        outline: "none",
        cursor: "pointer",
        border: "none"
      }
    }
  )), /* @__PURE__ */ React.createElement(Divider, { theme, spacing: 0 }), /* @__PURE__ */ React.createElement("div", { key: summary, style: { animation: `halaska-fade-in 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, summary)))));
}
const QUEUE_ROW_H = 60;
const QUEUE_TASK_SECONDS = 4;
const QUEUE_TASKS = [
  { id: "q0", title: "Triage overnight tickets", meta: "23 tickets \xB7 Intercom" },
  { id: "q1", title: "Follow up with Fjord Health", meta: "2 replies \xB7 ~2 min" },
  { id: "q2", title: "Draft release notes for 2.4", meta: "GitHub \u2192 changelog \xB7 ~4 min" },
  { id: "q3", title: "Refresh the churn-risk scan", meta: "HubSpot \xB7 read-only" },
  { id: "q4", title: "Write the daily support summary", meta: "report \xB7 no replies" }
];
function QueueCtlButton({ glyph, disabled, onClick, label, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: disabled ? void 0 : onClick,
      "aria-label": label,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        width: 22,
        height: 22,
        borderRadius: tokens.radius.sm,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        background: hover && !disabled ? pal.bgMuted : "transparent",
        color: disabled ? pal.textMuted : hover ? pal.text : pal.textTertiary,
        ...tokens.type.sm,
        fontFamily: tokens.font.mono,
        cursor: disabled ? "default" : "pointer"
      }
    },
    glyph
  );
}
function QueueTaskRow({ task, index, count, removing, onMoveUp, onMoveDown, onRemove, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: index * QUEUE_ROW_H,
        height: QUEUE_ROW_H - 6,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0 12px",
        borderRadius: tokens.radius.md,
        background: hover ? pal.bgSubtle : "transparent",
        boxShadow: `inset 0 0 0 1px ${pal.borderSubtle}`,
        opacity: removing ? 0 : 1,
        transform: removing ? "scale(0.97)" : "scale(1)",
        transition: `top 0.35s ${motion.emphasized}, opacity ${motion.normal} ${motion.easeInOut}, transform ${motion.normal} ${motion.easeInOut}, background ${motion.normal} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: {
      width: 20,
      height: 20,
      borderRadius: 10,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: pal.bgMuted,
      color: pal.textSecondary,
      ...tokens.type.xs,
      fontFamily: tokens.font.mono,
      fontVariantNumeric: "tabular-nums",
      transition: `all ${motion.smooth} ${motion.easeInOut}`
    } }, index + 1),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "medium", theme, truncate: true, style: { display: "block" } }, task.title), index === 0 && /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.xxs,
      fontWeight: tokens.weight.medium,
      flexShrink: 0,
      color: pal.accentText,
      background: pal.accentBg,
      padding: "1px 6px",
      borderRadius: tokens.radius.pill,
      textTransform: "uppercase",
      letterSpacing: 0.4,
      transition: `all ${motion.smooth} ${motion.easeInOut}`
    } }, "Up next")), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary, fontFamily: tokens.font.mono } }, task.meta)),
    /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      gap: 2,
      flexShrink: 0,
      opacity: hover ? 1 : 0,
      transition: `opacity ${motion.normal} ${motion.easeInOut}`,
      pointerEvents: hover ? "auto" : "none"
    } }, /* @__PURE__ */ React.createElement(QueueCtlButton, { glyph: "\u2191", label: "Move up", disabled: index === 0, onClick: onMoveUp, theme }), /* @__PURE__ */ React.createElement(QueueCtlButton, { glyph: "\u2193", label: "Move down", disabled: index === count - 1, onClick: onMoveDown, theme }), /* @__PURE__ */ React.createElement(QueueCtlButton, { glyph: "\xD7", label: "Remove", onClick: onRemove, theme }))
  );
}
function QueuePattern({ theme }) {
  const pal = usePal(theme);
  const [current, setCurrent] = useState(QUEUE_TASKS[0]);
  const [queue, setQueue] = useState(QUEUE_TASKS.slice(1));
  const [doneCount, setDoneCount] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [removing, setRemoving] = useState(null);
  const t0 = useRef(Date.now());
  const removeT = useRef(null);
  useEffect(() => {
    if (!current) return;
    const iv = setInterval(() => setElapsed((Date.now() - t0.current) / 1e3), 100);
    return () => clearInterval(iv);
  }, [current]);
  useEffect(() => {
    if (!current || elapsed < QUEUE_TASK_SECONDS) return;
    setDoneCount((d) => d + 1);
    setCurrent(queue[0] || null);
    setQueue((q) => q.slice(1));
    t0.current = Date.now();
    setElapsed(0);
  }, [elapsed, current, queue]);
  useEffect(() => () => clearTimeout(removeT.current), []);
  const moveTask = (i, dir) => setQueue((q) => {
    const j = i + dir;
    if (j < 0 || j >= q.length) return q;
    const next = [...q];
    [next[i], next[j]] = [next[j], next[i]];
    return next;
  });
  const removeTask = (id) => {
    setRemoving(id);
    clearTimeout(removeT.current);
    removeT.current = setTimeout(() => {
      setQueue((q) => q.filter((t) => t.id !== id));
      setRemoving(null);
    }, 250);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Working now")), doneCount > 0 && /* @__PURE__ */ React.createElement("span", { key: doneCount, style: { display: "inline-flex", animation: `halaska-scale-in 0.3s ${motion.springCurve} both` } }, /* @__PURE__ */ React.createElement(Badge, { variant: "success", theme }, doneCount, " done"))), current ? /* @__PURE__ */ React.createElement("div", { key: current.id, style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    boxShadow: `inset 0 0 0 1px ${pal.borderSubtle}`,
    animation: `halaska-step-in 0.4s ${motion.emphasized} both`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: "", size: "sm", theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "medium", theme, truncate: true, style: { display: "block" } }, current.title), /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary, fontFamily: tokens.font.mono } }, current.meta)), /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.sm,
    fontFamily: tokens.font.mono,
    fontVariantNumeric: "tabular-nums",
    color: pal.textTertiary,
    flexShrink: 0,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, elapsed.toFixed(1), "s")) : /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    boxShadow: `inset 0 0 0 1px ${pal.borderSubtle}`,
    animation: `halaska-scale-in 0.3s ${motion.easeOut} both`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 22,
    height: 22,
    borderRadius: 11,
    background: pal.successBg,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "11", height: "11", fill: "none", stroke: pal.success, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3", style: { strokeDasharray: 14, strokeDashoffset: 14, animation: `halaska-check-draw 0.3s ${motion.easeOut} 0.1s forwards` } }))), /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "medium", theme }, "All caught up \xB7 ", doneCount, " tasks done")), /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    height: queue.length * QUEUE_ROW_H,
    transition: `height 0.35s ${motion.emphasized}`
  } }, queue.map((t, i) => /* @__PURE__ */ React.createElement(
    QueueTaskRow,
    {
      key: t.id,
      task: t,
      index: i,
      count: queue.length,
      removing: removing === t.id,
      onMoveUp: () => moveTask(i, -1),
      onMoveDown: () => moveTask(i, 1),
      onRemove: () => removeTask(t.id),
      theme
    }
  ))), /* @__PURE__ */ React.createElement(Caption, { theme }, queue.length > 0 ? `${queue.length} queued \xB7 Alpha works one at a time` : "Queue clear \xB7 Alpha is standing by")));
}
const AGENTSTATUS_MAIN_PHASES = [
  "Reading new threads\u2026",
  "Matching to HubSpot\u2026",
  "Drafting replies\u2026"
];
const AGENTSTATUS_REDIRECT_PHASES = [
  "Re-planning\u2026",
  "Working on your change\u2026"
];
const AGENTSTATUS_MAIN_ORBS = ["orbit", "pulse", "sweep"];
const AGENTSTATUS_REDIRECT_ORBS = ["pulse", "sweep"];
function agentstatusClock(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
function agentstatusPhases(list, fallbackOrbs) {
  return (list || []).map((p2, i) => typeof p2 === "string" ? { label: p2, orb: fallbackOrbs[i] || "pulse" } : { label: p2.label, orb: p2.orb || fallbackOrbs[i] || "pulse" });
}
function agentstatusContextLabel(step, total) {
  return `Alpha \xB7 step ${step} of ${total}`;
}
function AgentStatusDot({ color, pulse }) {
  return /* @__PURE__ */ React.createElement("span", { style: { position: "relative", width: 7, height: 7, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    inset: 0,
    borderRadius: 4,
    background: color,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }), pulse && /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    inset: 0,
    borderRadius: 4,
    background: color,
    animation: `halaska-live-pulse 1.4s ${motion.easeOut} infinite`
  } }));
}
function AgentStatusPattern({
  theme,
  phases = AGENTSTATUS_MAIN_PHASES,
  redirectPhases = AGENTSTATUS_REDIRECT_PHASES,
  waitingLabel = "Waiting on you \xB7 2 replies need a look",
  pausedLabel = "Stopped \xB7 progress kept",
  doneLabel = "Done \xB7 replies redrafted to your note",
  phaseMs = 1800,
  contextLabel = agentstatusContextLabel,
  redirectPlaceholder = "Tell Alpha what to do instead\u2026",
  autoplay = true,
  onPause,
  onResume,
  onRedirect,
  onWaiting,
  onDone
}) {
  const pal = usePal(theme);
  const mainList = agentstatusPhases(phases, AGENTSTATUS_MAIN_ORBS);
  const redirectList = agentstatusPhases(redirectPhases, AGENTSTATUS_REDIRECT_ORBS);
  const [mode, setMode] = useState("main");
  const [phaseIdx, setPhaseIdx] = useState(autoplay ? 0 : mainList.length);
  const [paused, setPaused] = useState(false);
  const [redirectOpen, setRedirectOpen] = useState(false);
  const [note, setNote] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const cb = useRef({});
  cb.current = { onWaiting, onDone };
  const active = mode === "main" ? mainList : redirectList;
  const working = phaseIdx < active.length;
  const waiting = mode === "main" && !working;
  const done = mode === "redirect" && !working;
  useEffect(() => {
    if (!autoplay || paused || phaseIdx >= active.length) return;
    const t = setTimeout(() => setPhaseIdx((i) => i + 1), phaseMs);
    return () => clearTimeout(t);
  }, [autoplay, paused, mode, phaseIdx, active.length, phaseMs]);
  useEffect(() => {
    if (paused || !working) return;
    const iv = setInterval(() => setElapsed((e) => e + 1), 1e3);
    return () => clearInterval(iv);
  }, [paused, working]);
  useEffect(() => {
    if (waiting) cb.current.onWaiting?.();
  }, [waiting]);
  useEffect(() => {
    if (done) cb.current.onDone?.();
  }, [done]);
  const dot = done ? { color: pal.success, pulse: false } : paused ? { color: pal.textMuted, pulse: false } : waiting ? { color: pal.warning, pulse: false } : { color: pal.accent, pulse: true };
  const label = done ? doneLabel : paused ? pausedLabel : waiting ? waitingLabel : active[phaseIdx].label;
  const togglePause = () => {
    setPaused((p2) => !p2);
    if (paused) onResume?.();
    else onPause?.();
  };
  const sendRedirect = () => {
    const text = note.trim();
    if (!text) return;
    setMode("redirect");
    setPhaseIdx(autoplay ? 0 : redirectList.length);
    setRedirectOpen(false);
    setNote("");
    setPaused(false);
    onRedirect?.(text);
  };
  const step = Math.min(phaseIdx + 1, active.length);
  const context = typeof contextLabel === "function" ? contextLabel(step, active.length) : contextLabel;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "9px 14px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    flex: 1,
    minWidth: 0,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, working && !paused ? (
    // The orb variant tracks what the agent is actually doing.
    /* @__PURE__ */ React.createElement(
      Orb,
      {
        size: 16,
        color: pal.accent,
        theme,
        variant: active[phaseIdx].orb || "pulse"
      }
    )
  ) : waiting && !paused ? /* @__PURE__ */ React.createElement(Orb, { size: 16, variant: "spark", color: pal.warning, theme }) : /* @__PURE__ */ React.createElement(AgentStatusDot, { color: dot.color, pulse: dot.pulse }), /* @__PURE__ */ React.createElement("span", { key: label, style: {
    ...tokens.type.sm,
    fontWeight: tokens.weight.medium,
    color: pal.text,
    flex: 1,
    minWidth: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    animation: `halaska-tab-fade 0.25s ${motion.easeOut} both`,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, label)), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
    width: 62,
    flexShrink: 0,
    marginLeft: "auto"
  } }, !done && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    IconButton,
    {
      theme,
      size: 28,
      style: { minWidth: 28, flexShrink: 0 },
      icon: paused ? /* @__PURE__ */ React.createElement(AgentStatusResumeIcon, null) : /* @__PURE__ */ React.createElement(AgentStatusStopIcon, null),
      label: paused ? "Resume" : "Stop",
      onClick: togglePause
    }
  ), /* @__PURE__ */ React.createElement(
    IconButton,
    {
      theme,
      size: 28,
      style: { minWidth: 28, flexShrink: 0 },
      icon: /* @__PURE__ */ React.createElement(AgentStatusBranchIcon, null),
      label: "Redirect",
      onClick: () => setRedirectOpen((o) => !o)
    }
  )))), redirectOpen && !done && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "flex-start", animation: `halaska-step-in 0.35s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(
    TextInput,
    {
      theme,
      size: "sm",
      value: note,
      onChange: setNote,
      placeholder: redirectPlaceholder,
      style: { flex: 1 }
    }
  ), /* @__PURE__ */ React.createElement(Button, { theme, variant: "accent", size: "sm", disabled: !note.trim(), onClick: sendRedirect }, "Send")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 6,
    alignItems: "baseline",
    paddingLeft: 14,
    animation: `halaska-step-in 0.4s ${motion.emphasized} 0.08s both`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "xs", theme, style: { color: pal.textTertiary } }, context), /* @__PURE__ */ React.createElement(Text, { size: "xs", mono: true, theme, style: { color: pal.textTertiary, fontVariantNumeric: "tabular-nums" } }, "\xB7 ", agentstatusClock(elapsed), " elapsed"))));
}
const HANDOFF_CONTEXT_ROWS = [
  { label: "Customer", value: "Acme \xB7 Enterprise" },
  { label: "Requested refund", value: "$3,900" },
  { label: "Risk if delayed", value: "Renewal in 6 days" }
];
const HANDOFF_RESUMED_TEXT = /* @__PURE__ */ React.createElement(React.Fragment, null, "Done \xB7 refunded ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: tokens.font.mono } }, "$3,900"), " to Acme");
function HandoffCheckIcon({ color, bg }) {
  return /* @__PURE__ */ React.createElement("span", { style: {
    width: 22,
    height: 22,
    borderRadius: 11,
    background: bg,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "10", height: "10", fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3", style: { strokeDasharray: 14, strokeDashoffset: 14, animation: `halaska-check-draw 0.3s ${motion.easeOut} 0.1s forwards` } })));
}
function HandoffPattern({
  theme,
  workingLabel = "Reviewing Acme's refund request\u2026",
  workingMs = 2e3,
  headline = "Alpha is handing this to you",
  reason = "Refund exceeds your $2,500 approval cap",
  context = HANDOFF_CONTEXT_ROWS,
  takeOverLabel = "Take over",
  resumeLabel = "Raise cap to $5,000 & let Alpha finish",
  takenOverText = "You have control. Alpha left notes in the thread.",
  resumingLabel = "Resuming with new cap\u2026",
  resumedText = HANDOFF_RESUMED_TEXT,
  resumeMs = 1500,
  autoplay = true,
  onTakeOver,
  onResume,
  onResumed
}) {
  const pal = usePal(theme);
  const [stage, setStage] = useState(autoplay ? "working" : "handoff");
  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setStage("handoff"), workingMs);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (stage !== "raising") return;
    const t = setTimeout(() => {
      setStage("raised");
      onResumed?.();
    }, resumeMs);
    return () => clearTimeout(t);
  }, [stage]);
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, stage === "working" ? /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 12, align: "center", style: { minHeight: 28 } }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: workingLabel, size: "sm", theme })) : /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-tab-fade 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Approval cap reached")), /* @__PURE__ */ React.createElement(Badge, { theme, variant: "accent" }, "Your turn")), /* @__PURE__ */ React.createElement("div", { style: {
    borderLeft: `2px solid ${pal.accent}`,
    background: pal.accentBg,
    borderRadius: `0 ${tokens.radius.sm}px ${tokens.radius.sm}px 0`,
    padding: "12px 14px",
    animation: `halaska-step-in 0.4s ${motion.emphasized} 0.05s both`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "md", weight: "semibold", theme, style: { display: "block" } }, headline), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, reason)), /* @__PURE__ */ React.createElement("div", { style: {
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    padding: "4px 14px",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, context.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: r.label, style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "9px 0",
    borderBottom: i < context.length - 1 ? `1px solid ${pal.borderSubtle}` : "none",
    animation: `halaska-step-in 0.4s ${motion.emphasized} ${0.15 + i * 0.09}s both`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, r.label), /* @__PURE__ */ React.createElement(Text, { size: "sm", mono: true, theme, style: { fontVariantNumeric: "tabular-nums" } }, r.value)))), /* @__PURE__ */ React.createElement("div", { key: stage, style: { animation: `halaska-tab-fade 0.3s ${motion.easeOut} ${stage === "handoff" ? "0.42s" : "0s"} both` } }, stage === "handoff" && /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, wrap: true }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", onClick: () => {
    setStage("taken");
    onTakeOver?.();
  } }, takeOverLabel), /* @__PURE__ */ React.createElement(Button, { theme, variant: "secondary", size: "sm", onClick: () => {
    setStage("raising");
    onResume?.();
  } }, resumeLabel)), stage === "taken" && /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(HandoffCheckIcon, { color: pal.success, bg: pal.successBg }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, takenOverText)), stage === "raising" && /* @__PURE__ */ React.createElement("div", { style: { minHeight: 22, display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: resumingLabel, size: "sm", theme })), stage === "raised" && /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(HandoffCheckIcon, { color: pal.success, bg: pal.successBg }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme }, resumedText)))))));
}
const RECEIPT_UNDO_SECONDS = 10;
const RECEIPT_META = [
  { label: "What", value: "Issued a $180 credit to Acme" },
  { label: "Where", value: "Stripe \xB7 Acme" },
  { label: "Authority", value: "Within your $500 refund cap, no approval needed" }
];
const RECEIPT_META_REVERSED = [
  { label: "What", value: "Reversed the $180 credit to Acme" },
  { label: "Where", value: "Stripe \xB7 Acme" },
  { label: "Net", value: "\u2212$180 \xB7 Acme's balance fully restored" }
];
function ReceiptMetaRow({ label, value, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.xs,
    fontFamily: tokens.font.mono,
    color: pal.textTertiary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    width: 66,
    flexShrink: 0,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, label), /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.sm,
    fontFamily: tokens.font.mono,
    color: pal.textSecondary,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, value));
}
function ReceiptBeforeAfter({ before, after, delta, deltaColor, unit, decimals = 0, label = "Acme credit", theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, textTransform: "uppercase", letterSpacing: 0.5, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, label), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.textTertiary, fontVariantNumeric: "tabular-nums", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, before.toFixed(decimals)), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: pal.textMuted, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "\u2192"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, fontWeight: tokens.weight.semibold, color: pal.text, fontVariantNumeric: "tabular-nums", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, after.toFixed(decimals), unit ? ` ${unit}` : ""), /* @__PURE__ */ React.createElement("span", { style: {
    ...tokens.type.xs,
    fontFamily: tokens.font.mono,
    fontWeight: tokens.weight.medium,
    color: deltaColor,
    marginLeft: "auto",
    fontVariantNumeric: "tabular-nums",
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, delta));
}
function ActionReceiptPattern({
  theme,
  title = "Credit issued",
  reversedTitle = "Reversed",
  timestamp = "14:32:07 UTC",
  reversedTimestamp = "14:32:19 UTC",
  meta = RECEIPT_META,
  reversedMeta = RECEIPT_META_REVERSED,
  before = 0,
  after = 180,
  unit = "USD",
  decimals = 0,
  stripLabel = "Acme credit",
  undoSeconds = RECEIPT_UNDO_SECONDS,
  undoLabel = "Undo",
  expiredLabel = "Undo window closed",
  reversedLabel = "Reversal logged \xB7 nothing else was affected",
  auditLabel = "View in audit log",
  autoplay = true,
  onUndo,
  onExpire,
  onAudit
}) {
  const pal = usePal(theme);
  const [phase, setPhase] = useState(autoplay ? "active" : "expired");
  const [secondsLeft, setSecondsLeft] = useState(autoplay ? undoSeconds : 0);
  const [afterVal, setAfterVal] = useState(autoplay ? before : after);
  const [undoHover, setUndoHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const undoneRef = useRef(false);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;
  useEffect(() => {
    if (!autoplay) return;
    const t0 = Date.now();
    const iv = setInterval(() => {
      if (undoneRef.current) {
        clearInterval(iv);
        return;
      }
      const left = Math.max(0, undoSeconds - (Date.now() - t0) / 1e3);
      setSecondsLeft(left);
      if (left <= 0) {
        clearInterval(iv);
        setPhase("expired");
        onExpireRef.current?.();
      }
    }, 100);
    return () => clearInterval(iv);
  }, [autoplay, undoSeconds]);
  useEffect(() => {
    if (!autoplay) {
      setAfterVal(after);
      return;
    }
    let iv;
    const start = setTimeout(() => {
      const t0 = Date.now();
      const dur = 900;
      iv = setInterval(() => {
        const t = Math.min(1, (Date.now() - t0) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        setAfterVal(before + (after - before) * eased);
        if (t >= 1) clearInterval(iv);
      }, 30);
    }, 350);
    return () => {
      clearTimeout(start);
      clearInterval(iv);
    };
  }, [autoplay, before, after]);
  const handleUndo = () => {
    if (phase !== "active") return;
    undoneRef.current = true;
    setPhase("reversed");
    onUndo?.();
  };
  const receiptDelta = (from, to) => {
    const diff = to - from;
    return `${diff < 0 ? "\u2212" : "+"}${Math.abs(diff).toFixed(decimals)}${unit ? ` ${unit}` : ""}`;
  };
  const reversed = phase === "reversed";
  const ringC = 2 * Math.PI * 5.5;
  const timeLabel = `0:${String(Math.ceil(secondsLeft)).padStart(2, "0")}`;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20 }, /* @__PURE__ */ React.createElement(Stack, { gap: 16 }, /* @__PURE__ */ React.createElement("div", { key: phase === "reversed" ? "rev" : "fwd", style: { display: "flex", alignItems: "center", gap: 10, animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("span", { style: { position: "relative", width: 8, height: 8, borderRadius: 4, background: reversed ? pal.textTertiary : pal.success, flexShrink: 0, transition: `background ${motion.smooth} ${motion.easeInOut}` } }, !reversed && phase === "active" && /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", inset: 0, borderRadius: 4, background: pal.success, animation: `halaska-live-pulse 1.4s ${motion.easeOut} infinite` } })), /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme }, reversed ? reversedTitle : title), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, marginLeft: "auto", fontVariantNumeric: "tabular-nums", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, reversed ? reversedTimestamp : timestamp)), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, (reversed ? reversedMeta : meta).map((r, i) => /* @__PURE__ */ React.createElement("div", { key: `${reversed ? "r" : "f"}-${r.label}`, style: { animation: `halaska-step-in 0.35s ${motion.emphasized} ${i * 0.06}s both` } }, /* @__PURE__ */ React.createElement(ReceiptMetaRow, { label: r.label, value: r.value, theme })))), reversed ? /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.4s ${motion.emphasized} 0.15s both` } }, /* @__PURE__ */ React.createElement(ReceiptBeforeAfter, { before: after, after: before, delta: receiptDelta(after, before), deltaColor: pal.textSecondary, unit, decimals, label: stripLabel, theme })) : /* @__PURE__ */ React.createElement(ReceiptBeforeAfter, { before, after: afterVal, delta: receiptDelta(before, after), deltaColor: pal.success, unit, decimals, label: stripLabel, theme }), /* @__PURE__ */ React.createElement(Divider, { theme, spacing: 0 }), phase === "active" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleUndo,
      onMouseEnter: () => setUndoHover(true),
      onMouseLeave: () => setUndoHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 14px",
        borderRadius: tokens.radius.md,
        background: pal.bgMuted,
        color: pal.text,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        filter: undoHover ? "brightness(1.06)" : "brightness(1)",
        boxShadow: undoHover ? "inset 0 -2px 0 0 rgba(0,0,0,0.05)" : "none"
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", style: { flexShrink: 0 } }, /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "7", r: "5.5", fill: "none", stroke: pal.borderSubtle, strokeWidth: "1.5" }), /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: "7",
        cy: "7",
        r: "5.5",
        fill: "none",
        stroke: pal.text,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeDasharray: ringC,
        strokeDashoffset: ringC * (1 - secondsLeft / undoSeconds),
        transform: "rotate(-90 7 7)",
        style: { transition: "stroke-dashoffset 0.1s linear" }
      }
    )),
    undoLabel,
    /* @__PURE__ */ React.createElement("span", { style: { fontFamily: tokens.font.mono, ...tokens.type.xs, color: pal.textSecondary, fontVariantNumeric: "tabular-nums" } }, timeLabel)
  ), /* @__PURE__ */ React.createElement(Caption, { theme }, "Reversible for ", undoSeconds, " seconds")), phase === "expired" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, animation: `halaska-fade-in 0.35s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onAudit?.(),
      onMouseEnter: () => setLinkHover(true),
      onMouseLeave: () => setLinkHover(false),
      style: {
        ...interactiveBase,
        background: "transparent",
        padding: "4px 0",
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        color: linkHover ? pal.text : pal.textSecondary,
        textDecoration: "underline",
        textUnderlineOffset: 3,
        textDecorationColor: linkHover ? pal.textSecondary : pal.borderSubtle
      }
    },
    auditLabel
  ), /* @__PURE__ */ React.createElement(Caption, { theme }, expiredLabel)), phase === "reversed" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, animation: `halaska-step-in 0.4s ${motion.emphasized} 0.25s both` } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onAudit?.(),
      onMouseEnter: () => setLinkHover(true),
      onMouseLeave: () => setLinkHover(false),
      style: {
        ...interactiveBase,
        background: "transparent",
        padding: "4px 0",
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        color: linkHover ? pal.text : pal.textSecondary,
        textDecoration: "underline",
        textUnderlineOffset: 3,
        textDecorationColor: linkHover ? pal.textSecondary : pal.borderSubtle
      }
    },
    auditLabel
  ), /* @__PURE__ */ React.createElement(Caption, { theme }, reversedLabel)))));
}
const CKPT_ITEMS = [
  { id: "ckpt-1", name: "Before triage", time: "13:58", delta: "42 open" },
  { id: "ckpt-2", name: "After Acme replies", time: "14:21", delta: "19 open" },
  { id: "ckpt-3", name: "Current", time: "14:32", delta: "8 open" }
];
function CkptRestoreButton({ visible, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      tabIndex: visible ? 0 : -1,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        padding: "5px 12px",
        borderRadius: tokens.radius.sm,
        background: pal.bgMuted,
        color: pal.text,
        ...tokens.type.xs,
        fontWeight: tokens.weight.medium,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(4px)",
        pointerEvents: visible ? "auto" : "none",
        filter: hover ? "brightness(1.06)" : "brightness(1)"
      }
    },
    "Restore"
  );
}
function CheckpointPattern({ theme }) {
  const pal = usePal(theme);
  const [currentIdx, setCurrentIdx] = useState(CKPT_ITEMS.length - 1);
  const [confirmIdx, setConfirmIdx] = useState(null);
  const [phase, setPhase] = useState("idle");
  const [targetIdx, setTargetIdx] = useState(null);
  const [reversedCount, setReversedCount] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(null);
  useEffect(() => {
    if (phase !== "verifying") return;
    const t = setTimeout(() => {
      setCurrentIdx(targetIdx);
      setPhase("restored");
    }, 1500);
    return () => clearTimeout(t);
  }, [phase, targetIdx]);
  const beginRestore = (idx) => {
    setReversedCount(currentIdx - idx);
    setTargetIdx(idx);
    setConfirmIdx(null);
    setPhase("verifying");
  };
  const collapsed = (idx) => (phase === "verifying" || phase === "restored") && idx > targetIdx;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 420, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 14 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Caption, { theme }, "Session checkpoints")), /* @__PURE__ */ React.createElement("div", null, CKPT_ITEMS.map((c, i) => {
    const isCurrent = i === currentIdx && phase !== "verifying";
    const isPast = i < currentIdx && phase === "idle";
    const lastVisible = collapsed(i + 1) || i === CKPT_ITEMS.length - 1;
    return /* @__PURE__ */ React.createElement("div", { key: c.id, style: {
      overflow: "hidden",
      maxHeight: collapsed(i) ? 0 : 120,
      opacity: collapsed(i) ? 0 : 1,
      transition: `max-height 0.45s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeIn}`
    } }, /* @__PURE__ */ React.createElement(
      "div",
      {
        onMouseEnter: () => setHoverIdx(i),
        onMouseLeave: () => setHoverIdx(null),
        style: { display: "flex", gap: 12, position: "relative", animation: `halaska-step-in 0.4s ${motion.emphasized} ${i * 0.08}s both` }
      },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", width: 10 } }, /* @__PURE__ */ React.createElement("span", { style: {
        position: "relative",
        width: isCurrent ? 9 : 7,
        height: isCurrent ? 9 : 7,
        borderRadius: 5,
        marginTop: 6,
        flexShrink: 0,
        background: isCurrent ? pal.accent : pal.textMuted,
        transition: `all ${motion.spring} ${motion.springCurve}`
      } }, isCurrent && /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", inset: 0, borderRadius: 5, background: pal.accent, animation: `halaska-live-pulse 1.4s ${motion.easeOut} infinite` } })), !lastVisible && /* @__PURE__ */ React.createElement("span", { style: { width: 1, flex: 1, background: pal.borderSubtle, marginTop: 4, transition: `background ${motion.smooth} ${motion.easeInOut}` } })),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, paddingBottom: lastVisible ? 0 : 18 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, minHeight: 26 } }, /* @__PURE__ */ React.createElement(
        Text,
        {
          size: "base",
          weight: isCurrent ? "semibold" : "medium",
          theme,
          style: { color: isCurrent ? pal.text : pal.textSecondary }
        },
        c.name
      ), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, fontVariantNumeric: "tabular-nums", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, c.time), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, marginLeft: "auto", fontVariantNumeric: "tabular-nums", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, c.delta), /* @__PURE__ */ React.createElement(
        CkptRestoreButton,
        {
          theme,
          visible: isPast && hoverIdx === i && confirmIdx === null,
          onClick: () => setConfirmIdx(i)
        }
      )), isCurrent && phase === "restored" && /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.4s ${motion.emphasized} 0.1s both`, marginTop: 2 } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Restored \xB7 ", reversedCount, " action", reversedCount === 1 ? "" : "s", " reversed")), confirmIdx === i && /* @__PURE__ */ React.createElement("div", { style: {
        marginTop: 8,
        padding: "10px 12px",
        borderRadius: tokens.radius.md,
        background: pal.bgSubtle,
        boxShadow: `inset 0 0 0 1px ${pal.borderSubtle}`,
        animation: `halaska-step-in 0.35s ${motion.emphasized} both`,
        transition: `all ${motion.smooth} ${motion.easeInOut}`
      } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme, style: { display: "block", marginBottom: 8 } }, "Roll back ", currentIdx - i, " action", currentIdx - i === 1 ? "" : "s", "? Alpha will re-check ticket states first."), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 6 }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "secondary", size: "sm", onClick: () => beginRestore(i) }, "Restore"), /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: () => setConfirmIdx(null) }, "Keep going"))))
    ));
  })), phase === "verifying" && /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.35s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(ThinkingIndicator, { label: "Verifying ticket states", size: "sm", theme }))));
}
const AUDITLOG_ROWS = [
  { id: "al-1", time: "14:32", title: "Issued a $180 credit to Acme", status: "done", authority: "Within $500 refund cap", detail: "Stripe \xB7 Acme \xB7 applied to the next invoice" },
  { id: "al-2", time: "14:21", title: "Closed 14 stale tickets", status: "done", authority: "Standing rule \xB7 no reply in 30 days", detail: "Intercom \xB7 14 threads closed \xB7 reopen on reply" },
  { id: "al-3", time: "14:05", title: "Restored the Stripe payout notice", status: "review", authority: "Corrective action \xB7 mis-archived as a newsletter", detail: "Moved from Archive back to Sam's inbox" },
  { id: "al-4", time: "13:58", title: "Reassigned 6 tickets to Dana", status: "done", authority: "Within Enterprise routing policy", detail: "Intercom \xB7 billing keywords on Enterprise plans" },
  { id: "al-5", time: "13:44", title: "Raised Fjord Health's SLA tier", status: "undone", authority: "Reversed by you at 13:51", detail: "First-response target returned to 4h" },
  { id: "al-6", time: "13:20", title: "Read new support threads", status: "done", authority: "Read-only \xB7 no approval required", detail: "Intercom \xB7 31 threads \xB7 3 tagged urgent" },
  { id: "al-7", time: "12:55", title: "Adjusted escalation thresholds", status: "review", authority: "Touched escalation rules \xB7 flagged for you", detail: "Urgent tag on threads idle 2h \u2192 1h" },
  { id: "al-8", time: "12:38", title: "Synced HubSpot accounts", status: "done", authority: "Read-only \xB7 no approval required", detail: "HubSpot + Stripe \xB7 84 accounts matched" }
];
const AUDITLOG_FILTERS = [
  { id: "all", label: "All" },
  { id: "done", label: "Done" },
  { id: "review", label: "Needs review" },
  { id: "undone", label: "Undone" }
];
const AUDITLOG_BADGE = {
  done: { variant: "success", label: "Done" },
  review: { variant: "warning", label: "Review" },
  undone: { variant: "default", label: "Undone" }
};
function AuditFilterChip({ label, count, active, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 12px",
        borderRadius: tokens.radius.pill,
        background: active ? pal.accentBg : hover ? pal.bgSubtle : "transparent",
        boxShadow: active ? `inset 0 0 0 1px ${pal.accent}55` : `inset 0 0 0 1px ${pal.borderSubtle}`,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        color: active ? pal.accentText : pal.textSecondary
      }
    },
    label,
    /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: active ? pal.accentText : pal.textTertiary, fontVariantNumeric: "tabular-nums", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, count)
  );
}
function AuditLogRow({ row, expanded, onToggle, index, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const badge = AUDITLOG_BADGE[row.status];
  return /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-fade-in 0.35s ${motion.easeOut} ${index * 0.04}s both` } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggle,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "9px 12px",
        borderRadius: tokens.radius.md,
        background: expanded ? pal.bgSubtle : hover ? pal.bgSubtle : "transparent",
        textAlign: "left"
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, width: 40, flexShrink: 0, fontVariantNumeric: "tabular-nums", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, row.time),
    /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { flex: 1, minWidth: 0, color: hover || expanded ? pal.text : pal.textSecondary }, truncate: true }, row.title),
    /* @__PURE__ */ React.createElement(Badge, { theme, variant: badge.variant }, badge.label),
    /* @__PURE__ */ React.createElement(ChevronIcon, { size: 11, direction: expanded ? "down" : "right", style: { color: pal.textTertiary, opacity: hover || expanded ? 1 : 0.4 } })
  ), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: expanded ? 120 : 0,
    opacity: expanded ? 1 : 0,
    transition: `max-height 0.4s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "6px 12px 12px 64px", display: "flex", flexDirection: "column", gap: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textSecondary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary } }, "Authority \xB7 "), row.authority), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textSecondary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary } }, "Detail \xB7 "), row.detail), /* @__PURE__ */ React.createElement(
    "button",
    {
      onMouseEnter: () => setLinkHover(true),
      onMouseLeave: () => setLinkHover(false),
      style: {
        ...interactiveBase,
        background: "transparent",
        padding: 0,
        marginTop: 3,
        alignSelf: "flex-start",
        ...tokens.type.xs,
        fontWeight: tokens.weight.medium,
        color: linkHover ? pal.text : pal.textSecondary,
        textDecoration: "underline",
        textUnderlineOffset: 3,
        textDecorationColor: linkHover ? pal.textSecondary : pal.borderSubtle
      }
    },
    "View receipt"
  ))));
}
function AuditLogPattern({ theme }) {
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const rows = filter === "all" ? AUDITLOG_ROWS : AUDITLOG_ROWS.filter((r) => r.status === filter);
  const countFor = (id) => id === "all" ? AUDITLOG_ROWS.length : AUDITLOG_ROWS.filter((r) => r.status === id).length;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 480, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center" }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Caption, { theme }, "Audit log \xB7 today")), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 6, wrap: true }, AUDITLOG_FILTERS.map((f) => /* @__PURE__ */ React.createElement(
    AuditFilterChip,
    {
      key: f.id,
      label: f.label,
      count: countFor(f.id),
      active: filter === f.id,
      theme,
      onClick: () => {
        setFilter(f.id);
        setExpandedId(null);
      }
    }
  ))), /* @__PURE__ */ React.createElement("div", { key: filter, style: { display: "flex", flexDirection: "column", gap: 2 } }, rows.map((r, i) => /* @__PURE__ */ React.createElement(
    AuditLogRow,
    {
      key: r.id,
      row: r,
      index: i,
      theme,
      expanded: expandedId === r.id,
      onToggle: () => setExpandedId((id) => id === r.id ? null : r.id)
    }
  )))));
}
const REPAIR_FIXES = [
  "Restored the notice to your inbox, unread",
  "Added Stripe to the never-archive sender list"
];
const REPAIR_DIFF = { label: "billing@stripe.com", before: "Newsletter", after: "Never archive" };
function RepairCheckRow({ label, delay, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, animation: `halaska-step-in 0.4s ${motion.emphasized} ${delay}s both` } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 20,
    height: 20,
    borderRadius: 10,
    background: pal.successBg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "10", height: "10", fill: "none", stroke: pal.success, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3", style: { strokeDasharray: 14, strokeDashoffset: 14, animation: `halaska-check-draw 0.3s ${motion.easeOut} ${delay + 0.2}s forwards` } }))), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.text } }, label));
}
function ErrorRepairPattern({
  theme,
  headline = "Alpha got this one wrong",
  acknowledgment = "Alpha archived the Stripe payout notice as a newsletter. It matched the sender rule and never reached your inbox.",
  fixesTitle = "What Alpha did about it",
  fixes = REPAIR_FIXES,
  diff = REPAIR_DIFF,
  reviewLabel = "Review the fix",
  flagLabel = "Flag for a human",
  footer = "Logged to audit \xB7 nothing else was affected.",
  beatMs = 1200,
  autoplay = true,
  onReview,
  onFlag
}) {
  const pal = usePal(theme);
  const [beat, setBeat] = useState(autoplay ? 1 : 3);
  const [diffOpen, setDiffOpen] = useState(false);
  useEffect(() => {
    if (!autoplay) return void 0;
    const iv = setInterval(() => {
      setBeat((b) => {
        if (b >= 3) {
          clearInterval(iv);
          return b;
        }
        return b + 1;
      });
    }, beatMs);
    return () => clearInterval(iv);
  }, [autoplay, beatMs]);
  const handleReview = () => {
    setDiffOpen((o) => !o);
    onReview?.();
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Card, { theme, padding: 20, style: { position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    left: 0,
    top: 18,
    bottom: 18,
    width: 3,
    borderRadius: 2,
    background: pal.warning,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }), /* @__PURE__ */ React.createElement(Stack, { gap: 16, style: { paddingLeft: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.45s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 10, align: "center", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Text, { size: "md", weight: "semibold", theme }, headline)), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme, style: { display: "block", lineHeight: 1.6 } }, acknowledgment)), beat >= 2 && /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.45s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.5, ...tokens.type.xs, fontWeight: tokens.weight.medium } }, fixesTitle), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, fixes.map((f, i) => /* @__PURE__ */ React.createElement(RepairCheckRow, { key: `${i}-${f}`, label: f, delay: i * 0.25, theme })))), beat >= 3 && /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.45s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(Divider, { theme, spacing: 0 }), /* @__PURE__ */ React.createElement("div", { style: { height: 14 } }), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, align: "center" }, diff && /* @__PURE__ */ React.createElement(Button, { theme, variant: "secondary", size: "sm", onClick: handleReview }, reviewLabel), /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: () => onFlag?.() }, flagLabel)), diff && /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: diffOpen ? 60 : 0,
    opacity: diffOpen ? 1 : 0,
    transition: `max-height 0.4s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    padding: "8px 12px",
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    display: "flex",
    alignItems: "center",
    gap: 8,
    ...tokens.type.sm,
    fontFamily: tokens.font.mono,
    fontVariantNumeric: "tabular-nums",
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, diff.label), /* @__PURE__ */ React.createElement("span", { style: { color: pal.danger, textDecoration: "line-through", textDecorationColor: `${pal.danger}88`, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, diff.before), /* @__PURE__ */ React.createElement("span", { style: { color: pal.textMuted, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "\u2192"), /* @__PURE__ */ React.createElement("span", { style: { color: pal.success, fontWeight: tokens.weight.semibold, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, diff.after))), footer && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { height: 12 } }), /* @__PURE__ */ React.createElement(Caption, { theme }, footer))))));
}
const ARTIFACT_VERSIONS = [
  {
    note: "First pass, thesis only",
    headline: "Some thoughts on customer health for Q3",
    paras: [
      "Support volume is flat but the shape has changed. Three enterprise accounts now generate half of all escalations, and every week we wait the renewal conversation gets harder."
    ],
    list: null
  },
  {
    note: "Added the at-risk account list",
    headline: "Some thoughts on customer health for Q3",
    paras: [
      "Support volume is flat but the shape has changed. Three enterprise accounts now generate half of all escalations, and every week we wait the renewal conversation gets harder.",
      "Outreach stays personal. Dana owns the three calls, Alpha drafts the recaps, and nothing goes out without a named owner."
    ],
    list: [
      "Acme \xB7 health 82 \u2192 61",
      "Fjord Health \xB7 health 74 \u2192 66",
      "Brightline \xB7 health 58 \u2192 49"
    ]
  },
  {
    note: "Tightened the headline and thesis",
    headline: "Q3 customer health: three accounts need a call this month",
    paras: [
      "Three accounts carry half the escalations and $18k of Q3 renewals. Getting ahead of them is the whole quarter.",
      "Outreach stays personal. Dana owns the three calls, Alpha drafts the recaps, and nothing goes out without a named owner."
    ],
    list: [
      "Acme \xB7 health 82 \u2192 61",
      "Fjord Health \xB7 health 74 \u2192 66",
      "Brightline \xB7 health 58 \u2192 49"
    ]
  }
];
function ArtifactIconAction({ icon, onClick, label, active, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      "aria-label": label,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        width: 26,
        height: 26,
        borderRadius: tokens.radius.sm,
        background: hover ? pal.bgSubtle : "transparent",
        color: active ? pal.success : pal.textTertiary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0
      }
    },
    icon
  );
}
function ArtifactStepBtn({ dir, disabled, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: disabled ? void 0 : onClick,
      "aria-label": dir === "prev" ? "Previous version" : "Next version",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        width: 20,
        height: 20,
        borderRadius: tokens.radius.xs,
        background: hover && !disabled ? pal.bgSubtle : "transparent",
        color: disabled ? pal.textMuted : pal.textSecondary,
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        lineHeight: 1,
        padding: 0
      }
    },
    dir === "prev" ? "\u2039" : "\u203A"
  );
}
function ArtifactPattern({ theme }) {
  const pal = usePal(theme);
  const [vIdx, setVIdx] = useState(ARTIFACT_VERSIONS.length - 1);
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);
  const v = ARTIFACT_VERSIONS[vIdx];
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  const handleCopy = () => {
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1200);
  };
  const md = `# ${v.headline}

${v.paras.join("\n\n")}` + (v.list ? `

${v.list.map((i) => `- ${i}`).join("\n")}` : "");
  return /* @__PURE__ */ React.createElement("div", { style: { width: 480, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: pal.bgElevated,
    border: `1px solid ${pal.border}`,
    borderRadius: tokens.radius.lg,
    overflow: "hidden",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "14px 16px 0 18px" } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 14 14", width: "14", height: "14", fill: "none", stroke: pal.textSecondary, strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", style: { flexShrink: 0, transition: `stroke ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("path", { d: "M3 1.5h5.5L11.5 4.5v8a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5z" }), /* @__PURE__ */ React.createElement("path", { d: "M8.5 1.5v3h3" })), /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme, truncate: true, style: { flex: 1, minWidth: 0 } }, "Q3 customer health memo"), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    padding: "2px 4px",
    borderRadius: tokens.radius.sm,
    background: pal.bgSubtle,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(ArtifactStepBtn, { dir: "prev", disabled: vIdx === 0, onClick: () => setVIdx((i) => i - 1), theme }), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textSecondary, minWidth: 18, textAlign: "center", fontVariantNumeric: "tabular-nums" } }, "v", vIdx + 1), /* @__PURE__ */ React.createElement(ArtifactStepBtn, { dir: "next", disabled: vIdx === ARTIFACT_VERSIONS.length - 1, onClick: () => setVIdx((i) => i + 1), theme })), /* @__PURE__ */ React.createElement(
    ArtifactIconAction,
    {
      theme,
      label: "Copy",
      active: copied,
      onClick: handleCopy,
      icon: copied ? /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", style: { animation: `halaska-scale-in 0.25s ${motion.springCurve} both` } }, /* @__PURE__ */ React.createElement("polyline", { points: "2,6 5,9 10,3" })) : /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "4", width: "7", height: "7", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M8 1.5H2.5a1 1 0 0 0-1 1V8" }))
    }
  ), /* @__PURE__ */ React.createElement(
    ArtifactIconAction,
    {
      theme,
      label: "Download",
      icon: /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 12 12", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M6 1.5v6.5M3 5.5L6 8.5l3-3" }), /* @__PURE__ */ React.createElement("path", { d: "M1.5 10.5h9" }))
    }
  )), /* @__PURE__ */ React.createElement("div", { key: vIdx, style: { padding: "6px 18px 0 42px", animation: `halaska-tab-fade 0.25s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs } }, "What changed \xB7 ", v.note)), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 4,
    padding: "10px 18px 0",
    borderBottom: `1px solid ${pal.borderSubtle}`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }, [["preview", "Preview"], ["markdown", "Markdown"]].map(([id, label]) => {
    const active = tab === id;
    return /* @__PURE__ */ React.createElement("button", { key: id, onClick: () => setTab(id), style: {
      ...interactiveBase,
      background: "transparent",
      padding: "6px 10px 9px",
      ...tokens.type.sm,
      fontWeight: tokens.weight.medium,
      color: active ? pal.text : pal.textTertiary,
      position: "relative"
    } }, label, /* @__PURE__ */ React.createElement("span", { style: {
      position: "absolute",
      left: 10,
      right: 10,
      bottom: -1,
      height: 2,
      borderRadius: 1,
      background: pal.accent,
      opacity: active ? 1 : 0,
      transform: active ? "scaleX(1)" : "scaleX(0.4)",
      transition: `all ${motion.normal} ${motion.easeInOut}`
    } }));
  })), /* @__PURE__ */ React.createElement("div", { key: `${vIdx}-${tab}`, style: { padding: "16px 18px 18px", minHeight: 168, animation: `halaska-tab-fade 0.25s ${motion.easeOut} both` } }, tab === "preview" ? /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement(Text, { size: "md", weight: "semibold", theme, style: { display: "block", letterSpacing: "-0.01em" } }, v.headline), v.paras.map((para, i) => /* @__PURE__ */ React.createElement(Text, { key: i, size: "sm", theme, style: { color: pal.textSecondary, display: "block", lineHeight: 1.65 } }, para)), v.list && /* @__PURE__ */ React.createElement(Stack, { gap: 6 }, v.list.map((item) => /* @__PURE__ */ React.createElement("div", { key: item, style: { display: "flex", alignItems: "center", gap: 9 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 3, background: pal.accent, flexShrink: 0, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", mono: true, theme, style: { color: pal.textSecondary } }, item))))) : /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    padding: "12px 14px",
    borderRadius: tokens.radius.sm,
    background: pal.bgSubtle,
    ...tokens.type.sm,
    fontFamily: tokens.font.mono,
    color: pal.textSecondary,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    lineHeight: 1.7,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, md))));
}
const DIFFVIEW_HUNKS = [
  {
    id: "h1",
    header: "@@ -12,4 +12,4 @@",
    lines: [
      { t: "ctx", code: "const rules = buildRules(tiers, {" },
      { t: "del", code: "  firstResponseMins: 240," },
      { t: "add", code: "  firstResponseMins: 60," },
      { t: "del", code: '  escalateTo: "support",' },
      { t: "add", code: '  escalateTo: "priya",' },
      { t: "ctx", code: "});" }
    ]
  },
  {
    id: "h2",
    header: "@@ -31,3 +31,4 @@",
    lines: [
      { t: "ctx", code: 'if (ticket.tier === "enterprise") {' },
      { t: "del", code: "  return queueNormal(ticket);" },
      { t: "add", code: "  return queuePriority(ticket);" },
      { t: "add", code: "  // and page Dana after 30 min" },
      { t: "ctx", code: "}" }
    ]
  }
];
function DiffViewHunkAction({ kind, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const color = kind === "accept" ? pal.success : pal.danger;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      "aria-label": kind === "accept" ? "Accept hunk" : "Reject hunk",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        width: 22,
        height: 22,
        borderRadius: tokens.radius.sm,
        background: hover ? kind === "accept" ? pal.successBg : pal.dangerBg : pal.bgElevated,
        border: `1px solid ${hover ? color : pal.borderSubtle}`,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        lineHeight: 1,
        padding: 0,
        transform: hover ? "scale(1.08)" : "scale(1)"
      }
    },
    kind === "accept" ? "\u2713" : "\xD7"
  );
}
function DiffViewPattern({ theme }) {
  const pal = usePal(theme);
  const [resolved, setResolved] = useState({});
  const [applied, setApplied] = useState(false);
  const resolvedCount = Object.keys(resolved).length;
  const allResolved = resolvedCount === DIFFVIEW_HUNKS.length;
  const cellStyle = (side, verdict, isLeft) => {
    const changed = !!side && side.t !== "ctx";
    const lost = changed && (verdict === "accepted" && side.t === "del" || verdict === "rejected" && side.t === "add");
    const tint = !changed || verdict ? "transparent" : side.t === "del" ? pal.dangerBg : pal.successBg;
    return {
      flex: 1,
      minWidth: 0,
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 24,
      padding: "0 10px",
      boxSizing: "border-box",
      background: tint,
      opacity: lost ? 0.4 : 1,
      borderRight: isLeft ? `1px solid ${pal.borderSubtle}` : "none",
      transition: `all ${motion.smooth} ${motion.easeInOut}`
    };
  };
  const renderCell = (side, verdict, isLeft) => /* @__PURE__ */ React.createElement("div", { style: cellStyle(side, verdict, isLeft) }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 22,
    flexShrink: 0,
    textAlign: "right",
    userSelect: "none",
    color: pal.textMuted,
    fontVariantNumeric: "tabular-nums",
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, side ? side.n : ""), /* @__PURE__ */ React.createElement("span", { style: {
    flex: 1,
    minWidth: 0,
    whiteSpace: "pre",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: !side ? "transparent" : side.t === "ctx" ? pal.textSecondary : pal.text,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, side ? side.code : " "));
  const columnHead = (text, isLeft) => /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    minWidth: 0,
    padding: "6px 10px",
    borderRight: isLeft ? `1px solid ${pal.borderSubtle}` : "none",
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: tokens.weight.medium } }, text));
  return /* @__PURE__ */ React.createElement("div", { style: { width: 600, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 12 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: tokens.font.mono } }, "sla.rules.ts"), /* @__PURE__ */ React.createElement("span", { style: { color: pal.textSecondary, fontWeight: tokens.weight.regular } }, " \xB7 Alpha proposes 2 changes")), /* @__PURE__ */ React.createElement(Caption, { theme, style: { fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" } }, resolvedCount, " of ", DIFFVIEW_HUNKS.length, " reviewed")), /* @__PURE__ */ React.createElement("div", { style: {
    border: `1px solid ${pal.border}`,
    borderRadius: tokens.radius.md,
    background: pal.bgElevated,
    overflow: "hidden",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", borderBottom: `1px solid ${pal.borderSubtle}`, transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, columnHead("Before", true), columnHead("After", false)), DIFFVIEW_HUNKS.map((hunk, hi) => {
    const verdict = resolved[hunk.id];
    const rows = diffviewRows(hunk);
    return /* @__PURE__ */ React.createElement("div", { key: hunk.id, style: { borderTop: hi > 0 ? `1px solid ${pal.borderSubtle}` : "none", transition: `border-color ${motion.smooth} ${motion.easeInOut}` } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 10px",
      background: pal.bgSubtle,
      transition: `background ${motion.smooth} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, flex: 1 } }, hunk.header), verdict ? /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.xs,
      fontWeight: tokens.weight.medium,
      color: verdict === "accepted" ? pal.success : pal.textTertiary,
      animation: `halaska-scale-in 0.25s ${motion.springCurve} both`
    } }, verdict === "accepted" ? "\u2713 Accepted" : "\xD7 Rejected") : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement(DiffViewHunkAction, { kind: "accept", theme, onClick: () => setResolved((r) => ({ ...r, [hunk.id]: "accepted" })) }), /* @__PURE__ */ React.createElement(DiffViewHunkAction, { kind: "reject", theme, onClick: () => setResolved((r) => ({ ...r, [hunk.id]: "rejected" })) }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "6px 0", ...tokens.type.sm, fontFamily: tokens.font.mono } }, rows.map((row, ri) => /* @__PURE__ */ React.createElement("div", { key: ri, style: { display: "flex" } }, renderCell(row.left, verdict, true), renderCell(row.right, verdict, false)))));
  })), allResolved && /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    animation: `halaska-step-in 0.4s ${motion.emphasized} both`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, "All changes reviewed"), /* @__PURE__ */ React.createElement(
    Button,
    {
      theme,
      variant: "primary",
      size: "sm",
      onClick: () => setApplied(true),
      style: applied ? { background: pal.success, color: "#fff", pointerEvents: "none" } : void 0
    },
    applied ? "Applied \u2713" : "Apply"
  ))));
}
const STRUCT_FIELDS = [
  { label: "Ticket", value: "#4821" },
  { label: "Status", badge: "APPROVED" },
  { label: "Customer", value: "Acme" },
  { label: "Plan", value: "Enterprise" },
  { label: "Amount", value: "$180.00" },
  { label: "SLA", value: "4h \xB7 on track" }
];
const STRUCT_FILLS = [
  { time: "14:32:05", size: "Opened", price: "Intercom" },
  { time: "14:36:41", size: "Credit issued", price: "Alpha" }
];
const STRUCT_JSON_LINES = [
  [{ t: "p", v: "{" }],
  [{ t: "p", v: "  " }, { t: "k", v: '"ticket"' }, { t: "p", v: ": " }, { t: "n", v: "4821" }, { t: "p", v: "," }],
  [{ t: "p", v: "  " }, { t: "k", v: '"status"' }, { t: "p", v: ": " }, { t: "s", v: '"approved"' }, { t: "p", v: "," }],
  [{ t: "p", v: "  " }, { t: "k", v: '"customer"' }, { t: "p", v: ": " }, { t: "s", v: '"Acme"' }, { t: "p", v: "," }],
  [{ t: "p", v: "  " }, { t: "k", v: '"plan"' }, { t: "p", v: ": " }, { t: "s", v: '"enterprise"' }, { t: "p", v: "," }],
  [{ t: "p", v: "  " }, { t: "k", v: '"amount"' }, { t: "p", v: ": " }, { t: "n", v: "180.00" }, { t: "p", v: "," }],
  [{ t: "p", v: "  " }, { t: "k", v: '"sla_hours"' }, { t: "p", v: ": " }, { t: "n", v: "4" }, { t: "p", v: "," }],
  [{ t: "p", v: "  " }, { t: "k", v: '"events"' }, { t: "p", v: ": [" }],
  [{ t: "p", v: "    { " }, { t: "k", v: '"time"' }, { t: "p", v: ": " }, { t: "s", v: '"14:32:05"' }, { t: "p", v: ", " }, { t: "k", v: '"event"' }, { t: "p", v: ": " }, { t: "s", v: '"opened"' }, { t: "p", v: ", " }, { t: "k", v: '"by"' }, { t: "p", v: ": " }, { t: "s", v: '"intercom"' }, { t: "p", v: " }," }],
  [{ t: "p", v: "    { " }, { t: "k", v: '"time"' }, { t: "p", v: ": " }, { t: "s", v: '"14:36:41"' }, { t: "p", v: ", " }, { t: "k", v: '"event"' }, { t: "p", v: ": " }, { t: "s", v: '"credit_issued"' }, { t: "p", v: ", " }, { t: "k", v: '"by"' }, { t: "p", v: ": " }, { t: "s", v: '"alpha"' }, { t: "p", v: " }" }],
  [{ t: "p", v: "  ]" }],
  [{ t: "p", v: "}" }]
];
function StructuredDataPattern({ theme }) {
  const pal = usePal(theme);
  const [view, setView] = useState("card");
  const tokenColor = { k: pal.accentText, s: pal.success, n: pal.text, p: pal.textTertiary };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 440, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 12 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { flex: 1 } }, "Credit issued"), /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    gap: 2,
    padding: 2,
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, [["card", "Card"], ["json", "JSON"]].map(([id, label]) => {
    const active = view === id;
    return /* @__PURE__ */ React.createElement("button", { key: id, onClick: () => setView(id), style: {
      ...interactiveBase,
      padding: "3px 12px",
      borderRadius: tokens.radius.pill,
      ...tokens.type.xs,
      fontWeight: tokens.weight.medium,
      background: active ? pal.bgElevated : "transparent",
      color: active ? pal.text : pal.textTertiary,
      boxShadow: active ? `0 1px 2px ${pal.shadow}` : "none"
    } }, label);
  }))), /* @__PURE__ */ React.createElement("div", { key: view, style: { animation: `halaska-tab-fade 0.25s ${motion.easeOut} both` } }, view === "card" ? /* @__PURE__ */ React.createElement("div", { style: {
    border: `1px solid ${pal.border}`,
    borderRadius: tokens.radius.md,
    background: pal.bgElevated,
    padding: 16,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "104px 1fr", rowGap: 10, alignItems: "center" } }, STRUCT_FIELDS.map((f) => /* @__PURE__ */ React.createElement(Fragment, { key: f.label }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, f.label), f.badge ? /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Badge, { theme, variant: "success" }, f.badge)) : /* @__PURE__ */ React.createElement(Text, { size: "sm", mono: true, theme, style: { fontVariantNumeric: "tabular-nums" } }, f.value)))), /* @__PURE__ */ React.createElement(Divider, { theme, spacing: 14 }), /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs, textTransform: "uppercase", letterSpacing: 0.4 } }, "Events"), /* @__PURE__ */ React.createElement("div", { style: {
    borderRadius: tokens.radius.sm,
    background: pal.bgSubtle,
    padding: "8px 12px",
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: 6 } }, ["Time", "Event", "By"].map((h) => /* @__PURE__ */ React.createElement("span", { key: h, style: { ...tokens.type.xxs, textTransform: "uppercase", letterSpacing: 0.5, color: pal.textMuted, fontWeight: tokens.weight.medium } }, h)), STRUCT_FILLS.map((fill) => /* @__PURE__ */ React.createElement(Fragment, { key: fill.time }, /* @__PURE__ */ React.createElement(Text, { size: "sm", mono: true, theme, style: { color: pal.textSecondary, fontVariantNumeric: "tabular-nums" } }, fill.time), /* @__PURE__ */ React.createElement(Text, { size: "sm", mono: true, theme, style: { color: pal.textSecondary, fontVariantNumeric: "tabular-nums" } }, fill.size), /* @__PURE__ */ React.createElement(Text, { size: "sm", mono: true, theme, style: { fontVariantNumeric: "tabular-nums" } }, fill.price))))))) : /* @__PURE__ */ React.createElement("pre", { style: {
    margin: 0,
    padding: "14px 16px",
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    ...tokens.type.sm,
    fontFamily: tokens.font.mono,
    lineHeight: 1.75,
    overflowX: "auto",
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, STRUCT_JSON_LINES.map((line, li) => /* @__PURE__ */ React.createElement("div", { key: li }, line.map((tok, ti) => /* @__PURE__ */ React.createElement("span", { key: ti, style: { color: tokenColor[tok.t], transition: `color ${motion.smooth} ${motion.easeInOut}` } }, tok.v)))))), /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs } }, "Rendered from tool output \xB7 refund.schema.json")));
}
const COMPARE_MODELS = [
  {
    id: "alpha-4",
    name: "alpha-4",
    cps: 2,
    text: "212 tickets resolved, median first response down to 41 minutes. Acme drove most of the escalations, so the outage credits are out and the postmortem lands Friday."
  },
  {
    id: "alpha-mini",
    name: "alpha-mini",
    cps: 3,
    text: "212 tickets closed. Acme was the loud one; everything else was quiet."
  }
];
function CompareVoteBtn({ children, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        padding: "6px 14px",
        borderRadius: tokens.radius.pill,
        background: hover ? pal.bgMuted : pal.bgSubtle,
        border: `1px solid ${hover ? pal.border : pal.borderSubtle}`,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        color: hover ? pal.text : pal.textSecondary
      }
    },
    children
  );
}
function ComparisonPattern({ theme }) {
  const pal = usePal(theme);
  const [tick, setTick] = useState(0);
  const [voteVisible, setVoteVisible] = useState(false);
  const [winner, setWinner] = useState(null);
  const maxTicks = Math.max(...COMPARE_MODELS.map((m) => Math.ceil(m.text.length / m.cps)));
  useEffect(() => {
    let iv, reveal;
    const start = setTimeout(() => {
      iv = setInterval(() => {
        setTick((c) => {
          if (c + 1 >= maxTicks) {
            clearInterval(iv);
            reveal = setTimeout(() => setVoteVisible(true), 400);
            return maxTicks;
          }
          return c + 1;
        });
      }, 28);
    }, 400);
    return () => {
      clearTimeout(start);
      clearInterval(iv);
      clearTimeout(reveal);
    };
  }, [maxTicks]);
  const winnerName = winner && winner !== "tie" ? winner : null;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 520, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(Stack, { gap: 14 }, /* @__PURE__ */ React.createElement(Stack, { gap: 8 }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme }, "Same prompt, two models"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Code, { theme, style: { color: pal.textSecondary } }, "Summarize support this week in 2 lines"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, COMPARE_MODELS.map((m) => {
    const shown = Math.min(m.text.length, tick * m.cps);
    const streaming = tick > 0 && shown < m.text.length;
    const settled = shown >= m.text.length;
    const preferred = winner === m.id;
    return /* @__PURE__ */ React.createElement("div", { key: m.id, style: {
      border: `1px solid ${pal.border}`,
      borderRadius: tokens.radius.md,
      background: pal.bgElevated,
      padding: 14,
      minHeight: 148,
      boxShadow: preferred ? `inset 0 0 0 1.5px ${pal.accent}` : "none",
      transition: `all ${motion.smooth} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement(Stack, { gap: 10 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "2px 10px",
      borderRadius: tokens.radius.pill,
      background: pal.bgSubtle,
      border: `1px solid ${pal.borderSubtle}`,
      ...tokens.type.xs,
      fontFamily: tokens.font.mono,
      color: pal.textSecondary,
      transition: `all ${motion.smooth} ${motion.easeInOut}`
    } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 5,
      height: 5,
      borderRadius: 3,
      flexShrink: 0,
      background: settled ? pal.success : pal.accent,
      transition: `background ${motion.smooth} ${motion.easeInOut}`
    } }), m.name), preferred && /* @__PURE__ */ React.createElement("span", { style: { animation: `halaska-scale-in 0.3s ${motion.springCurve} both` } }, /* @__PURE__ */ React.createElement(Badge, { theme, variant: "accent" }, "Preferred"))), /* @__PURE__ */ React.createElement("div", { style: { ...tokens.type.sm, color: pal.text, lineHeight: 1.65, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, m.text.slice(0, shown), streaming && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 2, height: "1.05em", background: pal.accent, marginLeft: 1, verticalAlign: "text-bottom", animation: "halaska-blink 1s step-end infinite" } }))));
  })), voteVisible && !winner && /* @__PURE__ */ React.createElement(Stack, { gap: 8, align: "center", style: { animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary } }, "Which is better?"), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 8, justify: "center" }, /* @__PURE__ */ React.createElement(CompareVoteBtn, { theme, onClick: () => setWinner("alpha-4") }, "\u2190 This one"), /* @__PURE__ */ React.createElement(CompareVoteBtn, { theme, onClick: () => setWinner("tie") }, "Tie"), /* @__PURE__ */ React.createElement(CompareVoteBtn, { theme, onClick: () => setWinner("alpha-mini") }, "This one \u2192"))), winner && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, justifyContent: "center", animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 3, background: pal.success, flexShrink: 0 } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, winnerName ? `Preference saved. Routing more like this to ${winnerName}.` : "Marked as a tie. No routing change."))));
}
const TASKBOARD_COLUMNS = [
  { id: "queued", label: "Queued" },
  { id: "working", label: "Alpha working" },
  { id: "needs", label: "Needs you" }
];
const TASKBOARD_TASKS = [
  { id: "t1", title: "Draft release notes for v2.4", owner: "agent", meta: "runs after tonight's deploy" },
  { id: "t2", title: "Update the refund runbook", owner: "Sam Keller", meta: "queued 14m" },
  { id: "t3", title: "Clear the Acme ticket backlog", owner: "agent", meta: "3 of 5 replies sent" },
  { id: "t4", title: "Issue a $340 credit to Fjord Health", owner: "agent", meta: "1 decision pending" }
];
const TASKBOARD_BEFORE = { t1: "queued", t2: "queued", t3: "working", t4: "needs" };
const TASKBOARD_AFTER = { t1: "working", t2: "queued", t3: "needs", t4: "needs" };
const TASKBOARD_AFTER_META = { t3: "2 replies await approval", t1: "running \xB7 reading merged PRs" };
const TASKBOARD_MOVED_IDS = ["t1", "t3"];
function TaskboardCard({ task, col, meta, collapsing, entering, theme }) {
  const pal = usePal(theme);
  const agent = task.owner === "agent";
  const working = col === "working";
  const needs = col === "needs";
  return /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: collapsing ? 0 : 140,
    opacity: collapsing ? 0 : 1,
    marginBottom: collapsing ? 0 : 8,
    transition: `max-height 0.3s ${motion.easeIn}, opacity 0.22s ${motion.easeIn}, margin-bottom 0.3s ${motion.easeIn}`,
    animation: entering ? `halaska-scale-in 0.3s ${motion.easeOut} both` : void 0
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: pal.bgElevated,
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.md,
    padding: "10px 12px",
    boxShadow: needs ? `inset 3px 0 0 0 ${pal.accent}` : "none",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { display: "block", marginBottom: 7 } }, task.title), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 5 } }, agent ? /* @__PURE__ */ React.createElement(AgentGlyph, { size: 16, theme }) : /* @__PURE__ */ React.createElement(Avatar, { name: task.owner, size: 16, theme }), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textSecondary, fontFamily: tokens.font.sans, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, agent ? "Alpha" : task.owner)), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, fontFamily: tokens.font.mono, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, meta), working && /* @__PURE__ */ React.createElement("div", { style: {
    height: 3,
    borderRadius: 2,
    marginTop: 9,
    overflow: "hidden",
    backgroundImage: `linear-gradient(90deg, ${pal.accent}22 25%, ${pal.accent}77 50%, ${pal.accent}22 75%)`,
    backgroundSize: "200% 100%",
    animation: "halaska-shimmer 1.5s ease-in-out infinite"
  } })));
}
function TaskboardPattern({ theme }) {
  const pal = usePal(theme);
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const a = setTimeout(() => setPhase(1), 2500);
    const b = setTimeout(() => setPhase(2), 2860);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);
  const layout = phase === 2 ? TASKBOARD_AFTER : TASKBOARD_BEFORE;
  return /* @__PURE__ */ React.createElement("div", { style: { width: 520, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 } }, TASKBOARD_COLUMNS.map((col) => {
    const cards = TASKBOARD_TASKS.filter((t) => layout[t.id] === col.id);
    return /* @__PURE__ */ React.createElement("div", { key: col.id, style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, padding: "0 2px", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.xs,
      fontWeight: tokens.weight.medium,
      textTransform: "uppercase",
      letterSpacing: 0.4,
      color: pal.textTertiary,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: `color ${motion.smooth} ${motion.easeInOut}`
    } }, col.label), /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.xxs,
      fontFamily: tokens.font.mono,
      fontWeight: tokens.weight.medium,
      color: pal.textSecondary,
      background: pal.bgMuted,
      borderRadius: tokens.radius.pill,
      padding: "1px 7px",
      flexShrink: 0,
      transition: `all ${motion.smooth} ${motion.easeInOut}`
    } }, cards.length)), cards.map((t) => /* @__PURE__ */ React.createElement(
      TaskboardCard,
      {
        key: t.id,
        task: t,
        col: col.id,
        meta: phase === 2 && TASKBOARD_AFTER_META[t.id] || t.meta,
        collapsing: phase === 1 && TASKBOARD_MOVED_IDS.includes(t.id),
        entering: phase === 2 && TASKBOARD_MOVED_IDS.includes(t.id),
        theme
      }
    )));
  })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, animation: `halaska-fade-in 0.5s ${motion.easeOut} 0.6s both` } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Alpha keeps working. You only see what needs a decision.")));
}
const ASSIST_LINES = [
  { typed: "const escalateAfter = ", ghost: "sla.firstResponse * 2;", alt: "firstResponse * 2;" },
  { typed: "const escalateTo = ", ghost: "ticket.plan === 'enterprise' ? 'dana' : 'queue';", alt: "isEnterprise ? 'dana' : 'queue';" }
];
function InlineAssistPattern({ theme }) {
  const pal = usePal(theme);
  const [committed, setCommitted] = useState([]);
  const [cur, setCur] = useState(0);
  const [ghost, setGhost] = useState("");
  const [shown, setShown] = useState(0);
  const [phase, setPhase] = useState("waiting");
  const [altMode, setAltMode] = useState(false);
  const [note, setNote] = useState(false);
  const cancels = useRef([]);
  useEffect(() => () => cancels.current.forEach((fn) => fn()), []);
  const later = useCallback((fn, ms) => {
    const t = setTimeout(fn, ms);
    cancels.current.push(() => clearTimeout(t));
  }, []);
  const stream = useCallback((text) => {
    setGhost(text);
    setShown(0);
    setPhase("streaming");
    const iv = setInterval(() => {
      setShown((s) => {
        if (s + 1 >= text.length) {
          clearInterval(iv);
          setPhase("ready");
          return text.length;
        }
        return s + 1;
      });
    }, 26);
    cancels.current.push(() => clearInterval(iv));
  }, []);
  useEffect(() => {
    const t = setTimeout(() => stream(ASSIST_LINES[0].ghost), 600);
    return () => clearTimeout(t);
  }, [stream]);
  const accept = () => {
    if (phase !== "ready") return;
    const line2 = ASSIST_LINES[cur];
    const idx = committed.length;
    setCommitted((c) => [...c, { typed: line2.typed, code: ghost, flash: true }]);
    setNote(false);
    setAltMode(false);
    setGhost("");
    setShown(0);
    later(() => setCommitted((c) => c.map((l, i) => i === idx ? { ...l, flash: false } : l)), 550);
    if (cur === 0) {
      setPhase("waiting");
      setCur(1);
      later(() => stream(ASSIST_LINES[1].ghost), 750);
    } else {
      setCur(null);
      setPhase("done");
    }
  };
  const dismiss = () => {
    if (phase !== "ready" || altMode) return;
    setGhost("");
    setShown(0);
    setPhase("waiting");
    setNote(true);
    later(() => {
      setAltMode(true);
      stream(ASSIST_LINES[cur].alt);
    }, 900);
  };
  const line = cur !== null ? ASSIST_LINES[cur] : null;
  const settled = phase === "done";
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: pal.bgInput,
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.md,
    overflow: "hidden",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 14px",
    borderBottom: `1px solid ${pal.borderSubtle}`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "escalation.config.ts"), /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    opacity: settled ? 0.45 : 1,
    transition: `opacity ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Kbd, { theme }, "Tab"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary } }, "accept"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textMuted } }, "\xB7"), /* @__PURE__ */ React.createElement(Kbd, { theme }, "Esc"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary } }, "dismiss"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 14px", fontFamily: tokens.font.mono, ...tokens.type.sm, lineHeight: 2 } }, committed.map((l, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { whiteSpace: "pre" } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.text, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, l.typed), /* @__PURE__ */ React.createElement("span", { style: {
    color: pal.text,
    borderRadius: 3,
    padding: "1px 2px",
    margin: "-1px -2px",
    background: l.flash ? pal.accentBg : "transparent",
    transition: `background ${motion.smooth} ${motion.easeInOut}, color ${motion.smooth} ${motion.easeInOut}`
  } }, l.code))), line && /* @__PURE__ */ React.createElement("div", { style: { whiteSpace: "pre" } }, /* @__PURE__ */ React.createElement("span", { style: { color: pal.text, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, line.typed), /* @__PURE__ */ React.createElement("span", { style: { color: pal.textTertiary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, ghost.slice(0, shown)), phase === "streaming" && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 2, height: "1.05em", background: pal.accent, marginLeft: 1, verticalAlign: "text-bottom", animation: "halaska-blink 1s step-end infinite" } })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 12 } }, /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "primary", disabled: phase !== "ready", onClick: accept, theme }, "Accept"), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "ghost", disabled: phase !== "ready" || altMode, onClick: dismiss, theme }, "Dismiss"), note && /* @__PURE__ */ React.createElement("span", { style: { animation: `halaska-fade-in 0.35s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Suggestion dismissed. Alpha adapts.")), settled && /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", animation: `halaska-fade-in 0.35s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "2 completions in"))));
}
const NUDGE_BECAUSE = "Noticed: Acme's usage dropped 40% this week";
const NUDGE_ASK = "Want me to draft a check-in to their admin before the renewal call?";
function NudgePattern({ theme }) {
  const pal = usePal(theme);
  const [stage, setStage] = useState("in");
  const [faded, setFaded] = useState(false);
  const cancels = useRef([]);
  useEffect(() => () => cancels.current.forEach((fn) => fn()), []);
  const later = useCallback((fn, ms) => {
    const t = setTimeout(fn, ms);
    cancels.current.push(() => clearTimeout(t));
  }, []);
  const doIt = () => {
    setStage("doing");
    later(() => setStage("done"), 1100);
  };
  const notNow = () => {
    setStage("snoozed");
    later(() => setFaded(true), 700);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { width: 420, maxWidth: "100%", fontFamily: tokens.font.sans } }, stage === "in" && /* @__PURE__ */ React.createElement("div", { style: {
    background: pal.bgElevated,
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: tokens.radius.lg,
    padding: 16,
    animation: `halaska-step-in 0.5s ${motion.emphasized} 0.25s both`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 } }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 20, theme }), /* @__PURE__ */ React.createElement(Caption, { theme, style: { paddingTop: 2 } }, NUDGE_BECAUSE)), /* @__PURE__ */ React.createElement(Text, { size: "base", theme, style: { display: "block", marginBottom: 14 } }, NUDGE_ASK), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "primary", onClick: doIt, theme }, "Do it"), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "ghost", onClick: notNow, theme }, "Not now"), /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "sm",
      variant: "ghost",
      onClick: () => setStage("muted"),
      theme,
      style: { marginLeft: "auto", color: pal.textTertiary }
    },
    "Don't suggest this again"
  ))), stage === "doing" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 2px", animation: `halaska-fade-in 0.3s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Spinner, { size: 14, color: pal.textTertiary }), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, "Drafting the check-in\u2026")), stage === "done" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 9, padding: "10px 2px", animation: `halaska-step-in 0.45s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 4, background: pal.success, flexShrink: 0, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, "Draft ready in Intercom. Receipt in the log.")), stage === "snoozed" && /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "5px 12px",
    borderRadius: tokens.radius.pill,
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    ...tokens.type.sm,
    color: pal.textSecondary,
    animation: `halaska-scale-in 0.3s ${motion.easeOut} both`,
    opacity: faded ? 0.6 : 1,
    transition: `opacity 0.6s ${motion.easeInOut}, background ${motion.smooth} ${motion.easeInOut}, border-color ${motion.smooth} ${motion.easeInOut}, color ${motion.smooth} ${motion.easeInOut}`
  } }, "Snoozed for today"), stage === "muted" && /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 2px", animation: `halaska-fade-in 0.35s ${motion.easeOut} both` } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Got it. Alpha won't bring this up again.")));
}
const DIGEST_ROWS = [
  {
    id: "d1",
    tone: "success",
    title: "Replied to 3 tickets",
    value: "3 sent",
    why: "Why: all three matched the password-reset runbook",
    receipt: "#4821 \xB7 #4822 \xB7 #4826 \xB7 Intercom \xB7 09:42"
  },
  {
    id: "d2",
    tone: "default",
    title: "Drafted release notes for v2.4",
    value: "1 draft",
    why: "Why: 6 pull requests merged since the last release, all tagged shipped",
    receipt: "release-notes.md \xB7 GitHub \xB7 10:05"
  },
  {
    id: "d3",
    tone: "warning",
    title: "Skipped: refund needed your approval",
    value: "Held",
    why: "Why: a $3,100 refund exceeds your $2,500 approval cap",
    receipt: null,
    approvable: true,
    approvedReceipt: "Refunded $3,100 to Lumen Labs \xB7 Stripe \xB7 just now"
  }
];
function DigestRow({ row, open, onToggle, approved, onApprove, delay, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const warning = row.tone === "warning" && !approved;
  const dotColor = approved || row.tone === "success" ? pal.success : warning ? pal.warning : pal.textMuted;
  const receipt = approved ? row.approvedReceipt : row.receipt;
  return /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.45s ${motion.emphasized} ${delay}s both` } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onToggle,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "10px 12px",
        borderRadius: tokens.radius.md,
        background: warning ? pal.warningBg : hover ? pal.bgSubtle : "transparent",
        textAlign: "left"
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 4, background: dotColor, flexShrink: 0, transition: `background ${motion.smooth} ${motion.easeInOut}` } }),
    /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { flex: 1, minWidth: 0 }, truncate: true }, approved ? "Refunded Lumen Labs" : row.title),
    /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.sm,
      fontFamily: tokens.font.mono,
      fontVariantNumeric: "tabular-nums",
      color: approved ? pal.success : row.tone === "success" ? pal.success : pal.textSecondary,
      transition: `color ${motion.smooth} ${motion.easeInOut}`,
      flexShrink: 0
    } }, approved ? "$3,100" : row.value),
    /* @__PURE__ */ React.createElement(ChevronIcon, { size: 11, direction: open ? "down" : "right", style: { color: pal.textTertiary } })
  ), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "hidden",
    maxHeight: open ? 160 : 0,
    opacity: open ? 1 : 0,
    transition: `max-height 0.4s ${motion.emphasized}, opacity ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 12px 12px 29px", display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme }, row.why), receipt && /* @__PURE__ */ React.createElement("span", { key: approved ? "after" : "before", style: {
    ...tokens.type.xs,
    fontFamily: tokens.font.mono,
    color: pal.textTertiary,
    animation: `halaska-fade-in 0.35s ${motion.easeOut} both`,
    transition: `color ${motion.smooth} ${motion.easeInOut}`
  } }, receipt), row.approvable && !approved && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2 } }, /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "secondary", onClick: onApprove, theme }, "Approve now")))));
}
function DigestPattern({ theme }) {
  const pal = usePal(theme);
  const [openIds, setOpenIds] = useState({});
  const [approved, setApproved] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { style: { width: 460, maxWidth: "100%", fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Text, { size: "md", weight: "semibold", theme }, "While you were away"), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, fontFamily: tokens.font.mono, color: pal.textTertiary, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "2h 14m \xB7 6 actions")), /* @__PURE__ */ React.createElement(Text, { size: "sm", secondary: true, theme, style: { display: "block", marginBottom: 14 } }, "Alpha replied to three tickets, drafted the release notes, closed a stale one, and held a refund for you."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, DIGEST_ROWS.map((row, i) => /* @__PURE__ */ React.createElement(
    DigestRow,
    {
      key: row.id,
      row,
      theme,
      open: !!openIds[row.id],
      onToggle: () => setOpenIds((o) => ({ ...o, [row.id]: !o[row.id] })),
      approved: row.approvable ? approved : false,
      onApprove: () => setApproved(true),
      delay: 0.08 + i * 0.12
    }
  ))), /* @__PURE__ */ React.createElement(Divider, { theme, spacing: 12 }), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "ghost", theme }, "Open full audit log"));
}
const CHATX_THREADS = [
  { id: "acme-outage", title: "Acme outage follow-up", time: "2m" },
  { id: "lumen-onb", title: "Lumen Labs onboarding", time: "1h" },
  { id: "fjord-refund", title: "Fjord Health refund", time: "3h" },
  { id: "release-214", title: "Release notes \xB7 v2.14", time: "Yesterday" },
  { id: "brightline", title: "Brightline renewal risk", time: "Yesterday" },
  { id: "cobalt-sso", title: "Cobalt Dental SSO setup", time: "Mon" },
  { id: "digest", title: "Weekly support digest", time: "Sun" }
];
const CHATX_MODELS = [
  { id: "alpha-4-fast", label: "alpha-4 \xB7 fast", desc: "Quick replies, everyday triage", tags: ["200K", "\u25C7 vision"] },
  { id: "alpha-4-deep", label: "alpha-4 \xB7 deep", desc: "Slower, reasons through edge cases", tags: ["200K", "\u2726 reasoning"] },
  { id: "alpha-mini", label: "alpha-mini", desc: "Cheapest, fine for summaries", tags: ["32K"] }
];
const CHATX_USER_MSG = "What happened with Acme's outage complaint and what should I do?";
const CHATX_THINK_STEPS = [
  { label: "Reading the Intercom thread", detail: "Acme \xB7 ticket #4821" },
  { label: "Checking the changelog", detail: "last 2 releases" },
  { label: "Pulling Stripe account status", detail: "Enterprise \xB7 renews in 19 days" }
];
const CHATX_ANSWER_SEGMENTS = [
  { t: "Acme's outage started after Tuesday's release: calendar sync stopped for three of their users and the complaint landed in Intercom at 9:14." },
  { chip: "intercom.com" },
  { t: " The fix is already in Priya's branch and ships Thursday. The account is healthy and no credit has gone out yet, so a workaround plus a short note today keeps the thread calm." },
  { chip: "notion.so" }
];
const CHATX_ANSWER_SOURCES = [
  { name: "Intercom thread", domain: "intercom.com" },
  { name: "Changelog", domain: "northwind.app" },
  { name: "Stripe", domain: "stripe.com" }
];
const CHATX_ANSWER_FOLLOWUPS = [
  "Draft the workaround note for Acme",
  "Show Acme's tickets this month"
];
const CHATX_APPROVAL_OPTIONS = [
  { id: "workaround", title: "Reply now with a workaround", sub: "Unblocks Acme today, fix ships later" },
  { id: "wait", title: "Wait for the fix to ship Thursday", sub: "Priya's patch is already in review" },
  { id: "escalate", title: "Escalate to Priya", sub: "Loops engineering in on the thread" }
];
function ChatXThreadRow({ title, time, active, onClick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "8px 10px",
        borderRadius: tokens.radius.sm,
        textAlign: "left",
        background: active ? pal.bgMuted : hover ? pal.bgHover : "transparent"
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: {
      flex: 1,
      minWidth: 0,
      ...tokens.type.sm,
      fontFamily: tokens.font.sans,
      fontWeight: active ? tokens.weight.medium : tokens.weight.regular,
      color: active || hover ? pal.text : pal.textSecondary,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      transition: `color ${motion.smooth} ${motion.easeInOut}`
    } }, title),
    /* @__PURE__ */ React.createElement("span", { style: {
      ...tokens.type.xs,
      fontFamily: tokens.font.mono,
      color: pal.textTertiary,
      flexShrink: 0,
      transition: `color ${motion.smooth} ${motion.easeInOut}`
    } }, time)
  );
}
function ChatXModelPill({ index, onSelect, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ React.createElement("div", { ref: rootRef, style: { position: "relative", display: "inline-flex" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen((o) => !o),
      "aria-label": "Change model",
      "aria-haspopup": "menu",
      "aria-expanded": open,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 28,
        padding: "0 10px",
        borderRadius: tokens.radius.pill,
        background: open || hover ? pal.bgMuted : pal.bgSubtle,
        border: `1px solid ${open ? pal.border : pal.borderSubtle}`
      }
    },
    /* @__PURE__ */ React.createElement("span", { key: index, style: {
      ...tokens.type.xs,
      fontFamily: tokens.font.mono,
      color: pal.textSecondary,
      whiteSpace: "nowrap",
      animation: `halaska-tab-fade 0.25s ${motion.easeOut} both`
    } }, CHATX_MODELS[index].label),
    /* @__PURE__ */ React.createElement(ChevronIcon, { size: 9, direction: open ? "up" : "down", style: { color: pal.textTertiary } })
  ), open && /* @__PURE__ */ React.createElement("div", { role: "menu", style: {
    position: "absolute",
    top: "calc(100% + 6px)",
    left: 0,
    zIndex: 20,
    minWidth: 300,
    padding: 6,
    borderRadius: tokens.radius.md,
    background: theme === "dark" ? "rgba(30,30,30,0.96)" : "rgba(255,255,255,0.96)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    border: `1px solid ${pal.borderSubtle}`,
    boxShadow: `0 12px 32px ${pal.shadowLg}`,
    animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`,
    transformOrigin: "top left"
  } }, CHATX_MODELS.map((m, i) => /* @__PURE__ */ React.createElement(
    ChatXModelOption,
    {
      key: m.id,
      model: m,
      active: i === index,
      theme,
      onPick: () => {
        onSelect?.(i);
        setOpen(false);
      }
    }
  ))));
}
function ChatXModelOption({ model, active, onPick, theme }) {
  const pal = usePal(theme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      role: "menuitemradio",
      "aria-checked": active,
      onClick: onPick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "8px 10px",
        borderRadius: tokens.radius.sm,
        textAlign: "left",
        background: hover ? pal.bgSubtle : "transparent"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, fontFamily: tokens.font.mono, color: pal.text, whiteSpace: "nowrap" } }, model.label), model.tags.map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: { ...tokens.type.xxs, fontFamily: tokens.font.mono, color: pal.textTertiary, padding: "1px 6px", borderRadius: tokens.radius.pill, background: pal.bgSubtle, whiteSpace: "nowrap", flexShrink: 0 } }, t))), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textSecondary, display: "block", marginTop: 2 } }, model.desc)),
    /* @__PURE__ */ React.createElement("span", { style: { width: 14, textAlign: "center", ...tokens.type.sm, color: active ? pal.accent : "transparent" } }, "\u2713")
  );
}
function ChatParadigmExample({ theme }) {
  const pal = usePal(theme);
  const [search, setSearch] = useState("");
  const [activeThread, setActiveThread] = useState(CHATX_THREADS[0].id);
  const [modelIdx, setModelIdx] = useState(0);
  const [waiting, setWaiting] = useState(false);
  const [stage, setStage] = useState(0);
  const threadRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => setWaiting(true), 3e3);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, [stage]);
  const surface = `background ${motion.smooth} ${motion.easeInOut}, border-color ${motion.smooth} ${motion.easeInOut}`;
  const visibleThreads = CHATX_THREADS.filter((t) => t.title.toLowerCase().includes(search.trim().toLowerCase()));
  const activeTitle = (CHATX_THREADS.find((t) => t.id === activeThread) || CHATX_THREADS[0]).title;
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: pal.bg,
    fontFamily: tokens.font.sans,
    color: pal.text,
    display: "flex",
    transition: surface
  } }, /* @__PURE__ */ React.createElement("aside", { style: {
    width: 240,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    background: pal.bgSubtle,
    borderRight: `1px solid ${pal.borderSubtle}`,
    transition: surface
  } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 16px 8px", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "0 4px", height: 24 } }, /* @__PURE__ */ React.createElement(AgentGlyph, { size: 24, theme }), /* @__PURE__ */ React.createElement(Text, { size: "md", weight: "semibold", theme, style: { flex: 1, letterSpacing: "-0.01em" } }, "Alpha"), /* @__PURE__ */ React.createElement(StatusDot, { status: "online", theme })), /* @__PURE__ */ React.createElement(SearchInput, { value: search, onChange: setSearch, placeholder: "Search threads\u2026", shortcut: "\u2318K", theme }), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", fullWidth: true, theme, onClick: () => {
  } }, "New thread")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflowY: "auto", padding: "8px 8px 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 10px 8px" } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs, textTransform: "uppercase", letterSpacing: 0.4 } }, "Recent")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, visibleThreads.map((t) => /* @__PURE__ */ React.createElement(
    ChatXThreadRow,
    {
      key: t.id,
      title: t.title,
      time: t.time,
      theme,
      active: t.id === activeThread,
      onClick: () => setActiveThread(t.id)
    }
  )))), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 16px",
    borderTop: `1px solid ${pal.borderSubtle}`,
    transition: surface
  } }, /* @__PURE__ */ React.createElement(Avatar, { name: "Sam Keller", size: 28, theme }), /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, truncate: true, style: { flex: 1, minWidth: 0 } }, "Sam Keller"), /* @__PURE__ */ React.createElement(Badge, { theme }, "Team"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("header", { style: {
    height: 56,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "0 24px",
    borderBottom: `1px solid ${pal.borderSubtle}`,
    transition: surface
  } }, /* @__PURE__ */ React.createElement(Text, { size: "md", weight: "semibold", theme, truncate: true, style: { letterSpacing: "-0.01em", maxWidth: 280 } }, activeTitle), /* @__PURE__ */ React.createElement(ChatXModelPill, { index: modelIdx, theme, onSelect: setModelIdx }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 72 } }, /* @__PURE__ */ React.createElement(Progress, { value: 66, height: 4, theme })), /* @__PURE__ */ React.createElement(Caption, { theme, style: { ...tokens.type.xs, fontFamily: tokens.font.mono, whiteSpace: "nowrap" } }, "132K / 200K")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(
    Orb,
    {
      pill: true,
      theme,
      size: 20,
      variant: waiting ? "spark" : "orbit",
      label: waiting ? "Waiting on you" : "Reading Acme's thread\u2026"
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, /* @__PURE__ */ React.createElement(IconButton, { icon: "\u2934", size: 32, label: "Share thread", theme, onClick: () => {
  } }), /* @__PURE__ */ React.createElement(IconButton, { icon: "\u22EF", size: 32, label: "More", theme, onClick: () => {
  } }))), /* @__PURE__ */ React.createElement("div", { ref: threadRef, style: { flex: 1, minHeight: 0, overflowY: "auto", padding: "32px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: "78%",
    padding: "10px 14px",
    background: pal.bgSubtle,
    border: `1px solid ${pal.borderSubtle}`,
    borderRadius: `${tokens.radius.md}px ${tokens.radius.md}px ${tokens.radius.xs}px ${tokens.radius.md}px`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "base", theme }, CHATX_USER_MSG)), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.xs, color: pal.textTertiary, paddingRight: 4, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, "9:41 AM")), /* @__PURE__ */ React.createElement(
    ThinkingTracePattern,
    {
      theme,
      steps: CHATX_THINK_STEPS,
      stepMs: 900,
      thinkingLabel: "Reading Acme's thread",
      onDone: () => setStage((s) => Math.max(s, 1))
    }
  ), stage >= 1 && /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(
    StreamingAnswerPattern,
    {
      theme,
      segments: CHATX_ANSWER_SEGMENTS,
      sources: CHATX_ANSWER_SOURCES,
      followups: CHATX_ANSWER_FOLLOWUPS,
      thinkingLabel: "Putting it together",
      thinkMs: 300,
      onFollowup: () => {
      },
      onDone: () => setStage((s) => Math.max(s, 2))
    }
  )), stage >= 2 && /* @__PURE__ */ React.createElement("div", { style: { animation: `halaska-step-in 0.4s ${motion.emphasized} both` } }, /* @__PURE__ */ React.createElement(
    ApprovalCardPattern,
    {
      theme,
      question: "How should I reply to Acme?",
      options: CHATX_APPROVAL_OPTIONS
    }
  )))), /* @__PURE__ */ React.createElement("div", { style: {
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    padding: "16px 24px 20px",
    borderTop: `1px solid ${pal.borderSubtle}`,
    background: pal.bg,
    transition: surface
  } }, /* @__PURE__ */ React.createElement(PromptInputPattern, { theme }))));
}
const CANVASX_TOPBAR_H = 52;
const CANVASX_INSET = 12;
const CANVASX_PANEL_W = 300;
const CANVASX_CANVAS_L = 0;
const CANVASX_CANVAS_R = 1200 - CANVASX_INSET - CANVASX_PANEL_W;
const CANVASX_NODE_W = 212;
const CANVASX_NODE_PAD = 14;
const CANVASX_MINIMAP = { w: 200, h: 110 };
const CANVASX_SETTINGS = [
  { title: "Agent", content: "alpha-4 \xB7 deep \xB7 temperature 0.3" },
  { title: "Knowledge base", content: "Notion runbooks \xB7 142 pages, synced 2h ago" },
  { title: "Tone", content: "Match the customer's tone; plain language; no promised dates" },
  { title: "Tools", content: "Intercom, Linear, Stripe (read-only)" },
  { title: "Memory", content: "Save resolved threads to HubSpot" },
  { title: "Escalation", content: "Refunds over $500 \u2192 human" },
  { title: "Security", content: "PII redacted before logging" },
  { title: "Webhook", content: "POST to /alpha/events" }
];
const CANVASX_PUBLISH_ITEMS = [
  { label: "Publish to staging" },
  { label: "Publish to production" },
  { label: "Schedule" }
];
const CANVASX_NODES = {
  begin: { x: 176, y: 333, w: 56, h: 32 },
  conv1: { x: 260, y: 243, w: CANVASX_NODE_W, h: 307, tint: "accent", title: "Conversation" },
  handoff: { x: 512, y: 163, w: CANVASX_NODE_W, h: 177, tint: "warning", title: "Handoff" },
  conv2: { x: 512, y: 405, w: CANVASX_NODE_W, h: 244, tint: "accent", title: "Conversation" }
};
const CANVASX_PORT_FALLBACK = [248, 278];
const CANVASX_MINIMAP_SCALE = 0.14;
function CANVASX_alpha(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}
function CANVASX_ortho(a, b, r = 10) {
  const midX = (a.x + b.x) / 2;
  const dy = b.y - a.y;
  if (Math.abs(dy) < 1) return `M${a.x},${a.y} L${b.x},${b.y}`;
  const s = Math.sign(dy);
  const rr = Math.min(r, Math.abs(dy) / 2, midX - a.x);
  return `M${a.x},${a.y} H${midX - rr} Q${midX},${a.y} ${midX},${a.y + s * rr} V${b.y - s * rr} Q${midX},${b.y} ${midX + rr},${b.y} H${b.x}`;
}
function CANVASX_tint(pal, tint) {
  return { accent: pal.accent, success: pal.success, warning: pal.warning, danger: pal.danger }[tint] || pal.textSecondary;
}
function CanvasXPanel({ theme, children, style: sp }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: pal.bgElevated,
    borderRadius: tokens.radius.lg,
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 4px 16px ${pal.shadow}`,
    transition: `background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, children);
}
function CanvasXGlass({ theme, children, style: sp }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    background: CANVASX_alpha(pal.bgElevated, 0.85),
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderRadius: tokens.radius.md,
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 4px 16px ${pal.shadow}`,
    transition: `background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } }, children);
}
function CanvasXTile({ glyph, tint, size = 32, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { style: {
    width: size,
    height: size,
    borderRadius: tokens.radius.sm,
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: pal.bgSubtle,
    color: CANVASX_tint(pal, tint),
    fontSize: Math.round(size * 0.42),
    lineHeight: 1,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, glyph);
}
function CanvasXPort({ theme, offset = 0, style: sp }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    right: -(offset + 5),
    top: "50%",
    marginTop: -5,
    width: 10,
    height: 10,
    borderRadius: 5,
    boxSizing: "border-box",
    background: pal.bgElevated,
    border: `1.5px solid ${pal.accent}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } });
}
function CanvasXTransitionRow({ label, checked, onPick, rowRef, theme }) {
  return /* @__PURE__ */ React.createElement("div", { ref: rowRef, style: { position: "relative", display: "flex", alignItems: "center", height: 30 } }, /* @__PURE__ */ React.createElement(Radio, { checked, onChange: onPick, label, theme }), /* @__PURE__ */ React.createElement(CanvasXPort, { offset: CANVASX_NODE_PAD, theme }));
}
function CanvasXNode({ node, selected, onSelect, cardRef, children, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { onClick: onSelect, style: { position: "absolute", left: node.x, top: node.y, width: node.w, zIndex: selected ? 2 : 1, cursor: "pointer" } }, selected && /* @__PURE__ */ React.createElement("div", { "aria-hidden": true, style: {
    position: "absolute",
    inset: -6,
    borderRadius: tokens.radius.lg + 6,
    pointerEvents: "none",
    border: `1.5px dashed ${pal.accent}`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`
  } }), /* @__PURE__ */ React.createElement("div", { ref: cardRef, style: {
    position: "relative",
    padding: CANVASX_NODE_PAD,
    borderRadius: tokens.radius.lg,
    background: pal.bgElevated,
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 2px 8px ${pal.shadow}`,
    transition: `background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, height: 28 } }, /* @__PURE__ */ React.createElement(CanvasXTile, { glyph: node.tint === "warning" ? "\u21E2" : "\u25D4", tint: node.tint, size: 28, theme }), /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme, truncate: true, style: { flex: 1, minWidth: 0 } }, node.title), /* @__PURE__ */ React.createElement(IconButton, { icon: "\u25B7", size: 24, theme, label: "Run from here", style: { fontSize: 10 } }), /* @__PURE__ */ React.createElement(IconButton, { icon: "\u2303", size: 24, theme, label: "Collapse", style: { fontSize: 12 } })), children));
}
function CanvasXBody({ text, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    padding: "8px 10px",
    borderRadius: tokens.radius.md,
    background: pal.bgSubtle,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { as: "div", size: "base", theme }, text));
}
function CanvasXTransition({ rows, picked, onPick, rowRefs, theme }) {
  return /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", height: 24 } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Transition"), /* @__PURE__ */ React.createElement(IconButton, { icon: "+", size: 20, theme, label: "Add transition", style: { fontSize: 13 } })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4 } }, rows.map((label, i) => /* @__PURE__ */ React.createElement(
    CanvasXTransitionRow,
    {
      key: label,
      label,
      checked: picked === i,
      onPick: () => onPick(i),
      rowRef: rowRefs ? (el) => {
        rowRefs.current[i] = el;
      } : void 0,
      theme
    }
  ))));
}
function CanvasParadigmExample({ theme }) {
  const pal = usePal(theme);
  const [mode, setMode] = useState("Build");
  const [rightTab, setRightTab] = useState("Global settings");
  const [zoom, setZoom] = useState(100);
  const [selected, setSelected] = useState("conv1");
  const [busy, setBusy] = useState(true);
  const [picked, setPicked] = useState({ conv1: 0, conv2: 0 });
  const [geom, setGeom] = useState(null);
  const cardRefs = useRef({});
  const portRefs = useRef([]);
  useEffect(() => {
    const t = setTimeout(() => setBusy(false), 3e3);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const measure = () => {
      const h = {};
      Object.keys(cardRefs.current).forEach((id) => {
        const el = cardRefs.current[id];
        if (el) h[id] = el.offsetHeight;
      });
      const ports = portRefs.current.map((el, i) => el ? el.offsetTop + el.offsetHeight / 2 : CANVASX_PORT_FALLBACK[i]);
      setGeom((prev) => {
        const next = { h, ports };
        return prev && JSON.stringify(prev) === JSON.stringify(next) ? prev : next;
      });
    };
    measure();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) Object.values(cardRefs.current).forEach((el) => el && ro.observe(el));
    const t = setTimeout(measure, 800);
    return () => {
      if (ro) ro.disconnect();
      clearTimeout(t);
    };
  }, []);
  const nodeH = (id) => geom?.h[id] ?? CANVASX_NODES[id].h;
  const inputOf = (id) => ({ x: CANVASX_NODES[id].x, y: CANVASX_NODES[id].y + nodeH(id) / 2 });
  const portOf = (i) => ({ x: CANVASX_NODES.conv1.x + CANVASX_NODES.conv1.w, y: CANVASX_NODES.conv1.y + (geom?.ports[i] ?? CANVASX_PORT_FALLBACK[i]) });
  const begin = CANVASX_NODES.begin;
  const beginPort = { x: begin.x + begin.w, y: begin.y + begin.h / 2 };
  const edges = [
    { from: beginPort, to: inputOf("conv1") },
    { from: portOf(0), to: inputOf("handoff") },
    { from: portOf(1), to: inputOf("conv2") }
  ];
  const plus = { x: (edges[0].from.x + edges[0].to.x) / 2, y: (edges[0].from.y + edges[0].to.y) / 2 };
  const canvasW = CANVASX_CANVAS_R - CANVASX_CANVAS_L;
  const canvasH = 760 - CANVASX_TOPBAR_H;
  const miniInner = { w: canvasW * CANVASX_MINIMAP_SCALE, h: canvasH * CANVASX_MINIMAP_SCALE };
  const miniOff = { x: (CANVASX_MINIMAP.w - miniInner.w) / 2, y: (CANVASX_MINIMAP.h - miniInner.h) / 2 };
  const mini = (n) => ({
    left: miniOff.x + (n.x - CANVASX_CANVAS_L) * CANVASX_MINIMAP_SCALE,
    top: miniOff.y + (n.y - CANVASX_TOPBAR_H) * CANVASX_MINIMAP_SCALE,
    width: n.w * CANVASX_MINIMAP_SCALE,
    height: n.h * CANVASX_MINIMAP_SCALE
  });
  const hairline = `1px solid ${pal.borderSubtle}`;
  const hairlineT = `border-color ${motion.smooth} ${motion.easeInOut}`;
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: pal.bg,
    fontFamily: tokens.font.sans,
    color: pal.text,
    transition: `background ${motion.smooth} ${motion.easeInOut}, color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: CANVASX_TOPBAR_H,
    bottom: 0,
    background: pal.bgSubtle,
    transition: `background ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(DotGrid, { theme, spacing: 20 })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    height: 760,
    width: CANVASX_CANVAS_R,
    top: `calc((100% - ${CANVASX_TOPBAR_H}px) / 2 - ${(760 - CANVASX_TOPBAR_H) / 2}px)`,
    left: `calc((100% - ${CANVASX_PANEL_W + CANVASX_INSET}px) / 2 - ${CANVASX_CANVAS_R / 2}px)`,
    transform: `scale(${zoom / 100})`,
    transformOrigin: `${(CANVASX_CANVAS_L + CANVASX_CANVAS_R) / 2}px ${CANVASX_TOPBAR_H + canvasH / 2}px`,
    transition: `transform ${motion.smooth} ${motion.emphasized}`
  } }, /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "100%", style: { position: "absolute", inset: 0, pointerEvents: "none", overflow: "visible" } }, edges.map((e, i) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: i,
      d: CANVASX_ortho(e.from, e.to),
      fill: "none",
      stroke: `${pal.accent}99`,
      strokeWidth: 1.5,
      strokeLinejoin: "round",
      strokeLinecap: "round",
      style: { transition: `stroke ${motion.smooth} ${motion.easeInOut}` }
    }
  ))), /* @__PURE__ */ React.createElement("div", { onClick: () => setSelected("begin"), style: {
    position: "absolute",
    left: begin.x,
    top: begin.y,
    width: begin.w,
    height: begin.h,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: tokens.radius.pill,
    background: pal.accentBg,
    boxShadow: selected === "begin" ? `0 0 0 1.5px ${pal.accent}` : "none",
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", color: pal.accentText, theme }, "Begin"), /* @__PURE__ */ React.createElement(CanvasXPort, { theme })), /* @__PURE__ */ React.createElement(IconButton, { icon: "+", size: 24, theme, label: "Insert node", style: {
    position: "absolute",
    left: plus.x - 12,
    top: plus.y - 12,
    zIndex: 3,
    fontSize: 14,
    borderRadius: tokens.radius.pill,
    background: pal.bgElevated,
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 1px 3px ${pal.shadow}`
  } }), /* @__PURE__ */ React.createElement(
    CanvasXNode,
    {
      node: CANVASX_NODES.conv1,
      selected: selected === "conv1",
      onSelect: () => setSelected("conv1"),
      cardRef: (el) => {
        cardRefs.current.conv1 = el;
      },
      theme
    },
    /* @__PURE__ */ React.createElement(CanvasXBody, { theme, text: "Hi, this is Alpha from Northwind support. I've read your ticket about the calendar sync. Can I confirm which clinic this is for?" }),
    /* @__PURE__ */ React.createElement(
      CanvasXTransition,
      {
        rows: ["If ticket is urgent", "Otherwise"],
        picked: picked.conv1,
        onPick: (i) => setPicked((p2) => ({ ...p2, conv1: i })),
        rowRefs: portRefs,
        theme
      }
    )
  ), /* @__PURE__ */ React.createElement(
    CanvasXNode,
    {
      node: CANVASX_NODES.handoff,
      selected: selected === "handoff",
      onSelect: () => setSelected("handoff"),
      cardRef: (el) => {
        cardRefs.current.handoff = el;
      },
      theme
    },
    /* @__PURE__ */ React.createElement(CanvasXBody, { theme, text: "Escalate to Priya with the thread summary and account status." }),
    /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ React.createElement(Badge, { theme }, "Human in the loop"))
  ), /* @__PURE__ */ React.createElement(
    CanvasXNode,
    {
      node: CANVASX_NODES.conv2,
      selected: selected === "conv2",
      onSelect: () => setSelected("conv2"),
      cardRef: (el) => {
        cardRefs.current.conv2 = el;
      },
      theme
    },
    /* @__PURE__ */ React.createElement(CanvasXBody, { theme, text: "Here's the workaround while the fix ships Thursday\u2026" }),
    /* @__PURE__ */ React.createElement(
      CanvasXTransition,
      {
        rows: ["If resolved", "If not resolved"],
        picked: picked.conv2,
        onPick: (i) => setPicked((p2) => ({ ...p2, conv2: i })),
        theme
      }
    )
  )), /* @__PURE__ */ React.createElement(
    Orb,
    {
      pill: true,
      variant: busy ? "pulse" : "spark",
      label: busy ? "Alpha is editing\u2026" : "Ready to test",
      theme,
      style: { position: "absolute", top: CANVASX_TOPBAR_H + CANVASX_INSET, right: 1200 - CANVASX_CANVAS_R + 16, zIndex: 4 }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 1200 - CANVASX_CANVAS_R + 16 + CANVASX_MINIMAP.w + 12,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 4
  } }, /* @__PURE__ */ React.createElement(CanvasXGlass, { theme, style: { padding: 4, gap: 2, pointerEvents: "auto" } }, /* @__PURE__ */ React.createElement(IconButton, { icon: "\u2196", size: 32, variant: "secondary", theme, label: "Select", style: { fontSize: 13, color: pal.text } }), /* @__PURE__ */ React.createElement(IconButton, { icon: "\u270B\uFE0E", size: 32, theme, label: "Pan", style: { fontSize: 13 } }), /* @__PURE__ */ React.createElement(IconButton, { icon: "\u25A6", size: 32, theme, label: "Fit to view", style: { fontSize: 13 } }), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 20, margin: "0 6px", background: pal.borderSubtle, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), /* @__PURE__ */ React.createElement(ZoomControl, { zoom, onChange: setZoom, theme }))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    bottom: 16,
    right: 1200 - CANVASX_CANVAS_R + 16,
    width: CANVASX_MINIMAP.w,
    height: CANVASX_MINIMAP.h,
    borderRadius: tokens.radius.md,
    background: pal.bgElevated,
    overflow: "hidden",
    zIndex: 4,
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 4px 16px ${pal.shadow}`,
    transition: `background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
  } }, Object.keys(CANVASX_NODES).map((id) => /* @__PURE__ */ React.createElement("div", { key: id, style: {
    position: "absolute",
    ...mini({ ...CANVASX_NODES[id], h: nodeH(id) }),
    borderRadius: 2,
    background: id === selected ? pal.accentBg : pal.bgMuted,
    boxShadow: `0 0 0 1px ${id === selected ? pal.accent : pal.border}`,
    transition: `background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
  } })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: miniOff.x,
    top: miniOff.y,
    width: miniInner.w,
    height: miniInner.h,
    boxSizing: "border-box",
    border: `1px solid ${pal.accent}`,
    borderRadius: 3,
    transition: hairlineT
  } })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: CANVASX_TOPBAR_H,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 12px 0 8px",
    background: pal.bgElevated,
    borderBottom: hairline,
    zIndex: 6,
    transition: `background ${motion.smooth} ${motion.easeInOut}, ${hairlineT}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(IconButton, { icon: "\u2190", size: 32, theme, label: "Back", style: { fontSize: 15 } }), /* @__PURE__ */ React.createElement(Text, { size: "base", weight: "semibold", theme }, "Support triage"), /* @__PURE__ */ React.createElement(Badge, { theme, style: { marginLeft: 4 } }, /* @__PURE__ */ React.createElement(StatusDot, { status: "busy", size: 6, theme }), "Environment \xB7 Staging")), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 200 } }, /* @__PURE__ */ React.createElement(SegmentedControl, { options: ["Build", "Simulate"], value: mode, onChange: setMode, theme })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Button, { variant: "secondary", size: "sm", icon: "\u25B7", theme }, "Test"), /* @__PURE__ */ React.createElement(SplitButton, { size: "sm", theme, items: CANVASX_PUBLISH_ITEMS }, "Publish"))), /* @__PURE__ */ React.createElement(CanvasXPanel, { theme, style: { right: CANVASX_INSET, top: CANVASX_TOPBAR_H + CANVASX_INSET, bottom: CANVASX_INSET, width: CANVASX_PANEL_W, zIndex: 5 } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 8px 0" } }, /* @__PURE__ */ React.createElement(Tabs, { tabs: ["Global settings", "Node settings"], value: rightTab, onChange: setRightTab, theme })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, padding: "0 16px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(Accordion, { defaultOpen: 0, items: CANVASX_SETTINGS, theme })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderTop: hairline, transition: hairlineT } }, /* @__PURE__ */ React.createElement(Text, { size: "xs", mono: true, secondary: true, theme }, "$0.03 / run"), /* @__PURE__ */ React.createElement(Text, { size: "xs", mono: true, secondary: true, theme }, "1.2s to 1.8s"), /* @__PURE__ */ React.createElement(Text, { size: "xs", mono: true, secondary: true, theme }, "2.3k to 3.2k tokens"))));
}
const PARADIGM_STAGE = { w: 1200, h: 760 };
const PARADIGM_EXAMPLE_COMPONENTS = { ChatParadigmExample, CanvasParadigmExample };
function ParadigmPreview({ paradigm, theme, onOpen }) {
  const pal = usePal(theme);
  const { isMobile } = useViewport();
  const ref = useRef(null);
  const [scale, setScale] = useState(0.5);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const measure = () => {
      if (ref.current) setScale(ref.current.clientWidth / PARADIGM_STAGE.w);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const Example = PARADIGM_EXAMPLE_COMPONENTS[paradigm.example];
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      role: "button",
      tabIndex: 0,
      "aria-label": `Expand the ${paradigm.title} example`,
      onClick: onOpen,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: "relative",
        width: "100%",
        height: Math.round(PARADIGM_STAGE.h * scale),
        borderRadius: tokens.radius.lg,
        overflow: "hidden",
        cursor: "zoom-in",
        border: `1px solid ${pal.borderSubtle}`,
        background: pal.bgSubtle,
        boxShadow: hover ? `0 16px 48px ${pal.shadowLg}` : `0 2px 8px ${pal.shadow}`,
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: `box-shadow ${motion.smooth} ${motion.emphasized}, transform ${motion.smooth} ${motion.emphasized}, border-color ${motion.smooth} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: PARADIGM_STAGE.w,
      height: PARADIGM_STAGE.h,
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      pointerEvents: "none"
    } }, Example && /* @__PURE__ */ React.createElement(Example, { theme })),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      right: 14,
      bottom: 14,
      opacity: hover || isMobile ? 1 : 0,
      transform: hover || isMobile ? "translateY(0)" : "translateY(4px)",
      transition: `opacity ${motion.normal} ${motion.easeOut}, transform ${motion.normal} ${motion.emphasized}`
    } }, /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", size: "sm", icon: "\u2922" }, "Expand"))
  );
}
function ParadigmFullscreen({ paradigm, theme, onClose }) {
  const pal = usePal(theme);
  const { isMobile, width } = useViewport();
  const fitScale = isMobile ? Math.max(0.2, (width - 18) / PARADIGM_STAGE.w) : 1;
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);
  const Example = PARADIGM_EXAMPLE_COMPONENTS[paradigm.example];
  return /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: {
    position: "fixed",
    inset: 0,
    zIndex: 10002,
    padding: isMobile ? 8 : 24,
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    display: "flex",
    fontFamily: tokens.font.sans,
    animation: `halaska-fade-in ${motion.normal} ${motion.easeOut} both`
  } }, /* @__PURE__ */ React.createElement("div", { role: "dialog", "aria-modal": "true", "aria-label": `${paradigm.title} example`, onClick: (e) => e.stopPropagation(), style: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: pal.bg,
    borderRadius: tokens.radius.xl,
    border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
    boxShadow: `0 24px 80px rgba(0,0,0,0.35)`,
    animation: `halaska-scale-in ${motion.smooth} ${motion.emphasized} both`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 48,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "0 12px 0 16px",
    background: pal.bgElevated,
    borderBottom: `1px solid ${pal.borderSubtle}`,
    transition: `all ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme }, paradigm.title), !isMobile && /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1 } }, paradigm.body), isMobile && /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), !isMobile && /* @__PURE__ */ React.createElement(Caption, { theme }, "Built entirely from the kit"), !isMobile && /* @__PURE__ */ React.createElement(Kbd, { theme }, "Esc"), /* @__PURE__ */ React.createElement(IconButton, { theme, icon: "\u2921", size: 32, variant: "secondary", label: "Contract", onClick: onClose, style: { fontSize: 15 } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflow: "auto", background: pal.bgSubtle } }, isMobile ? /* @__PURE__ */ React.createElement("div", { style: { width: PARADIGM_STAGE.w * fitScale, height: PARADIGM_STAGE.h * fitScale, position: "relative", margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 0, left: 0, width: PARADIGM_STAGE.w, height: PARADIGM_STAGE.h, transform: `scale(${fitScale})`, transformOrigin: "top left" } }, Example && /* @__PURE__ */ React.createElement(Example, { theme }))) : /* @__PURE__ */ React.createElement("div", { style: { minWidth: 1e3, height: "100%", position: "relative" } }, Example && /* @__PURE__ */ React.createElement(Example, { theme })))));
}
const PATTERN_COMPONENTS = {
  // Conversation core
  PromptInputPattern,
  MessageThreadPattern,
  StreamingAnswerPattern,
  AgentChatPattern,
  CodeBlockPattern,
  ModelContextPattern,
  // Trust & transparency
  ThinkingTracePattern,
  CitationsPattern,
  ContextSourcesPattern,
  ConfidencePattern,
  RecommendationPattern,
  FeedbackPattern,
  // Agentic control: consent
  PlanPreviewPattern,
  ApprovalCardPattern,
  AutonomyPattern,
  PermissionScopePattern,
  QueuePattern,
  // Agentic control: visibility
  AgentStatusPattern,
  ToolStreamPattern,
  AgentTasksPattern,
  HandoffPattern,
  // Agentic control: accountability
  ActionReceiptPattern,
  CheckpointPattern,
  AuditLogPattern,
  ErrorRepairPattern,
  // Output & generative UI
  ArtifactPattern,
  DiffViewPattern,
  DiffTablePattern,
  StructuredDataPattern,
  InsightCardsPattern,
  ComparisonPattern,
  // Ambient & beyond chat
  TaskboardPattern,
  InlineAssistPattern,
  NudgePattern,
  DigestPattern,
  NotificationCenterPattern,
  CommandSearchPattern,
  AgentSetupPattern
};
function PatternDot({ theme, style: sp }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: {
    width: 8,
    height: 8,
    borderRadius: 4,
    flexShrink: 0,
    display: "inline-block",
    border: `1px solid ${pal.textTertiary}`,
    transition: `border-color ${motion.smooth} ${motion.easeInOut}`,
    ...sp
  } });
}
function PatternHeader({ n, title, desc, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 14, paddingLeft: 8, fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement(PatternDot, { theme, style: { marginTop: 6 } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.base, fontWeight: tokens.weight.semibold, color: theme === "dark" ? "#888" : "#777", display: "block", transition: `color ${motion.smooth} ${motion.easeInOut}` } }, title), /* @__PURE__ */ React.createElement("span", { style: { ...tokens.type.sm, color: theme === "dark" ? "#555" : "#bbb", display: "block", marginTop: 2, transition: `color ${motion.smooth} ${motion.easeInOut}` } }, desc)));
}
function PatternGroupHeader({ index, title, blurb, count, theme }) {
  const pal = usePal(theme);
  const { isMobile } = useViewport();
  return /* @__PURE__ */ React.createElement("div", { style: { paddingLeft: 8, paddingTop: isMobile ? 32 : 64, fontFamily: tokens.font.sans } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 12 } }, /* @__PURE__ */ React.createElement(Heading, { level: 4, theme, style: { margin: 0 } }, title), /* @__PURE__ */ React.createElement("span", { "aria-label": `${count} patterns`, style: { display: "inline-flex", gap: 4, alignItems: "center" } }, Array.from({ length: count }, (_, i) => /* @__PURE__ */ React.createElement(PatternDot, { key: i, theme })))), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, maxWidth: 560, display: "block", marginTop: 6 } }, blurb));
}
function DemoPatterns({ theme }) {
  const pal = usePal(theme);
  const { isMobile } = useViewport();
  const [replayKeys, setReplayKeys] = useState({});
  const [openParadigm, setOpenParadigm] = useState(null);
  const closeParadigm = useCallback(() => setOpenParadigm(null), []);
  const bump = (id) => setReplayKeys((k) => ({ ...k, [id]: (k[id] || 0) + 1 }));
  return /* @__PURE__ */ React.createElement(Stack, { gap: isMobile ? 48 : 64 }, /* @__PURE__ */ React.createElement(BeforeAfterSection, { theme }), /* @__PURE__ */ React.createElement("div", { style: { paddingLeft: 8 } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Two UX paradigms"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, display: "block", marginTop: 6, maxWidth: 560 } }, "Most AI products end up as one of these, or both. Each example below is a complete screen built only from the components and patterns on this page. Tap one to expand it.")), UX_PARADIGMS.map((p2) => /* @__PURE__ */ React.createElement("div", { key: p2.id, id: `paradigm-${p2.id}`, style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { paddingLeft: 8, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 520 } }, /* @__PURE__ */ React.createElement(Heading, { level: 3, theme, style: { margin: 0 } }, p2.title), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, display: "block", marginTop: 6, lineHeight: 1.65 } }, p2.body)), /* @__PURE__ */ React.createElement(Stack, { direction: "row", gap: 6, wrap: true }, p2.groups.map((gid) => {
    const g = PATTERN_GROUPS.find((x) => x.id === gid);
    return g ? /* @__PURE__ */ React.createElement(Chip, { key: gid, theme, onToggle: () => {
      const el = document.getElementById(gid);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 32;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } }, g.title) : null;
  }))), /* @__PURE__ */ React.createElement(ParadigmPreview, { paradigm: p2, theme, onOpen: () => setOpenParadigm(p2) }))), openParadigm && /* @__PURE__ */ React.createElement(ParadigmFullscreen, { paradigm: openParadigm, theme, onClose: closeParadigm }), PATTERN_GROUPS.map((group, gi) => /* @__PURE__ */ React.createElement("div", { key: group.id, id: group.id, style: { display: "flex", flexDirection: "column", gap: isMobile ? 40 : 56 } }, /* @__PURE__ */ React.createElement(PatternGroupHeader, { index: gi, title: group.title, blurb: group.blurb, count: group.patterns.length, theme }), group.patterns.map((pat) => {
    const Component = PATTERN_COMPONENTS[pat.component];
    return /* @__PURE__ */ React.createElement("div", { key: pat.id, id: pat.id, style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(PatternHeader, { n: pat.n, title: pat.title, desc: pat.desc, theme }), /* @__PURE__ */ React.createElement(
      ShowcaseCard,
      {
        theme,
        height: pat.height,
        align: "top",
        controls: pat.replay ? /* @__PURE__ */ React.createElement(Button, { theme, variant: "ghost", size: "sm", onClick: () => bump(pat.id) }, "\u21BB Replay") : void 0
      },
      /* @__PURE__ */ React.createElement(Component, { key: replayKeys[pat.id] || 0, theme })
    ));
  }))), /* @__PURE__ */ React.createElement(ShowcaseCard, { theme, label: "Roadmap", align: "top" }, /* @__PURE__ */ React.createElement(Stack, { gap: 16, style: { width: 520, maxWidth: "100%" } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Coming soon"), /* @__PURE__ */ React.createElement(PatternsRoadmap, { theme, items: PATTERN_ROADMAP }))));
}
const COMPONENT_CATEGORIES = [
  { id: "cat-foundations", label: "Foundations", demos: ["DemoTypography", "DemoMotion", "DemoButtons"] },
  { id: "cat-inputs", label: "Inputs & Selectors", demos: ["DemoFormInputs", "DemoTogglesSelections", "DemoFormExtras", "DemoInputsExtended"] },
  { id: "cat-navigation", label: "Navigation & Menus", demos: ["DemoNavigation"] },
  { id: "cat-overlays", label: "Overlays", demos: ["DemoOverlays"] },
  { id: "cat-feedback", label: "Feedback & Status", demos: ["DemoFeedbackStatus", "DemoAlerts"] },
  { id: "cat-data", label: "Data Display", demos: ["DemoDataDisplay", "DemoTable"] },
  { id: "cat-ai", label: "AI Elements", demos: ["DemoAIElements"] },
  { id: "cat-dev", label: "Dev Surfaces", demos: ["DemoDevSurfaces"] }
];
const COMPONENT_GROUPS = COMPONENT_CATEGORIES;
const INSTALL_PROMPT = `Set up Halaska Kit in this project and use it for all UI from now on.

Halaska Kit is a single-file React UI kit for AI products by Halaska (https://halaska.com). One file gives you 38 UX patterns + ~100 styled components with inline styles: no Tailwind, no CSS setup, no config. Deps: react and react-dom only, no chart library. Fonts (Geist) and keyframes self-inject on import. The file starts with "use client", so it's safe in Next.js app router.

Before writing code, read the API reference: https://ui.halaska.com/llms.txt

SETUP
1. Download the kit into the source directory (src/ or this framework's equivalent):
   curl -o src/halaska-kit.jsx https://ui.halaska.com/halaska-kit.jsx
   TypeScript project? Also: curl -o src/halaska-kit.d.ts https://ui.halaska.com/halaska-kit.d.ts
   (If the URL is unreachable, ask me to provide the file.)
2. Verify: render <Button variant="primary">Test</Button> from a named import. It should be Geist type on a dark, rounded button. Then remove the test.

USAGE
- Named imports for everything: import { Button, Card, Orb, PlanPreviewPattern, usePal, tokens } from "./halaska-kit";
- Theming: every component accepts theme="light" | "dark", or wrap a subtree in <ThemeProvider theme="dark">. Colors come from usePal(theme) (pal.bg, pal.text, pal.textSecondary, pal.accent, pal.success, pal.danger\u2026). Never hardcode grays or brand colors. Change the accent with <AccentContext.Provider value="#8b5cf6">.
- Layout: <Stack gap={16} direction="row"> plus tokens.space / tokens.radius / tokens.type. Motion: the motion object has durations (fast/normal/smooth/spring/slow) and easings (easeInOut/easeOut/emphasized/springCurve).
- If the project uses Tailwind, keep it for page layout. Kit components carry their own styles and need no classes.

IF THIS PROJECT ALREADY HAS UI (most likely), RETROFIT IT
This is a skin and UX pass, not a rewrite. Keep routing, state, and data. Work one screen at a time and finish each before starting the next:
a. Swap raw or ad-hoc elements for kit equivalents: buttons \u2192 Button/IconButton, inputs \u2192 TextInput/TextArea/Select/SwitchToggle/Checkbox, cards \u2192 Card + CardHeader, labels/tags \u2192 Badge/Tag/StatusBadge, tables \u2192 Table/DataTable, modals \u2192 Dialog/Sheet, menus \u2192 DropdownMenu/CommandPalette, loading \u2192 Skeleton/Spinner/ThinkingIndicator, empty screens \u2192 EmptyState, toasts \u2192 Toast/AlertBanner.
b. Replace hardcoded colors, radii, spacing, and fonts with usePal(theme), tokens.radius, tokens.space, tokens.font.
c. Wherever the product has an AI or agent moment, use the matching pattern instead of a spinner or toast: agent thinking \u2192 ThinkingTracePattern, streamed reply \u2192 StreamingAnswerPattern, chat surface \u2192 AgentChatPattern, before the agent acts \u2192 PlanPreviewPattern or ApprovalCardPattern, while it works \u2192 AgentStatusPattern + ToolStreamPattern, after it acts \u2192 ActionReceiptPattern, when it fails \u2192 ErrorRepairPattern, handing off to a human \u2192 HandoffPattern.
d. The lifecycle patterns take props, so use them directly with this product's copy, data, and callbacks: ThinkingTracePattern, StreamingAnswerPattern, PlanPreviewPattern, ApprovalCardPattern, AgentStatusPattern, HandoffPattern, ActionReceiptPattern, ErrorRepairPattern (props and shapes are in llms.txt; every prop has a demo default, so start with none and override what matters). The remaining patterns are demo-driven: copy the source out of halaska-kit.jsx, swap the data, keep the structure, states, and motion.
e. When every screen is done, give me a short summary of what changed per screen.

WHAT'S IN THE KIT (all named exports; props are in llms.txt)
- UX patterns, conversation: PromptInputPattern, MessageThreadPattern, StreamingAnswerPattern, AgentChatPattern, CodeBlockPattern, ModelContextPattern
- UX patterns, trust: ThinkingTracePattern, CitationsPattern, ContextSourcesPattern, ConfidencePattern, RecommendationPattern, FeedbackPattern
- UX patterns, agentic control: PlanPreviewPattern, ApprovalCardPattern, AutonomyPattern, PermissionScopePattern, QueuePattern, AgentStatusPattern, ToolStreamPattern, AgentTasksPattern, HandoffPattern, ActionReceiptPattern, CheckpointPattern, AuditLogPattern, ErrorRepairPattern
- UX patterns, output: ArtifactPattern, DiffViewPattern, DiffTablePattern, StructuredDataPattern, InsightCardsPattern, ComparisonPattern
- UX patterns, ambient: TaskboardPattern, InlineAssistPattern, NudgePattern, DigestPattern, NotificationCenterPattern, CommandSearchPattern, AgentSetupPattern
- AI elements: Orb (variants pulse/orbit/sweep/globe/spark, pill option), StreamingText, ThinkingIndicator, ThinkingSteps, ConfidenceBar, AISuggestionBadge, BeforeAfterToggle, ZoomControl, AgentGlyph
- Components: Text, Heading, Label, Caption, Code, Button, IconButton, ButtonGroup, LinkButton, SplitButton, TextInput, TextArea, Select, Checkbox, Radio, RadioGroup, SwitchToggle, Slider, SpringSlider, SpringToggle, SegmentedControl, InputOTP, InputGroup, Combobox, Calendar, DatePicker, Chip, Toggle, ToggleGroup, SearchInput, Choicebox, CopyInput, Rating, Card, CardHeader, Divider, Stack, Badge, Tag, StatusBadge, StatusDot, Avatar, AvatarGroup, ListItem, Stat, Table, DataTable, ScrollArea, Pagination, MiddleTruncate, Kbd, Progress, ProgressCircle, Skeleton, Spinner, Toast, AlertBanner, EmptyState, Stepper, Breadcrumb, Tabs, SubtleTabs, Accordion, Collapsible, ContextMenu, Menubar, CommandPalette, CommandMenu, Dialog, AlertDialog, FormDialog, CardDialog, Sheet, Popover, DropdownMenu, Tooltip, HoverCard, Snippet, FileTree, BrowserFrame, Sparkline

RULES
- Prefer a kit pattern over building a flow from scratch, and a kit component over raw HTML.
- Follow the kit's design heuristics: show what the agent is doing (Orb, AgentStatusPattern); consent before consequential actions (PlanPreviewPattern, ApprovalCardPattern); undo over confirmation dialogs (ActionReceiptPattern); recognition over recall (DigestPattern, AuditLogPattern, not transcript archaeology); calm error recovery (ErrorRepairPattern). Full list: https://ui.halaska.com`;
const ACCENT_COLORS = [
  { name: "Blue", value: "#3b82f6" },
  { name: "Violet", value: "#8b5cf6" },
  { name: "Emerald", value: "#10b981" },
  { name: "Rose", value: "#f43f5e" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Neutral", value: "#555555" }
];
const RAIL_ROWS = [
  { type: "label", text: "Paradigms" },
  ...UX_PARADIGMS.map((p2) => ({ type: "tick", id: `paradigm-${p2.id}`, label: p2.title })),
  { type: "label", text: "Patterns" },
  ...PATTERN_GROUPS.map((g) => ({ type: "tick", id: g.id, label: g.title })),
  { type: "label", text: "Components" },
  ...COMPONENT_CATEGORIES.map((c) => ({ type: "tick", id: c.id, label: c.label }))
];
const RAIL_TICKS = RAIL_ROWS.filter((r) => r.type === "tick");
function StudioHookCard({ theme }) {
  const pal = usePal(theme);
  const { isMobile } = useViewport();
  return /* @__PURE__ */ React.createElement(Card, { theme, padding: isMobile ? 20 : 32, style: { width: "100%" } }, /* @__PURE__ */ React.createElement(Stack, { gap: isMobile ? 16 : 20 }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Heading, { level: 3, theme, style: { margin: 0 } }, "Need a hand with yours?"), /* @__PURE__ */ React.createElement(Text, { size: "base", theme, style: { color: pal.textSecondary, display: "block", marginTop: 8, lineHeight: 1.65, maxWidth: 620 } }, "If you'd rather have a designer take it from here, that's what ", /* @__PURE__ */ React.createElement(StudioLink, { theme }, "Halaska Studio"), " does. Book a short call, bring your prototype, and we'll tell you the three things we'd change first.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, { theme, variant: "primary", iconRight: "\u2197", onClick: () => window.open(STUDIO_BOOK_URL, "_blank", "noopener") }, "Book a call"))));
}
function CompareSlider({ before, after, theme: tp, initial = 0.5, labels = ["Before", "After"], style: sp }) {
  const ctx = useThemeContext();
  const theme = tp || ctx;
  const pal = usePal(theme);
  const ref = useRef(null);
  const [pos, setPos] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const setFromX = useCallback((clientX) => {
    const r = ref.current ? ref.current.getBoundingClientRect() : null;
    if (r && r.width) setPos(Math.min(1, Math.max(0, (clientX - r.left) / r.width)));
  }, []);
  const stopRef = useRef(null);
  const startDrag = useCallback((clientX) => {
    setDragging(true);
    setFromX(clientX);
    const move = (e) => setFromX(e.touches ? e.touches[0].clientX : e.clientX);
    const up = () => {
      setDragging(false);
      stop();
    };
    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
      stopRef.current = null;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", up);
    stopRef.current = stop;
  }, [setFromX]);
  useEffect(() => () => {
    if (stopRef.current) stopRef.current();
  }, []);
  const onKey = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p2) => Math.max(0, p2 - 0.05));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p2) => Math.min(1, p2 + 0.05));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(1);
    }
  };
  const pct = pos * 100;
  const isDark = theme === "dark";
  const tag = (text, side, visible) => /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: {
    position: "absolute",
    top: 12,
    [side]: 12,
    zIndex: 3,
    pointerEvents: "none",
    padding: "4px 10px",
    borderRadius: tokens.radius.pill,
    background: isDark ? "rgba(20,20,20,0.8)" : "rgba(255,255,255,0.88)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: `0 0 0 1px ${pal.borderSubtle}`,
    fontFamily: tokens.font.mono,
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: pal.textSecondary,
    opacity: visible ? 1 : 0,
    transition: `opacity ${motion.normal} ${motion.easeInOut}`
  } }, text);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      onMouseDown: (e) => {
        e.preventDefault();
        startDrag(e.clientX);
      },
      onTouchStart: (e) => startDrag(e.touches[0].clientX),
      style: {
        position: "relative",
        width: "100%",
        borderRadius: tokens.radius.lg,
        overflow: "hidden",
        cursor: dragging ? "grabbing" : "col-resize",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "pan-y",
        fontFamily: tokens.font.sans,
        ...sp
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, before),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      clipPath: `inset(0 0 0 ${pct}%)`,
      transition: dragging ? "none" : `clip-path ${motion.fast} ${motion.easeOut}`
    } }, after),
    tag(labels[0], "left", pos > 0.14),
    tag(labels[1], "right", pos < 0.86),
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: `${pct}%`,
      width: 2,
      marginLeft: -1,
      zIndex: 2,
      background: isDark ? "rgba(255,255,255,0.85)" : "#fff",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.15), 0 0 12px rgba(0,0,0,0.25)",
      transition: dragging ? "none" : `left ${motion.fast} ${motion.easeOut}`
    } }),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        role: "slider",
        "aria-label": `Compare ${labels[0]} and ${labels[1]}`,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(pct),
        onKeyDown: onKey,
        style: {
          ...interactiveBase,
          position: "absolute",
          top: "50%",
          left: `${pct}%`,
          zIndex: 3,
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          borderRadius: 20,
          padding: 0,
          background: isDark ? "#1c1c1c" : "#fff",
          color: pal.text,
          boxShadow: "0 0 0 1px rgba(0,0,0,0.12), 0 6px 16px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: dragging ? "grabbing" : "grab",
          transform: dragging ? "scale(1.06)" : "scale(1)",
          transition: dragging ? "transform 0.1s ease" : `left ${motion.fast} ${motion.easeOut}, transform ${motion.fast} ${motion.easeOut}`
        }
      },
      /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M9 7l-5 5 5 5" }), /* @__PURE__ */ React.createElement("path", { d: "M15 7l5 5-5 5" }))
    )
  );
}
function LiveStage({ scale, theme, children }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: "100%", height: Math.round(PARADIGM_STAGE.h * scale), overflow: "hidden", background: pal.bgSubtle, border: `1px solid ${pal.borderSubtle}` } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 0, left: 0, width: PARADIGM_STAGE.w, height: PARADIGM_STAGE.h, transform: `scale(${scale})`, transformOrigin: "top left", pointerEvents: "none" } }, children));
}
function BeforeAfterSection({ theme }) {
  const pal = usePal(theme);
  const ref = useRef(null);
  const [scale, setScale] = useState(0.5);
  useEffect(() => {
    const measure = () => {
      if (ref.current) setScale(ref.current.clientWidth / PARADIGM_STAGE.w);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { id: "before-after", style: { display: "flex", flexDirection: "column", gap: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { paddingLeft: 8 } }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Before and after"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textSecondary, display: "block", marginTop: 6, maxWidth: 560 } }, "The same screen as a coding agent left it, and after the kit was applied.")), /* @__PURE__ */ React.createElement("div", { ref }, /* @__PURE__ */ React.createElement(
    CompareSlider,
    {
      theme,
      before: /* @__PURE__ */ React.createElement(LiveStage, { scale, theme }, /* @__PURE__ */ React.createElement(ChatParadigmBefore, { theme })),
      after: /* @__PURE__ */ React.createElement(LiveStage, { scale, theme }, /* @__PURE__ */ React.createElement(ChatParadigmExample, { theme }))
    }
  )), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, style: { color: pal.textTertiary, display: "block", textAlign: "center" } }, "Drag the handle. Same components, same data. Only the kit changed."));
}
const CHATB_FONT = "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif";
const CHATB_C = {
  white: "#ffffff",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray700: "#374151",
  gray900: "#111827",
  blue50: "#eff6ff",
  blue500: "#3b82f6",
  blue600: "#2563eb",
  green500: "#22c55e",
  yellow100: "#fef9c3",
  yellow800: "#854d0e"
};
const CHATB_SHADOW = "0 1px 2px rgba(0,0,0,0.05)";
const CHATB_SUGGESTIONS = [
  "What's open with Acme?",
  "Close tickets idle over 30 days",
  "Summarize overnight tickets"
];
const CHATB_BTN = {
  fontFamily: CHATB_FONT,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "20px",
  padding: "8px 16px",
  borderRadius: 6,
  cursor: "pointer",
  whiteSpace: "nowrap"
};
const CHATB_BTN_PRIMARY = { ...CHATB_BTN, background: CHATB_C.blue500, color: CHATB_C.white, border: "1px solid " + CHATB_C.blue500 };
const CHATB_BTN_SECONDARY = { ...CHATB_BTN, background: CHATB_C.white, color: CHATB_C.gray700, border: "1px solid " + CHATB_C.gray300 };
const CHATB_FIELD = {
  fontFamily: CHATB_FONT,
  fontSize: 14,
  lineHeight: "20px",
  color: CHATB_C.gray900,
  background: CHATB_C.white,
  border: "1px solid " + CHATB_C.gray300,
  borderRadius: 6,
  padding: "8px 12px",
  boxSizing: "border-box"
};
const CHATB_PILL = {
  display: "inline-block",
  fontFamily: CHATB_FONT,
  fontSize: 12,
  lineHeight: "16px",
  padding: "4px 10px",
  borderRadius: 9999,
  background: CHATB_C.gray100,
  border: "1px solid " + CHATB_C.gray200,
  color: CHATB_C.gray700,
  whiteSpace: "nowrap"
};
function ChatBButton({ variant, onClick, style, children }) {
  const base = variant === "primary" ? CHATB_BTN_PRIMARY : CHATB_BTN_SECONDARY;
  return /* @__PURE__ */ React.createElement("button", { type: "button", onClick, style: { ...base, ...style } }, children);
}
function ChatBModelSelect({ value, onChange, style }) {
  return /* @__PURE__ */ React.createElement("select", { value, onChange: (e) => onChange(e.target.value), style: { ...CHATB_FIELD, cursor: "pointer", ...style } }, CHATX_MODELS.map((m) => /* @__PURE__ */ React.createElement("option", { key: m.id, value: m.id }, m.label)));
}
function ChatBSectionLabel({ children, style }) {
  return /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 500, color: CHATB_C.gray500, textTransform: "uppercase", letterSpacing: "0.05em", ...style } }, children);
}
function ChatParadigmBefore({ theme }) {
  const [activeThread, setActiveThread] = useState(CHATX_THREADS[0].id);
  const [model, setModel] = useState(CHATX_MODELS[0].id);
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState("");
  const [choice, setChoice] = useState("");
  const activeTitle = (CHATX_THREADS.find((t) => t.id === activeThread) || CHATX_THREADS[0]).title;
  const visibleThreads = CHATX_THREADS.filter((t) => t.title.toLowerCase().includes(search.trim().toLowerCase()));
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: CHATB_C.white,
    color: CHATB_C.gray900,
    fontFamily: CHATB_FONT,
    fontSize: 14,
    lineHeight: "20px",
    display: "flex"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 260,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    background: CHATB_C.gray50,
    borderRight: "1px solid " + CHATB_C.gray200,
    boxSizing: "border-box"
  } }, /* @__PURE__ */ React.createElement("div", { style: { padding: 16, display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, lineHeight: "24px" } }, "\u2728 Alpha"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: search,
      onChange: (e) => setSearch(e.target.value),
      placeholder: "Search threads",
      style: { ...CHATB_FIELD, width: "100%" }
    }
  ), /* @__PURE__ */ React.createElement(ChatBButton, { variant: "primary", onClick: () => {
  }, style: { width: "100%" } }, "New thread")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflow: "auto", padding: "0 8px 8px" } }, /* @__PURE__ */ React.createElement(ChatBSectionLabel, { style: { padding: "8px 8px 4px" } }, "Recent"), visibleThreads.map((t) => {
    const active = t.id === activeThread;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: t.id,
        type: "button",
        onClick: () => setActiveThread(t.id),
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          width: "100%",
          padding: "8px 12px",
          borderRadius: 6,
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          background: active ? CHATB_C.gray100 : "transparent",
          fontFamily: CHATB_FONT,
          fontSize: 14,
          lineHeight: "20px",
          color: active ? CHATB_C.gray900 : CHATB_C.gray700,
          fontWeight: active ? 500 : 400
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, t.title),
      /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: CHATB_C.gray400, flexShrink: 0 } }, t.time)
    );
  })), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 16px",
    borderTop: "1px solid " + CHATB_C.gray200
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    background: CHATB_C.gray300,
    color: CHATB_C.gray700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 500,
    flexShrink: 0
  } }, "SK"), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, "Sam Keller"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: CHATB_C.gray500 } }, "Team")))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "12px 24px",
    flexShrink: 0,
    background: CHATB_C.white,
    borderBottom: "1px solid " + CHATB_C.gray200
  } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 600, lineHeight: "28px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 } }, activeTitle), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { color: CHATB_C.gray500 } }, "Model:"), /* @__PURE__ */ React.createElement(ChatBModelSelect, { value: model, onChange: setModel })), /* @__PURE__ */ React.createElement("span", { style: { color: CHATB_C.gray500, whiteSpace: "nowrap", flexShrink: 0 } }, "Context: 132K / 200K"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, flexShrink: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: 9999, background: CHATB_C.green500, display: "inline-block" } }), /* @__PURE__ */ React.createElement("span", null, "Online")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexShrink: 0 } }, /* @__PURE__ */ React.createElement(ChatBButton, { onClick: () => {
  } }, "Share"), /* @__PURE__ */ React.createElement(ChatBButton, { onClick: () => {
  } }, "More"))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minHeight: 0, overflow: "auto", padding: 24, background: CHATB_C.white } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: CHATB_C.gray500, marginBottom: 4 } }, "You"), /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: "75%",
    padding: "12px 16px",
    borderRadius: 8,
    background: CHATB_C.blue50,
    border: "1px solid " + CHATB_C.gray200
  } }, CHATX_USER_MSG), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: CHATB_C.gray400, marginTop: 4 } }, "9:41 AM")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    background: CHATB_C.blue500,
    color: CHATB_C.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 600,
    flexShrink: 0
  } }, "A"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: CHATB_C.gray500, marginBottom: -8 } }, "Alpha"), /* @__PURE__ */ React.createElement("div", { style: { background: CHATB_C.gray50, border: "1px solid " + CHATB_C.gray200, borderRadius: 8, padding: "12px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, marginBottom: 8 } }, "Thinking..."), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, paddingLeft: 20, color: CHATB_C.gray700 } }, CHATX_THINK_STEPS.map((s, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: { marginBottom: 4 } }, s.label, " (", s.detail, ")")))), /* @__PURE__ */ React.createElement("div", { style: { background: CHATB_C.gray100, borderRadius: 8, padding: "12px 16px" } }, /* @__PURE__ */ React.createElement("p", { style: { margin: 0 } }, CHATX_ANSWER_SEGMENTS.map((seg, i) => {
    if (seg.chip) {
      return /* @__PURE__ */ React.createElement("span", { key: i, style: {
        display: "inline-block",
        fontSize: 12,
        lineHeight: "16px",
        padding: "1px 8px",
        marginLeft: 4,
        borderRadius: 9999,
        background: CHATB_C.gray200,
        color: CHATB_C.gray700,
        verticalAlign: "middle"
      } }, seg.chip);
    }
    return /* @__PURE__ */ React.createElement("span", { key: i }, seg.t || seg.text);
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 500, color: CHATB_C.gray500, marginBottom: 6 } }, "Sources"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } }, CHATX_ANSWER_SOURCES.map((s) => /* @__PURE__ */ React.createElement("span", { key: s.name, style: CHATB_PILL }, s.name)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } }, CHATX_ANSWER_FOLLOWUPS.map((f) => /* @__PURE__ */ React.createElement("button", { key: f, type: "button", onClick: () => setDraft(f), style: {
    fontFamily: CHATB_FONT,
    fontSize: 14,
    lineHeight: "20px",
    padding: "6px 12px",
    borderRadius: 9999,
    background: CHATB_C.white,
    border: "1px solid " + CHATB_C.blue600,
    color: CHATB_C.blue600,
    cursor: "pointer"
  } }, f))), /* @__PURE__ */ React.createElement("div", { style: {
    background: CHATB_C.white,
    border: "1px solid " + CHATB_C.gray200,
    borderRadius: 8,
    boxShadow: CHATB_SHADOW,
    padding: 16
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, lineHeight: "24px" } }, "How should I reply to Acme?"), /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 500,
    padding: "2px 8px",
    borderRadius: 9999,
    background: CHATB_C.yellow100,
    color: CHATB_C.yellow800,
    whiteSpace: "nowrap"
  } }, "Paused")), /* @__PURE__ */ React.createElement("div", { style: { color: CHATB_C.gray500, marginBottom: 12 } }, "Needs your call before Alpha continues."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 } }, CHATX_APPROVAL_OPTIONS.map((o) => /* @__PURE__ */ React.createElement("label", { key: o.id, style: { display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "radio",
      name: "chatb-approval",
      value: o.id,
      checked: choice === o.id,
      onChange: () => setChoice(o.id),
      style: { marginTop: 3 }
    }
  ), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontWeight: 500 } }, o.title), /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontSize: 12, color: CHATB_C.gray500 } }, o.sub))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(ChatBButton, { variant: "primary", onClick: () => {
  } }, "Confirm"), /* @__PURE__ */ React.createElement(ChatBButton, { onClick: () => {
  } }, "Skip"))))))), /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, padding: "16px 24px", background: CHATB_C.white, borderTop: "1px solid " + CHATB_C.gray200 } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 720, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 } }, CHATB_SUGGESTIONS.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, type: "button", onClick: () => setDraft(s), style: { ...CHATB_PILL, cursor: "pointer" } }, s))), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      rows: 3,
      value: draft,
      onChange: (e) => setDraft(e.target.value),
      placeholder: "Ask Alpha about your inbox...",
      style: { ...CHATB_FIELD, width: "100%", resize: "none", display: "block" }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginTop: 8 } }, /* @__PURE__ */ React.createElement(ChatBButton, { onClick: () => {
  } }, "\u{1F4CE} Attach"), /* @__PURE__ */ React.createElement(ChatBModelSelect, { value: model, onChange: setModel }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(ChatBButton, { onClick: () => {
  } }, "\u{1F3A4}"), /* @__PURE__ */ React.createElement(ChatBButton, { variant: "primary", onClick: () => {
  } }, "Send"))))));
}
function BetaChip({ pageTheme }) {
  const pal = usePal(pageTheme);
  const isDark = pageTheme === "dark";
  return /* @__PURE__ */ React.createElement("div", { "aria-label": "Beta", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: tokens.radius.pill,
    background: isDark ? "rgba(30,30,30,0.85)" : "rgba(255,255,255,0.85)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: `0 0 0 1px ${pal.borderSubtle}`,
    fontFamily: tokens.font.mono,
    fontSize: 10,
    letterSpacing: "0.12em",
    color: pal.textSecondary,
    userSelect: "none",
    transition: `background ${motion.smooth} ${motion.easeInOut}, color ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 5, height: 5, borderRadius: 3, background: pal.accent, transition: `background ${motion.smooth} ${motion.easeInOut}` } }), "BETA");
}
function RepoPill({ pageTheme, surface }) {
  const pal = usePal(pageTheme);
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href: REPO_URL,
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Source on GitHub",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        textDecoration: "none",
        padding: "4px 10px 4px 8px",
        borderRadius: tokens.radius.pill,
        ...surface,
        fontFamily: tokens.font.mono,
        fontSize: 10,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: hover ? pal.text : pal.textSecondary
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M16 18l6-6-6-6" }), /* @__PURE__ */ React.createElement("path", { d: "M8 6l-6 6 6 6" })),
    "GitHub"
  );
}
function StudioWandIcon({ size = 22, theme }) {
  const pal = usePal(theme);
  return /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: {
    width: size,
    height: size,
    borderRadius: size / 2,
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: pal.accentBg,
    color: pal.accent,
    transition: `background ${motion.smooth} ${motion.easeInOut}, color ${motion.smooth} ${motion.easeInOut}`
  } }, /* @__PURE__ */ React.createElement("svg", { width: Math.round(size * 0.6), height: Math.round(size * 0.6), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.25", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M3 21l9.5-9.5" }), /* @__PURE__ */ React.createElement("path", { d: "M14.5 7.5 16.5 9.5" }), /* @__PURE__ */ React.createElement("path", { d: "M15 3v2" }), /* @__PURE__ */ React.createElement("path", { d: "M15 12v2" }), /* @__PURE__ */ React.createElement("path", { d: "M10.5 8.5h2" }), /* @__PURE__ */ React.createElement("path", { d: "M19.5 8.5h2" }), /* @__PURE__ */ React.createElement("path", { d: "M18.2 5.3 19.5 4" }), /* @__PURE__ */ React.createElement("path", { d: "M18.2 11.7 19.5 13" })));
}
function StudioCta({ pageTheme }) {
  const pal = usePal(pageTheme);
  const isDark = pageTheme === "dark";
  const { isMobile } = useViewport();
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener("halaska:prompt-copied", reopen);
    return () => window.removeEventListener("halaska:prompt-copied", reopen);
  }, []);
  const surface = {
    background: isDark ? "rgba(30,30,30,0.92)" : "rgba(255,255,255,0.92)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 12px 32px ${pal.shadowLg}`,
    transition: `background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
  };
  const note = !open ? /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen(true),
      "aria-label": "Open studio note",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px 8px 10px",
        borderRadius: tokens.radius.pill,
        ...surface,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        color: hover ? pal.text : pal.textSecondary,
        animation: `halaska-scale-in ${motion.normal} ${motion.emphasized} both`
      }
    },
    /* @__PURE__ */ React.createElement(StudioWandIcon, { size: 18, theme: pageTheme }),
    "Need a hand with yours?"
  ) : /* @__PURE__ */ React.createElement("div", { role: "complementary", "aria-label": "Studio note", style: {
    width: 300,
    maxWidth: "calc(100vw - 40px)",
    padding: 16,
    borderRadius: tokens.radius.lg,
    ...surface,
    fontFamily: tokens.font.sans,
    animation: `halaska-step-in 0.4s ${motion.emphasized} both`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 10 } }, /* @__PURE__ */ React.createElement(StudioWandIcon, { size: 22, theme: pageTheme }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "semibold", theme: pageTheme, style: { display: "block" } }, "Need a hand with yours?"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme: pageTheme, style: { color: pal.textSecondary, display: "block", marginTop: 4, lineHeight: 1.6 } }, "If you'd rather have a designer take it from here, that's what ", /* @__PURE__ */ React.createElement(StudioLink, { theme: pageTheme }, "Halaska Studio"), " does."), /* @__PURE__ */ React.createElement(LinkButton, { theme: pageTheme, size: "sm", iconRight: "\u2197", onClick: () => {
    window.open(STUDIO_BOOK_URL, "_blank", "noopener");
    setOpen(false);
  }, style: { marginTop: 8 } }, "Book a call")), /* @__PURE__ */ React.createElement(IconButton, { icon: "\u2013", size: 24, theme: pageTheme, label: "Minimise", onClick: () => setOpen(false), style: { marginTop: -4, marginRight: -6 } })));
  if (isMobile) {
    return open ? /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", bottom: 84, left: 16, right: 16, zIndex: 9998, display: "flex", justifyContent: "center" } }, note) : null;
  }
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", bottom: 20, left: 20, zIndex: 9998 } }, note);
}
function PageDock({ pageTheme }) {
  const pal = usePal(pageTheme);
  const isDark = pageTheme === "dark";
  const { isMobile } = useViewport();
  const surface = {
    background: isDark ? "rgba(30,30,30,0.92)" : "rgba(255,255,255,0.92)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 12px 32px ${pal.shadowLg}`,
    transition: `background ${motion.smooth} ${motion.easeInOut}, box-shadow ${motion.smooth} ${motion.easeInOut}`
  };
  if (isMobile) return null;
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", bottom: 20, right: 20, zIndex: 9998, display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(BetaChip, { pageTheme }), /* @__PURE__ */ React.createElement(RepoPill, { pageTheme, surface }));
}
function BookmarkRail({ pageTheme, scrollTo }) {
  const pal = usePal(pageTheme);
  const isDark = pageTheme === "dark";
  const [prox, setProx] = useState(() => RAIL_TICKS.map(() => 0));
  const [activeId, setActiveId] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);
  useEffect(() => {
    const measure = () => {
      rafRef.current = null;
      const probe = window.scrollY + window.innerHeight * 0.32;
      let best = null, bestD = Infinity;
      const next = RAIL_TICKS.map((t) => {
        const el = document.getElementById(t.id);
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        const top = r.top + window.scrollY;
        const bottom = top + r.height;
        const d = probe < top ? top - probe : probe > bottom ? probe - bottom : 0;
        if (d < bestD) {
          bestD = d;
          best = t.id;
        }
        return Math.exp(-(d * d) / (2 * 420 * 420));
      });
      setProx(next);
      setActiveId(best);
    };
    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(measure);
    };
    const onResize = () => {
      setVisible(window.innerWidth >= 1200);
      onScroll();
    };
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);
  if (!visible) return null;
  const lineBase = isDark ? "#3a3a3a" : "#d4d4d4";
  const lineNear = isDark ? "#999" : "#666";
  const labelDim = isDark ? "#555" : "#b3b3b3";
  const textDim = isDark ? "#666" : "#a3a3a3";
  const textHover = isDark ? "#bbb" : "#555";
  const textActive = isDark ? "#d8d8d8" : "#3d3d3d";
  let tickIdx = -1;
  return /* @__PURE__ */ React.createElement("nav", { "aria-label": "Sections", style: {
    position: "fixed",
    left: 20,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 9998,
    display: "flex",
    flexDirection: "column",
    fontFamily: tokens.font.sans
  } }, RAIL_ROWS.map((row, i) => {
    if (row.type === "label") {
      return /* @__PURE__ */ React.createElement("div", { key: `label-${i}`, style: {
        fontSize: 9,
        fontWeight: tokens.weight.medium,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: labelDim,
        margin: `${i === 0 ? 0 : 16}px 0 6px`,
        transition: "color 0.35s ease"
      } }, row.text);
    }
    tickIdx += 1;
    const p2 = prox[tickIdx] || 0;
    const hovered = hoverId === row.id;
    const active = activeId === row.id;
    const width = hovered ? 15 : 7 + p2 * 8;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: row.id,
        onClick: () => scrollTo(row.id),
        onMouseEnter: () => setHoverId(row.id),
        onMouseLeave: () => setHoverId(null),
        "aria-label": row.label,
        style: {
          ...interactiveBase,
          display: "flex",
          alignItems: "center",
          height: 15,
          padding: 0,
          background: "transparent",
          textAlign: "left",
          transition: "none"
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: {
        display: "block",
        height: active ? 1.5 : 1,
        width,
        borderRadius: 1,
        flexShrink: 0,
        background: active ? pal.accent : hovered || p2 > 0.6 ? lineNear : lineBase,
        transition: "width 0.3s cubic-bezier(0.2, 0, 0, 1), background 0.25s ease, height 0.25s ease"
      } }),
      /* @__PURE__ */ React.createElement("span", { style: {
        marginLeft: 8,
        whiteSpace: "nowrap",
        ...tokens.type.xs,
        fontWeight: active ? tokens.weight.semibold : tokens.weight.regular,
        color: active ? textActive : hovered ? textHover : textDim,
        transition: "color 0.25s ease"
      } }, row.label)
    );
  }));
}
function BarButton({ children, onClick, active, barText, barTextActive, barHoverBg, barActiveBg, style: sp }) {
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        ...interactiveBase,
        fontFamily: tokens.font.sans,
        ...tokens.type.sm,
        fontWeight: tokens.weight.medium,
        padding: "8px 16px",
        borderRadius: tokens.radius.md,
        color: active || hover ? barTextActive : barText,
        background: active ? barActiveBg : hover ? barHoverBg : "transparent",
        transition: `background ${motion.normal} ${motion.easeInOut}, color ${motion.normal} ${motion.easeInOut}`,
        whiteSpace: "nowrap",
        letterSpacing: "-0.01em",
        ...sp
      }
    },
    children
  );
}
function SectionMenu({ open, onClose, scrollTo, pageTheme, bar }) {
  const { isMobile } = useViewport();
  const pal = usePal(pageTheme);
  const [activeId, setActiveId] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const probe = window.scrollY + window.innerHeight * 0.32;
    let best = null, bestD = Infinity;
    RAIL_TICKS.forEach((t) => {
      const el = document.getElementById(t.id);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const top = r.top + window.scrollY, bottom = top + r.height;
      const d = probe < top ? top - probe : probe > bottom ? probe - bottom : 0;
      if (d < bestD) {
        bestD = d;
        best = t.id;
      }
    });
    setActiveId(best);
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const id = setTimeout(() => {
      document.addEventListener("mousedown", onDown);
      document.addEventListener("touchstart", onDown);
    }, 0);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(id);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  const surface = {
    background: pageTheme === "dark" ? "rgba(30,30,30,0.92)" : "rgba(255,255,255,0.92)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    boxShadow: `0 0 0 1px ${pal.borderSubtle}, 0 12px 32px ${pal.shadowLg}`
  };
  return /* @__PURE__ */ React.createElement("div", { ref, role: "menu", "aria-label": "Sections", style: {
    position: "fixed",
    bottom: 76,
    left: "50%",
    transform: "translateX(-50%)",
    width: isMobile ? "calc(100vw - 32px)" : 320,
    maxHeight: "min(64vh, 560px)",
    overflowY: "auto",
    zIndex: 9999,
    padding: isMobile ? "10px 8px 0" : "10px 8px",
    borderRadius: tokens.radius.lg,
    background: bar.bg,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: `1px solid ${bar.border}`,
    boxShadow: bar.shadow,
    fontFamily: tokens.font.sans,
    animation: `halaska-step-in ${motion.normal} ${motion.emphasized} both`
  } }, RAIL_ROWS.map((row, i) => row.type === "label" ? /* @__PURE__ */ React.createElement("div", { key: `label-${i}`, style: {
    fontSize: 9,
    fontWeight: tokens.weight.medium,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: bar.text,
    opacity: 0.7,
    padding: `${i === 0 ? 4 : 14}px 10px 6px`
  } }, row.text) : /* @__PURE__ */ React.createElement("button", { key: row.id, role: "menuitem", onClick: () => {
    scrollTo(row.id);
    onClose();
  }, style: {
    ...interactiveBase,
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "100%",
    textAlign: "left",
    padding: "8px 10px",
    borderRadius: tokens.radius.sm,
    ...tokens.type.sm,
    fontWeight: activeId === row.id ? tokens.weight.semibold : tokens.weight.regular,
    color: activeId === row.id ? bar.textActive : bar.text,
    background: activeId === row.id ? bar.activeBg : "transparent"
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: activeId === row.id ? 12 : 6, height: 1, background: activeId === row.id ? pal.accent : bar.text, opacity: activeId === row.id ? 1 : 0.5, flexShrink: 0, transition: `width ${motion.normal} ${motion.emphasized}` } }), row.label)), isMobile && /* @__PURE__ */ React.createElement("div", { style: {
    position: "sticky",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap",
    padding: "12px 6px 10px",
    marginTop: 6,
    borderTop: `1px solid ${bar.border}`,
    background: bar.bg,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)"
  } }, /* @__PURE__ */ React.createElement(BetaChip, { pageTheme }), /* @__PURE__ */ React.createElement(RepoPill, { pageTheme, surface })));
}
function ActionBar({ scrollTo, pageTheme, onThemeChange, accentColor, onAccentChange }) {
  const [colorOpen, setColorOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const { isMobile, compact } = useViewport();
  const { copied: installCopied, copy: copyInstallPrompt } = useCopyPrompt();
  const isDark = pageTheme === "dark";
  const barIsDark = !isDark;
  const barBg = barIsDark ? "rgba(12,12,12,0.88)" : "rgba(250,250,250,0.88)";
  const barBorder = barIsDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const barText = barIsDark ? "#999" : "#666";
  const barTextActive = barIsDark ? "#fff" : "#111";
  const barActiveBg = barIsDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const barBarButtonActiveBg = barIsDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)";
  const barBarButtonHoverBg = barIsDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const toggleTrackBg = barIsDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const toggleThumbBg = barIsDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)";
  const shadow = barIsDark ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.12)";
  const thumbSize = 22;
  const togglePad = 2;
  const toggleW = thumbSize * 2 + togglePad * 2;
  const toggleH = thumbSize + togglePad * 2;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, compact && /* @__PURE__ */ React.createElement(
    SectionMenu,
    {
      open: menuOpen,
      onClose: closeMenu,
      scrollTo,
      pageTheme,
      bar: { bg: barBg, border: barBorder, text: barText, textActive: barTextActive, activeBg: barActiveBg, shadow }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    maxWidth: "calc(100vw - 24px)",
    background: barBg,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: `1px solid ${barBorder}`,
    borderRadius: tokens.radius.md,
    padding: "0 6px 6px",
    display: "flex",
    flexDirection: "column",
    zIndex: 9999,
    boxShadow: shadow,
    overflow: "hidden",
    transition: "background 0.35s cubic-bezier(0.2, 0, 0, 1), border-color 0.35s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.35s cubic-bezier(0.2, 0, 0, 1)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4, padding: "6px 0 0" } }, compact && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setColorOpen(false);
        setMenuOpen((o) => !o);
      },
      "aria-label": "Sections",
      "aria-expanded": menuOpen,
      style: {
        ...interactiveBase,
        width: 32,
        height: 32,
        padding: 0,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: menuOpen ? barActiveBg : "transparent",
        color: menuOpen ? barTextActive : barText,
        borderRadius: tokens.radius.sm,
        transition: `background ${motion.normal} ${motion.easeInOut}, color ${motion.normal} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M4 7h16M4 12h10M4 17h13" }))
  ), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 20, background: barBorder, margin: "0 4px", flexShrink: 0 } })), /* @__PURE__ */ React.createElement(
    BarButton,
    {
      onClick: () => {
        setColorOpen(false);
        setMenuOpen(false);
        copyInstallPrompt();
      },
      active: installCopied,
      barText,
      barTextActive,
      barHoverBg: barBarButtonHoverBg,
      barActiveBg: barBarButtonActiveBg,
      style: isMobile ? { padding: "8px 12px" } : void 0
    },
    installCopied ? isMobile ? "Copied \u2713" : "Copied \xB7 paste into Claude Code \u2713" : isMobile ? "Copy prompt" : "Copy install prompt"
  ), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 20, background: barBorder, margin: "0 4px", flexShrink: 0 } }), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onThemeChange(isDark ? "light" : "dark"),
      style: {
        ...interactiveBase,
        width: toggleW,
        height: toggleH,
        borderRadius: 999,
        background: toggleTrackBg,
        position: "relative",
        padding: 0,
        display: "flex",
        alignItems: "center",
        transition: `background ${motion.smooth} ${motion.emphasized}`
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      width: thumbSize,
      height: thumbSize,
      borderRadius: thumbSize / 2,
      background: toggleThumbBg,
      left: isDark ? togglePad + thumbSize : togglePad,
      top: togglePad,
      transition: `left 0.35s cubic-bezier(0.2, 0, 0, 1), background ${motion.smooth} ${motion.emphasized}`
    } }),
    /* @__PURE__ */ React.createElement("div", { style: { width: thumbSize + togglePad, height: toggleH, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: !isDark ? barTextActive : barText, position: "relative", zIndex: 1, transition: "color 0.2s ease" } }, "\u2600"),
    /* @__PURE__ */ React.createElement("div", { style: { width: thumbSize + togglePad, height: toggleH, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: isDark ? barTextActive : barText, position: "relative", zIndex: 1, transition: "color 0.2s ease" } }, "\u263E")
  ), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 20, background: barBorder, margin: "0 4px", flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", padding: "0 4px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setColorOpen((o) => !o),
      "aria-label": "Toggle accent color",
      style: {
        ...interactiveBase,
        width: 28,
        height: 28,
        padding: 0,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: colorOpen ? barActiveBg : "transparent",
        color: colorOpen ? barTextActive : barText,
        borderRadius: tokens.radius.sm,
        marginRight: 6,
        transition: `background ${motion.normal} ${motion.easeInOut}, color ${motion.normal} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }), /* @__PURE__ */ React.createElement("path", { d: "m5 2 5 5" }), /* @__PURE__ */ React.createElement("path", { d: "M2 13h15" }), /* @__PURE__ */ React.createElement("path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" }))
  ), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: colorOpen ? 6 : 0,
    transition: "gap 0.3s cubic-bezier(0.2, 0, 0, 1)"
  } }, ACCENT_COLORS.map((c) => {
    const isActive = accentColor === c.value;
    const show = colorOpen || isActive;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: c.name,
        onClick: () => {
          if (!colorOpen) {
            setColorOpen(true);
          } else {
            onAccentChange(c.value);
            setColorOpen(false);
          }
        },
        style: {
          ...interactiveBase,
          padding: 0,
          flexShrink: 0,
          width: show ? 16 : 0,
          height: 16,
          borderRadius: 8,
          background: c.value,
          overflow: "hidden",
          opacity: show ? 1 : 0,
          boxShadow: isActive && colorOpen ? `0 0 0 2px ${barBg}, 0 0 0 3.5px ${c.value}` : "none",
          transition: "width 0.3s cubic-bezier(0.2, 0, 0, 1), opacity 0.2s ease, box-shadow 0.2s ease"
        }
      }
    );
  }))))));
}
export default function HalaskaKit() {
  const [pageTheme, setPageTheme] = useState("light");
  const [accentColor, setAccentColor] = useState("#555555");
  useEffect(() => {
    injectStyles();
  }, []);
  const { isMobile } = useViewport();
  const gap = isMobile ? 40 : 64;
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 32;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ React.createElement(AccentContext.Provider, { value: accentColor }, /* @__PURE__ */ React.createElement(ShowcasePage, { title: "UI", pageTheme }, /* @__PURE__ */ React.createElement("div", { id: "patterns", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoPatterns, { theme: pageTheme })), /* @__PURE__ */ React.createElement("div", { id: "cat-foundations", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoTypography, { theme: pageTheme }), /* @__PURE__ */ React.createElement(DemoMotion, { theme: pageTheme }), /* @__PURE__ */ React.createElement(DemoButtons, { theme: pageTheme })), /* @__PURE__ */ React.createElement("div", { id: "cat-inputs", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoFormInputs, { theme: pageTheme }), /* @__PURE__ */ React.createElement(DemoTogglesSelections, { theme: pageTheme }), /* @__PURE__ */ React.createElement(DemoFormExtras, { theme: pageTheme }), /* @__PURE__ */ React.createElement(DemoInputsExtended, { theme: pageTheme })), /* @__PURE__ */ React.createElement("div", { id: "cat-navigation", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoNavigation, { theme: pageTheme })), /* @__PURE__ */ React.createElement("div", { id: "cat-overlays", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoOverlays, { theme: pageTheme })), /* @__PURE__ */ React.createElement("div", { id: "cat-feedback", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoFeedbackStatus, { theme: pageTheme }), /* @__PURE__ */ React.createElement(DemoAlerts, { theme: pageTheme })), /* @__PURE__ */ React.createElement("div", { id: "cat-data", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoDataDisplay, { theme: pageTheme }), /* @__PURE__ */ React.createElement(DemoTable, { theme: pageTheme })), /* @__PURE__ */ React.createElement("div", { id: "cat-ai", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoAIElements, { theme: pageTheme })), /* @__PURE__ */ React.createElement("div", { id: "cat-dev", style: { display: "flex", flexDirection: "column", gap } }, /* @__PURE__ */ React.createElement(DemoDevSurfaces, { theme: pageTheme }))), /* @__PURE__ */ React.createElement(StudioCta, { pageTheme }), /* @__PURE__ */ React.createElement(PageDock, { pageTheme }), /* @__PURE__ */ React.createElement(BookmarkRail, { pageTheme, scrollTo }), /* @__PURE__ */ React.createElement(
    ActionBar,
    {
      scrollTo,
      pageTheme,
      onThemeChange: setPageTheme,
      accentColor,
      onAccentChange: setAccentColor
    }
  ));
}
export {
  tokens,
  motion,
  interactiveBase,
  usePal,
  useThemeContext,
  ThemeProvider,
  AccentContext,
  useAccent,
  injectStyles,
  getAvatarColor,
  setKitMotion,
  setKitFont,
  KIT_MOTION_PRESETS,
  KIT_FONT_PRESETS,
  Text,
  Heading,
  Label,
  Caption,
  Code,
  Button,
  IconButton,
  ButtonGroup,
  LinkButton,
  SplitButton,
  TextInput,
  TextArea,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  SwitchToggle,
  Slider,
  SpringSlider,
  SpringToggle,
  SegmentedControl,
  InputOTP,
  InputGroup,
  Combobox,
  Calendar,
  DatePicker,
  Chip,
  Toggle,
  ToggleGroup,
  SearchInput,
  Choicebox,
  CopyInput,
  Rating,
  Card,
  CardHeader,
  Divider,
  Stack,
  Badge,
  Tag,
  StatusBadge,
  StatusDot,
  Avatar,
  AvatarGroup,
  ListItem,
  Stat,
  Table,
  DataTable,
  ScrollArea,
  Pagination,
  MiddleTruncate,
  Kbd,
  Sparkline,
  DotGrid,
  Progress,
  ProgressCircle,
  Skeleton,
  Spinner,
  Toast,
  AlertBanner,
  EmptyState,
  Stepper,
  Breadcrumb,
  Tabs,
  SubtleTabs,
  Accordion,
  Collapsible,
  ContextMenu,
  Menubar,
  CommandPalette,
  CommandMenu,
  Dialog,
  AlertDialog,
  FormDialog,
  CardDialog,
  Sheet,
  Popover,
  DropdownMenu,
  Tooltip,
  HoverCard,
  ChevronIcon,
  Snippet,
  FileTree,
  BrowserFrame,
  PhoneFrame,
  Orb,
  StreamingText,
  ThinkingIndicator,
  ThinkingSteps,
  ConfidenceBar,
  AISuggestionBadge,
  BeforeAfterToggle,
  CompareSlider,
  ZoomControl,
  AgentGlyph,
  PromptInputPattern,
  MessageThreadPattern,
  StreamingAnswerPattern,
  AgentChatPattern,
  CodeBlockPattern,
  ModelContextPattern,
  ThinkingTracePattern,
  CitationsPattern,
  ContextSourcesPattern,
  ConfidencePattern,
  RecommendationPattern,
  FeedbackPattern,
  PlanPreviewPattern,
  ApprovalCardPattern,
  AutonomyPattern,
  PermissionScopePattern,
  QueuePattern,
  AgentStatusPattern,
  ToolStreamPattern,
  AgentTasksPattern,
  HandoffPattern,
  ActionReceiptPattern,
  CheckpointPattern,
  AuditLogPattern,
  ErrorRepairPattern,
  ArtifactPattern,
  DiffViewPattern,
  DiffTablePattern,
  StructuredDataPattern,
  InsightCardsPattern,
  ComparisonPattern,
  TaskboardPattern,
  InlineAssistPattern,
  NudgePattern,
  DigestPattern,
  NotificationCenterPattern,
  CommandSearchPattern,
  AgentSetupPattern,
  ChatParadigmExample,
  CanvasParadigmExample,
  ChatParadigmBefore,
  BeforeAfterSection,
  PATTERN_GROUPS,
  UX_PATTERNS,
  DESIGN_HEURISTICS
};
function ArchiveTextInput({ theme }) {
  const [variant, setVariant] = useState(DEMOFORM_TEXT_VARIANTS[0]);
  const [amount, setAmount] = useState("2,500.00");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("alpha-support");
  const [search, setSearch] = useState("");
  const [tool, setTool] = useState("");
  const [account, setAccount] = useState("acme");
  const [memo, setMemo] = useState("");
  const textVariant = {
    "Default": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Credit amount (USD)", value: amount, onChange: setAmount, caption: "Remaining credit budget: 12,840.00 USD" }),
    "With icon": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Customer email", placeholder: "name@company.com", value: email, onChange: setEmail, icon: "\u25C6" }),
    "Error": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Webhook URL", placeholder: "https://", value: "", onChange: () => {
    }, error: "Connection timed out" }),
    "Input group": /* @__PURE__ */ React.createElement(InputGroup, { theme, label: "Agent handle", prefix: "@", suffix: ".halaska", value: handle, onChange: setHandle }),
    "Copy input": /* @__PURE__ */ React.createElement(CopyInput, { theme, label: "Webhook URL", value: "https://hooks.northwind.app/alpha/9f3a2c7d4e1b8a6f" }),
    "Search": /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement(Label, { theme }, "Search tickets"), /* @__PURE__ */ React.createElement(SearchInput, { theme, value: search, onChange: setSearch, placeholder: "Search tickets\u2026" }))
  }[variant];
  return React.createElement(TextInput, { theme, label: "Credit amount (USD)", value: amount, onChange: setAmount, caption: "Remaining credit budget: 12,840.00 USD" });
}
function ArchiveTextArea({ theme }) {
  const [variant, setVariant] = useState(DEMOFORM_TEXT_VARIANTS[0]);
  const [amount, setAmount] = useState("2,500.00");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("alpha-support");
  const [search, setSearch] = useState("");
  const [tool, setTool] = useState("");
  const [account, setAccount] = useState("acme");
  const [memo, setMemo] = useState("");
  const textVariant = {
    "Default": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Credit amount (USD)", value: amount, onChange: setAmount, caption: "Remaining credit budget: 12,840.00 USD" }),
    "With icon": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Customer email", placeholder: "name@company.com", value: email, onChange: setEmail, icon: "\u25C6" }),
    "Error": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Webhook URL", placeholder: "https://", value: "", onChange: () => {
    }, error: "Connection timed out" }),
    "Input group": /* @__PURE__ */ React.createElement(InputGroup, { theme, label: "Agent handle", prefix: "@", suffix: ".halaska", value: handle, onChange: setHandle }),
    "Copy input": /* @__PURE__ */ React.createElement(CopyInput, { theme, label: "Webhook URL", value: "https://hooks.northwind.app/alpha/9f3a2c7d4e1b8a6f" }),
    "Search": /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement(Label, { theme }, "Search tickets"), /* @__PURE__ */ React.createElement(SearchInput, { theme, value: search, onChange: setSearch, placeholder: "Search tickets\u2026" }))
  }[variant];
  return React.createElement(TextArea, { theme, label: "Agent notes", placeholder: "Describe how Alpha should handle refunds...", value: memo, onChange: setMemo, rows: 3, caption: "Visible to your agent only" });
}
function ArchiveSearchInput({ theme }) {
  const [variant, setVariant] = useState(DEMOFORM_TEXT_VARIANTS[0]);
  const [amount, setAmount] = useState("2,500.00");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("alpha-support");
  const [search, setSearch] = useState("");
  const [tool, setTool] = useState("");
  const [account, setAccount] = useState("acme");
  const [memo, setMemo] = useState("");
  const textVariant = {
    "Default": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Credit amount (USD)", value: amount, onChange: setAmount, caption: "Remaining credit budget: 12,840.00 USD" }),
    "With icon": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Customer email", placeholder: "name@company.com", value: email, onChange: setEmail, icon: "\u25C6" }),
    "Error": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Webhook URL", placeholder: "https://", value: "", onChange: () => {
    }, error: "Connection timed out" }),
    "Input group": /* @__PURE__ */ React.createElement(InputGroup, { theme, label: "Agent handle", prefix: "@", suffix: ".halaska", value: handle, onChange: setHandle }),
    "Copy input": /* @__PURE__ */ React.createElement(CopyInput, { theme, label: "Webhook URL", value: "https://hooks.northwind.app/alpha/9f3a2c7d4e1b8a6f" }),
    "Search": /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement(Label, { theme }, "Search tickets"), /* @__PURE__ */ React.createElement(SearchInput, { theme, value: search, onChange: setSearch, placeholder: "Search tickets\u2026" }))
  }[variant];
  return React.createElement(SearchInput, { theme, value: search, onChange: setSearch, placeholder: "Search tickets\u2026" });
}
function ArchiveCopyInput({ theme }) {
  const [variant, setVariant] = useState(DEMOFORM_TEXT_VARIANTS[0]);
  const [amount, setAmount] = useState("2,500.00");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("alpha-support");
  const [search, setSearch] = useState("");
  const [tool, setTool] = useState("");
  const [account, setAccount] = useState("acme");
  const [memo, setMemo] = useState("");
  const textVariant = {
    "Default": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Credit amount (USD)", value: amount, onChange: setAmount, caption: "Remaining credit budget: 12,840.00 USD" }),
    "With icon": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Customer email", placeholder: "name@company.com", value: email, onChange: setEmail, icon: "\u25C6" }),
    "Error": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Webhook URL", placeholder: "https://", value: "", onChange: () => {
    }, error: "Connection timed out" }),
    "Input group": /* @__PURE__ */ React.createElement(InputGroup, { theme, label: "Agent handle", prefix: "@", suffix: ".halaska", value: handle, onChange: setHandle }),
    "Copy input": /* @__PURE__ */ React.createElement(CopyInput, { theme, label: "Webhook URL", value: "https://hooks.northwind.app/alpha/9f3a2c7d4e1b8a6f" }),
    "Search": /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement(Label, { theme }, "Search tickets"), /* @__PURE__ */ React.createElement(SearchInput, { theme, value: search, onChange: setSearch, placeholder: "Search tickets\u2026" }))
  }[variant];
  return React.createElement(CopyInput, { theme, label: "Webhook URL", value: "https://hooks.northwind.app/alpha/9f3a2c7d4e1b8a6f" });
}
function ArchiveSelect({ theme }) {
  const [variant, setVariant] = useState(DEMOFORM_TEXT_VARIANTS[0]);
  const [amount, setAmount] = useState("2,500.00");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("alpha-support");
  const [search, setSearch] = useState("");
  const [tool, setTool] = useState("");
  const [account, setAccount] = useState("acme");
  const [memo, setMemo] = useState("");
  const textVariant = {
    "Default": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Credit amount (USD)", value: amount, onChange: setAmount, caption: "Remaining credit budget: 12,840.00 USD" }),
    "With icon": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Customer email", placeholder: "name@company.com", value: email, onChange: setEmail, icon: "\u25C6" }),
    "Error": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Webhook URL", placeholder: "https://", value: "", onChange: () => {
    }, error: "Connection timed out" }),
    "Input group": /* @__PURE__ */ React.createElement(InputGroup, { theme, label: "Agent handle", prefix: "@", suffix: ".halaska", value: handle, onChange: setHandle }),
    "Copy input": /* @__PURE__ */ React.createElement(CopyInput, { theme, label: "Webhook URL", value: "https://hooks.northwind.app/alpha/9f3a2c7d4e1b8a6f" }),
    "Search": /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement(Label, { theme }, "Search tickets"), /* @__PURE__ */ React.createElement(SearchInput, { theme, value: search, onChange: setSearch, placeholder: "Search tickets\u2026" }))
  }[variant];
  return React.createElement(
    Select,
    {
      theme,
      label: "Integration",
      placeholder: "Select tool...",
      value: tool,
      onChange: setTool,
      options: [{ value: "intercom", label: "Intercom" }, { value: "linear", label: "Linear" }, { value: "github", label: "GitHub" }, { value: "slack", label: "Slack" }]
    }
  );
}
function ArchiveCombobox({ theme }) {
  const [variant, setVariant] = useState(DEMOFORM_TEXT_VARIANTS[0]);
  const [amount, setAmount] = useState("2,500.00");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("alpha-support");
  const [search, setSearch] = useState("");
  const [tool, setTool] = useState("");
  const [account, setAccount] = useState("acme");
  const [memo, setMemo] = useState("");
  const textVariant = {
    "Default": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Credit amount (USD)", value: amount, onChange: setAmount, caption: "Remaining credit budget: 12,840.00 USD" }),
    "With icon": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Customer email", placeholder: "name@company.com", value: email, onChange: setEmail, icon: "\u25C6" }),
    "Error": /* @__PURE__ */ React.createElement(TextInput, { theme, label: "Webhook URL", placeholder: "https://", value: "", onChange: () => {
    }, error: "Connection timed out" }),
    "Input group": /* @__PURE__ */ React.createElement(InputGroup, { theme, label: "Agent handle", prefix: "@", suffix: ".halaska", value: handle, onChange: setHandle }),
    "Copy input": /* @__PURE__ */ React.createElement(CopyInput, { theme, label: "Webhook URL", value: "https://hooks.northwind.app/alpha/9f3a2c7d4e1b8a6f" }),
    "Search": /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement(Label, { theme }, "Search tickets"), /* @__PURE__ */ React.createElement(SearchInput, { theme, value: search, onChange: setSearch, placeholder: "Search tickets\u2026" }))
  }[variant];
  return React.createElement(
    Combobox,
    {
      theme,
      label: "Account",
      value: account,
      onChange: setAccount,
      options: [
        { value: "acme", label: "Acme" },
        { value: "lumen", label: "Lumen Labs" },
        { value: "fjord", label: "Fjord Health" },
        { value: "brightline", label: "Brightline" },
        { value: "cobalt", label: "Cobalt Dental" },
        { value: "northwind", label: "Northwind (internal)" }
      ]
    }
  );
}
function ArchiveCheckbox({ theme }) {
  const [sw1, setSw1] = useState(true);
  const [sw2, setSw2] = useState(false);
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(true);
  const [radio, setRadio] = useState("moderate");
  const [tab, setTab] = useState("Inbox");
  return React.createElement(Checkbox, { checked: c1, onChange: setC1, label: "Replies sent", theme });
}
function ArchiveSwitchToggle({ theme }) {
  const [sw1, setSw1] = useState(true);
  const [sw2, setSw2] = useState(false);
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(true);
  const [radio, setRadio] = useState("moderate");
  const [tab, setTab] = useState("Inbox");
  return React.createElement(SwitchToggle, { checked: sw1, onChange: setSw1, label: "Auto-reply to known issues", theme });
}
function ArchiveRadioGroup({ theme }) {
  const [sw1, setSw1] = useState(true);
  const [sw2, setSw2] = useState(false);
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(true);
  const [radio, setRadio] = useState("moderate");
  const [tab, setTab] = useState("Inbox");
  return React.createElement(RadioGroup, { theme, options: [{ value: "conservative", label: "Suggest only" }, { value: "moderate", label: "Confirm first" }, { value: "aggressive", label: "Autonomous" }], value: radio, onChange: setRadio });
}
function ArchiveSegmentedControl({ theme }) {
  const [sw1, setSw1] = useState(true);
  const [sw2, setSw2] = useState(false);
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(true);
  const [radio, setRadio] = useState("moderate");
  const [tab, setTab] = useState("Inbox");
  return React.createElement(SegmentedControl, { theme, options: ["Inbox", "Issues", "Renewals"], value: tab, onChange: setTab });
}
function ArchiveInputOTP({ theme }) {
  const [otp, setOtp] = useState("");
  return React.createElement(InputOTP, { theme, length: 6, value: otp, onChange: setOtp });
}
function ArchiveSlider({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(Slider, { theme, label: "Refund cap", value: slider, onChange: setSlider });
}
function ArchiveSpringSlider({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(SpringSlider, { theme, label: "Refund cap", value: slider, onChange: setSlider });
}
function ArchiveSpringToggle({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(SpringToggle, { theme, checked: springToggle, onChange: setSpringToggle, label: "Auto-reply" });
}
function ArchiveToggle({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(Toggle, { theme, pressed: togglePressed, onPress: setTogglePressed }, "SLA alerts");
}
function ArchiveToggleGroup({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(ToggleGroup, { theme, options: ["15m", "1h", "4h", "1d"], value: toggleGroupVal, onChange: setToggleGroupVal });
}
function ArchiveChoicebox({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(
    Choicebox,
    {
      theme,
      value: orderType,
      onChange: setOrderType,
      options: [
        { id: "auto", title: "Auto-reply", description: "Send the reply as soon as it matches a known issue.", meta: "instant" },
        { id: "confirm", title: "Confirm first", description: "Draft the reply and wait for your approval.", meta: "review" },
        { id: "batch", title: "Batch", description: "Bundle replies into a digest every 30 minutes.", meta: "30m" }
      ]
    }
  );
}
function ArchiveDatePicker({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(DatePicker, { theme, label: "Renewal date", value: date, onChange: setDate });
}
function ArchiveCalendar({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(Calendar, { theme, value: date, onChange: setDate });
}
function ArchiveRating({ theme }) {
  const pal = usePal(theme);
  const [chips, setChips] = useState(/* @__PURE__ */ new Set(["Open"]));
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  const [slider, setSlider] = useState(35);
  const [spring, setSpring] = useState(false);
  const [springToggle, setSpringToggle] = useState(true);
  const [togglePressed, setTogglePressed] = useState(true);
  const [toggleGroupVal, setToggleGroupVal] = useState("1h");
  const [rating, setRating] = useState(4);
  const [orderType, setOrderType] = useState("confirm");
  const toggleChip = (c) => {
    const s = new Set(chips);
    s.has(c) ? s.delete(c) : s.add(c);
    setChips(s);
  };
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 88, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(Rating, { theme, value: rating, onChange: setRating, size: 22 });
}
function ArchiveTabs({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Overview");
  const [subtleTab, setSubtleTab] = useState("Inbox");
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const resetStep = () => setStep(0);
  const ctxTimer = useRef(null);
  useEffect(() => () => clearTimeout(ctxTimer.current), []);
  const openContextMenu = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const clientX = e.clientX ?? rect.left + rect.width / 2;
    const clientY = e.clientY ?? rect.top + rect.height / 2;
    clearTimeout(ctxTimer.current);
    ctxTimer.current = setTimeout(() => {
      target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }));
    }, 0);
  };
  const tabContent = {
    Overview: {
      stat: [{ label: "MRR", value: "$142.8k", change: "+8.2%" }, { label: "Credits issued", value: "$3,412", change: "-1.4%" }],
      blurb: "Alpha resolved 14 tickets across 3 queues in the last 24 hours. Median first response: 6 minutes."
    },
    Tickets: {
      stat: [{ label: "Open", value: "7" }, { label: "Resolved today", value: "14" }],
      blurb: "Most recent: Ticket #4821 for Acme, replied 4m ago. Next digest in 22m."
    },
    Settings: {
      stat: [{ label: "Autonomy", value: "Confirm first" }, { label: "Refund cap", value: "$2,500" }],
      blurb: "Auto-reply is on for known issues. Anything over the refund cap waits for your approval."
    }
  }[tab];
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(Tabs, { theme, tabs: ["Overview", "Tickets", "Settings"], value: tab, onChange: setTab });
}
function ArchiveSubtleTabs({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Overview");
  const [subtleTab, setSubtleTab] = useState("Inbox");
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const resetStep = () => setStep(0);
  const ctxTimer = useRef(null);
  useEffect(() => () => clearTimeout(ctxTimer.current), []);
  const openContextMenu = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const clientX = e.clientX ?? rect.left + rect.width / 2;
    const clientY = e.clientY ?? rect.top + rect.height / 2;
    clearTimeout(ctxTimer.current);
    ctxTimer.current = setTimeout(() => {
      target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }));
    }, 0);
  };
  const tabContent = {
    Overview: {
      stat: [{ label: "MRR", value: "$142.8k", change: "+8.2%" }, { label: "Credits issued", value: "$3,412", change: "-1.4%" }],
      blurb: "Alpha resolved 14 tickets across 3 queues in the last 24 hours. Median first response: 6 minutes."
    },
    Tickets: {
      stat: [{ label: "Open", value: "7" }, { label: "Resolved today", value: "14" }],
      blurb: "Most recent: Ticket #4821 for Acme, replied 4m ago. Next digest in 22m."
    },
    Settings: {
      stat: [{ label: "Autonomy", value: "Confirm first" }, { label: "Refund cap", value: "$2,500" }],
      blurb: "Auto-reply is on for known issues. Anything over the refund cap waits for your approval."
    }
  }[tab];
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(SubtleTabs, { theme, tabs: ["Inbox", "Issues", "Renewals"], value: subtleTab, onChange: setSubtleTab });
}
function ArchiveAccordion({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Overview");
  const [subtleTab, setSubtleTab] = useState("Inbox");
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const resetStep = () => setStep(0);
  const ctxTimer = useRef(null);
  useEffect(() => () => clearTimeout(ctxTimer.current), []);
  const openContextMenu = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const clientX = e.clientX ?? rect.left + rect.width / 2;
    const clientY = e.clientY ?? rect.top + rect.height / 2;
    clearTimeout(ctxTimer.current);
    ctxTimer.current = setTimeout(() => {
      target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }));
    }, 0);
  };
  const tabContent = {
    Overview: {
      stat: [{ label: "MRR", value: "$142.8k", change: "+8.2%" }, { label: "Credits issued", value: "$3,412", change: "-1.4%" }],
      blurb: "Alpha resolved 14 tickets across 3 queues in the last 24 hours. Median first response: 6 minutes."
    },
    Tickets: {
      stat: [{ label: "Open", value: "7" }, { label: "Resolved today", value: "14" }],
      blurb: "Most recent: Ticket #4821 for Acme, replied 4m ago. Next digest in 22m."
    },
    Settings: {
      stat: [{ label: "Autonomy", value: "Confirm first" }, { label: "Refund cap", value: "$2,500" }],
      blurb: "Auto-reply is on for known issues. Anything over the refund cap waits for your approval."
    }
  }[tab];
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(Accordion, { theme, items: [
    { title: "What does auto-reply do?", content: "Alpha answers tickets that match a known issue in the changelog or runbooks, and leaves everything else for you." },
    { title: "How are credits capped?", content: "Credits over $2,500 wait for your approval. Replies are never capped." },
    { title: "Can I pause Alpha?", content: "Yes. Use the pause switch in Agent Settings to stop all active workflows immediately." }
  ] });
}
function ArchiveCollapsible({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Overview");
  const [subtleTab, setSubtleTab] = useState("Inbox");
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const resetStep = () => setStep(0);
  const ctxTimer = useRef(null);
  useEffect(() => () => clearTimeout(ctxTimer.current), []);
  const openContextMenu = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const clientX = e.clientX ?? rect.left + rect.width / 2;
    const clientY = e.clientY ?? rect.top + rect.height / 2;
    clearTimeout(ctxTimer.current);
    ctxTimer.current = setTimeout(() => {
      target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }));
    }, 0);
  };
  const tabContent = {
    Overview: {
      stat: [{ label: "MRR", value: "$142.8k", change: "+8.2%" }, { label: "Credits issued", value: "$3,412", change: "-1.4%" }],
      blurb: "Alpha resolved 14 tickets across 3 queues in the last 24 hours. Median first response: 6 minutes."
    },
    Tickets: {
      stat: [{ label: "Open", value: "7" }, { label: "Resolved today", value: "14" }],
      blurb: "Most recent: Ticket #4821 for Acme, replied 4m ago. Next digest in 22m."
    },
    Settings: {
      stat: [{ label: "Autonomy", value: "Confirm first" }, { label: "Refund cap", value: "$2,500" }],
      blurb: "Auto-reply is on for known issues. Anything over the refund cap waits for your approval."
    }
  }[tab];
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(Collapsible, { theme, title: "Advanced settings" }, /* @__PURE__ */ React.createElement(Stack, { gap: 8, style: { paddingBottom: 8 } }, /* @__PURE__ */ React.createElement(Text, { size: "sm", theme, secondary: true }, "Configure SLA rules, escalation contacts, and custom webhook endpoints.")));
}
function ArchiveContextMenu({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Overview");
  const [subtleTab, setSubtleTab] = useState("Inbox");
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const resetStep = () => setStep(0);
  const ctxTimer = useRef(null);
  useEffect(() => () => clearTimeout(ctxTimer.current), []);
  const openContextMenu = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const clientX = e.clientX ?? rect.left + rect.width / 2;
    const clientY = e.clientY ?? rect.top + rect.height / 2;
    clearTimeout(ctxTimer.current);
    ctxTimer.current = setTimeout(() => {
      target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }));
    }, 0);
  };
  const tabContent = {
    Overview: {
      stat: [{ label: "MRR", value: "$142.8k", change: "+8.2%" }, { label: "Credits issued", value: "$3,412", change: "-1.4%" }],
      blurb: "Alpha resolved 14 tickets across 3 queues in the last 24 hours. Median first response: 6 minutes."
    },
    Tickets: {
      stat: [{ label: "Open", value: "7" }, { label: "Resolved today", value: "14" }],
      blurb: "Most recent: Ticket #4821 for Acme, replied 4m ago. Next digest in 22m."
    },
    Settings: {
      stat: [{ label: "Autonomy", value: "Confirm first" }, { label: "Refund cap", value: "$2,500" }],
      blurb: "Auto-reply is on for known issues. Anything over the refund cap waits for your approval."
    }
  }[tab];
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(ContextMenu, { theme, items: [
    { label: "Edit ticket", icon: "\u270E", shortcut: "\u2318E" },
    { label: "Duplicate", icon: "\u29C9", shortcut: "\u2318D" },
    { separator: true },
    { label: "Close ticket", icon: "\u2715", danger: true }
  ] }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: openContextMenu,
      role: "button",
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openContextMenu(e);
        }
      },
      style: {
        width: 320,
        padding: "28px 32px",
        cursor: "context-menu",
        userSelect: "none",
        background: pal.bgSubtle,
        border: `1px dashed ${pal.borderInput}`,
        borderRadius: tokens.radius.md,
        fontFamily: tokens.font.sans,
        textAlign: "center",
        transition: `background ${motion.smooth} ${motion.easeInOut}, border-color ${motion.smooth} ${motion.easeInOut}`
      }
    },
    /* @__PURE__ */ React.createElement(Text, { size: "sm", weight: "medium", theme, style: { color: pal.textSecondary, display: "block" } }, "Right-click here"),
    /* @__PURE__ */ React.createElement(Caption, { theme, style: { display: "block", marginTop: 4 } }, "A normal click opens the same menu")
  ));
}
function ArchiveMenubar({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Overview");
  const [subtleTab, setSubtleTab] = useState("Inbox");
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const resetStep = () => setStep(0);
  const ctxTimer = useRef(null);
  useEffect(() => () => clearTimeout(ctxTimer.current), []);
  const openContextMenu = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const clientX = e.clientX ?? rect.left + rect.width / 2;
    const clientY = e.clientY ?? rect.top + rect.height / 2;
    clearTimeout(ctxTimer.current);
    ctxTimer.current = setTimeout(() => {
      target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }));
    }, 0);
  };
  const tabContent = {
    Overview: {
      stat: [{ label: "MRR", value: "$142.8k", change: "+8.2%" }, { label: "Credits issued", value: "$3,412", change: "-1.4%" }],
      blurb: "Alpha resolved 14 tickets across 3 queues in the last 24 hours. Median first response: 6 minutes."
    },
    Tickets: {
      stat: [{ label: "Open", value: "7" }, { label: "Resolved today", value: "14" }],
      blurb: "Most recent: Ticket #4821 for Acme, replied 4m ago. Next digest in 22m."
    },
    Settings: {
      stat: [{ label: "Autonomy", value: "Confirm first" }, { label: "Refund cap", value: "$2,500" }],
      blurb: "Auto-reply is on for known issues. Anything over the refund cap waits for your approval."
    }
  }[tab];
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(Menubar, { theme, menus: [
    { label: "File", items: [{ label: "New ticket", shortcut: "\u2318N" }, { label: "Open\u2026", shortcut: "\u2318O" }, { separator: true }, { label: "Save", shortcut: "\u2318S" }] },
    { label: "Edit", items: [{ label: "Undo", shortcut: "\u2318Z" }, { label: "Redo", shortcut: "\u21E7\u2318Z" }] },
    { label: "View", items: [{ label: "Toggle sidebar" }, { label: "Toggle DevTools" }] }
  ] });
}
function ArchiveCommandPalette({ theme }) {
  const pal = usePal(theme);
  const [tab, setTab] = useState("Overview");
  const [subtleTab, setSubtleTab] = useState("Inbox");
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const resetStep = () => setStep(0);
  const ctxTimer = useRef(null);
  useEffect(() => () => clearTimeout(ctxTimer.current), []);
  const openContextMenu = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const clientX = e.clientX ?? rect.left + rect.width / 2;
    const clientY = e.clientY ?? rect.top + rect.height / 2;
    clearTimeout(ctxTimer.current);
    ctxTimer.current = setTimeout(() => {
      target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, cancelable: true, clientX, clientY }));
    }, 0);
  };
  const tabContent = {
    Overview: {
      stat: [{ label: "MRR", value: "$142.8k", change: "+8.2%" }, { label: "Credits issued", value: "$3,412", change: "-1.4%" }],
      blurb: "Alpha resolved 14 tickets across 3 queues in the last 24 hours. Median first response: 6 minutes."
    },
    Tickets: {
      stat: [{ label: "Open", value: "7" }, { label: "Resolved today", value: "14" }],
      blurb: "Most recent: Ticket #4821 for Acme, replied 4m ago. Next digest in 22m."
    },
    Settings: {
      stat: [{ label: "Autonomy", value: "Confirm first" }, { label: "Refund cap", value: "$2,500" }],
      blurb: "Auto-reply is on for known issues. Anything over the refund cap waits for your approval."
    }
  }[tab];
  const row = (label, nodes) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement(Caption, { theme, style: { width: 96, flexShrink: 0, color: pal.textTertiary } }, label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, nodes));
  return React.createElement(CommandPalette, { theme, items: [
    { label: "New ticket", icon: "+", shortcut: "T" },
    { label: "Issue credit", icon: "$", shortcut: "D" },
    { label: "View open tickets", icon: "\u25E7" },
    { label: "Open workflow builder", icon: "\u2726", shortcut: "S" },
    { label: "Sync inbox", icon: "\u27F3" }
  ] });
}
function ArchivePagination({ theme }) {
  const [view, setView] = useState(DEMOTBL_VIEWS[0]);
  const [page, setPage] = useState(1);
  const [dotPage, setDotPage] = useState(2);
  return React.createElement(Pagination, { theme, current: page, total: 8, onChange: setPage });
}
function ArchiveDataTable({ theme }) {
  const [view, setView] = useState(DEMOTBL_VIEWS[0]);
  const [page, setPage] = useState(1);
  const [dotPage, setDotPage] = useState(2);
  return React.createElement(DataTable, { theme, columns: DEMOTBL_COLUMNS, rows: DEMOTBL_ROWS });
}
function ArchiveSnippet({ theme }) {
  const pal = usePal(theme);
  return React.createElement(Snippet, { theme, text: "alpha deploy --workflow triage --dry-run" });
}
function ArchiveFileTree({ theme }) {
  const pal = usePal(theme);
  return React.createElement(FileTree, { theme, data: [
    {
      name: "workflows",
      children: [
        { name: "triage.config.ts", badge: "editing" },
        { name: "escalation.config.ts" },
        { name: "sla.rules.ts" }
      ]
    },
    {
      name: "releases",
      defaultOpen: false,
      children: [
        { name: "release-notes.md" },
        { name: "onboarding-email.ts" }
      ]
    },
    { name: "alpha.config.ts" },
    { name: "README.md" }
  ] });
}
function ArchiveBeforeAfterToggle({ theme }) {
  const pal = usePal(theme);
  const [streamKey, setStreamKey] = useState(0);
  const [stepKey, setStepKey] = useState(0);
  const [step, setStep] = useState(0);
  const [zoom, setZoom] = useState(100);
  useEffect(() => {
    setStep(0);
    const timers = [1, 2, 3, 4].map((n) => setTimeout(() => setStep(n), n * 900));
    return () => timers.forEach(clearTimeout);
  }, [stepKey]);
  return React.createElement(
    BeforeAfterToggle,
    {
      theme,
      before: /* @__PURE__ */ React.createElement(Card, { theme, padding: 16 }, /* @__PURE__ */ React.createElement(Stack, { gap: 4 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Original"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, "Sorry for the trouble, we're looking into it and will get back to you soon."))),
      after: /* @__PURE__ */ React.createElement(Card, { theme, padding: 16 }, /* @__PURE__ */ React.createElement(Stack, { gap: 4 }, /* @__PURE__ */ React.createElement(Caption, { theme }, "Agent rewrite"), /* @__PURE__ */ React.createElement(Text, { size: "sm", theme }, "The calendar sync bug is fixed in 2.14, shipping Thursday. Here's the workaround until then, plus a $180 credit for the outage.")))
    }
  );
}
function ArchiveZoomControl({ theme }) {
  const pal = usePal(theme);
  const [streamKey, setStreamKey] = useState(0);
  const [stepKey, setStepKey] = useState(0);
  const [step, setStep] = useState(0);
  const [zoom, setZoom] = useState(100);
  useEffect(() => {
    setStep(0);
    const timers = [1, 2, 3, 4].map((n) => setTimeout(() => setStep(n), n * 900));
    return () => timers.forEach(clearTimeout);
  }, [stepKey]);
  return React.createElement(ZoomControl, { theme, zoom, onChange: setZoom });
}
const archiveRenderers={"halaska--TextInput":()=>React.createElement(ArchiveTextInput,{theme:'light'}),"halaska--TextArea":()=>React.createElement(ArchiveTextArea,{theme:'light'}),"halaska--SearchInput":()=>React.createElement(ArchiveSearchInput,{theme:'light'}),"halaska--CopyInput":()=>React.createElement(ArchiveCopyInput,{theme:'light'}),"halaska--Select":()=>React.createElement(ArchiveSelect,{theme:'light'}),"halaska--Combobox":()=>React.createElement(ArchiveCombobox,{theme:'light'}),"halaska--Checkbox":()=>React.createElement(ArchiveCheckbox,{theme:'light'}),"halaska--SwitchToggle":()=>React.createElement(ArchiveSwitchToggle,{theme:'light'}),"halaska--RadioGroup":()=>React.createElement(ArchiveRadioGroup,{theme:'light'}),"halaska--SegmentedControl":()=>React.createElement(ArchiveSegmentedControl,{theme:'light'}),"halaska--InputOTP":()=>React.createElement(ArchiveInputOTP,{theme:'light'}),"halaska--Slider":()=>React.createElement(ArchiveSlider,{theme:'light'}),"halaska--SpringSlider":()=>React.createElement(ArchiveSpringSlider,{theme:'light'}),"halaska--SpringToggle":()=>React.createElement(ArchiveSpringToggle,{theme:'light'}),"halaska--Toggle":()=>React.createElement(ArchiveToggle,{theme:'light'}),"halaska--ToggleGroup":()=>React.createElement(ArchiveToggleGroup,{theme:'light'}),"halaska--Choicebox":()=>React.createElement(ArchiveChoicebox,{theme:'light'}),"halaska--DatePicker":()=>React.createElement(ArchiveDatePicker,{theme:'light'}),"halaska--Calendar":()=>React.createElement(ArchiveCalendar,{theme:'light'}),"halaska--Rating":()=>React.createElement(ArchiveRating,{theme:'light'}),"halaska--Tabs":()=>React.createElement(ArchiveTabs,{theme:'light'}),"halaska--SubtleTabs":()=>React.createElement(ArchiveSubtleTabs,{theme:'light'}),"halaska--Accordion":()=>React.createElement(ArchiveAccordion,{theme:'light'}),"halaska--Collapsible":()=>React.createElement(ArchiveCollapsible,{theme:'light'}),"halaska--ContextMenu":()=>React.createElement(ArchiveContextMenu,{theme:'light'}),"halaska--Menubar":()=>React.createElement(ArchiveMenubar,{theme:'light'}),"halaska--CommandPalette":()=>React.createElement(ArchiveCommandPalette,{theme:'light'}),"halaska--Pagination":()=>React.createElement(ArchivePagination,{theme:'light'}),"halaska--DataTable":()=>React.createElement(ArchiveDataTable,{theme:'light'}),"halaska--Snippet":()=>React.createElement(ArchiveSnippet,{theme:'light'}),"halaska--FileTree":()=>React.createElement(ArchiveFileTree,{theme:'light'}),"halaska--BeforeAfterToggle":()=>React.createElement(ArchiveBeforeAfterToggle,{theme:'light'}),"halaska--ZoomControl":()=>React.createElement(ArchiveZoomControl,{theme:'light'}),"halaska--PromptInputPattern":()=>React.createElement(PromptInputPattern,{theme:'light'}),"halaska--MessageThreadPattern":()=>React.createElement(MessageThreadPattern,{theme:'light'}),"halaska--StreamingAnswerPattern":()=>React.createElement(StreamingAnswerPattern,{theme:'light'}),"halaska--AgentChatPattern":()=>React.createElement(AgentChatPattern,{theme:'light'}),"halaska--CodeBlockPattern":()=>React.createElement(CodeBlockPattern,{theme:'light'}),"halaska--ModelContextPattern":()=>React.createElement(ModelContextPattern,{theme:'light'}),"halaska--ThinkingTracePattern":()=>React.createElement(ThinkingTracePattern,{theme:'light'}),"halaska--CitationsPattern":()=>React.createElement(CitationsPattern,{theme:'light'}),"halaska--ConfidencePattern":()=>React.createElement(ConfidencePattern,{theme:'light'}),"halaska--RecommendationPattern":()=>React.createElement(RecommendationPattern,{theme:'light'}),"halaska--FeedbackPattern":()=>React.createElement(FeedbackPattern,{theme:'light'}),"halaska--PlanPreviewPattern":()=>React.createElement(PlanPreviewPattern,{theme:'light'}),"halaska--ApprovalCardPattern":()=>React.createElement(ApprovalCardPattern,{theme:'light'}),"halaska--AutonomyPattern":()=>React.createElement(AutonomyPattern,{theme:'light'}),"halaska--PermissionScopePattern":()=>React.createElement(PermissionScopePattern,{theme:'light'}),"halaska--QueuePattern":()=>React.createElement(QueuePattern,{theme:'light'}),"halaska--AgentStatusPattern":()=>React.createElement(AgentStatusPattern,{theme:'light'}),"halaska--AgentTasksPattern":()=>React.createElement(AgentTasksPattern,{theme:'light'}),"halaska--HandoffPattern":()=>React.createElement(HandoffPattern,{theme:'light'}),"halaska--ActionReceiptPattern":()=>React.createElement(ActionReceiptPattern,{theme:'light'}),"halaska--CheckpointPattern":()=>React.createElement(CheckpointPattern,{theme:'light'}),"halaska--AuditLogPattern":()=>React.createElement(AuditLogPattern,{theme:'light'}),"halaska--ErrorRepairPattern":()=>React.createElement(ErrorRepairPattern,{theme:'light'}),"halaska--ArtifactPattern":()=>React.createElement(ArtifactPattern,{theme:'light'}),"halaska--DiffViewPattern":()=>React.createElement(DiffViewPattern,{theme:'light'}),"halaska--DiffTablePattern":()=>React.createElement(DiffTablePattern,{theme:'light'}),"halaska--StructuredDataPattern":()=>React.createElement(StructuredDataPattern,{theme:'light'}),"halaska--InsightCardsPattern":()=>React.createElement(InsightCardsPattern,{theme:'light'}),"halaska--ComparisonPattern":()=>React.createElement(ComparisonPattern,{theme:'light'}),"halaska--InlineAssistPattern":()=>React.createElement(InlineAssistPattern,{theme:'light'}),"halaska--NudgePattern":()=>React.createElement(NudgePattern,{theme:'light'}),"halaska--DigestPattern":()=>React.createElement(DigestPattern,{theme:'light'}),"halaska--NotificationCenterPattern":()=>React.createElement(NotificationCenterPattern,{theme:'light'}),"halaska--CommandSearchPattern":()=>React.createElement(CommandSearchPattern,{theme:'light'}),"halaska--AgentSetupPattern":()=>React.createElement(AgentSetupPattern,{theme:'light'})};
export function ArchiveHalaska({id,project=false}){useEffect(()=>injectStyles(),[]);return React.createElement(AccentContext.Provider,{value:project?'#64849b':'#555555'},archiveRenderers[id]());}
