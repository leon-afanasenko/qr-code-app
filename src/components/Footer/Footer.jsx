import React from "react";
import styles from "./Footer.module.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.homeFooter}>
      <p className={styles.footerText}>
        © Leon Mashyn | All rights reserved |{" "}
        <a
          href="#"
          className={styles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
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
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/leon-afanasenko"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
