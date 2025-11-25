import {redirect} from "next/navigation";

import {verifyAuth} from "@/lib/auth";
import PageHeader from "@/components/general/page-header";

export default async function PublicLayout({children}) {
    const result = await verifyAuth();

    if (result.user) {
        return redirect('/discover');
    }

    return (<>
        <PageHeader/>
        <main className="main">
            {children}
        </main>
    </>);
}
