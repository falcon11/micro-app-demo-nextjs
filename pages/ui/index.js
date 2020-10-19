import Head from 'next/head';
import styles from '../../styles/Media.module.css';

export default function UI() {
  const setNavBarApi = (style) => {
    if (style === 'light') {
      alita.ui.setNavBar({ backgroundColor: '#FFF', color: '#000', fontSize: 20 });
    }
    if (style === 'dark') {
      alita.ui.setNavBar({ backgroundColor: '#000', color: '#FFF', fontSize: 20 });
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.list}>
        <div className={styles.cell} onClick={() => setNavBarApi('light')}>
          <a>setNavBar(Light)</a>
        </div>
        <div className={styles.cell} onClick={() => setNavBarApi('dark')}>
          <a>setNavBar(Dark)</a>
        </div>
      </div>
    </div>
  );
}
