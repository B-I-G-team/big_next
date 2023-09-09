import CustomImage from '@/components/atom/CustomImage';
import Tag from '@/components/atom/Tag';
import ButtonGhost from '@/components/atom/buttons/ButtonGhost';
import Small from '@/components/atom/typography/Small';
import { StaticImageData } from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

export interface Props {
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
}

const ReserveCardMain = ({
  reserveKey,
  isUsed,
  gym,
  date,
  startTime,
  endTime,
}: Props) => {
  const onClickCancel = () => {
    console.log(`${reserveKey} 취소`);
  };

  const onClickInfo = () => {
    console.log(`${reserveKey} 이용 정보`);
  };
  const usingTime = endTime - startTime;
  return (
    <Container>
      <CustomImage size="sm" src={gym.img} alt={gym.name} />
      <ReserveInfo isUsed={isUsed}>
        {isUsed && (
          <Tag color="white" backgroundColor="text_100">
            이용완료
          </Tag>
        )}
        <Small bold>{gym.name}</Small>
        <Small>{gym.location}</Small>
        <Small color="text_300">{`${date} | ${usingTime}시간`}</Small>
        <Small color="text_300">{`체크인 ${startTime.toLocaleString()}:00 | 체크아웃 ${endTime.toLocaleString()}:00`}</Small>
        {isUsed || (
          <CancelInfo>
            <Small color="green">무료취소</Small>
            <Small color="text_300">{`${date} 00:00전까지`}</Small>
          </CancelInfo>
        )}
        {isUsed ? (
          <Buttons>
            <ButtonGhost size="fit" disabled onClick={onClickInfo}>
              이용 정보
            </ButtonGhost>
          </Buttons>
        ) : (
          <Buttons>
            <ButtonGhost onClick={onClickCancel}>취소 요청</ButtonGhost>
            <ButtonGhost onClick={onClickInfo}>이용 정보</ButtonGhost>
          </Buttons>
        )}
      </ReserveInfo>
    </Container>
  );
};

export default ReserveCardMain;

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const ReserveInfo = styled.div<{ isUsed: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: ${({ isUsed }) => (isUsed ? 0.5 : 1)};
`;

const CancelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoButton = styled(ButtonGhost)``;
