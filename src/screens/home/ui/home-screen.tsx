import { Button } from "@/src/shared/ui/button";


export async function HomeScreen() {
    

    

    return (
        <>
            <h1>Home Screen</h1>
            <Button>Start</Button>
            <div className="bg-background text-foreground">
                Bu div, yeni arka plan rengine sahip!
            </div>
            <div className="bg-[hsl(211,95%,54%)] text-[hsl(240,10%,3.9%)]">
                Bu div, elle tanımlanmış HSL rengini kullanıyor!
            </div>
        </>
    )
}


