import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={classes.content}>
      <main className={classes.hero}>
        <h1>Search for movies and group them how ever you like.</h1>
          <div className={classes.cta}>
              <p>Join us!</p>
              <button>Sign up</button>
              <span>Already have an account? <Link href="">Login</Link></span>
          </div>
      </main>
    </div>
  );
}
