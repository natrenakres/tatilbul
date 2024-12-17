import { getAllHotels } from '@/src/entities/hotels/actions/getAllHotels';
import { HotelCard } from '@/src/entities/hotels/ui/hotel-card';
import Link from 'next/link';

export async function ProfileScreen() {
  const hotels = await getAllHotels();

  return (
    <>
      <h2 className='text-lg'>My Profile</h2>
      <section>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {hotels.map((hotel) => (
            <li key={hotel.id}>
              <Link href={`/profile/hotels/${hotel.id}`}>
                <HotelCard hotel={hotel}></HotelCard>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
