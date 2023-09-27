import CustomImage from '@/components/atom/CustomImage';
import Body2 from '@/components/atom/typography/Body2';
import Small from '@/components/atom/typography/Small';
import { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

export interface Props {
  gym: {
    name: string;
    location: string;
    img: StaticImageData | string;
    pay: number;
  };
}
const GymList = ({ gym }: Props) => {
  return (
    <Container>
      <CustomImage src={gym.img} alt={gym.name} size="fit" />
      <TextBox>
        <Body2>{gym.name}</Body2>
        <Small color="text_100">{gym.location}</Small>
        <Small>{`₩ ${gym.pay.toLocaleString()} / 1시간`}</Small>
      </TextBox>
    </Container>
  );
};

export default GymList;

const Container = styled.div``;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
