import { styled } from 'styled-components';
import { ReactChild, useState } from 'react';
import KakaoIcon from '@/components/icons/KakaoIcon';
export interface Props {
  onClick: () => void;
}

const ButtonPayKakao = ({}: Props) => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <HiddenCheckbox
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        id={'text'}
        type="checkbox"
      ></HiddenCheckbox>
      <Button checked={checked} htmlFor="text">
        <KakaoIcon />
        <ButtonText>카카오페이</ButtonText>
      </Button>
    </>
  );
};

export default ButtonPayKakao;

const HiddenCheckbox = styled.input`
  display: none;
`;

const Button = styled.label<{ checked: boolean }>`
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

const ButtonImg = styled.img``;
