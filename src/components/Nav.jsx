import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          TicTacToe 
        </Link>,
        <Link key={2} className="nav-link text-light" to="/think">
          Think
        </Link>,
      ]}
    />
  );
}
