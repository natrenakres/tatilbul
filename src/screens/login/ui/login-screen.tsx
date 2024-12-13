'use client';

import { createSession } from "@/src/shared/auth/createSession"
import { useActionState } from "react"

const initialState = {
    message: ''
}

export function LoginScreen() {
    const [state, formAction] = useActionState(createSession, initialState);


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
                <p>Last submission request returned: {state.message}</p>
                <button>Login</button>
            </form>
        </section>
    )
}