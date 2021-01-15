import './TopBar.css';
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/search">Search</Link>
      <Link to="/about">About</Link>
    </header>
  );
}

export default TopBar;
