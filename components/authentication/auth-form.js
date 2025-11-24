'use client';

import classes from "./auth-form.module.css";
import {signUp, login} from "@/actions/auth-actions";
import {useActionState} from "react";
import Link from "next/link";

export default function AuthForm({mode}) {
    const authFunction = mode === 'login' ? login : signUp;
    const [state, formAction, isPending] = useActionState(authFunction, {});

    return(<form action={formAction}>
        <section className={classes.login}>
            <h2>
                {mode === 'signup' ? 'Create an account' : 'Login'}
            </h2>
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
                    {isPending ?
                        (mode === 'login' ? 'Authenticating...' : 'Creating account...') :
                        (mode === 'login' ? 'Login' : 'Sign up')
                    }
                </button>
            </div>
            {mode === "signup" && (<>
                <span>Already have an account?</span><Link href="/login">Login</Link>
            </>)}
            {mode === "login" && (<>
                <span>Don't have an account yet?</span><Link href="/signup">Sign up</Link>
            </>)}
        </section>
    </form>);
}