import styles from "../pages/Homepage.module.css";
import { CgCloseR } from "react-icons/cg";
import { useOpenOrClose } from "../contexts/OpenOrCloseNavContext";
import { IoIosPricetag } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export default function MobileNav() {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useOpenOrClose();

  const handleCloseAndNavigate = (path) => {
    setIsOpen(false); // Ensure the state is updated before navigation
    navigate(path);
  };

  return isOpen ? (
    <div className={styles.mobileNav}>
      <div onClick={() => setIsOpen(false)}>
        <CgCloseR />
      </div>

      <ul>
        <button
          className={styles.btns}
          onClick={() => handleCloseAndNavigate("/pricing")}
        >
          <li>
            <IoIosPricetag className={styles.icons} />
            Pricing
          </li>
        </button>

        <button
          className={styles.btns}
          onClick={() => handleCloseAndNavigate("/product")}
        >
          <li>
            <MdOutlineProductionQuantityLimits className={styles.icons} />
            Product
          </li>
        </button>

        <button
          className={styles.btns}
          onClick={() => handleCloseAndNavigate("/login")}
        >
          <li className={styles.ctaLink}>Login</li>
        </button>
      </ul>
    </div>
  ) : null;
}
