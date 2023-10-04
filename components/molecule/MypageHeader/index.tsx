import React from 'react';
import styled from 'styled-components';
import Profile from '../Profile';
import GrayButton from '@/components/atom/buttons/GrayButton';
import { useUserInfoQuery } from '@/query-hooks/common';

const MypageHeader = () => {
  const { data } = useUserInfoQuery();
  return (
    <Container>
      <Profile
        src={data ? data.profileImage : ''}
        userName={data ? data.nickname : ''}
      />
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
