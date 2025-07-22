// src/pages/AddEntry.jsx
import React, { useState } from "react";
import AnimatedBorder from "../components/AnimatedBorder.jsx";
import AddSupplementForm from "../components/AddSupplementForm.jsx";
import AddCustomEntryForm from "../components/AddCustomEntryForm.jsx";
import AddDailyEntryForm from "../components/AddDailyEntryForm.jsx";

export default function AddEntry() {
    const [entryType, setEntryType] = useState("supplement");

    return (
        <div className="flex min-h-[80vh] items-start justify-center">
            <div className="mt-28">
                <AnimatedBorder className="max-w-md mx-auto">
                    <div className="glow-inner p-8 space-y-8 text-center">
                        <h2 className="text-3xl font-semibold text-center text-zinc-900 dark:text-white">
                            Neuen Eintrag hinzufügen
                        </h2>
                        <select
                            value={entryType}
                            onChange={e => setEntryType(e.target.value)}
                            className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-black dark:text-white focus:ring-blue-500 mb-4"
                        >
                            <option value="supplement">Supplement</option>
                            <option value="custom">Custom Entry</option>
                            <option value="daily">Daily Entry</option>
                        </select>
                        {entryType === "supplement" && <AddSupplementForm />}
                        {entryType === "custom" && <AddCustomEntryForm />}
                        {entryType === "daily" && <AddDailyEntryForm />}
                        <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
                            <a href="/dashboard" className="text-blue-500 hover:underline font-semibold">
                                Zurück zum Dashboard
                            </a>
                        </div>
                    </div>
                </AnimatedBorder>
            </div>
        </div>
    );
}