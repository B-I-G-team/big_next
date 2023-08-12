import { ReactChild } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
  bold?: boolean;
}

const Body1 = ({ children, bold }: Props) => (
  <Text bold={bold}>{children}</Text>
);

export default Body1;

const Text = styled.span<{ bold?: boolean }>`
  font-family: 'Gmarket Sans TTF';
  font-size: 18px;
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  line-height: 24px;
  letter-spacing: -0.45px;
`;
