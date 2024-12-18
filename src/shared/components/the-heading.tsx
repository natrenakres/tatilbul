import { ReactNode } from "react";



export function TheHeading({children}: {children: ReactNode}) {

    return (
        <section className="bg-white mb-5 shadow px-4 py-4">
            <h1 className="text-2xl font-bold tracking-Hotel text-gray-900">
                {children}
            </h1>
        </section>
    )
}