import { Color } from '@/styles/theme';
import { ReactChild } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
  bold?: boolean;
  color?: Color;
}

const Small = ({ children, bold, color = 'text_500' }: Props) => (
  <Text $bold={bold} color={color}>
    {children}
  </Text>
);

export default Small;

const Text = styled.span<{ $bold?: boolean; color: Color }>`
  font-family: 'Gmarket Sans TTF';
  font-size: 12px;
  font-weight: ${({ $bold }) => ($bold ? 700 : 500)};
  line-height: 16px;
  letter-spacing: 0.24px;
  color: ${({ theme, color }) => theme.color[color]};
`;
