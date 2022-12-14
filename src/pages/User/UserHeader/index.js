import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from '../UserHeaderNav';
import styles from './style.module.css';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;

      case '/conta/postar':
        setTitle('Poste sua foto');
        break;

      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
