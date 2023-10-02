import styles from "../styles/home.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import user from "../assets/profile-circle.svg";
import { BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.topbar}></div>

      <div className={styles.nav}>
        <div className={styles.brand}>
          <Link to="/">
            <img src={logo} alt="logo" />
            <h2>HelpMeOut</h2>
          </Link>
        </div>

        <div className={styles.user}>
          <img src={user} alt="user" />
          <h3>John Mark</h3>
          <BsChevronDown className={styles.icon} />
        </div>
      </div>

      <div className={styles.heading}>
        <div className={styles.welcome}>
          <h2>Hello, John Mark</h2>
          <p>Here are your recorded videos</p>
        </div>
        <form>
          <button>
            <BiSearch className={styles.icon} />
          </button>
          <input type="text" placeholder="Search for a particular video" />
        </form>
      </div>
    </div>
  );
};

export default Home;
