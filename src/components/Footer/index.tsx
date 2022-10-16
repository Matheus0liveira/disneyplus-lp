import { memo } from "react";
import * as S from "./styles";

const FooterComponent = () => {
  return (
    <S.Container
      initial={{ opacity: 0, x: "50%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h3>Não possui uma conta na Disney+ ?</h3>
      <h4>Crie sua conta gratuita agora</h4>
    </S.Container>
  );
};

export const Footer = memo(FooterComponent);
