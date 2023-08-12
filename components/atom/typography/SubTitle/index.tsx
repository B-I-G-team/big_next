import { ReactChild, ReactElement } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
}

const SubTitle = ({ children }: Props) => {
  return <Text>{children}</Text>;
};

export default SubTitle;

const Text = styled.span`
  font-family: 'Gmarket Sans TTF';
  font-size: 12px;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.24px;
`;
