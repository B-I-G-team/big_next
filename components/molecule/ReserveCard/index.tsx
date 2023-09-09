import React from 'react';
import { styled } from 'styled-components';
import ReserveCardHeader from '../ReserveCardHeader';
import ReserveCardMain from '../ReserveCardMain';
import { StaticImageData } from 'next/image';
export interface Props {
  reserveInfo: {
    reserveKey: number;
    isUsed: boolean;
    gym: {
      name: string;
      location: string;
      img: StaticImageData;
    };
    date: string;
    startTime: number;
    endTime: number;
  };
}
const ReserveCard = ({ reserveInfo }: Props) => {
  return (
    <Container>
      <ReserveCardHeader
        reserveKey={reserveInfo.reserveKey}
        date={reserveInfo.date}
      />
      <Divider />
      <ReserveCardMain
        reserveKey={reserveInfo.reserveKey}
        date={reserveInfo.date}
        gym={reserveInfo.gym}
        isUsed={reserveInfo.isUsed}
        startTime={reserveInfo.startTime}
        endTime={reserveInfo.endTime}
      />
    </Container>
  );
};

export default ReserveCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.border_100};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  width: 300px;
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border_100};
  margin-bottom: 10px;
`;
