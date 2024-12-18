import { getAllHotels } from "@/src/entities/hotels/actions/getAllHotels";
import { HotelCard } from "@/src/entities/hotels/ui/hotel-card";
import { TheHeading } from "@/src/shared/components/the-heading";
import Link from "next/link";

export async function HotelsScreen() {
  const hotels = await getAllHotels();

  return (
    <>
      <TheHeading>
        My Hotel Listings        
      </TheHeading>
      <section className='bg-white shadow rounded-lg p-6'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {hotels.map((hotel) => (
            <li key={hotel.id}>
              <Link href={`/hotels/${hotel.id}`}>
                <HotelCard hotel={hotel}></HotelCard>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
