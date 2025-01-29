import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { GenerateHistory } from "./components/Generate/GenerateHistory";
import { ScanHistory } from "./components/Scan/ScanHistory";
import { Home } from "./components/Home/Home";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/qr-code-app" element={<Home />} />{" "}
        {/* Главная страница */}
        <Route path="/qr-code-app/generate" element={<QrCodeGenerator />} />
        <Route path="/qr-code-app/scan" element={<QrCodeScanner />} />
        <Route
          path="/qr-code-app/generate-history"
          element={<GenerateHistory />}
        />
        <Route path="/qr-code-app/scan-history" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export { Layout };
