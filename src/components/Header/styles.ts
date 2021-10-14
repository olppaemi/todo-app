import styled from "styled-components";
import { rem } from "styles/utils";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${rem(40)};
  letter-spacing: ${rem(15)};
  color: white;
`;

export const ToggleButton = styled.button`
  width: ${rem(26)};
  height: ${rem(26)};
  background: transparent;
  border: none;
  outline: none;
`;
