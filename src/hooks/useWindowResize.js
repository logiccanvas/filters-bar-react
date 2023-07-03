import { useEffect } from "react";

function useWindowResize(callback, deps = []) {
  useEffect(() => {
    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
  }, [deps, callback]);
}

export default useWindowResize;
