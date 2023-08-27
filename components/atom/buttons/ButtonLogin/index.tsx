import { styled } from 'styled-components';
import { ReactChild } from 'react';

export interface Props {
  children: ReactChild;
  onClick: () => void;
}

const ButtonLogin = ({ onClick, children }: Props) => {
  return (
    <Button onClick={onClick}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default ButtonLogin;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  border: none;
  background-color: ${({ theme }) => theme.color['white']};
  height: 24px;
  transition: 200ms;
  width: 43px;
`;

const ButtonText = styled.span`
  /* Android/Small_Bold */
  font-family: Gmarket Sans TTF;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  color: ${({ theme }) => theme.color['text_500']};
  &:hover {
    color: ${({ theme }) => theme.color['text_300']};
  }
`;
