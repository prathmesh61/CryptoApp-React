import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import CryptoDetail from "./pages/CryptoDetail";
import CryptoHome from "./pages/CryptoHome";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<CryptoHome />} />
          <Route path="/coin/:id" element={<CryptoDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
