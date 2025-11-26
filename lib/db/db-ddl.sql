CREATE TABLE IF NOT EXISTS "users" (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "sessions" (
    id TEXT NOT NULL PRIMARY KEY,
    secret_hash BYTEA NOT NULL,
    last_verified_at INTEGER NOT NULL, -- unix time (seconds)
    created_at INTEGER NOT NULL, -- unix time (seconds)
    user_id INTEGER NOT NULL REFERENCES users(id)
);