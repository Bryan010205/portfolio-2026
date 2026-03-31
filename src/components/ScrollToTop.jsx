import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Mỗi khi đường dẫn (pathname) thay đổi, cuộn về đầu trang (0,0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Component này không hiển thị gì cả, chỉ chạy logic
};

export default ScrollToTop;