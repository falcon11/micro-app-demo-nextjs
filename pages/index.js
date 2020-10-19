import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alita Micro App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Alita Micro App</a>
        </h1>
        <div className={styles.grid}>
          <a href="/media" className={styles.card}>
            <h3>Media &rarr;</h3>
            <p>Media Plugin</p>
          </a>

          <a href="/device" className={styles.card}>
            <h3>Device &rarr;</h3>
            <p>Device Plugin</p>
          </a>

          <a href="/ui" className={styles.card}>
            <h3>UI &rarr;</h3>
            <p>UI Plugin</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
