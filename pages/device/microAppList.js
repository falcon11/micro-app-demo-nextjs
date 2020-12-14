import Head from 'next/head';
import styles from '../../styles/Media.module.css';
import { useState, useEffect } from 'react';

export default function MicroAppList() {
  const [appList, setAppList] = useState([]);
  const openMicroAppApi = (app) => {
    alita.device.openMicroApp({ app });
  };
  const fetchMicroAppList = async () => {
    try {
      const { list = [] } = await alita.device.fetchMicroAppList();
      setAppList(list);
    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    fetchMicroAppList();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>MicroAppList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.list}>
        {appList.map((app => {
          return <div key={app.appid} className={styles.cell}>
            <img className={styles.cellImage} src={app.appIconUrl} />
            <a onClick={() => openMicroAppApi(app)}>{app.appName}</a>
          </div>
        }))}
      </div>
    </div>
  );
}
