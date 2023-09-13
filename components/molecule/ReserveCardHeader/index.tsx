import TextButton from '@/components/atom/buttons/TextButton';
import SubTitle from '@/components/atom/typography/SubTitle';
import React from 'react';
import { styled } from 'styled-components';

export interface Props {
  date: string;
  reserveKey: number;
}
const ReserveCardHeader = ({ date, reserveKey }: Props) => {
  const onClickButton = () => {
    console.log(`${reserveKey} 상세보기`);
  };
  return (
    <Container>
      <SubTitle>{date}</SubTitle>
      <TextButton onClick={onClickButton} color="blue">
        {'상세보기 >'}
      </TextButton>
    </Container>
  );
};

export default ReserveCardHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.border_100};
`;
