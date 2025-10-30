'use client';

import { useFormStatus} from "react-dom";

export default function SignUpFormSubmit() {
    const status = useFormStatus();

    return (<>
        <button disabled={status.pending}>
            {status.pending ? 'Authenticating...' : 'Sign up'}
        </button>
    </>);
}