import { useEffect } from "react";

const ScrollTop = ({ id }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);
  return null;
};

export default ScrollTop;
