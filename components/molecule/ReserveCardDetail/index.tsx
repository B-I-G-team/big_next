import Small from '@/components/atom/typography/Small';
import React from 'react';
import styled from 'styled-components';
import TitleAndValue from '../TitleAndValue';
import Drawer from '../Drawer';

export interface Props {
  detailInfo: {
    name: string;
    phonenumber: string;
    pay: number;
    payment: string;
  };
}
const ReserveCardDetail = ({ detailInfo }: Props) => {
  return (
    <Drawer title="예약자 정보">
      <Container>
        <Section>
          <Small bold>이용자 정보</Small>
          <TitleAndValue title="이름" value={detailInfo.name} />
          <TitleAndValue title="휴대폰 번호" value={detailInfo.phonenumber} />
        </Section>
        <Section>
          <Small bold>결제 금액</Small>
          <TitleAndValue
            title="대관 금액"
            value={`${detailInfo.pay.toLocaleString()}원`}
          />
          <TitleAndValue title="결제 수단" value={detailInfo.payment} />

          <TotalPaySection>
            <TitleAndValue
              title="총 결제 금액"
              value={`${detailInfo.pay.toLocaleString()}원`}
              $bold_value
            />
          </TotalPaySection>
        </Section>
      </Container>
    </Drawer>
  );
};

export default ReserveCardDetail;

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border_100};
  width: 100%;
  border-top: none;
  border-bottom: none;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border_100};
`;

const TotalPaySection = styled.div`
  padding-top: 12px;
  border-top: 1px dashed ${({ theme }) => theme.color.border_100};
`;
