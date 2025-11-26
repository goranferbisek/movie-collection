import classes from './movie-grid.module.css';
import MovieCard from "@/components/movies/movie-card";
import { getPopularMovies} from "@/actions/movie-actions";

export default async function MovieGrid() {
    const movies = await getPopularMovies();

    return (<main className={classes.grid}>
        {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </main> )
}