import KakaoIcon from '@/components/icons/KakaoIcon';
import React from 'react';
import styled from 'styled-components';

export interface Props {
  onClick?: () => void;
}

const KakaoLoginButton = ({ onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      <KakaoIcon />
      <ButtonText>카카오페이</ButtonText>
    </Button>
  );
};

export default KakaoLoginButton;

const Button = styled.button`
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
`;
