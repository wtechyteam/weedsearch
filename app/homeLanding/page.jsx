'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const HomeLanding = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/login'); // Redirect to login page if user is not found
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login'); // Redirect to login page
  };

  if (!user) {
    return <div>Loading...</div>; // Render a loading state while checking for the user
  }

  return (
    <div className='center'>
      <h1>Welcome, {user.fullName || 'User'}</h1>
      <p>If you landed here, this means you have successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomeLanding;
