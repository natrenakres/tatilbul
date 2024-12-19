"use server";
import { OAuthProvider } from "node-appwrite";
import { createAdminClient } from "../config/appwrite";
import { headers } from "next/headers";
import { redirect } from "next/navigation";



export async function loginWithGithub() {

    const { account } = await createAdminClient();
    const origin  = (await headers()).get("origin");

    let redirectUrl = '';
    const successUrl = `${origin}/oauth`;
    const failureUrl = `${origin}/register`;

    console.log('Success url', successUrl)
    console.log('Failure url', failureUrl);


    try {
        redirectUrl = await account.createOAuth2Token(
            OAuthProvider.Github,
            successUrl,
            failureUrl
        );
    }
    catch (error: unknown) {
        console.error("OAuth Token has error:", error);
        redirectUrl = `${origin}`;
    }

    console.log("Redirect URL: ", redirectUrl);
    
    
    return redirect(redirectUrl);
}