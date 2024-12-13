import { getAllHotels } from "@/src/entities/hotels/actions/getAllHotels"
import Link from "next/link";

export async function ProfileScreen() {
    const hotels = await getAllHotels();


    return (
        <div>
            <h2>My Profile</h2>
            <section>
                <h3>My Hotels</h3>
                <ul>
                {
                    hotels.map(hotel => (
                        <li key={hotel.$id}>
                            <Link href={`/profile/hotels/${hotel.$id}`}>
                                {hotel.name}                            
                            </Link>
                        </li>        
                    ))
                }
            </ul>
            </section>
        </div>
    )

}

