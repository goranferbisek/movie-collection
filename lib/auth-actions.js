'use server';

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

    // store user to database;
}