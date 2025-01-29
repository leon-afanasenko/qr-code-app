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
        <Route path="/" element={<Home />} /> {/* Главная страница */}
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/generate-history" element={<GenerateHistory />} />
        <Route path="/scan-history" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export { Layout };
