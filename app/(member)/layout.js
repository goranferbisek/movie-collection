import "@/app/globals.css";
import SideNavigation from "@/components/navigation/side-navigation";
import Footer from "@/components/general/footer";

export const metadata = {
    title: "Movie collection app",
    description: "Search for movies and group them how ever you like.",
};

export default function MemberLayout({children}) {
    return (
        <html lang="en">
        <body>
        <SideNavigation />
        <div className="container">
            {children}
        </div>
        </body>
        </html>
    );
}
