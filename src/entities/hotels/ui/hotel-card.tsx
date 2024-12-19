import { Card, CardHeader, CardContent } from "@/src/shared/ui/card";

import { Hotel } from "../model";
import { TheImage } from "@/src/shared/components/the-image";
import { HotelStars } from "./hotel-stars";

interface HotelCardProps {
    hotel: Hotel
}

export function HotelCard({ hotel} : HotelCardProps) {
    return (
        <Card className="w-full mb-4 max-h-[500px]">
            <CardHeader>            
                <TheImage src={hotel.image} alt={hotel.name} />
                <h2 className="text-lg font-semibold mt-2">{hotel.name}</h2>                     
                <HotelStars star={hotel.star} />
            </CardHeader>
            <CardContent>
                <p className="text-gray-700 line-clamp-3">{hotel.description}</p>                
            </CardContent>
        </Card>
    )
}
