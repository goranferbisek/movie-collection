'use server';
import {redirect} from "next/navigation";

import {hashUserPassword} from "@/lib/hash";
import {createUser} from "@/lib/db/users";

export async function signUp(prevState, formData) {
    const username = await formData.get('username');
    const password = formData.get('password');

    console.log(username);

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
        await createUser(username, hashedPassword);

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

    redirect('/discover');
}