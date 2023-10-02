import styles from "../styles/navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
const NavBar = () => {
  return (
    <nav>
      <div className={styles.brand}>
        <Link to="/">
          <img src={logo} alt="logo" />
          <h2>HelpMeOut</h2>
        </Link>
      </div>

      <div className={styles.navlink}>
        <NavLink>Features</NavLink>
        <NavLink>How It Works</NavLink>
      </div>

      <div className={styles.navlink}>
        <NavLink>Get Started</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
