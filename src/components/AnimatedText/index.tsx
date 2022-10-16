import { motion, Variants } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useReplayAnimation } from "../../hooks/useReplayAnimation";

export const AnimatedCharacters = () => {
  const { t } = useTranslation();
  const { isReplay } = useReplayAnimation();

  const text = t("main.title");

  const variants: Variants = useMemo(
    () => ({
      hidden: {
        y: "300%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
      },
      visible: {
        y: 0,
        color: "#fafafa",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
      },
    }),
    []
  );

  const splitWords = text.split(" ");
  const words: string[][] = [];
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => word.push("\u00A0"));

  return (
    <motion.div
      initial="hidden"
      animate={isReplay ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.025,
          },
        },
      }}
    >
      <h1>
        {words.map((_, index) => (
          <span key={index}>
            {words[index].flat().map((element, index) => (
              <span
                style={{
                  overflow: "hidden",
                  display: "inline-block",
                }}
                key={index}
              >
                <motion.span
                  style={{ display: "inline-block" }}
                  variants={variants}
                >
                  {element}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </h1>
    </motion.div>
  );
};
