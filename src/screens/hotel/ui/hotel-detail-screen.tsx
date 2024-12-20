import { getSingleHotel } from '@/src/entities/hotels/actions/getSingleHotel';
import { HotelDetail } from '@/src/entities/hotels/ui/hotel-detail';
import { TheHeading } from '@/src/shared/components/the-heading';
import { Alert, AlertDescription } from '@/src/shared/ui/alert';
import Link from 'next/link';

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
      {selectedHotel ? (
        <>
          <TheHeading>{selectedHotel?.name}</TheHeading>
          <HotelDetail hotel={selectedHotel} />
        </>
      ) : (
        <Alert>
          <AlertDescription>
            <p>Cannot find a hotel. Please select your hotel from <Link href="/hotels">Hotels page</Link></p>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}
