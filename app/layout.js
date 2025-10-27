import {Roboto} from "next/font/google";

import "./globals.css";
import Footer from "@/components/general/footer";
import PageHeader from "@/components/general/page-header"

const roboto = Roboto({
    subsets: ['latin'],
});

export const metadata = {
    title: "Movie collection app",
    description: "Search for movies and group them how ever you like.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={roboto.className}>
        <body>
        <PageHeader/>
        <div className="hero">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
