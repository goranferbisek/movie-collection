import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <main className={styles.hero}>
        <h1>Search for movies and group them how ever you like.</h1>
      </main>
    </div>
  );
}
