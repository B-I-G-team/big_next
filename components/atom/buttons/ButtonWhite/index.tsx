import { SizePrimary } from '@/styles/theme';
import { styled } from 'styled-components';
import { ReactChild, useState } from 'react';

export interface Props {
  children: ReactChild;
  size?: SizePrimary;
  onClick: () => void;
}

const ButtonWhite = ({ onClick, children, size = 'md' }: Props) => {
  return (
    <Button onClick={onClick} size={size}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default ButtonWhite;

const Button = styled.button<{ size: SizePrimary }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color['red_500']};
  background-color: ${({ theme }) => theme.color['white']};
  height: 40px;
  transition: 200ms;
  width: ${({ theme, size }) => theme.sizePrimary[size]};
  color: ${({ theme }) => theme.color['red_500']};
  &:hover {
    border: 1px solid ${({ theme }) => theme.color['red_100']};
    color: ${({ theme }) => theme.color['red_100']};
  }
  &:active {
    transform: scale(0.95);
  }
`;

const ButtonText = styled.span`
  font-family: Gmarket Sans TTF;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.154px;
`;
