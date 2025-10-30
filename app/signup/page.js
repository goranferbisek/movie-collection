import classes from "./page.module.css";
import SignUpFormSubmit from "@/components/authentication/signup-form-submit";
import Link from "next/link";

export const metadata = {
    title: "SignUp"
}

export default function SignUpPage() {
    async function signUp(formData) {
        "use server";
        const username = formData.get('username');

        console.log(`${username} is trying create an account`);
    }

    return (<>
        <form action={signUp}>
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
                <div className={classes.control}>
                    <SignUpFormSubmit/>
                </div>
                <span>Already have an account?</span><Link href="/login">Login</Link>
            </section>
        </form>
    </>);
}