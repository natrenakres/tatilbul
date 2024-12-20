import { TheImage } from "@/src/shared/components/the-image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa"
import { Hotel } from "../model";
import { MapContainer } from "./map-container";
import { HotelStars } from "./hotel-stars";

export function HotelDetail( { hotel } : { hotel: Hotel | undefined | null}) {
  return (
    <div className='bg-white shadow rounded-lg p-6'>
      <Link href='/hotels' className='flex items-center text-gray-600 hover:text-gray-800 mb-4'>
        <FaChevronLeft />
        <span className='ml-2'>Back to Hotels</span>
      </Link>

      <div className='flex flex-col sm:flex-row sm:space-x-6'>
        <TheImage
          src={hotel?.image}
          alt='Grand Conference Hall'
          css='w-full sm:w-1/3 h-64 object-cover rounded-lg'
        />

        <div className='mt-4 sm:mt-0 sm:flex-1'>
          <p className='text-gray-600 mb-4'>
            {hotel?.description}
          </p>

          <ul className='space-y-2'>
            <li>              
              <HotelStars star={hotel?.star} />
            </li>            
            <li>
              <span className='font-semibold text-gray-800'>Address:</span> {hotel?.address}
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-6'>
        <MapContainer hotel={hotel} />
      </div>
    </div>
  );
}
