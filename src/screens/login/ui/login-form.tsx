'use client';

import { createSession } from '@/src/shared/auth/createSession';
import { SubmitButton } from '@/src/shared/components/submit-button';
import Link from 'next/link';
import { useActionState } from 'react';

export default function LoginForm() {
  const [state, formAction] = useActionState(createSession, { errors: null });

  return (
    <form action={formAction}>
      <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
        Login
      </h2>
      {
        state && state.errors?.email?.map((e, index) => <p className='text-red-400' key={index}>{e}</p>)
      }
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='border rounded w-full py-2 px-3'
          defaultValue='serkan.ertan88@gmail.com'
          required
        />
      </div>

      <div className='mb-6'>
        <label
          htmlFor='password'
          className='block text-gray-700 font-bold mb-2'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          defaultValue='1q2w3e4R!'
          className='border rounded w-full py-2 px-3'
          required
        />
      </div>

      <div className='flex flex-col gap-5'>
        <SubmitButton>Login</SubmitButton>
        <p>
          <span className='px-2'>No account?</span>
          <Link className='text-primary' href='/register'>
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
