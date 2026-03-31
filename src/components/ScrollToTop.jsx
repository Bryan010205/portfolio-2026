import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuộn lên đầu trang (vị trí 0,0) mỗi khi đường dẫn thay đổi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Component này chỉ chạy logic, không cần hiển thị giao diện
};

export default ScrollToTop;