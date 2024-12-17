'use server';
import { createAdminClient } from "@/src/shared/config/appwrite";
import { redirect } from "next/navigation";
import { Hotel } from "../model";


export async function getSingleHotel(id: string): Promise<Hotel> {
    try {
        const { databases } = await createAdminClient();

        // fetch hotels
        const hotelDoc = await databases.getDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!, 
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_HOTELS!, 
            id
        )       

        const hotel: Hotel = {
            name: hotelDoc.name,
            description: hotelDoc.description,
            address: hotelDoc.address,
            image: hotelDoc.image,
            star: hotelDoc.star,
            latitude: hotelDoc.latitude,
            longitude: hotelDoc.longitude,
        };

        return hotel;
    }
    catch(error: unknown) {
        console.log("Failed to get hotel", error);
        redirect('/error');
    }
}
