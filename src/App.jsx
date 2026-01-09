import { BrowserRouter } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./assets/components/ScrollToTop"; // ✅ added

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* ✅ scroll fix */}
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
