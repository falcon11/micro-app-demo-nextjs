import styles from '../../styles/Media.module.css';

export default function Media() {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.cell}>
          <a href="media/chooseImage">ChooseImage</a>
        </div>
      </div>
    </div>
  );
}
