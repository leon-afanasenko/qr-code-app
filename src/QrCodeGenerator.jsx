import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "./QrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  console.log("result:", result);

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
        <div className={styles.qrCodeGeneratorSvg}>
          <h3>Your QR Code:</h3>
          <QRCodeSVG value={result} />
        </div>
      )}
    </div>
  );
};
