import { memo } from "react";
import { SelectInput } from "../SelectInput";
import * as S from "./styles";

function HeaderComponent() {
  return (
    <S.Container>
      <SelectInput />
    </S.Container>
  );
}

export const Header = memo(HeaderComponent);
