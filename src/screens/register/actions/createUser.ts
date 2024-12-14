'use server';
import { createAdminClient } from "@/src/shared/config/appwrite";
import { ID } from "node-appwrite";

export interface CreateUserFormState {
    success: boolean,
    errror?: string | undefined
}

export async function createUser(previousState: CreateUserFormState, formData: FormData) {
    const email = formData.get('email');
    const name = formData.get('name');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');

    if(!email || !name || !password) {
        return {
            success: false,
            error: "Please fill in all fields"
        }
    }

    if(password.toString() !== confirmPassword?.toString()) {
        return {
            success: false,
            error: 'Passwords do not match'
        }
    }

    const { account } = await createAdminClient();

    try {
        await account.create(ID.unique(), email.toString(), password.toString(), name.toString())

        return {
            success: true
        }
    }
    catch (error: unknown) {
        console.log('Registeration error', error);
        return {
            success: false,
            error: 'Could not register user'
        }
    }

    




}


