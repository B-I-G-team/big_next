import NavHeader from '@/components/molecule/NavHeader';
import ReserveCard from '@/components/molecule/ReserveCard';
import { useRouter } from 'next/router';
import React from 'react';
import { styled } from 'styled-components';

export interface Props {
  reserveinfo: [
    {
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
    },
  ];
}
const ReserveInfo = (reserveInfo: Props) => {
  const router = useRouter();
  return (
    <Container>
      <NavHeader router={router} pageName="예약내역" />
    </Container>
  );
};

export default ReserveInfo;
const Container = styled.div``;
