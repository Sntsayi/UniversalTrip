import { useEffect } from "react";
import MobileNav from "../components/MobileNav";
import PageNav from "../components/PageNav";
import { useOpenOrClose } from "../contexts/OpenOrCloseNavContext";
import styles from "./Product.module.css";

export default function Product() {
  const { setIsOpen } = useOpenOrClose();

  // Close the mobile nav when this component mounts
  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>

      <MobileNav />
    </main>
  );
}
