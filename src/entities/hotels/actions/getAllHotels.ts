'use server';
import { createAdminClient } from "@/src/shared/config/appwrite";
import { redirect } from "next/navigation";
import { HotelRecord } from "../model";


export async function getAllHotels(): Promise<HotelRecord[]> {
    try {
        const { databases } = await createAdminClient();

        // fetch hotels
        const { documents} = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!, 
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_HOTELS!, 
        )       

        return documents.map<HotelRecord>(document => {
            const hotel: HotelRecord = {
                id: document.$id,
                name: document.name,
                star: document.star,
                address: document.address,
                description: document.description,
                image: document.image,                
            }

            return hotel;
        });
    }
    catch(error: unknown) {
        console.log("Failed to get hotels", error);
        redirect('/error');
    }
}
