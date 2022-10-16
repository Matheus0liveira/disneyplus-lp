import { AnimatedCharacters } from "../AnimatedText";
import { Button } from "../Button";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

import * as S from "./styles";
import { useMemo } from "react";
import { useReplayAnimation } from "../../hooks/useReplayAnimation";

export function Main() {
  const { isReplay } = useReplayAnimation();
  const { t } = useTranslation();

  const variants: Variants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        y: "0",
        transition: {
          delay: 1.6,
          type: "spring",
        },
      },
      hidden: {
        y: "10%",
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
      initial: { opacity: 0, y: "300%" },
      animate: isReplay ? "visible" : "hidden",
      exit: { y: "10%", opacity: 0 },
      transition: { type: "spring" },
    }),
    []
  );

  return (
    <S.Container>
      <AnimatedCharacters />

      <AnimatePresence>
        {!!isReplay && (
          <motion.div
            {...handlers}
            variants={{
              ...variants,
              visible: {
                ...variants.visible,
                transition: {
                  type: "spring",
                  delay: 1.8,
                },
              },
            }}
          >
            <img src="/disney-logo.svg" alt={t("main.image_alt")} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!!isReplay && (
          <motion.div
            {...handlers}
            variants={variants}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
          >
            <Button>{t("main.plan_button")}</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </S.Container>
  );
}
