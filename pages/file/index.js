import Head from 'next/head';
import styles from '../../styles/Media.module.css';

export default function File() {
  const openDocument = async () => {
    try {
      await alita.file.openDocument({ url: 'http://www.csrc.gov.cn/pub/zjhpublic/G00306201/201501/P020150109534687031738.pdf' })
    } catch (error) {
      alert(error.message);
    }
  }
  const saveFile = async () => {
    try {
      await alita.file.saveFile({ url: 'http://www.csrc.gov.cn/pub/zjhpublic/G00306201/201501/P020150109534687031738.pdf' });
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>File</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.list}>
        <div className={styles.cell} onClick={openDocument}>
          <a>openDocument</a>
        </div>
        <div className={styles.cell} onClick={saveFile}>
          <a>saveFile</a>
        </div>
      </div>
    </div>
  );
}
