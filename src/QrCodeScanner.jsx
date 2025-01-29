import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import styles from "./QrCodeScanner.module.css";

const QrCodeScanner = () => {
  const [scannedData, setScannedData] = useState(new Map());

  const handleScan = (detectedCodes) => {
    if (detectedCodes && detectedCodes.length > 0) {
      const newData = new Map(scannedData);
      detectedCodes.forEach((code) => {
        if (!newData.has(code.rawValue)) {
          newData.set(code.rawValue, {
            format: code.format,
            timestamp: new Date().toLocaleString(),
          });
        }
      });
      setScannedData(newData);
    }
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
          {[...scannedData.entries()].map(([rawValue, data], index) => (
            <li key={index} className={styles.qrCodeScannerDataItem}>
              <p>
                <strong>Value:</strong>{" "}
                <a
                  href={rawValue}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.qrCodeScannerDataLink}
                >
                  {rawValue}
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
    </div>
  );
};

export { QrCodeScanner };
