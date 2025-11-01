This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Copy **_.env.example_** file to **_.env_** and add the TMDB API Read Access Token
For more information check [TMDB API developer page](https://developer.themoviedb.org/docs/getting-started)
```bash
TMDB_READ_ACCESS_TOKEN=
```

Setup a Postgres database and provide connection details
```bash
POSTGRES_HOST="localhost"
POSTGRES_PORT="5432"
POSTGRES_USER="exampleUser"
POSTGRES_PASSWORD="examplePass"
POSTGRES_DATABASE="exampleDb"
```

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.