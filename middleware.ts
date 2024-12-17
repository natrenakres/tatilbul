import { NextRequest, NextResponse } from "next/server";
import auth from "./src/shared/auth/auth";


export async function middleware(request: NextRequest) {
    const user = await auth.getUser();    

    if(!user) {
        request.cookies.delete("appwrite-session");
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();

}


export const config = {
    matcher: ['/profile/:path*', '/chat/:path*']
}