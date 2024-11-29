import { createClient, OAuthStrategy } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async(request: NextRequest) => {
    const coockies = request.cookies.get("refreshToken");

    const res = NextResponse.next();

    if (coockies) {
        return res
    }

    const wixClient = createClient({
        auth: OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        })
    })

    const tokens = await wixClient.auth.generateVisitorTokens()

    res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {maxAge: 60*60*24*30})

    return res
}