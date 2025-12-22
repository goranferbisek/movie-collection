import connectionPool from "@/lib/db/pg-pool";

export async function saveFavoriteMovie(movie, user) {
    let result;
    try {
        result = await connectionPool.query(`
            INSERT INTO favourites VALUES($1, $2, $3)
         `, [movie.id, movie.title, user.id]);
    } catch (error) {
        // 23505 -> postgres unique_violation
        if (error.code === '23505') {
            console.debug(`Movie already saved: ${error.message}`);
            return {
                errors: {
                    username: 'This movie is already saved to favourites.'
                }
            }
        }
        throw error;
    }

    return result.rowCount === 1;
}

export async function listFavouriteMovies(user) {
    let result;
    try {
        result = await connectionPool.query(`
            SELECT * FROM favourites
            WHERE user_id = $1
        `, [user.id]);
    } catch (error) {
        console.log(error)
    }

    return result.rows;
}

