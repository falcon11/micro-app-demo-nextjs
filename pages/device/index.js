import styles from '../../styles/Media.module.css';

export default function Device() {
  const platformApi = () => {
    alita.device.platform().then((data) => {
      alert('platform:' + data);
      console.log('platform:' + data);
    });
  };
  const scanCodeApi = () => {
    WebViewJavascriptBridge.callHandler('device.scanCode', {onlyFromCamera: true}, () => {});
  };
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.cell}>
          <a onClick={platformApi}>Platform</a>
        </div>
        <div className={styles.cell} onClick={scanCodeApi}>
          <a>ScanCode</a>
        </div>
      </div>
    </div>
  );
}
