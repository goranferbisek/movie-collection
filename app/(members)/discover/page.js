import MovieGrid from "@/components/movies/movie-grid";
import {Suspense} from "react";
import {getPopularMovies, getFavouriteMovies} from "@/actions/movie-actions";
import {verifyAuth} from "@/lib/auth";

export const metadata = {
    title: 'Discover movies'
}

export default async function DiscoverPage() {
    const {user} = await verifyAuth();
    const popularMovies = await getPopularMovies();
    const favouriteMovies = await getFavouriteMovies(user);

    return (<>
        <h1>Discover</h1>
        <p>Browse for fun and exciting movies here.</p>
        <Suspense fallback={<p>Loading...</p>}>
            <MovieGrid movies={popularMovies} favourites={favouriteMovies}/>
        </Suspense>
    </>);
}