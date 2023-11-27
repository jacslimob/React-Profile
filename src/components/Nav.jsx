import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';
import { useEffect, useState } from 'react';

export default function Nav() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <Navbar
      links={[
        <Link
          key={1}
          className={`me-2 inline-block p-2 ${currentPath === '/' ? 'bg-blue-300' : 'bg-blue-500'} rounded-t-lg text-white hover:text-black hover:bg-blue-300`}
          to="/"
        >
          About Me
        </Link>,
        <Link 
          key={2} 
          className={`me-2 inline-block p-2 ${currentPath === '/portfolio' ? 'bg-blue-300' : 'bg-blue-500'} rounded-t-lg text-white hover:text-black hover:bg-blue-300`} 
          to="/portfolio"
        >
          Portfolio
        </Link>,
        <Link 
          key={3} 
          className={`me-2 inline-block p-2 ${currentPath === '/contact' ? 'bg-blue-300' : 'bg-blue-500'} rounded-t-lg text-white hover:text-black hover:bg-blue-300`} 
          to="/contact"
        >
          Contact
        </Link>,
        <Link 
          key={4} 
          className={`me-2 inline-block p-2 ${currentPath === '/resume' ? 'bg-blue-300' : 'bg-blue-500'} rounded-t-lg text-white hover:text-black hover:bg-blue-300`}  
          to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
