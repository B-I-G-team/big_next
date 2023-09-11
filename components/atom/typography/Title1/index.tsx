import { Color } from '@/styles/theme';
import { ReactChild } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
  color?: Color;
}

const Title1 = ({ children, color = 'text_500' }: Props) => {
  return <Text color={color}>{children}</Text>;
};

export default Title1;

const Text = styled.span<{ color: Color }>`
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.13px;

  color: ${({ theme, color }) => theme.color[color]};
`;
