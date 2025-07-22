// src/services/api.js

export function formatDateToGerman(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}.${month}.${year}`;
}

// === Auth ===
export const loginUser = async (email, password) => {
    return {
        accessToken: "demo-access-token",
        refreshToken: "demo-refresh-token",
        username: "DemoUser",
        email: "demo@example.com",
    };
};

export const registerUser = async (email, password) => {
    return "Registrierung im DEMO-Modus nicht möglich";
};

export const refreshToken = async () => {
    return "demo-access-token";
};

// === DailyEntry ===
export const createDailyEntry = async (data) => {
    return { success: true, ...data };
};

export const patchDailyEntry = async (id, data) => {
    return { success: true, id, ...data };
};

export const getTodayDailyEntry = async () => {
    return {
        id: 1,
        datum: "2025-07-22",
        wetter_status: "Sonne",
        wetterTemp: 25,
        wetterLuftdruck: 1012,
        mondphase: "Vollmond",
        eintraege: [],
    };
};

// === SupplementEntry ===
export const createSupplementEntry = async (dailyEntryId, data) => {
    return { success: true, dailyEntryId, ...data };
};

export const patchSupplementEntry = async (id, data) => {
    return { success: true, id, ...data };
};

// === CustomEntry ===
export const createCustomEntry = async (dailyEntryId, data) => {
    return { success: true, dailyEntryId, ...data };
};

export const patchCustomEntry = async (id, data) => {
    return { success: true, id, ...data };
};

// === SupplementDefinition ===
export const createSupplementDefinition = async (data) => {
    return { success: true, ...data };
};

export const getSupplementDefinitions = async () => {
    return [];
};

// === CustomDefinition ===
export const createCustomDefinition = async (data) => {
    return { success: true, ...data };
};

// === Dashboard Info ===
export const getDashboardInfo = async () => {
    return {
        username: "DemoUser",
        weather: { temp: 25, status: "Sonne" },
        moon: { phase: "Vollmond" },
    };
};
