import { createAdminClient } from "@/src/shared/config/appwrite";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const userId = request.nextUrl.searchParams.get('userId');
    const secret = request.nextUrl.searchParams.get('secret');   

    if(!userId || !secret) {
        return NextResponse.redirect(`${request.nextUrl.origin}/login`);
    }

    console.log("Create Admin and set session");
    const { account } = await createAdminClient();
    const session = await account.createSession(userId, secret);

    (await cookies()).set('appwrite-session', session.secret, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: true
    });


    return NextResponse.redirect(`${request.nextUrl.origin}/chat`);
}