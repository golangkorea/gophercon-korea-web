import { useCallback, useState } from "react";

export const useCopyToClipboard = (timeout = 2000) => {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");

  const copy = useCallback(
    (text: string) => {
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        setCopyStatus("copied");
        const timer = setTimeout(() => setCopyStatus("idle"), timeout);
        return () => clearTimeout(timer);
      });
    },
    [timeout],
  );

  return { copy, copyStatus };
};
