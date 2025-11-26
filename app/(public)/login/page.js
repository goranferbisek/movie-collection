import AuthForm from "@/components/authentication/auth-form";

export const metadata = {
    title: "Login",
}

export default function LoginPage() {
    return (
        <AuthForm mode="login" />
    );
}