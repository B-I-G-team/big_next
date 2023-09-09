import React from 'react';
import styled from 'styled-components';
import Profile from '../Profile';
import ImageFile from '@/public/assets/ProfileTemp.jpeg';
import GrayButton from '@/components/atom/buttons/GrayButton';

const MypageHeader = () => {
  return (
    <Container>
      <Profile src={ImageFile} userName="김대환" />
      <GrayButton onClick={() => {}}>프로필 보기</GrayButton>
    </Container>
  );
};

export default MypageHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
