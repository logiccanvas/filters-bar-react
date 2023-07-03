import { useEffect } from "react";

const usePressEscape = (ref, onPressEscape) => {
  useEffect(() => {
    const handlePressKey = (event) => {
      if (event.key === "Escape") {
        onPressEscape();
      }
    };

    document.addEventListener("keydown", handlePressKey);

    return () => {
      document.removeEventListener("keydown", handlePressKey);
    };
  }, [ref, onPressEscape]);
};

export default usePressEscape;
