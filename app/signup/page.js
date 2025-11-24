import AuthForm from "@/components/authentication/auth-form";

export const metadata = {
    title: "SignUp"
}

export default function SignUpPage() {
    return (
        <AuthForm mode="signup"/>
    );
}