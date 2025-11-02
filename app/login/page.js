import classes from "./page.module.css";
import LoginFormSubmit from "@/components/authentication/login-form-submit";

export const metadata = {
    title: "Login",
}

export default function LoginPage() {
    async function authenticateAction(formData) {
        "use server";
        const username = formData.get('username');

        console.log(`${username} is trying to login`);
    }

    return (<>
        <form action={authenticateAction}>
            <section className={classes.login}>
                <h2>Login</h2>
                <div className={classes.control}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password"/>
                </div>
                <div className={classes.control}>
                    <LoginFormSubmit/>
                </div>
            </section>
        </form>
    </>);
}