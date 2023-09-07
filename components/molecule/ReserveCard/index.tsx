import React from 'react';
import { styled } from 'styled-components';
import ReserveCardHeader from '../ReserveCardHeader';
import ReserveCardMain from '../ReserveCardMain';
export interface Props {
  reserveKey: number;
  isUsed: boolean;
  gym: {
    name: string;
    location: string;
    img: string;
  };
  date: string;
  startTime: number;
  endTime: number;
}
const ReserveCard = ({
  reserveKey,
  isUsed,
  gym,
  date,
  startTime,
  endTime,
}: Props) => {
  return (
    <Container>
      <ReserveCardHeader reserveKey={reserveKey} date={date} />
      <Divider />
      <ReserveCardMain
        reserveKey={reserveKey}
        date={date}
        gym={gym}
        isUsed={isUsed}
        startTime={startTime}
        endTime={endTime}
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
  border-radius: 10px;
  width: 300px;
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border_100};
  margin-bottom: 10px;
`;
