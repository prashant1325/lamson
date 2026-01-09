import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // 🔹 On route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // 🔹 On page refresh / first load
  useEffect(() => {
    window.history.scrollRestoration = "manual"; // disable browser restore
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;
