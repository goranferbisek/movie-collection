import classes from './movie-grid.module.css';
import MovieCard from "@/components/movies/movie-card";

export default function MovieGrid({movieList}) {

    return (<main className={classes['movie-grid']}>
            {movieList.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </main>
    )
}