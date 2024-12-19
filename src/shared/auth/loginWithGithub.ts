"use server";
import { OAuthProvider } from "node-appwrite";
import { createAdminClient } from "../config/appwrite";
import { headers } from "next/headers";
import { redirect } from "next/navigation";



export async function loginWithGithub() {

    const { account } = await createAdminClient();
    const origin  = (await headers()).get("origin");

    const redirectUrl = await account.createOAuth2Token(
        OAuthProvider.Github,
        `${origin}/oauth`,
        `${origin}/register`
    );

    console.log("Redirect URL: ", redirectUrl);
    
    
    return redirect(redirectUrl);
}