'use client';

import { useFormStatus} from "react-dom";

export default function LoginFormSubmit() {
    const status = useFormStatus();

    return (<>
        <button disabled={status.pending}>
            {status.pending ? 'Authenticating...' : 'Login'}
        </button>
    </>);
}