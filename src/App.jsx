import { BrowserRouter } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
