import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import Image from '../../Helper/Image';
import PhotoComments from '../PhotoComments';
import PhotoDelete from '../PhotoDelete';
import styles from './style.module.css';

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.author}>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          )}
          <span className={styles.span}>{photo.acessos}</span>
        </p>
        <h1 className='title'>
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          <li>
            {photo.idade} {photo.idade === 1 ? 'ano' : 'anos'}
          </li>
        </ul>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;