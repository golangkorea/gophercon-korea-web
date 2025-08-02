import { useCallback, useRef } from "react";

export default function useModalScroll() {
  const scrollPosition = useRef(0);

  const lockScroll = useCallback(() => {
    scrollPosition.current = window.scrollY;
    document.body.style.cssText = `
      position: fixed;
      top: -${scrollPosition.current}px;
      width: 100%;
      overflow-y: scroll;
    `;
  }, []);

  const openScroll = useCallback(() => {
    document.body.style.cssText = "";
    window.scrollTo(0, scrollPosition.current);
  }, []);

  return { lockScroll, openScroll };
}
