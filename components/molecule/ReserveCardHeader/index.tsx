import TextButton from '@/components/atom/buttons/TextButton';
import SubTitle from '@/components/atom/typography/SubTitle';
import { Color } from '@/styles/theme';
import React from 'react';
import { styled } from 'styled-components';

export interface Props {
  date: string;
  onClick: () => {};
}
const ReserveCardHeader = ({ date, onClick }: Props) => {
  return (
    <Container>
      <SubTitle>{date}</SubTitle>
      <TextButton onClick={onClick} color={'blue'}>
        상세보기 ＞
      </TextButton>
    </Container>
  );
};

export default ReserveCardHeader;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
