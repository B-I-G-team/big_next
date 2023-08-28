import { styled } from 'styled-components';
import { ReactChild, useState } from 'react';

export interface Props {
  children: ReactChild;
  size?: SizeButton;
  onClick: () => void;
}

type SizeButton = 'sm' | 'md' | 'fit';
const sizeAdjust = (size: SizeButton) => {
  switch (size) {
    case 'sm':
      return '100px';
    case 'md':
      return '140px';
    case 'fit':
      return '100%';

    default:
      return '140px';
  }
};

const ButtonWhite = ({ onClick, children, size = 'md' }: Props) => {
  return (
    <Button onClick={onClick} size={size}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default ButtonWhite;

const Button = styled.button<{ size: SizeButton }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color['red_500']};
  background-color: ${({ theme }) => theme.color['white']};
  height: 40px;
  transition: 200ms;
  width: ${({ size }) => sizeAdjust(size)};
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
