'use server';
import {redirect} from "next/navigation";

import {hashUserPassword, verifyPassword} from "@/lib/hash";
import {createUser, getUserByUsername} from "@/lib/db/users";
import {createAuthSession, destroySession} from "@/lib/auth";

export async function signUp(prevState, formData) {
    const username = await formData.get('username');
    const password = formData.get('password');

    let errors = {};

    // TODO: make proper validation
    if (username.trim().length < 3) {
        errors.email = 'Username must be at least 3 characters';
    }

    if (password.trim().length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors: errors
        };
    }

    const hashedPassword = hashUserPassword(password);
    try {
        const userId = await createUser(username, hashedPassword);
        await createAuthSession(userId);
        redirect('/discover');
    } catch (error) {
        // 23505 -> postgres unique_violation
        if (error.code === '23505') {
            console.debug(`User not saved: ${error.message}`);
            return {
                errors: {
                    username: 'This username is already taken.'
                }
            }
        }
        throw error;
    }
}

export async function login(prevState, formData) {
    const username = await formData.get('username');
    const password = formData.get('password');

    const existingUser = await getUserByUsername(username);
    if (!existingUser || !verifyPassword(existingUser.password, password)) {
        return {errors:
            { username: 'Could not authenticate user, please check your credentials.' }
        }
    }

    await createAuthSession(existingUser.id);
    redirect('/discover');
}

export async function logout() {
    await destroySession();
    redirect('/');
}