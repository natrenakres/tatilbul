'use server';
import { createAdminClient } from "@/src/shared/config/appwrite";
import { redirect } from "next/navigation";
import { Hotel } from "../model";
import auth from "@/src/shared/auth/auth";
import { Query } from "node-appwrite";


export async function getSingleHotel(id: string): Promise<Hotel | null> {
    try {
        const { databases } = await createAdminClient();
        const user = await auth.getUser();

        if(!user) {
            return null;
        }

        // fetch hotel
        const userDocuments = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE!, 
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_HOTELS!,
            [Query.equal('user_id', user.$id), Query.equal('$id', id)]
        );
        
        if (userDocuments.total > 0) {
            const hotelDoc = userDocuments.documents[0]; // get first document
            
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

        console.log('Document not found.');
        return null;        
    }
    catch(error: unknown) {
        console.log("Failed to get hotel", error);
        redirect('/error');
    }
}
