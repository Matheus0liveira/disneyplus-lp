import { AnimatedCharacters } from "../AnimatedText";
import { Button } from "../Button";
import { motion } from "framer-motion";

import * as S from "./styles";
import { useMemo } from "react";

export function Main() {
  const transition = useMemo(
    () => ({
      duration: 1.2,
      delay: 1.4,
      ease: [0, 0.71, 0.2, 1.01],
    }),
    []
  );
  const initialAndAnimate = useMemo(
    () => ({
      initial: { opacity: 0, y: "300%" },
      animate: { opacity: 1, y: "0" },
    }),
    []
  );

  return (
    <S.Container>
      <AnimatedCharacters />
      <motion.div
        {...initialAndAnimate}
        transition={{ ...transition, delay: 1.6 }}
      >
        <img src="/disney-logo.svg" alt="disney-logo" />
      </motion.div>
      <motion.div
        {...initialAndAnimate}
        transition={transition}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
      >
        <Button>Escolha seu plano</Button>
      </motion.div>
    </S.Container>
  );
}
