import Body3 from '@/components/atom/typography/Body3';
import Small from '@/components/atom/typography/Small';
import React from 'react';
import styled from 'styled-components';

export interface Props {
  title: string;
  value: string;
  $bold_value: boolean;
}
const TitleAndValue = ({ title, value, $bold_value }: Props) => {
  return (
    <Container>
      <Small>{title}</Small>
      {$bold_value ? <Body3 bold>{value}</Body3> : <Small>{value}</Small>}
    </Container>
  );
};

export default TitleAndValue;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
