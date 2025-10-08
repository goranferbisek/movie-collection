import tmdbLogo from "../public/tmdb-blue_short.svg";
import "./globals.css";
import Image from "next/image";
import SideNavigation from "@/components/navigation/side-navigation";

export const metadata = {
    title: "Movie collection app",
    description: "Search for movies and group them how ever you like.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <SideNavigation />
        <div className="container">
            {children}
            <footer>
                <div>This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by
                    TMDB.
                </div>
                <a href="https://www.themoviedb.org" target="_blank">
                    <Image className="tmdb-logo" src={tmdbLogo} alt="TMDB logo" width={120} height={120}/>
                </a>
            </footer>
        </div>
        </body>
        </html>
    );
}
