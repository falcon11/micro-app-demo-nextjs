import Head from 'next/head';
import styles from '../../styles/Media.module.css';

export default function Device() {
  const platformApi = () => {
    alita.device.platform().then((data) => {
      alert('platform:' + data);
      console.log('platform:' + data);
    });
  };
  const scanCodeApi = async () => {
    try {
      const { result } = await alita.device.scanCode();
      alert('结果:' + result);
    } catch (error) {
      alert(error.message);
    }
  };
  const systemInfoApi = async () => {
    try {
      const res = await alita.device.systemInfo();
      alert(JSON.stringify(res));
    } catch (error) {
      alert(error.message);
    }
  };
  const openWebApi = async () => {
    try {
      await alita.device.openWeb('https://bing.com');
    } catch (error) {
      alert(error.message);
    }
  }
  const getUserData = async () => {
    try {
      const data = await alita.device.getUserData();
      alert(JSON.stringify(data));
    } catch (error) {
      alert(error.message);
    }
  }
  const openMicroAppWithURL = async () => {
    alita.device.openMicroApp({ appURL: "http://127.0.0.1:3000" });
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Device</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.list}>
        <div className={styles.cell}>
          <a onClick={platformApi}>Platform</a>
        </div>
        <div className={styles.cell} onClick={scanCodeApi}>
          <a>ScanCode</a>
        </div>
        <div className={styles.cell} onClick={systemInfoApi}>
          <a>systemInfo</a>
        </div>
        <div className={styles.cell} onClick={openWebApi}>
          <a>openWeb</a>
        </div>
        <div className={styles.cell}>
          <a href={'device/microAppList'}>fetchMicroAppList</a>
        </div>
        <div className={styles.cell} onClick={getUserData}>
          <a>getUserData</a>
        </div>
        <div className={styles.cell} onClick={openMicroAppWithURL}>
          <a>open MicroApp By URL</a>
        </div>
      </div>
    </div>
  );
}
