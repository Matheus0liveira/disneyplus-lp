import { memo } from "react";
import * as S from "./styles";

const FooterComponent = () => {
  return (
    <S.Container>
      <h3>Não possui uma conta na Disney Plus?</h3>
      <h4>Crie sua conta gratuita agora</h4>
    </S.Container>
  );
};

export const Footer = memo(FooterComponent);
