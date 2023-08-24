import { styled } from 'styled-components';

export interface Props {
  onClick: () => void;
}

const ButtonBack = ({ onClick }: Props) => (
  <Button onClick={onClick}>
    <ButtonImg src="Menu.png"></ButtonImg>
  </Button>
);

export default ButtonBack;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  border: 0px;
  background-color: ${({ theme }) => theme.color['white']};
  height: 28px;
  width: 28px;
  transition: 200ms;
  &:active {
    background-color: ${({ theme }) => theme.color['gray_hover']};
  }
`;

const ButtonImg = styled.img``;
