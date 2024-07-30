import Link from 'next/link';

const Home = () => {
  return (
    <div className='center'>
      <h1 >Welcome</h1>
      <Link href="/login" legacyBehavior>
        <a>Login</a>
      </Link>
      <br />
      <Link href="/signup" legacyBehavior>
        <a>Signup</a>
      </Link>
    </div>
  );
};

export default Home;
