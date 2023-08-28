import React, { useState } from 'react';
import CardIcon from '@/components/icons/CardIcon';
import KakaoIcon from '@/components/icons/KakaoIcon';
import { styled } from 'styled-components';
export interface Props {
  checked: checkedType;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
}

type checkedType = 'card' | 'kakao';
/**
 *
 * 작성자: 김민석
 *
 * Page 에서 PaymentRadio를 사용할 때
 *
 * const [checked, setChecked] = useState("")
 *
 * 에서 나오는 checked 와 setChecked를 인자로 넘겨줍니다.
 *
 * 현재 스토리북 내에서는 아래의 Props를 사용하여 컨트롤 가능하지만
 *
 * Page 에서 직접 State를 넘겨주게 되면 정상적으로 반응하는 것을 확인하였습니다.
 *
 */
const PaymentRadio = ({ checked, setChecked }: Props) => {
  return (
    <>
      <HiddenRadio
        checked={checked === 'card'}
        onChange={() => setChecked('card')}
        id={'card'}
        type="radio"
      ></HiddenRadio>
      <HiddenRadio
        checked={checked === 'kakao'}
        onChange={() => setChecked('kakao')}
        id={'kakao'}
        type="radio"
      ></HiddenRadio>
      <Container>
        <ButtonCard checked={checked === 'card'} htmlFor="card">
          <CardIcon />
          <ButtonText>일반카드</ButtonText>
        </ButtonCard>
        <ButtonKakao checked={checked === 'kakao'} htmlFor="kakao">
          <KakaoIcon />
          <ButtonText>카카오페이</ButtonText>
        </ButtonKakao>
      </Container>
    </>
  );
};

export default PaymentRadio;

const HiddenRadio = styled.input`
  display: none;
`;

const ButtonCard = styled.label<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 8px;
  gap: 4px;
  background-color: ${({ theme }) => theme.color['white']};
  border: ${({ checked, theme }) =>
    checked
      ? `1px solid ${theme.color['text_500']}`
      : `1px solid ${theme.color['border_100']}`};
  cursor: pointer;
`;

const ButtonKakao = styled.label<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 8px;
  padding: 0px;
  gap: 4px;
  background-color: ${({ theme }) => theme.color['kakao']};
  border: ${({ checked, theme }) =>
    checked ? `1px solid ${theme.color['text_500']}` : 'none'};
  cursor: pointer;
`;

const ButtonText = styled.span`
  color: ${({ theme }) => theme.color['text_500']};
  font-family: Gmarket Sans TTF;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ButtonImg = styled.img``;
