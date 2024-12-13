'use server';
import { createAdminClient } from "@/src/shared/config/appwrite";
import { redirect } from "next/navigation";


export async function getAllHotels() {
    try {
        const { databases } = await createAdminClient();

        // fetch hotels
        const { documents: hotels} = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!, 
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_HOTELS!, 
        )       

        return hotels;
    }
    catch(error: unknown) {
        console.log("Failed to get hotels", error);
        redirect('/error');
    }
}
