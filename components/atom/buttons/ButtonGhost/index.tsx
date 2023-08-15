import { SizeGhost } from '@/styles/theme';
import { styled, css } from 'styled-components';
import { ReactChild } from 'react';

export interface Props {
  children: ReactChild;
  size?: SizeGhost;
  disable?: boolean;
  onClick: () => void;
}

const ButtonGhost = ({
  onClick,
  children,
  disable,
  size = 'default',
}: Props) => (
  <Button onClick={onClick} size={size} disable={disable}>
    <ButtonText>{children}</ButtonText>
  </Button>
);

export default ButtonGhost;

const Button = styled.div<{ size: SizeGhost; disable?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color['border_300']};
  background-color: ${({ theme, disable }) =>
    disable ? theme.color['gray_disabled'] : theme.color['white']};
  height: 24px;
  width: ${({ theme, size }) => theme.sizeGhost[size]};
  cursor: not-allowed;
  ${({ disable }) =>
    !disable &&
    css`
      cursor: pointer;
      &:active {
        transform: scale(0.95);
        background-color: ${({ theme }) => theme.color['gray_hover']};
      }
    `}
`;

const ButtonText = styled.span`
  font-family: 'Gmarket Sans TTF';
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.24px;
`;
