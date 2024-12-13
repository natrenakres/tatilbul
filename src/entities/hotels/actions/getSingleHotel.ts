'use server';
import { createAdminClient } from "@/src/shared/config/appwrite";
import { redirect } from "next/navigation";


export async function getSingleHotel(id: string) {
    try {
        const { databases } = await createAdminClient();

        // fetch hotels
        const hotel = await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!, 
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_HOTELS!, 
            id
        )       

        return hotel;
    }
    catch(error: unknown) {
        console.log("Failed to get hotel", error);
        redirect('/error');
    }
}
