import classes from './movie-grid.module.css';
import MovieCard from "@/components/movies/movie-card";

export default async function MovieGrid({movies}) {
    return (<main className={classes.grid}>
        {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </main> )
}