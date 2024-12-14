'use server';

import { createAdminClient } from "../config/appwrite";
import { cookies } from "next/headers";


export async function createSession(previousState: { error: string, success: boolean}, formData: FormData) {
    const email =  formData.get('email');
    const password = formData.get('password');

    if(!email || !password) {
        return {
            error: 'Please fill out all fields',
            success: false
        }
    }

    // Get Account instance
    const { account } = await createAdminClient();

    try {
        // Generate Session
        const session = await account.createEmailPasswordSession(email.toString(), password.toString());
        
        // Create cookies
        (await cookies()).set('appwrite-session', session.secret, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            expires: new Date(session.expire),
            path: '/'
        });

        return {
            success: true,
            error: ''
        }
    }
    catch(error: unknown){
        console.log('Authentication Error', error);
        return {
            error: 'Invalid Credentials',
            success: false
        }
    }
}

