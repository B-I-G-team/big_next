import { Color } from '@/styles/theme';
import { ReactChild } from 'react';
import styled from 'styled-components';
import TypoGraphy from '..';

export interface Props {
  children: ReactChild;
  color?: Color;
}

const Title2 = ({ children, color = 'text_500' }: Props) => {
  return (
    <Text bold={true} color={color}>
      <div>{children}</div>
    </Text>
  );
};

export default Title2;

const Text = styled(TypoGraphy)<{ color: Color }>`
  font-family: 'Gmarket Sans TTF';
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  line-height: 20px;
  letter-spacing: 0.13px;
  color: ${({ theme, color }) => theme.color[color]};
`;
