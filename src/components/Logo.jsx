import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.link} to="/">
      <img src="/icon.png" alt="Universal Trip logo" className={styles.logo} />
      <span>Universal Trip</span>
    </Link>
  );
}

export default Logo;
