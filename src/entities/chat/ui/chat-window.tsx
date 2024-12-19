import { LuUserRound, LuBot, LuBedDouble, LuMapPinHouse, LuSend } from "react-icons/lu";
import { AddFavoriteButton } from "../../hotels/ui/add-favorite-button";
import { HotelStars } from "../../hotels/ui/hotel-stars";
import { ChatWindowProps } from "../model";
import Link from "next/link";
import { Button } from "@/src/shared/ui/button";


export function ChatWindow({ hotel, prompt, onNewChat }: ChatWindowProps) {


    return (
        <div className={hotel ?  'chat' : 'hidden'}>
          <div className='flex items-center gap-4'>
            <LuUserRound size="2rem" /> 
            <p>{prompt}</p>
          </div>
          <hr className='my-4' />
          <div>
              <div className='flex items-center gap-4'>
                <LuBot size='2rem' />
                <p>Certainly! Here is a good option:</p>
              </div>
              <div className='p-4'>
                 <Link href={hotel?.link ?? "/"} className='flex items-center gap-1 font-bold'> 
                    <LuBedDouble /> {hotel?.name} <HotelStars star={hotel?.star} />:
                 </Link>
                 <p>{hotel?.description}</p>
                 <address className='flex items-center font-bold gap-3'>
                   <LuMapPinHouse />{hotel?.address} 
                 </address>
              </div>
              <div className="buttons flex items-center gap-4">
                <div className='w-1/2'>
                  <AddFavoriteButton hotel={hotel} />
                </div>
                <div className='w-1/2'>                    
                    <Button onClick={() => onNewChat()} className="w-full">
                        <LuSend /> New Chat
                    </Button>                    
                </div>
              </div>
          </div>
        </div>
    )



}