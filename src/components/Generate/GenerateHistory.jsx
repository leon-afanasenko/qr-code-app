import { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer"; // Импорт Footer
import styles from "./GenerateHistory.module.css";

const GENERATE_DATA = "generatedData"; // Ключ для localStorage

export const GenerateHistory = () => {
  const [storedData, setStoredData] = useState([]);

  useEffect(() => {
    // Загружаем сохраненные данные из localStorage
    const savedData = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];
    setStoredData(savedData);
  }, []);

  const handleClearHistory = () => {
    localStorage.removeItem(GENERATE_DATA); // Удаляем данные из localStorage
    setStoredData([]); // Очищаем состояние
  };

  return (
    <div className={styles.generateHistoryContainer}>
      <h2>Generated QR Code History</h2>
      {storedData.length > 0 ? (
        <>
          <ul className={styles.generateHistoryList}>
            {storedData.map((data, index) => (
              <li key={index} className={styles.generateHistoryItem}>
                {data}
              </li>
            ))}
          </ul>
          <button
            className={styles.clearHistoryButton}
            onClick={handleClearHistory}
          >
            Clear History
          </button>
        </>
      ) : (
        <p>No data generated yet.</p>
      )}
      <Footer /> {/* Добавляем футер */}
    </div>
  );
};
