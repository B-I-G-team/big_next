import React, { ReactChild } from 'react';
import { Color } from '@/styles/theme';
import { styled } from 'styled-components';
export interface Props {
  color: Color;
  backgroundColor: Color;
  children: ReactChild;
}
const Tag = ({
  color = 'white',
  backgroundColor = 'border_300',
  children,
}: Props) => {
  return (
    <TagBox backgroundColor={backgroundColor} color={color}>
      {children}
    </TagBox>
  );
};

export default Tag;

const TagBox = styled.div<{ backgroundColor: Color; color: Color }>`
  display: inline-flex;
  margin-right: auto;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-family: Gmarket Sans TTF;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.24px;
  background-color: ${({ backgroundColor, theme }) =>
    theme.color[backgroundColor]};
  color: ${({ color, theme }) => theme.color[color]};
`;
