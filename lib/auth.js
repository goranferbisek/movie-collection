import {cookies} from "next/headers";
import {createNewSession, getSessionWithId, deleteSession} from "@/lib/db/sessions";
import {getUserById} from "@/lib/db/users";
import {THIRTY_DAYS_IN_SECONDS} from "@/lib/config";

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

function constantTimeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    let c = 0;
    for (let i = 0; i < a.byteLength; i++) {
        c |= a[i] ^ b[i];
    }
    return c === 0;
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
        sessionWithToken.token, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            sameSite: 'Lax',
            maxAge: THIRTY_DAYS_IN_SECONDS,
        }
    )
}

export async function verifyAuth() {
    const token = (await cookies()).get("auth_session");
    if (!token) {
        return {
            user: null,
            session: null
        };
    }

    const tokenParts = token.value.split(".");
    if (tokenParts.length !== 2) {
        return null;
    }
    const sessionId = tokenParts[0];
    const sessionSecret = tokenParts[1];
    if (!sessionId) {
        return {
            user: null,
            session: null
        };
    }

    // lucia returns user and session
    const session = await getSessionWithId(sessionId);
    if (!session) {
        return {
            user: null,
            session: null
        };
    }

    const now = new Date();
    if (now.getTime() - session.created_at * 1000 >= THIRTY_DAYS_IN_SECONDS * 1000) {
        await deleteSession(sessionId);

        /* TODO: Next.js does not allow to use cookie here, it always fails, but cookie is deleted eventualy
           Error: Cookies can only be modified in a Server Action or Route Handler
        */
        try {
            (await cookies()).set(
                'auth_session',
                '', {
                    secure: process.env.NODE_ENV === 'production',
                    httpOnly: true,
                    sameSite: 'Lax',
                    maxAge: 0,
                }
            );
        } catch {}

        return {
            user: null,
            session: null
        };
    }

    const sessionSecretHash = await hashSecret(sessionSecret);
    const isValidSecret = constantTimeEqual(sessionSecretHash, session.secret_hash);
    if (!isValidSecret) {
        return {
            user: null,
            session: null
        };
    }

    const user = await getUserById(session.user_id);
    return {
        user,
    };
}
