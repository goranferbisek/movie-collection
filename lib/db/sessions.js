import connectionPool from "@/lib/db/pg-pool";
import {THIRTY_DAYS_IN_SECONDS} from "@/lib/config";

export async function createNewSession(userId, session) {
    await connectionPool.query(`
        INSERT INTO sessions (id, secret_hash, last_verified_at, created_at, user_id)
        VALUES ($1, $2, $3, $4, $5)
    `, [session.id,
        session.secretHash,
        Math.floor(session.createdAt.getTime() / 1000),
        Math.floor(session.createdAt.getTime() / 1000),
        userId
    ]);
}

export async function getSessionWithId(sessionId) {
    const now = new Date();
    let result;
    try {
        result = await connectionPool.query(`
            SELECT * FROM sessions WHERE id = $1
         `, [sessionId]);
    } catch (error) {
        console.log(error);
    }

    if(result.rows.length !== 1) {
        return null;
    }

    const row = result.rows[0];
    const session = {
        id: row.id,
        secretHash: row.secret_hash,
        lastVerifiedAt: new Date(row.last_verified_at * 1000),
        createdAt: new Date(row.created_at * 1000),
        userId: row.user_id
    }

    if (now.getTime() - session.lastVerifiedAt.getTime() >= THIRTY_DAYS_IN_SECONDS * 1000) {
        await deleteSession(sessionId);
        return null;
    }

    return session;
}

export async function updateSessionLastVerifiedTimestamp(sessionId) {
    await connectionPool.query(`
        UPDATE sessions SET last_verified_at = $1 WHERE id = $2
    `, [
        Math.floor(new Date().getTime() / 1000 ),
        sessionId
    ])
}

export async function deleteSession(sessionId){
    await connectionPool.query(`
        DELETE FROM sessions WHERE id = $1
    `, [sessionId])
}


