import connectionPool from './pg-pool';

export async function createUser(username, hashedPassword) {
    const result = await connectionPool.query(`
        INSERT INTO users (username, password) VALUES ($1, $2)
    `, [username, hashedPassword]);

    console.log(result);
    return result.rows[0].id;
}