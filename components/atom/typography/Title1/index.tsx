import { Color } from '@/styles/theme';
import { ReactChild } from 'react';
import styled from 'styled-components';
import TypoGraphy from '..';

export interface Props {
  children: ReactChild;
  color?: Color;
}

const Title1 = ({ children, color = 'text_500' }: Props) => {
  return (
    <Text bold color={color}>
      {children}
    </Text>
  );
};

export default Title1;

const Text = styled(TypoGraphy)`
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.13px;
`;
