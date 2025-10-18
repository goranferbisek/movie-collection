import "@/app/globals.css";
import SideNavigation from "@/components/navigation/side-navigation";

export const metadata = {
    title: "Movie collection app",
    description: "Search for movies and group them how ever you like.",
};

export default function MemberLayout({children}) {
    return (<>
        <SideNavigation />
        <main>
            {children}
        </main>
    </>);
}
