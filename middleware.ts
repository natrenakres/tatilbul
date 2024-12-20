import { NextRequest, NextResponse } from "next/server";
import auth from "./src/shared/auth/auth";


export async function middleware(request: NextRequest) {
    console.log("**Auth Middleware Run***")
    const sessionCookie = request.cookies.get('appwrite-session');

    if(!sessionCookie) {
        console.log("Session Cookie is null ", sessionCookie);
        return NextResponse.redirect(new URL('/login', request.url));
    }

    console.log("Session cookie", sessionCookie);

    const user = await auth.getUser();    

    if(!user) {        
        console.log("Cannot get user ", user);
        return NextResponse.redirect(new URL('/', request.url));
    }

    console.log("Sessin is ok return route ", request.nextUrl)
    return NextResponse.next();
}


export const config = {
    matcher: ['/profile/:path*', '/chat/:path*', '/hotels/:path*']
}