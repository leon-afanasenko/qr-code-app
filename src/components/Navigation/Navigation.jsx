import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/qr-code-app" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/qr-code-app/generate" className={styles.navLink}>
            Generate QR Code
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/qr-code-app/scan" className={styles.navLink}>
            Scan QR Code
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/qr-code-app/scan-history" className={styles.navLink}>
            Scan History
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/qr-code-app/generate-history" className={styles.navLink}>
            Generate History
          </Link>
        </li>
      </ul>
    </nav>
  );
};
