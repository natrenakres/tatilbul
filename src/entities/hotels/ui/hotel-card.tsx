import { Card, CardHeader, CardContent } from "@/src/shared/ui/card";
import { Star } from "lucide-react";
import { Hotel } from "../model";
import { TheImage } from "@/src/shared/components/the-image";

interface HotelCardProps {
    hotel: Hotel
}

export function HotelCard({ hotel} : HotelCardProps) {
    return (
        <Card className="w-full mb-4">
            <CardHeader>            
                <TheImage src={hotel.image} alt={hotel.name} />
                <h2 className="text-lg font-semibold mt-2">{hotel.name}</h2>                     
                <div className="flex items-center text-yellow-500">
                    {
                        Array.from({length: hotel.star}, (_, index) => (
                            <Star key={index} size={16} fill="currentColor" />
                        ))
                    }
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700">{hotel.description}</p>
                <p className="text-sm text-gray-500 mt-2">{hotel.address}</p>
            </CardContent>
        </Card>
    )
}
