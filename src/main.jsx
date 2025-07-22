// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { UserProvider } from "./hooks/UserContext.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import StatModal from "./components/StatModal.jsx";

import AppLayout from "./layouts/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import Logout from "./pages/Logout.jsx";
import RootRedirect from "./pages/RootRedirect.jsx";
import AddEntry from "./pages/AddEntry.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NotificationProvider>
            <UserProvider>
                <ModalProvider>
                    <HashRouter>
                        <Routes>
                            <Route path="/" element={<AppLayout />}>
                                <Route index element={<RootRedirect />} />
                                <Route path="dashboard" element={<Dashboard />} />
                                <Route path="settings" element={<Settings />} />
                                <Route path="profile" element={<Profile />} />
                                <Route path="add-entry" element={<AddEntry />} />
                                <Route path="logout" element={<Logout />} />
                            </Route>
                            <Route path="/login" element={
                                <AuthLayout>
                                    <Login />
                                </AuthLayout>
                            } />
                            <Route path="/signup" element={
                                <AuthLayout>
                                    <Signup />
                                </AuthLayout>
                            } />
                        </Routes>
                        <StatModal />
                    </HashRouter>
                </ModalProvider>
            </UserProvider>
        </NotificationProvider>
    </React.StrictMode>
);
