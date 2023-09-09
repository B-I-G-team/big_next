import { styled } from 'styled-components';
import KakaoIcon from '@/components/icons/KakaoIcon';
export interface Props {
  active?: boolean;
  onClick: () => void;
}

const PayKakaoButton = ({ active, onClick }: Props) => {
  return (
    <Button active={active} onClick={onClick}>
      <KakaoIcon />
      <ButtonText>카카오페이</ButtonText>
    </Button>
  );
};

export default PayKakaoButton;

const HiddenCheckbox = styled.input`
  display: none;
`;

const Button = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 8px;
  padding: 0px;
  gap: 4px;
  background-color: ${({ theme }) => theme.color['kakao']};
  border: ${({ active, theme }) =>
    active ? `1px solid ${theme.color['text_500']}` : 'none'};
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
