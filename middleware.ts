import { NextRequest, NextResponse } from "next/server";
import auth from "./src/shared/auth/auth";


export async function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get('appwrite-session');

    if(!sessionCookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    console.log("Session cookie", sessionCookie);


    const user = await auth.getUser();    

    if(!user) {        
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher: ['/profile/:path*', '/chat/:path*', '/hotels/:path*']
}