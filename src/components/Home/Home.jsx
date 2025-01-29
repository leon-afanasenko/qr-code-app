import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [data, setData] = useState(null); // Пример данных, которые нужно загрузить

  // Функция для загрузки данных
  const loadData = async () => {
    // Симуляция асинхронной загрузки данных, например, из API или localStorage
    setTimeout(() => {
      setData("QR Code App Loaded Successfully!"); // Здесь можно поставить свою логику для загрузки данных
      setLoading(false); // Завершаем загрузку
    }, 2000); // Имитация задержки
  };

  // Вызов loadData при монтировании компонента
  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>; // Показываем загрузку
  }

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to QR Code App</h1>
      <p className={styles.homeText}>{data}</p>
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
