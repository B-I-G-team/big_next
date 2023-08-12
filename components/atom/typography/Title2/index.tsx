import { ReactChild, ReactElement } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
}

const Title2 = ({ children }: Props) => {
  return <Text>{children}</Text>;
};

export default Title2;

const Text = styled.span`
  font-family: 'Gmarket Sans TTF';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.13px;
`;
