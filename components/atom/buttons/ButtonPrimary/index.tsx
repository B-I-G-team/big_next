import { styled } from 'styled-components';
import { ReactChild } from 'react';

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

const ButtonPrimary = ({ onClick, children, size = 'md' }: Props) => (
  <Button onClick={onClick} size={size}>
    <ButtonText>{children}</ButtonText>
  </Button>
);

export default ButtonPrimary;

const Button = styled.button<{ size: SizeButton }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  border: 0px;
  background-color: ${({ theme }) => theme.color['red_500']};
  height: 40px;
  width: ${({ size }) => sizeAdjust(size)};
  transition: 200ms;
  &:active {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.color['red_100']};
  }
`;

const ButtonText = styled.span`
  font-family: 'Gmarket Sans TTF';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: white;
`;
