import CustomImage from '@/components/atom/CustomImage';
import Tag from '@/components/atom/Tag';
import ButtonGhost from '@/components/atom/buttons/ButtonGhost';
import Small from '@/components/atom/typography/Small';
import { StaticImageData } from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

export interface Props {
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
}

const ReserveCardMain = ({
  reserveKey,
  is_used,
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
      <ReserveInfo is_used={is_used}>
        {is_used && (
          <Tag color="white" background_color="text_100">
            이용완료
          </Tag>
        )}
        <Small bold>{gym.name}</Small>
        <Small>{gym.location}</Small>
        <Small color="text_300">{`${date} | ${usingTime}시간`}</Small>
        <Small color="text_300">{`체크인 ${startTime.toLocaleString()}:00 | 체크아웃 ${endTime.toLocaleString()}:00`}</Small>
        {is_used || (
          <CancelInfo>
            <Small color="green">무료취소</Small>
            <Small color="text_300">{`${date} 00:00전까지`}</Small>
          </CancelInfo>
        )}
        {is_used ? (
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

const ReserveInfo = styled.div<{ is_used: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: ${({ is_used }) => (is_used ? 0.5 : 1)};
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
