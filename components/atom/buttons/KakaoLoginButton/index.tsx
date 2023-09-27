import { HOST } from '@/api/config';
import KakaoIcon from '@/components/icons/KakaoIcon';
import React from 'react';
import styled from 'styled-components';

export interface Props {}

const KakaoLoginButton = ({}: Props) => {
  return (
    <Button href={`${HOST}/auth/kakao`}>
      <KakaoIcon />
      <ButtonText>카카오 로그인</ButtonText>
    </Button>
  );
};

export default KakaoLoginButton;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color['kakao']};
  border: none;
  border-radius: 8px;
  gap: 4px;

  width: 100%;
  height: 35px;
  transition: 200ms;

  text-decoration: none;

  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonText = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */

  color: ${({ theme }) => theme.color.text_500};
`;
