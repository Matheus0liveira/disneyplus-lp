import { memo } from "react";
import { SelectInput } from "../SelectInput";
import * as S from "./styles";

function HeaderComponent() {
  return (
    <S.Container
      initial={{ opacity: 0, y: "300%" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{
        duration: 1.2,
        delay: 2.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <SelectInput />
    </S.Container>
  );
}

export const Header = memo(HeaderComponent);
