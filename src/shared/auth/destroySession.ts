'use server';
import { cookies } from "next/headers";
import { createSessionClient } from "../config/appwrite";


export async function destroySession() {
    const sessionCookie = (await cookies()).get('appwrite-session');

    if(!sessionCookie) {
        return {
            error: 'No session cookie found',
            success: false
        }
    }   
    
    try {
        const { account } = await createSessionClient(sessionCookie.value);

        // Delete session
        await account.deleteSession('current');

        // Clear session cookie
        (await cookies()).delete('appwrite-session');

        return {
            success: true,
            error: ''
        }

    }
    catch(error: unknown) {
        console.log('cannot destroy session', error);
        return {
            error: 'cannot destroy session',
            success: false
        }

    }
}