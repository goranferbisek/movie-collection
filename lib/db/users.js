import connectionPool from "@/lib/db/pg-pool";

export async function createUser(username, hashedPassword) {
    const result = await connectionPool.query(`
        INSERT INTO users (username, password) VALUES ($1, $2)
        RETURNING id
    `, [username, hashedPassword]);

    return result.rows[0].id;
}