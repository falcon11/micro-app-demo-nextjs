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
  const getMapsList = async () => {
    const mapsList = await alita.device.mapsList();
    console.log('mapsList', mapsList);
    alert(JSON.stringify(mapsList));
  }
  const openGoogleMap = async () => {
    await alita.device.openURLScheme({ url: 'comgooglemaps://?saddr=Google+Inc,+8th+Avenue,+New+York,+NY&daddr=John+F.+Kennedy+International+Airport,+Van+Wyck+Expressway,+Jamaica,+New+York&directionsmode=transit' });
  }
  const openBaiduMap = async () => {
    await alita.device.openURLScheme({
      url: 'baidumap://map/direction?origin=中关村&destination=五道口&mode=driving&region=北京&src=ios.baidu.openAPIdemo',
    })
  }
  const openAmap = async () => {
    await alita.device.openURLScheme({
      url: 'iosamap://navi?sourceApplication=applicationName&poiname=fangheng&poiid=BGVIS&lat=36.547901&lon=104.258354&dev=1&style=2',
    })
  }
  const openQQMap = async () => {
    await alita.device.openURLScheme({
      url: 'qqmap://map/routeplan?type=drive&from=清华&fromcoord=39.994745,116.247282&to=怡和世家&tocoord=39.867192,116.493187&referer=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77',
    })
  }
  const openAppleMap = async () => {
    alita.device.openURLScheme({
      url: 'http://maps.apple.com/?saddr=Cupertino&daddr=San+Francisco'
    })
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
        <div className={styles.cell} onClick={getMapsList}>
          <a>getMapsList</a>
        </div>
        <div className={styles.cell} onClick={openGoogleMap}>
          <a>openGoogleMap</a>
        </div>
        <div className={styles.cell} onClick={openBaiduMap}>
          <a>openBaiduMap</a>
        </div>
        <div className={styles.cell} onClick={openAmap}>
          <a>openAmap</a>
        </div>
        <div className={styles.cell} onClick={openQQMap}>
          <a>openQQMap</a>
        </div>
        <div className={styles.cell} onClick={openAppleMap}>
          <a>openAppleMap</a>
        </div>
      </div>
    </div>
  );
}
