import ProfileImage from '@/components/atom/ProfileImage';
import React from 'react';
import styled from 'styled-components';
import Body2 from '@/components/atom/typography/Body2';
import { StaticImageData } from 'next/image';

export interface Props {
  src: string | StaticImageData;
  userName: string;
}

const Profile = ({ src, userName }: Props) => {
  return (
    <Container>
      <ProfileImage src={src} size="md" />
      <Body2>{userName}</Body2>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
