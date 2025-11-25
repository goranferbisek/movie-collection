import {redirect} from "next/navigation";

import {verifyAuth} from "@/lib/auth";
import PageHeader from "@/components/general/page-header";
import SideNavigation from "@/components/navigation/side-navigation";

export default async function MembersLayout({children}) {
    const result = await verifyAuth();

    if (!result.user) {
        return redirect('/login');
    }

    return (<>
        <PageHeader username={result.user.username}/>
        <div className="content">
            <SideNavigation />
            <main className="main">
                {children}
            </main>
        </div>
    </>);
}
