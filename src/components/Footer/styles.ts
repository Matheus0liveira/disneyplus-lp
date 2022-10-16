import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.footer)`
  position: absolute;
  bottom: 48px;
  left: 48px;

  h4 {
    color: #6421ff;

    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;
