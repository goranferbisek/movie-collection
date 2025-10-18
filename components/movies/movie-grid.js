import classes from './movie-grid.module.css';
import MovieCard from "@/components/movies/movie-card";

export default function MovieGrid({movieList}) {

    return (<>
            {movieList.map((movie, index) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </>
    )
}