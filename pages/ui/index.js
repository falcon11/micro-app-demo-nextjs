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
  const setBackgroundColor = () => {
    alita.ui.setBackgroundColor({ backgroundColor: '#0000FF' });
  }
  const setStatusBar = (theme) => {
    alita.ui.setStatusBar({ theme });
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
        <div className={styles.cell} onClick={() => setBackgroundColor()}>
          <a>setBackgroundColor</a>
        </div>
        <div className={styles.cell} onClick={() => setStatusBar('light')}>
          <a>setStatusBar(light)</a>
        </div>
        <div className={styles.cell} onClick={() => setStatusBar('dark')}>
          <a>setStatusBar(dark)</a>
        </div>
      </div>
    </div>
  );
}
