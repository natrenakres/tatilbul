'use client';

import { ReactNode } from "react";
import { AuthProvider } from "../context/authContext";


export function AuthWrapper({children}: { children: ReactNode}) {

    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}