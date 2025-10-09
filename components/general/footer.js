import Image from "next/image";
import tmdbLogo from "@/public/tmdb-blue_short.svg";

export default function Footer() {
    return (
        <footer>
            <div>This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
            </div>
            <a href="https://www.themoviedb.org" target="_blank">
                <Image className="tmdb-logo" src={tmdbLogo} alt="TMDB logo" width={120} height={120}/>
            </a>
        </footer>
    );
}