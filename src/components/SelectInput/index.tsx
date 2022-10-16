import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ReactNode } from "react";
import { content } from "./content";

import * as S from "./styles";

function Content({ children }: { children: ReactNode }) {
  return (
    <SelectPrimitive.Portal>
      <S.StyledContent>{children}</S.StyledContent>
    </SelectPrimitive.Portal>
  );
}

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectGroup = SelectPrimitive.Group;
const SelectItemText = SelectPrimitive.ItemText;

export const SelectInput = () => (
  <Select defaultValue="br">
    <S.StyledTrigger aria-label="Language">
      <SelectValue placeholder="Select a language" />
      <S.StyledIcon>
        <ChevronDownIcon />
      </S.StyledIcon>
    </S.StyledTrigger>
    <Content>
      <S.StyledViewport>
        <SelectGroup>
          {content.map((props) => (
            <Item key={props.id} {...props} />
          ))}
        </SelectGroup>
      </S.StyledViewport>
    </Content>
  </Select>
);

type ItemProps = {
  value: string;
  img: string;
  label: string;
};
function Item({ img, label, value }: ItemProps) {
  return (
    <S.StyledItem value={value}>
      <SelectItemText>
        <img src={img} width={24} />
        {label}
      </SelectItemText>
      <S.StyledItemIndicator>
        <CheckIcon />
      </S.StyledItemIndicator>
    </S.StyledItem>
  );
}
