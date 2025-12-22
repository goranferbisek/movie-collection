import classes from './movie-card.module.css';
import Image from "next/image";
import FavouritesButton from "@/components/movies/favourites-button";

export default function MovieCard({ movie, isFavourite }) {
    const baseURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
    const imageURL = baseURL + movie.poster_path;

    return (
        <article className={classes.card}>
            <div className={classes.image} >
                <Image src={imageURL} alt={movie.title} fill sizes="(max-width: 768px) 250px" />
            </div>
            <div className={classes.description}>
                <h2 className={classes.title}>{movie.title}</h2>
                <p className={classes['release-date']}>{movie.release_date}</p>
                <FavouritesButton movie={movie} isFavourite={isFavourite} />
            </div>
        </article>
    )
}