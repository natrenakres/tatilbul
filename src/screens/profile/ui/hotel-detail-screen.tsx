import { HotelCard } from '@/src/entities/hotels/ui/hotel-card';
import { getSingleHotel } from '@/src/entities/hotels/actions/getSingleHotel';
import { MapContainer } from '@/src/entities/hotels/ui/map-container';

interface HotelDetailProps {
  params: Promise<{
    $id: string;
  }>;
}

export async function HotelDetailScreen({ params }: HotelDetailProps) {
  const { $id } = await params;
  const selectedHotel = await getSingleHotel($id);

  return (
    <div className='flex flex-col lg:flex-row gap-4 p-4'>
      <div className='lg:w-1/2 overflow-auto'>
        <HotelCard hotel={selectedHotel} />
      </div>

      <div className='lg:w-1/2 h-[400px] lg:h-screen'>
        <MapContainer hotel={selectedHotel} />
      </div>
    </div>
  );
}
