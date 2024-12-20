import { getAllHotels } from "@/src/entities/hotels/actions/getAllHotels";
import { HotelCard } from "@/src/entities/hotels/ui/hotel-card";
import { TheHeading } from "@/src/shared/components/the-heading";
import { Alert, AlertDescription } from "@/src/shared/ui/alert";
import Link from "next/link";

export async function HotelsScreen() {
  const hotels = await getAllHotels();

  return (
    <>
      <TheHeading>
        My Hotel Listings        
      </TheHeading>
      <section className='bg-white shadow rounded-lg p-6'>        
        {
          hotels.length > 0 ? 
              <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {hotels.map((hotel) => (
                  <li key={hotel.id}>
                    <Link href={`/hotels/${hotel.id}`}>
                      <HotelCard hotel={hotel}></HotelCard>
                    </Link>
                  </li>
                ))}
              </ul>
              : <Alert>
              <AlertDescription>
                <p>Cannot find any hotel. In order to add your first hotel go <Link href="/chat">Chat page</Link> then ask your ai assitant and click add favorite button</p>
              </AlertDescription>
            </Alert>

        }
      </section>
    </>
  );
}
