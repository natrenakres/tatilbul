import { Button } from "@/src/shared/ui/button";
import { Hotel } from "../../hotels/model";
import { LuBookHeart  } from "react-icons/lu"




export function AddFavoriteButton({hotel}: { hotel: Hotel}) {


    function handleAddFavorite() {
        console.log(hotel);
    }

    return (
        <Button onClick={()=> handleAddFavorite()}>
            <LuBookHeart size={'2rem'} />
            Add Favorite 
        </Button>
    )
}