import { useCallback } from "react";

export default function useModalScroll() {
  // 모달이 열렸을 때 스크롤을 막는다
  const lockScroll = useCallback(() => {
    document.body.style.cssText = `
      position: fixed;

    `;
  }, []);

  // 모달이 닫혔을 때 스크롤을 활성화 한다.
  const openScroll = useCallback(() => {
    document.body.style.cssText = ""; // 스타일 초기화
  }, []);

  return { lockScroll, openScroll };
}
