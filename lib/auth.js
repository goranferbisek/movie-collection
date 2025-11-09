import {cookies} from "next/headers";
import {createNewSession} from "@/lib/db/sessions";
const THIRTY_DAYS_IN_SECONDS = 30 * 24 * 60 * 60;

/* Taken from Lucia auth pages https://lucia-auth.com/sessions/basic
* */
function generateSecureRandomString() {
    // Human readable alphabet (a-z, 0-9 without l, o, 0, 1 to avoid confusion)
    const alphabet = "abcdefghijkmnpqrstuvwxyz23456789";

    // Generate 24 bytes = 192 bits of entropy.
    // We're only going to use 5 bits per byte so the total entropy will be 192 * 5 / 8 = 120 bits
    const bytes = new Uint8Array(24);
    crypto.getRandomValues(bytes);

    let id = "";
    for (let i = 0; i < bytes.length; i++) {
        // >> 3 "removes" the right-most 3 bits of the byte
        id += alphabet[bytes[i] >> 3];
    }
    return id;
}

async function hashSecret(secret) {
    const secretBytes = new TextEncoder().encode(secret);
    const secretHashBuffer = await crypto.subtle.digest("SHA-256", secretBytes);
    return new Uint8Array(secretHashBuffer);
}

export async function createAuthSession(userId) {
    const id = generateSecureRandomString();
    const secret = generateSecureRandomString();
    const secretHash = await hashSecret(secret);
    const token = id + "." + secret;

    const sessionWithToken = {
        id,
        secretHash,
        createdAt: new Date(),
        token
    }

    try {
        await createNewSession(userId, sessionWithToken);
    } catch (error) {
        console.log(error);
    }

    (await cookies()).set(
        'auth_session',
        sessionWithToken.token,
        {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            sameSite: 'Lax',
            maxAge: THIRTY_DAYS_IN_SECONDS * 1000,
        }
    )
}
