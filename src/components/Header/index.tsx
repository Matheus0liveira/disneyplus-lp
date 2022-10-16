import { memo } from "react";
import { SelectInput } from "../SelectInput";
import * as S from "./styles";

function HeaderComponent() {
  return (
    <S.Container
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{
        delay: 2.8,
        type: "spring",
      }}
    >
      <SelectInput />
    </S.Container>
  );
}

export const Header = memo(HeaderComponent);
