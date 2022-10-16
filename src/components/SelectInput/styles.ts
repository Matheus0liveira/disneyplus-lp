import styled from "styled-components";

import * as SelectPrimitive from "@radix-ui/react-select";

export const StyledTrigger = styled(SelectPrimitive.SelectTrigger)`
  all: unset;

  min-width: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  border-radius: 4px;
  padding: 8px;

  font-size: 14px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
  }
`;

export const StyledIcon = styled(SelectPrimitive.SelectIcon)`
  color: #fafafa;
`;
export const StyledContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background: #fafafa;

  padding: 8px;
  border-radius: 4px;
`;

export const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: 5;
`;
export const StyledItem = styled(SelectPrimitive.Item)`
  all: unset;

  display: flex;
  align-items: center;
  column-gap: 80px;

  color: #6421ff;

  border-radius: 4px;

  min-width: 180px;
  font-size: 14px;

  padding: 4px 24px;
  margin: 4px 0;
  position: relative;

  cursor: default;

  &[data-disabled] {
    color: black;
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: #6421ff;
    color: #fafafa;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;

    padding: 4px;
  }
`;

export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;

  width: 24px;
`;
