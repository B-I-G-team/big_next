import { Color } from '@/styles/theme';
import React, { ReactChild } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
  bold?: boolean;
  color?: Color;
}
const TypoGraphy = ({ children, bold, color = 'text_500' }: Props) => {
  return (
    <Text $bold={bold} color={color}>
      {children}
    </Text>
  );
};

export default TypoGraphy;

const Text = styled.span<{ $bold?: boolean; color: Color }>`
  font-weight: ${({ $bold }) => ($bold ? '700' : '500')};
  color: ${({ theme, color }) => theme.color[color]};
  padding-top: 1.5px;
`;
