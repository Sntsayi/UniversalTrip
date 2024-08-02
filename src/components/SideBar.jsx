import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* we use the outlet element to show the nested element ....outlet element like children prop to use the nessted prop */}
      <Outlet />

      <Footer />
    </div>
  );
}
export default SideBar;
