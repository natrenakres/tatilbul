'use client';

import { createSession } from '@/src/shared/auth/createSession';
import { useAuth } from '@/src/shared/context/authContext';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { Button } from '@/src/shared/ui/button';
import Link from "next/link";

const initialState = {
  error: '',
  success: false,
};

export function LoginScreen() {
  const [state, formAction] = useActionState(createSession, initialState);
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();

  useEffect(() => {
    if (state.success) {
      console.log('Authentication is success');
      setIsAuthenticated(true);
      router.push('/');
    }
  }, [state]);

  return (
    <main className='mx-auto max-w-7xl h-[80vh] px-4 py-6 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20'>
          <form action={formAction}>
            <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
              Login
            </h2>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='border rounded w-full py-2 px-3'
                required
              />
            </div>

            <div className='mb-6'>
              <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='border rounded w-full py-2 px-3'
                required
              />
            </div>

            <div className='flex flex-col gap-5'>
              <Button type='submit' className="w-full">
                Login
              </Button>
              <div>
                No account?
                <Link href='/register'>
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
