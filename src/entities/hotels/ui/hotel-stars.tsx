import { Star } from "lucide-react";


export function HotelStars({ star } : { star: number | undefined}) {
    
    if(star === undefined || star === 0) {
        return null;
    }

    return (
        <div className="flex items-center text-yellow-500">
            {
                Array.from({length: star}, (_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                ))
            }
        </div>
    )

}