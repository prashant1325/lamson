import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SpareParts from "../pages/SpareParts";
import Accessories from "../pages/Accessories";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* ✅ MAIN ROUTES */}
      <Route path="/products/spare-parts" element={<SpareParts />} />
      <Route path="/products/accessories" element={<Accessories />} />

      {/* 🔁 REDIRECT OLD ROUTES (THIS FIXES THE WARNING) */}
      <Route
        path="/spare-parts"
        element={<Navigate to="/products/spare-parts" replace />}
      />
      <Route
        path="/accessories"
        element={<Navigate to="/products/accessories" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
