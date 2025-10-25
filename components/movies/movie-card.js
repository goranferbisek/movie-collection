import classes from './movie-card.module.css';
import Image from "next/image";

export default function MovieCard({ movie }) {
    const baseURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
    const imageURL = baseURL + movie.poster_path;

    return (
        <div className={classes.card}>
            <div className={classes.image} >
                <Image src={imageURL} alt={movie.title} fill />
            </div>
            <div className={classes.description}>
                <h2 className={classes.title}>{movie.title}</h2>
                <p className={classes['release-date']}>{movie.release_date}</p>
            </div>
        </div>
    )
}