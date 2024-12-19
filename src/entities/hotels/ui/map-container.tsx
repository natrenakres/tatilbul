"use client"

import { Hotel } from '@/src/entities/hotels/model'

import dynamic from "next/dynamic";

// HotelMap'i SSR olmadan yükle
const HotelMap = dynamic(() => import('@/src/entities/hotels/ui/hotel-map'), {
    ssr: false,
    loading: () => <p>Loading map...</p>,
});

interface MapContainerProps {
    hotel: Hotel | undefined
}


export function MapContainer({ hotel } : MapContainerProps)  {
  

    return (
        <div className='bg-white p-4 shadow-md rounded-md '>
            <HotelMap
                latitude={hotel?.latitude}
                longitude={hotel?.longitude}
                name={hotel?.name}
                zoom={13}
              />
        </div>
    )

}