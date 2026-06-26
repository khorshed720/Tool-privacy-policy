import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
