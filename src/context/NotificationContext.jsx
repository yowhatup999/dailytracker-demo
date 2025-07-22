// src/context/NotificationContext.jsx
import React, { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext();

export function useNotification() {
    return useContext(NotificationContext);
}

export function NotificationProvider({ children }) {
    const [notification, setNotification] = useState(null);
    const [visible, setVisible] = useState(false);

    const showNotification = useCallback((_, duration = 4000) => {
        setNotification("🔒 DEMO-ONLY");
        setVisible(true);
        setTimeout(() => setVisible(false), duration);
        setTimeout(() => setNotification(null), duration + 500);
    }, []);

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notification && (
                <div
                    className={`
                        fixed top-8 left-1/2 -translate-x-1/2 z-[99999]
                        px-7 py-4 rounded-2xl shadow-xl
                        font-semibold text-base text-center select-none
                        bg-white/80 dark:bg-zinc-800/85
                        backdrop-blur-lg
                        border border-white/30 dark:border-zinc-700/50
                        transition-all duration-300
                        ${visible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
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
                            transition: "transform 0.35s cubic-bezier(.4,2,.2,1)",
                            transform: visible ? "scale(1.2) rotate(-8deg)" : "scale(1)",
                            filter: "drop-shadow(0 2px 8px #ffd70077)"
                        }}
                    >🔒</span>
                    DEMO-ONLY
                </div>
            )}
        </NotificationContext.Provider>
    );
}
