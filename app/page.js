import classes from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={classes.background}>
      <main className={classes.hero}>
        <h1>Search for movies and group them how ever you like.</h1>
          <div className={classes.cta}>
              <p className={classes.join}>Join us!</p>
              <button className={classes['signup-button']}>Sign up</button>
              <span className={classes['login-cta']}>Already have an account? <Link href="">Login</Link></span>
          </div>
      </main>
    </div>
  );
}
