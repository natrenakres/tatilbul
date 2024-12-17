'use server';

import { createAdminClient } from '../config/appwrite';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { LoginResult } from './model';
import { redirect } from 'next/navigation';

const loginSchema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
});

export async function createSession(
  state: LoginResult,
  formData: FormData
): Promise<LoginResult> {
  const { email, password } = Object.fromEntries(formData);

  const validatedFields = loginSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Get Account instance
  const { account } = await createAdminClient();

  try {
    // Generate Session
    const session = await account.createEmailPasswordSession(
      email.toString(),
      password.toString()
    );

    // Create cookies
    (await cookies()).set('appwrite-session', session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      expires: new Date(session.expire),
      path: '/',
    });
    
  } catch (error: unknown) {
    console.log(error);
    return {
      errors: { email: ['Login process has an error. Check email and password try again.'] },
    };
  }

  redirect('/');
}
