import Head from 'next/head';
import styles from '../../styles/Media.module.css';

export default function Custom() {
  const echoApi = () => {
    alita.custom.echo('hello world').then((data) => {
      alert('echo:' + data);
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Device</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.list}>
        <div className={styles.cell}>
          <a onClick={echoApi}>echo</a>
        </div>
      </div>
    </div>
  );
}
