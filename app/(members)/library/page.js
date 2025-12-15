import Link from "next/link";
import MovieGrid from "@/components/movies/movie-grid";

export default function LibraryPage() {
    const movies = [];

    return (<>
        <h1>Library</h1>
        {movies.length > 0 ? (
            <MovieGrid movies={movies}/>
        ) : (
            <p>
                No movies in your library yet. <Link href="/discover">Browse</Link> for movies and them to your Library.
            </p>
        )}
    </>);
}