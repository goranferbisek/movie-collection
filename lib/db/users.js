import connectionPool from "@/lib/db/pg-pool";

export async function createUser(username, hashedPassword) {
    const result = await connectionPool.query(`
        INSERT INTO users (username, password) VALUES ($1, $2)
        RETURNING id
    `, [username, hashedPassword]);

    return result.rows[0].id;
}

export async function getUserById(id) {
    const result = await connectionPool.query(`
    SELECT * FROM users WHERE id = $1
    `, [id]);

    return {
        user_id: result.rows[0].id,
        username: result.rows[0].username
    }
}