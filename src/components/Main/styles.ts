import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div).attrs({
  initial: "hidden",
  animate: "visible",
  variants: {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  },
})`
  width: 100%;
  height: 100vh;
  max-width: 1620px;

  padding: 48px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 48px;

  h1 {
    width: 100%;
    max-width: 720px;
    line-height: 1.4;
  }

  img {
    width: 100%;
    max-width: 240px;
    margin-bottom: 40px;
  }

  @media (max-width: 620px) {
    justify-content: flex-start;
    padding: 24px;

    button {
      margin-top: auto;
      margin-bottom: 96px;
    }
  }
`;
