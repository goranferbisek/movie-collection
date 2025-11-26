import {NextResponse} from "next/server";
import {THIRTY_DAYS_IN_SECONDS} from "@/lib/config";

export function middleware(request) {
    const response = NextResponse.next();

    const sessionToken = request.cookies.get('auth_session')?.value ?? null;
    if (sessionToken !== null) {
        response.cookies.set(
            'auth_session',
            sessionToken, {
                secure: process.env.NODE_ENV === 'production',
                httpOnly: true,
                sameSite: 'Lax',
                maxAge: THIRTY_DAYS_IN_SECONDS,
            }
        );
    }

    return response;
}