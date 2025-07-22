// src/main.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./styles/index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { UserProvider } from "./hooks/UserContext.jsx";
import { NotificationProvider, useNotification } from "./context/NotificationContext.jsx";
import StatModal from "./components/StatModal.jsx";

function DemoNotifier() {
    const { showNotification } = useNotification();
    useEffect(() => {
        const interval = setInterval(() => {
            showNotification("DEMO only – Nur Ansicht, keine Anmeldung!");
        }, 10000);
        return () => clearInterval(interval);
    }, [showNotification]);
    return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NotificationProvider>
            <DemoNotifier />
            <UserProvider>
                <ModalProvider>
                    <>
                        <RouterProvider router={router} />
                        <StatModal />
                    </>
                </ModalProvider>
            </UserProvider>
        </NotificationProvider>
    </React.StrictMode>
);
