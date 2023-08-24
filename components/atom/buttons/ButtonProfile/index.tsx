import { styled } from 'styled-components';
import { ReactChild } from 'react';

export interface Props {
  children: ReactChild;
  onClick: () => void;
}

const ButtonProfile = ({ onClick, children }: Props) => (
  <Button onClick={onClick}>
    <ButtonText>{children}</ButtonText>
  </Button>
);

export default ButtonProfile;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 8px;
  border: 0px;
  background-color: ${({ theme }) => theme.color['background']};
  height: 40px;
  width: 110px;
  transition: 200ms;

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonText = styled.span`
  font-family: Gmarket Sans TTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: 0.16px;
  color: ${({ theme }) => theme.color['text_500']};
`;
