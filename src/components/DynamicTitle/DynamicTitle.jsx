import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "Import Export Hub"; // default title
    }
  }, [title]);
};

export default useTitle;