import { NextRequest, NextResponse } from "next/server";
import { checkAuth } from "./src/shared/auth/checkAuth";


export async function middleware(request: NextRequest) {
    const {isAuthenticated} = await checkAuth();

    if(!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();

}


export const config = {
    matcher: ['/profile/:path*', '/chat/:path*']
}