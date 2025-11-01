import MovieGrid from "@/components/movies/movie-grid";
import {Suspense} from "react";
import { getPopularMovies} from "@/lib/movie-actions";


export default async function DiscoverPage() {
    return (<>
        <h1>Discover</h1>
        <p>Browse for fun and exciting movies here.</p>
        <Suspense fallback={<p>Loading...</p>}>
            <MovieGrid/>
        </Suspense>
    </>);
}