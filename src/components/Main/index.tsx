import { Button } from "../Button";
import * as S from "./styles";

export function Main() {
  return (
    <S.Container>
      <h1>Aproveite as melhores histórias, tudo em um só lugar :)</h1>
      <img src="/disney-logo.svg" alt="disney-logo" />
      <Button>Escolha seu plano</Button>
    </S.Container>
  );
}
