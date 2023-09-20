import GymList from '@/components/molecule/GymList';
import Header from '@/components/molecule/Header';
import SearchSection from '@/components/molecule/SearchSection';
import { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';
import GymTemp1 from '@/public/assets/GymTemp.png';
import GymTemp2 from '@/public/assets/GymTemp2.jpeg';
import GymTemp3 from '@/public/assets/GymTemp3.jpg';
import GymTemp4 from '@/public/assets/GymTemp4.jpg';
export interface Props {
  gym: {
    name: string;
    location: string;
    img: StaticImageData | string;
    pay: number;
  };
}
const Home = ({}: Props) => {
  const gym = [
    {
      name: '낙산관 실내체육관(낙산관)',
      location: '서울특별시 성북구 삼선교로 16길 116',
      img: GymTemp1,
      pay: 72000,
    },
    {
      name: '하이스포츠센터',
      location: '부산 해운대구 선수촌로208번길 71',
      img: GymTemp2,
      pay: 140000,
    },
    {
      name: '코리아짐농구교실',
      location: '경남 김해시 한림면 김해대로1559번길 8',
      img: GymTemp4,
      pay: 70000,
    },
    {
      name: '인피니트스포츠 사하점',
      location:
        '부산광역시 사하구 괴정동 1068-6번지 에이비동 에이 성진스포츠타운 401 501호',
      img: GymTemp3,
      pay: 60000,
    },
  ];

  return (
    <Container>
      <Header />
      <SearchSection />
      <GymSection>
        {gym.map((item, index) => (
          <GymList key={index} gym={item} />
        ))}
      </GymSection>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const GymSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.border_300};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  overflow-y: scroll;
`;
