import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Trạng thái ẩn: mờ và nằm thấp hơn 50px
      whileInView={{ opacity: 1, y: 0 }} // Trạng thái hiện: hiện rõ và về vị trí gốc
      viewport={{ once: true, margin: "-100px" }} // Chỉ chạy 1 lần khi cuộn tới cách 100px
      transition={{ duration: 0.8, ease: "easeOut" }} // Tốc độ trượt mượt mà
    >
      {children}
    </motion.div>
  );
};

export default Reveal;