import { NavLink } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
        <h1> <NavLink to={'/'}>Cuker</NavLink></h1>

        <ul>
            <li><NavLink to={'/'}>Work</NavLink></li>
            <li><NavLink to={'/'}>About</NavLink></li>
            <li><NavLink to={'/'}>Industries</NavLink></li>
            <li><NavLink to={'/'}>The DynamicBrand<sup>TM</sup></NavLink></li>
            <li><NavLink to={'/'}>Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar