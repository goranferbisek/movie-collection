import classes from "./page.module.css";

export const metadata = {
    title: "Login",
}

export default function LoginPage() {
    async function authenticateAction(formData) {
        "use server";
        const username = formData.get('username');

        console.log(`${username} is trying to login`);
    }

    return(<>
        <h1>Login</h1>
        <form action={authenticateAction}>
            <section className={classes}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
                <button id="login" type="submit">Login</button>
            </section>
        </form>
    </>);
}