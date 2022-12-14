import Image from '../../../Helper/Image';
import styles from './style.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.span}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
