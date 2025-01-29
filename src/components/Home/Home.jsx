import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to QR Code App</h1>
      <p className={styles.homeText}>
        Easily generate and scan QR codes. Get started now!
      </p>
      <footer className={styles.homeFooter}>
        <p className={styles.footerText}>
          © Leon Mashyn | All rights reserved |{" "}
          <a href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </a>
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/leonid-afanasenko/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/leon-afanasenko"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </div>
  );
};
