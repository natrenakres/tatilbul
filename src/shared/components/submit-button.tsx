'use client';

import { ReactNode } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";



export function SubmitButton({children} : { children: ReactNode}) {
    const { pending } = useFormStatus()
    return (
        <Button type='submit' className="w-full" disabled={pending}>
            {children}
        </Button>
    )
}