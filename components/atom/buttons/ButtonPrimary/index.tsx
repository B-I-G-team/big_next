import { SizePrimary } from '@/styles/theme';
import { styled } from 'styled-components';
import { ReactChild } from 'react';
import Body3 from '../../typography/Body3';

export interface Props {
  children: ReactChild;
  size?: SizePrimary;
  onClick: () => void;
}

const ButtonPrimary = ({ onClick, children, size = 'md' }: Props) => (
  <Button onClick={onClick} size={size}>
    <Body3 color={'white'}>{children}</Body3>
  </Button>
);

export default ButtonPrimary;

const Button = styled.button<{ size: SizePrimary }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  border: 0px;
  background-color: ${({ theme }) => theme.color['red_500']};
  height: 40px;
  width: ${({ theme, size }) => theme.sizePrimary[size]};

  &:hover,
  &:active {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.color['red_100']};
  }
`;
