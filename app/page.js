import classes from "./page.module.css";
import Link from "next/link";
import PageHeader from "@/components/general/page-header";

export default function Home() {
  return (<>
    <PageHeader/>
    <div className={classes.background}>
      <main className={classes.hero}>
        <h1>Search for movies and group them how ever you like.</h1>
          <div className={classes.cta}>
              <p className={classes.join}>Join us!</p>
              <Link href="/signup">
                <button className={classes['signup-button']}>Sign up</button>
              </Link>
              <span className={classes['login-cta']}>Already have an account? <Link href="/login">Login</Link></span>
          </div>
      </main>
    </div>
  </>);
}
