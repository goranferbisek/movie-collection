import classes from './movie-card.module.css';
import Image from "next/image";

export default function MovieCard({ movie }) {
    const baseURL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
    const imageURL = baseURL + movie.poster_path;

    return (
        <div className="card">
            <p className="card-title">{movie.title}</p>
            <Image src={imageURL} alt={movie.title} width={500} height={500} />
            <p className="card-description">{movie.overview}</p>
        </div>
    )
}