import NavHeader from '@/components/molecule/NavHeader';
import ReserveCard from '@/components/molecule/ReserveCard';
import React from 'react';
import { styled } from 'styled-components';
import GymTemp from '@/public/assets/GymTemp.png';

export interface Props {}

const ReserveInfo = ({}: Props) => {
  const reserveInfo = [
    {
      reserveKey: 1,
      is_used: false,
      gym: {
        name: '낙산관 실내체육관(낙산관)',
        location: '서울특별시 성북구 삼선교로 16길 116',
        img: GymTemp,
      },
      date: '2023. 07. 31 (월)',
      startTime: 17,
      endTime: 19,
    },
    {
      reserveKey: 2,
      is_used: false,
      gym: {
        name: '낙산관 실내체육관(낙산관)',
        location: '서울특별시 성북구 삼선교로 16길 116',
        img: GymTemp,
      },
      date: '2023. 07. 31 (월)',
      startTime: 17,
      endTime: 19,
    },
    {
      reserveKey: 3,
      is_used: true,
      gym: {
        name: '낙산관 실내체육관(낙산관)',
        location: '서울특별시 성북구 삼선교로 16길 116',
        img: GymTemp,
      },
      date: '2023. 07. 31 (월)',
      startTime: 17,
      endTime: 19,
    },
    {
      reserveKey: 4,
      is_used: true,
      gym: {
        name: '낙산관 실내체육관(낙산관)',
        location: '서울특별시 성북구 삼선교로 16길 116',
        img: GymTemp,
      },
      date: '2023. 07. 31 (월)',
      startTime: 17,
      endTime: 19,
    },
  ];
  return (
    <Container>
      <NavHeader pageName="예약내역" />
      <ReserveCardBox>
        {reserveInfo.map((reserve) => (
          <ReserveCard key={reserve.reserveKey} reserveInfo={reserve} />
        ))}
      </ReserveCardBox>
    </Container>
  );
};

export default ReserveInfo;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ReserveCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 4px 10px;
  overflow-y: scroll;

  background-color: ${({ theme }) => theme.color.border_100};
`;
