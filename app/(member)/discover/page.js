import MovieGrid from "@/components/movies/movie-grid";
import {movies} from "@/lib/placeholder-data";


export default function DiscoverPage() {
    return (<>
        <h1>Discover</h1>
        <p>Browse for fun and exciting movies here.</p>
        <MovieGrid movieList={movies.results} />
    </>);
}