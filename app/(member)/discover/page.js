import MovieGrid from "@/components/movies/movie-grid";
import { getPopularMovies} from "@/lib/actions";


export default async function DiscoverPage() {
    const movies = await getPopularMovies();

    return (<>
        <h1>Discover</h1>
        <p>Browse for fun and exciting movies here.</p>
        <MovieGrid movieList={movies.results}/>
    </>);
}