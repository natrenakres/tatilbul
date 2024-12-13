import { getSingleHotel } from "@/src/entities/hotels/actions/getSingleHotel"


interface HotelDetailProps{
    params: Promise<{
        $id: string
    }>
}

export async function HotelDetailScreen({ params }: HotelDetailProps) {
    const { $id } = await params;
    const hotel = await getSingleHotel($id);

    return (
        <p>
            {hotel.name}
        </p>
    )
}