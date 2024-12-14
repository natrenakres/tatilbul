'use client';

import { createSession } from "@/src/shared/auth/createSession"
import { useAuth } from "@/src/shared/context/authContext";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react"

const initialState = {
    error: '',
    success: false
}

export function LoginScreen() {
    const [state, formAction] = useActionState(createSession, initialState);
    const router = useRouter();
    const { setIsAuthenticated } = useAuth();

    useEffect(()=>{
        if(state.success) {
            console.log('Authentication is success');
            setIsAuthenticated(true);
            router.push('/');            
        }
    }, [state]);

    return (
        <section>
            <h2>Login</h2>            
            <form action={formAction}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
                <hr />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
                <hr />    
                {
                    state.error && <p>Last submission request returned: {state.error}</p>
                }            
                <button>Login</button>
            </form>
        </section>
    )
}