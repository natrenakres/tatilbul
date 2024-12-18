import { Hotel } from "../model";
import { LuBookHeart  } from "react-icons/lu"
import { SubmitButton } from "@/src/shared/components/submit-button";
import { useActionState } from "react";
import { addHotel } from "../actions/addHotel";


export function AddFavoriteButton({hotel}: { hotel: Hotel | null | undefined}) {
    const [state, action] = useActionState(addHotel, { error: null })    

    return (
        <form action={action}>
            <input type="hidden" name="name" value={hotel?.name} />
            <input type="hidden" name="address" value={hotel?.address} />
            <input type="hidden" name="description" value={hotel?.description} />
            <input type="hidden" name="image" value={hotel?.image} />
            <input type="hidden" name="latitude" value={hotel?.latitude} />
            <input type="hidden" name="longitude" value={hotel?.longitude} />
            <input type="hidden" name="link" value={hotel?.link} />
            <input type="hidden" name="star" value={hotel?.star} />
            {
                state.error && <p className="text-red-500">{state.error}</p>
            }
            <SubmitButton>
                <LuBookHeart size={'2rem'} />
                Add Favorite 
            </SubmitButton>
        </form>
    )
}