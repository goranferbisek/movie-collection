import classes from './movie-grid.module.css';
import MovieCard from "@/components/movies/movie-card";

export default async function MovieGrid({movies, favourites}) {
    return (<main className={classes.grid}>
        {movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isFavourite={favourites.some(fav => fav.id === movie.id)} />
        ))}
    </main> )
}