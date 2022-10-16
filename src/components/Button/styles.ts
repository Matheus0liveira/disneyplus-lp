import styled from "styled-components";

export const Container = styled.button`
  padding: 24px;

  width: 100%;
  max-width: 720px;
  font-size: min(24px, 5vw);

  background: #6421ff;
  color: #fafafa;

  border: 0;
  border-radius: 4px;

  cursor: pointer;

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }
`;
