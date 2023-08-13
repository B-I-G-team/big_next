import { Color } from '@/styles/theme';
import { ReactChild } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
  bold?: boolean;
  color?: Color;
}

const Body1 = ({ children, bold, color = 'text_500' }: Props) => (
  <Text bold={bold} color={color}>
    {children}
  </Text>
);

export default Body1;

const Text = styled.span<{ bold?: boolean; color: Color }>`
  font-family: 'Gmarket Sans TTF';
  font-size: 18px;
  font-weight: ${({ bold }) => (bold ? 700 : 500)};
  line-height: 24px;
  letter-spacing: -0.45px;
  color: ${({ theme, color }) => theme.color[color]};
`;
