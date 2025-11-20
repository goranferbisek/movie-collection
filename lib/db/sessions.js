import connectionPool from "@/lib/db/pg-pool";

export async function createNewSession(userId, session) {
    await connectionPool.query(`
        INSERT INTO sessions (id, secret_hash, created_at, user_id)
        VALUES ($1, $2, $3, $4)
    `, [session.id,
        session.secretHash,
        Math.floor(session.createdAt.getTime() / 1000),
        userId
    ]);
}

export async function getSessionWithId(sessionId) {
    let result;
    try {
        result = await connectionPool.query(`
            SELECT * FROM sessions WHERE id = $1
         `, [sessionId]);
    } catch (error) {
        console.log(error);
    }

    return result && result.rows[0];
}

export async function deleteSession(sessionId){
    await connectionPool.query(`
        DELETE FROM sessions WHERE id = $1
    `, [sessionId])
}


