import { QrCodeGenerator } from "./QrCodeGenerator";
import { QrCodeScanner } from "./QrCodeScanner";

const Layout = () => {
  return (
    <div>
      <QrCodeScanner />
      {/* <QrCodeGenerator /> */}
    </div>
  );
};
export { Layout };
