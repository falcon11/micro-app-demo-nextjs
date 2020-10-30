import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const plugins = [
    {
      name: 'Media',
      href: '/media',
    },
    {
      name: 'Device',
      href: '/device',
    },
    {
      name: 'UI',
      href: '/ui',
    },
    {
      name: 'File',
      href: '/file',
    },
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Alita Micro App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          插件列表
        </h1>
        <div className={styles.list}>
          {plugins.map(plugin => {
            return <a key={plugin.name} className={styles.cell} href={plugin.href}>
              <span>{plugin.name}</span>
            </a>
          })}
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
