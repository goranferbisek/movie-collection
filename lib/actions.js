'use server';

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
    const requestURL = `${baseURL}${queryParameters}`
    const data = await fetch(requestURL ,options);

    return await data.json();
}