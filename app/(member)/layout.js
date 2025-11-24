import "@/app/globals.css";
import SideNavigation from "@/components/navigation/side-navigation";
import {verifyAuth} from "@/lib/auth";

import {redirect} from "next/navigation";

export const metadata = {
    title: "Movie collection app",
    description: "Search for movies and group them how ever you like.",
};

export default async function MemberLayout({children}) {
    const result = await verifyAuth();

    if (!result.user) {
        return redirect('/login');
    }

    return (<div className="content">
        <SideNavigation />
        <main className="main">
            {children}
        </main>
    </div>);
}
