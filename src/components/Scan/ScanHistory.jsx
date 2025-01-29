import { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer"; // Импорт Footer
import styles from "./ScanHistory.module.css";

const SCAN_DATA = "scannedData"; // Ключ для localStorage

export const ScanHistory = () => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Загружаем сохраненные данные из localStorage
    const savedData = JSON.parse(localStorage.getItem(SCAN_DATA)) || [];
    setStoredData(savedData);
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem(SCAN_DATA); // Удаляем данные из localStorage
    setStoredData([]); // Очищаем состояние
  };

  return (
    <div className={styles.scanHistoryContainer}>
      <div>
        <h2>Scanned QR Code History</h2>
        {storedData.length > 0 ? (
          <div>
            <ul className={styles.scanHistoryList}>
              {storedData.map((data, index) => (
                <li key={index} className={styles.scanHistoryItem}>
                  <p>
                    <strong>Value:</strong>{" "}
                    <a
                      href={data.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.scanHistoryLink}
                    >
                      {data.value}
                    </a>
                  </p>
                  <p>
                    <strong>Format:</strong> {data.format}
                  </p>
                  <p>
                    <strong>Scanned at:</strong> {data.timestamp}
                  </p>
                </li>
              ))}
            </ul>
            <button
              className={styles.scanHistoryClearButton}
              onClick={handleClearHistory}
            >
              Clear History
            </button>
          </div>
        ) : (
          <p>No QR codes scanned yet.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};
