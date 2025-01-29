import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            {" "}
            {/* Ссылка на главную страницу */}
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/generate" className={styles.navLink}>
            Generate QR Code
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/scan" className={styles.navLink}>
            Scan QR Code
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/scan-history" className={styles.navLink}>
            Scan History
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/generate-history" className={styles.navLink}>
            Generate History
          </Link>
        </li>
      </ul>
    </nav>
  );
};
