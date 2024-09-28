import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useCheckMobile = (initialValue: boolean) => {
  const [isMobile, setIsMobile] = useState(initialValue);

  const mobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (mobile) {
      setIsMobile(mobile);
    } else {
      setIsMobile(false);
    }
  }, [mobile]);

  return isMobile;
};
