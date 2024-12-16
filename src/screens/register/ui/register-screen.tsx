'use client';

import { useActionState, useEffect } from "react"
import { createUser } from "../actions/createUser"
import { useRouter } from "next/navigation";
import { Button } from "@/src/shared/ui/button";
import Link from "next/link";


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
        
    <main className="mx-auto max-w-7xl h-[80vh] px-4 py-6 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
        <form action={action}>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2"
              >Password</label
            >
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-bold mb-2"
              >Confirm Password</label
            >
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <Button type="submit">
              Register
            </Button>
            <p>
              <span className="px-2">Have an account?</span>
              <Link className="text-primary" href="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </main>
    )
}