import styles from '../../styles/Media.module.css';
import { useState } from 'react';

export default function ChooseImage() {
  const [images, setImages] = useState([]);
  const chooseImage = async () => {
    console.log('choose image start');
    try {
      const data = await alita.media.chooseImage();
      console.log(data);
      if (data && data.files) {
        setImages(data.files);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <button onClick={chooseImage}>ChooseImage</button>
      {images.map((image) => {
        return (
          <img
            style={{ width: '100px', height: '100px', marginTop: '1rem' }}
            src={(image.base64 && `data:image/png;base64,${image.base64}`) || image.thumbnail || image.path}
          />
        );
      })}
    </div>
  );
}
