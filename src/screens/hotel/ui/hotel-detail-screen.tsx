import { getSingleHotel } from '@/src/entities/hotels/actions/getSingleHotel';
import { HotelDetail } from '@/src/entities/hotels/ui/hotel-detail';
import { TheHeading } from '@/src/shared/components/the-heading';

interface HotelDetailProps {
  params: Promise<{
    $id: string;
  }>;
}

export async function HotelDetailScreen({ params }: HotelDetailProps) {
  const { $id } = await params;
  const selectedHotel = await getSingleHotel($id);

  return (
    <>
      <TheHeading>
          {selectedHotel.name}        
      </TheHeading>
      <HotelDetail hotel={selectedHotel} />
    </>
  );
}
