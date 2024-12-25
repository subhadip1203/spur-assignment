"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useAuth() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Check for user session in localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            // Redirect to login if not authenticated
            router.push("/auth");
        }
    }, [router]);

    return user;
}
