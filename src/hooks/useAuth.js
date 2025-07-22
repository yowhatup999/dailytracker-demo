// src/hooks/useAuth.js
import { useEffect, useState } from "react";

export default function useAuth() {
    const [isReady, setIsReady] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return { isReady, isLoggedIn };
}
