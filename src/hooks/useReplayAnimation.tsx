import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useReplayAnimation = () => {
  const [isReplay, setIsReplay] = useState(true);
  const { i18n } = useTranslation();

  i18n.on("languageChanged", () => {
    setIsReplay((pv) => !pv);
    setTimeout(() => {
      setIsReplay(true);
    }, 600);
  });

  return { isReplay };
};
