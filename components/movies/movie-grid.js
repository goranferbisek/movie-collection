import classes from './movie-grid.module.css';
import MovieCard from "@/components/movies/movie-card";

export default function MovieGrid({movieList}) {

    return (<section className={classes.grid}>
            {movieList.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </section>
    )
}