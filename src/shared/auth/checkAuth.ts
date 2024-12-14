'use server';

import { User } from "@/src/entities/users/model";
import { createSessionClient } from "../config/appwrite";
import { cookies } from "next/headers";


export interface AuthResult {
    isAuthenticated: boolean,
    user?: User
}


export async function checkAuth() : Promise<AuthResult> {
    const sessionCookie = (await cookies()).get('appwrite-session');
    if(!sessionCookie) {
        return {
            isAuthenticated: false
        }
    }

    try {
        const { account} = await createSessionClient(sessionCookie.value);
        const user = await account.get();

        return {
            isAuthenticated: true,
            user: {
                id: user.$id,
                name: user.name,
                email: user.email
            }
        }
    }
    catch(error: unknown) {
        console.log("Check auth has a erorr", error);
        return {
            isAuthenticated: false
        }
    }


}
