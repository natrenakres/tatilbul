'use client';

import { useActionState, useEffect } from "react"
import { createUser } from "../actions/createUser"
import { useRouter } from "next/navigation";


export function RegisterScreen() {
    const [state, action] = useActionState(createUser, { success: false})
    const router = useRouter();

    useEffect(()=> {
        if(state.success) {
            console.log('Register successed. You can login');
            router.push('/login');
        }

    }, [state])

    return (
        <section>
            <h1>Register</h1>
            <hr style={{border: 'solid 1px blue'}} />
            <form action={action}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
                <hr />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
                <hr />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
                <hr />
                <label htmlFor="confirm-password">Password</label>
                <input type="password" name="confirm-password" id="confirm-password" required />
                <hr />
                {
                    state.error && <p>{state.error}</p>
                }
                <button>Register</button>
            </form>
        </section>
    )
}