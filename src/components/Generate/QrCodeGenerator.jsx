import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "./QrCodeGenerator.module.css";

const GENERATE_DATA = "generatedData"; // Ключ для localStorage

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    if (value.trim() !== "") {
      setResult(value);

      // Добавляем новое значение в localStorage
      const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];
      const updatedData = [...prevData, value];
      localStorage.setItem(GENERATE_DATA, JSON.stringify(updatedData));

      setValue(""); // Очищаем текстовое поле
    }
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  return (
    <div className={styles.qrCodeGeneratorContainer}>
      <textarea
        value={value}
        onChange={onChangeHandler}
        className={styles.qrCodeGeneratorResult}
        placeholder="Enter text for QR code"
      />
      <button
        type="button"
        className={styles.qrCodeGeneratorButton}
        onClick={onClickHandler}
      >
        Generate QR
      </button>

      {result !== "" && (
        <div className={styles.qrCodeGeneratorWrapper}>
          <h3>Your QR Code:</h3>
          <QRCodeSVG value={result} className={styles.qrCodeGeneratorSvg} />
        </div>
      )}
    </div>
  );
};
