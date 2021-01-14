import Head from "next/head";
import styles from "../../styles/Media.module.css";

export default function Notice() {
  const postHello = () => {
    alita.notice.postMessage({
      name: "hello",
      userInfo: {
        from: "amy",
      },
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Notice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.list}>
        <div className={styles.cell}>
          <a onClick={postHello}>post hello</a>
        </div>
      </div>
    </div>
  );
}
