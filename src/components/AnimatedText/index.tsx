import { motion } from "framer-motion";
import { useMemo } from "react";

export const AnimatedCharacters = () => {
  const text = "Aproveite as melhores histórias, tudo em um só lugar :)";

  const item = useMemo(
    () => ({
      hidden: {
        y: "300%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2 },
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
              <motion.span style={{ display: "inline-block" }} variants={item}>
                {element}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
};
