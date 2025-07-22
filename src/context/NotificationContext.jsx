// src/context/NotificationContext.jsx
import React, { createContext, useContext } from "react";

const NotificationContext = createContext();

export function useNotification() {
    return { showNotification: () => {} };
}

export function NotificationProvider({ children }) {
    return (
        <NotificationContext.Provider value={{ showNotification: () => {} }}>
            <div
                className={`
                    fixed top-8 left-1/2 -translate-x-1/2 z-[99999]
                    px-7 py-4 rounded-2xl shadow-xl
                    font-semibold text-base text-center select-none
                    bg-white/80 dark:bg-zinc-800/85
                    backdrop-blur-lg
                    border border-white/30 dark:border-zinc-700/50
                    transition-all duration-300
                    opacity-100 scale-100 pointer-events-auto
                `}
                style={{
                    minWidth: 220,
                    maxWidth: 420,
                    boxShadow: "0 8px 40px 0 rgba(0,0,0,0.13)",
                    letterSpacing: ".01em",
                    fontWeight: 600,
                    fontSize: 18,
                    background: "rgba(255,255,255,0.82)",
                    color: "#222",
                    backdropFilter: "blur(10px) saturate(1.14)",
                    WebkitBackdropFilter: "blur(10px) saturate(1.14)",
                    border: "1.5px solid rgba(255,255,255,0.28)",
                    wordBreak: "break-word",
                    textAlign: "center"
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        marginRight: 8,
                        filter: "drop-shadow(0 2px 8px #ffd70077)"
                    }}
                >🔒</span>
                DEMO-ONLY
            </div>
            {children}
        </NotificationContext.Provider>
    );
}
