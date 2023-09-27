import CustomImage from '@/components/atom/CustomImage';
import Body3 from '@/components/atom/typography/Body3';
import Small from '@/components/atom/typography/Small';
import { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

export interface Props {
  gym: {
    img: StaticImageData | string;
    name: string;
    location: string;
    size: string;
  };
}

const GymSummary = ({ gym }: Props) => {
  return (
    <Container>
      <CustomImage size="md" alt="" src={gym.img} />
      <TextSection>
        <Body3>{gym.name}</Body3>
        <Small>{gym.location}</Small>
        <Small>{gym.size}</Small>
      </TextSection>
    </Container>
  );
};

export default GymSummary;

const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 10px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
