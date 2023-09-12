import { styled } from 'styled-components';
import CardIcon from '@/components/icons/CardIcon';

export interface Props {
  active?: boolean;
  onClick: () => void;
}

const PayCardButton = ({ active, onClick }: Props) => {
  return (
    <Button active={active} onClick={onClick}>
      <CardIcon />
      <ButtonText>일반카드</ButtonText>
    </Button>
  );
};

export default PayCardButton;

const Button = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 8px;
  gap: 4px;
  background-color: ${({ theme }) => theme.color['white']};
  border: ${({ active, theme }) =>
    active
      ? `1px solid ${theme.color['text_500']}`
      : `1px solid ${theme.color['border_100']}`};
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
