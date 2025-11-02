'use client';

import classes from "./signup-form.module.css";
import {signUp} from "@/lib/auth-actions";
import {useActionState} from "react";
import Link from "next/link";

export default function SignupForm() {
    const [state, formAction, isPending] = useActionState(signUp, {});

    return(<form action={formAction}>
        <section className={classes.login}>
            <h2>Create an account</h2>
            <div className={classes.control}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>
            </div>
            {state.errors && (
                <div className={classes.errors}>
                    {Object.keys(state.errors).map(errorKey => (
                        <div key={errorKey}>{state.errors[errorKey]}</div>
                    ))}
                </div>
            )}
            <div className={classes.control}>
                <button disabled={isPending}>
                    {isPending ? 'Authenticating...' : 'Sign up'}
                </button>
            </div>
            <span>Already have an account?</span><Link href="/login">Login</Link>
        </section>
    </form>)
}