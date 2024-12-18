/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import auth from "@/src/shared/auth/auth";
import { createAdminClient } from "@/src/shared/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ID, Models } from "node-appwrite";


export async function addHotel(state: any, formData: FormData) {
    const data = Object.fromEntries(formData);
    const { databases } = await createAdminClient();
    const user = await auth.getUser();
    const { name,address, description, image, latitude, longitude, link, star  } = data;
    let newHotel: Models.Document;

    try {
         newHotel = await databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_HOTELS!,
            ID.unique(), {
                user_id: user?.$id,
                name,
                address,
                description,
                image, 
                latitude: parseFloat(latitude.toString()),
                longitude: parseFloat(longitude.toString()),
                link, 
                star: parseInt(star.toString())
            }
        );

        revalidatePath('/hotels', 'layout')        
    } 
    catch(error: any) {
        console.log(error);
        const errorMessage =  error?.response.message || 'An unexpected error has occured';
        return {
            error: errorMessage,
        };
    }

    redirect(`/hotels/${newHotel.$id}`);
}