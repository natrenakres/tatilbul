'use server';
import { createAdminClient } from "@/src/shared/config/appwrite";
import { redirect } from "next/navigation";

import { ID } from "node-appwrite";

export interface CreateUserFormState {    
    error?: string | undefined | null
}

export async function registerWithEmail(previousState: CreateUserFormState, formData: FormData) : Promise<CreateUserFormState> {
    const email = formData.get('email');
    const name = formData.get('name');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');

    if(!email || !name || !password) {
        return {            
            error: "Please fill in all fields"
        }
    }

    if(password.toString() !== confirmPassword?.toString()) {
        return {            
            error: 'Passwords do not match'
        }
    }

    const { account } = await createAdminClient();

    try {
        await account.create(
            ID.unique(), 
            email.toString(), 
            password.toString(), 
            name.toString());
    }
    catch (error: unknown) {
        console.log('Registeration error', error);
        return {            
            error: 'Could not register user'
        }
    }

    redirect('/');

}


