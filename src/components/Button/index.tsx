import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonComponent = ({ ...rest }: ButtonProps) => {
  return <S.Container {...rest} />;
};

export const Button = memo(ButtonComponent);
