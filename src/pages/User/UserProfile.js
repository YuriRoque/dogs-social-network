import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed';
import Head from '../../components/Helper/Head';

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className='container mainSection'>
      <Head title={user} />
      <h1 className='title'>{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
