import NavHeader from '@/components/molecule/NavHeader';
import React, { useState } from 'react';
import styled from 'styled-components';
import TempImage from '@/public/assets/ProfileTemp.jpeg';
import ProfileImage from '@/components/atom/ProfileImage';

import TitleAndInput from '@/components/molecule/TitleAndInput';
export interface Props {}

const ProfileModify = () => {
  const [tempProfile, setTempProfile] = useState({
    name: '김대환',
    position: '가드',
    height: '190',
    weight: '95',
  });

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  return (
    <Container>
      <NavHeader
        pageName="프로필 수정"
        isSaveButton
        onSave={() => {
          setTempProfile({
            ...tempProfile,
            name: name,
            position: position,
            height: height,
            weight: weight,
          });
          setName('');
          setPosition('');
          setHeight('');
          setWeight('');
          alert('저장되었습니다');
        }}
      />
      <ImageSection>
        <ProfileImage src={TempImage} size="lg" />
      </ImageSection>
      <InputSection>
        <TitleAndInput
          title="이름"
          placeholder={tempProfile.name}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TitleAndInput
          title="포지션"
          placeholder={tempProfile.position}
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <TitleAndInput
          title="키"
          placeholder={tempProfile.height}
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <TitleAndInput
          title="몸무게"
          placeholder={tempProfile.weight}
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
      </InputSection>
    </Container>
  );
};

export default ProfileModify;

const Container = styled.div``;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
