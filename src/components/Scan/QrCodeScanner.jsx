import React, { useState, useEffect } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import styles from "./QrCodeScanner.module.css";

const SCAN_DATA = "scannedData"; // Ключ для localStorage

const QrCodeScanner = () => {
  const [scannedData, setScannedData] = useState([]);

  // Загружаем сохраненные данные из localStorage при запуске
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(SCAN_DATA)) || [];
    setScannedData(savedData);
  }, []);

  const handleScan = (detectedCodes) => {
    if (detectedCodes && detectedCodes.length > 0) {
      let prevData = JSON.parse(localStorage.getItem(SCAN_DATA)) || []; // Получаем данные из localStorage

      detectedCodes.forEach((code) => {
        // Проверяем, был ли этот QR-код уже отсканирован
        const isAlreadyScanned = prevData.some(
          (item) => item.value === code.rawValue
        );

        if (!isAlreadyScanned) {
          const newScan = {
            value: code.rawValue,
            format: code.format,
            timestamp: new Date().toLocaleString(),
          };

          // Обновляем localStorage (добавляем в начало массива)
          const updatedData = [newScan, ...prevData];
          localStorage.setItem(SCAN_DATA, JSON.stringify(updatedData));

          // Обновляем состояние (новый QR-код будет сверху)
          setScannedData(updatedData);
        }
      });
    }
  };

  // Очистка localStorage и состояния
  const handleReset = () => {
    localStorage.removeItem(SCAN_DATA);
    setScannedData([]);
  };

  const handleError = (error) => {
    console.error("Error:", error);
  };

  const settings = {
    audio: false,
  };

  return (
    <div className={styles.qrCodeScannerContainer}>
      <h1 className={styles.qrCodeScannerTitle}>QR Code Scanner</h1>

      {/* Контейнер для камеры */}
      <div className={styles.qrCodeScannerCameraContainer}>
        <div className={styles.qrCodeScannerCamera}>
          <Scanner
            onScan={handleScan}
            onError={handleError}
            allowMultiple
            components={settings}
          />
        </div>
      </div>

      {/* Контейнер для данных */}
      <div className={styles.qrCodeScannerDataContainer}>
        <h2 className={styles.qrCodeScannerDataTitle}>Scanned Data:</h2>
        <ul className={styles.qrCodeScannerDataList}>
          {scannedData.map((data, index) => (
            <li key={index} className={styles.qrCodeScannerDataItem}>
              <p>
                <strong>Value:</strong>{" "}
                <a
                  href={data.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.qrCodeScannerDataLink}
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
      </div>

      {/* Кнопка очистки */}
      {scannedData.length > 0 && (
        <button
          className={styles.qrCodeScannerResetButton}
          onClick={handleReset}
        >
          Clear Scan History
        </button>
      )}
    </div>
  );
};

export { QrCodeScanner };
