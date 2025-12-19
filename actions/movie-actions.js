'use server';

import {saveFavoriteMovie, selectFavouriteMovies} from "@/lib/db/favourites";
import {verifyAuth} from "@/lib/auth";

const baseURL = 'https://api.themoviedb.org/3/discover/movie';
const queryParameters = '?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`
    }
}

export async function getPopularMovies() {
    const requestURL = `${baseURL}${queryParameters}`;
    const res = await fetch(requestURL, options);

    if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
    }

    return await res.json();
}

export async function addToLibrary(movie, prevState, formData) {
    const auth = await verifyAuth();

    const saved = await saveFavoriteMovie(movie, auth?.user);
    if (!saved) {
        return {
            success: false,
            message: 'Could not save'
        }
    }

    return {
        success: true,
        message: 'Saved successfully'
    }
}