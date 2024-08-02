import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useOpenOrClose } from "../contexts/OpenOrCloseNavContext";

// icons
import { RiMenu5Fill } from "react-icons/ri";

function PageNav() {
  const { isOpen, setIsOpen } = useOpenOrClose();
  return (
    // <div className={styles.navBar}>
    <nav className={styles.nav}>
      <Logo />

      {/* for mobile mode */}

      <div className={styles.hamburgerMenu} onClick={() => setIsOpen(true)}>
        <RiMenu5Fill />
      </div>

      {/* for web mode */}
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>

        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
