import { SizeGhost } from '@/styles/theme';
import { styled } from 'styled-components';
import { ReactChild } from 'react';

export interface Props {
  children: ReactChild;
  size?: SizeGhost;
  disabled?: boolean;
  onClick: () => void;
}

const ButtonGhost = ({
  onClick,
  children,
  disabled,
  size = 'default',
}: Props) => (
  <Button onClick={onClick} size={size} disabled={disabled}>
    <ButtonText>{children}</ButtonText>
  </Button>
);

export default ButtonGhost;

const Button = styled.button<{ size: SizeGhost }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color['border_300']};
  background-color: ${({ theme }) => theme.color['white']};
  height: 24px;
  width: ${({ theme, size }) => theme.sizeGhost[size]};
  transition: 200ms;
  cursor: pointer;
  &:active:not(:disabled) {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.color['gray_hover']};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color['gray_disabled']};
  }
`;

const ButtonText = styled.span`
  font-family: 'Gmarket Sans TTF';
  color: ${({ theme }) => theme.color.text_500};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.24px;
`;
