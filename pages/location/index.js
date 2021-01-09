import Head from 'next/head';
import styles from '../../styles/Media.module.css';

export default function Device() {
  const getLocation = () => {
    alita.location.getLocation().then((data) => {
      alert('latitude:'+ data.latitude + '; longtitude:' + data.longitude);
      console.log('platform:' + data);
    }).catch((err) => {
      console.log(err.message);
      alert(err.message);
    })
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Location</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.list}>
        <div className={styles.cell}>
          <a onClick={getLocation}>get location</a>
        </div>
      </div>
    </div>
  );
}
