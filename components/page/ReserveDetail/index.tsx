import ButtonPrimary from '@/components/atom/buttons/ButtonPrimary';
import ButtonWhite from '@/components/atom/buttons/ButtonWhite';
import Small from '@/components/atom/typography/Small';
import NavHeader from '@/components/molecule/NavHeader';
import ReserveCardDetail from '@/components/molecule/ReserveCardDetail';
import ReserveCardMain from '@/components/molecule/ReserveCardMain';
import { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

export interface Props {
  reserveInfo: {
    reserveKey: number;
    is_used: boolean;
    gym: {
      name: string;
      location: string;
      img: StaticImageData;
    };
    date: string;
    startTime: number;
    endTime: number;
  };
  detailInfo: {
    name: string;
    phonenumber: string;
    pay: number;
    payment: string;
  };
}
const ReserveDetail = ({ reserveInfo, detailInfo }: Props) => {
  return (
    <Container>
      <NavHeader pageName="예약내역 상세" />
      <Section>
        <Small bold>상품 및 이용정보</Small>
        <ReserveCardMain
          reserveKey={reserveInfo.reserveKey}
          is_used={reserveInfo.is_used}
          gym={reserveInfo.gym}
          date={reserveInfo.date}
          startTime={reserveInfo.startTime}
          endTime={reserveInfo.endTime}
        />
        <ReserveCardDetail detailInfo={detailInfo} />
      </Section>
      <ButtonSection>
        <ButtonWhite size="fit" onClick={() => {}}>
          예약 내역 보기
        </ButtonWhite>
        <ButtonPrimary size="fit" onClick={() => {}}>
          홈으로 가기
        </ButtonPrimary>
      </ButtonSection>
    </Container>
  );
};

export default ReserveDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin-top: 17px;
`;

const ButtonSection = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 0px 20px;
`;
