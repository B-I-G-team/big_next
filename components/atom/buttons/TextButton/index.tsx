import { styled } from 'styled-components';
import { ReactChild } from 'react';
import { Color } from '@/styles/theme';

export interface Props {
  children: ReactChild;
  onClick: () => void;
  color: Color;
}

const TextButton = ({ onClick, children, color = 'text_500' }: Props) => {
  return (
    <Button onClick={onClick}>
      <ButtonText color={color}>{children}</ButtonText>
    </Button>
  );
};

export default TextButton;

const Button = styled.button`
  cursor: pointer;
  display: inline;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  border: none;
  background-color: ${({ theme }) => theme.color['white']};
  height: 24px;
  transition: 200ms;
`;

const ButtonText = styled.span<{ color: Color }>`
  /* Android/Small_Bold */
  font-family: Gmarket Sans TTF;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  color: ${({ theme, color }) => theme.color[color]};
  &:hover {
    opacity: 0.8;
  }
`;
