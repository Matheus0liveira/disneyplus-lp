import { memo, useMemo, useState } from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { AnimatePresence, Variants } from "framer-motion";
import { useReplayAnimation } from "../../hooks/useReplayAnimation";

const FooterComponent = () => {
  const { isReplay } = useReplayAnimation();
  const { t } = useTranslation();

  const variants: Variants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        x: "0",
        transition: {
          delay: 2.4,
          type: "spring",
        },
      },
      hidden: {
        x: "10%",
        opacity: 0,
        transition: {
          delay: 1.6,
          type: "spring",
        },
      },
    }),
    []
  );
  const handlers = useMemo(
    () => ({
      initial: { opacity: 0, x: "10%" },
      animate: isReplay ? "visible" : "hidden",
      exit: { x: "10%", opacity: 0 },
      transition: { type: "spring" },
    }),
    []
  );

  return (
    <AnimatePresence>
      {isReplay && (
        <S.Container variants={variants} {...handlers}>
          <>
            <h3>{t("footer.part1")}</h3>
            <h4>{t("footer.part2")}</h4>
          </>
        </S.Container>
      )}
    </AnimatePresence>
  );
};

export const Footer = memo(FooterComponent);
