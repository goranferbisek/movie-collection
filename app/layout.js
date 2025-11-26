import {Roboto} from "next/font/google";

import "./globals.css";
import Footer from "@/components/general/footer";

const roboto = Roboto({
    subsets: ['latin'],
});

export const metadata = {
    title: {
        template: '%s | Movie collection',
        default: 'Movie collection'
    },
    description: "Search for movies and group them how ever you like.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={roboto.className}>
        <body>
        <div className="page-container">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
