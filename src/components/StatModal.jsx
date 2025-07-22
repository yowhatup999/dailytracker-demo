// src/components/StatModal.jsx
import React from "react";
import { useModal } from "../context/ModalContext.jsx";
import AnimatedBorder from "./AnimatedBorder.jsx";
import StatContentSteps from "./statContent/StatContentSteps.jsx";
import StatContentWater from "./statContent/StatContentWater.jsx";
import StatContentSupplement from "./statContent/StatContentSupplement.jsx";
import StatContentCustom from "./statContent/StatContentCustom.jsx";
import AddEntryModalContent from "./AddEntryModalContent.jsx";

export default function StatModal({ refreshDashboard, onLocalUpdate }) {
    const { modalData, closeModal } = useModal();
    if (!modalData) return null;

    const refreshAndClose = async () => {
        if (refreshDashboard) await refreshDashboard();
        await new Promise((resolve) => setTimeout(resolve, 300));
        closeModal();
    };

    const commonProps = {
        data: modalData,
        refresh: refreshAndClose,
        onLocalUpdate: modalData?.onLocalUpdate || (() => {}),
    };

    const renderContent = () => {
        switch (modalData.type) {
            case "steps":
                return <StatContentSteps {...commonProps} />;
            case "water":
                return <StatContentWater {...commonProps} />;
            case "supplement":
                return <StatContentSupplement {...commonProps} />;
            case "custom":
                return <StatContentCustom {...commonProps} />;
            case "create-entry":
                return <AddEntryModalContent onClose={closeModal} />;
            default:
                return <p>Unbekannter Typ</p>;
        }
    };

    return (
        <div
            id="modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[2px] dark:bg-black/30"
            onClick={(e) => e.target.id === "modal-backdrop" && closeModal()}
        >
            <div className="w-full max-w-md p-4">
                <AnimatedBorder>
                    <div className="glow-inner p-6 space-y-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg">
                        {renderContent()}
                        <div className="mt-8 text-right">
                            <button
                                onClick={closeModal}
                                className="text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition"
                            >
                                Schließen
                            </button>
                        </div>
                    </div>
                </AnimatedBorder>
            </div>
        </div>
    );
}