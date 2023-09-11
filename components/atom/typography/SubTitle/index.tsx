import { Color } from '@/styles/theme';
import { ReactChild } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
  color?: Color;
}

const SubTitle = ({ children, color = 'text_500' }: Props) => {
  return <Text color={color}>{children}</Text>;
};

export default SubTitle;

const Text = styled.span<{ color: Color }>`
  font-family: 'Gmarket Sans TTF';
  font-size: 12px;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.24px;
  color: ${({ theme, color }) => theme.color[color]};
`;
