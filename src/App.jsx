
import { Outlet } from 'react-router-dom';

import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;