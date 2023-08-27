import { styled } from 'styled-components';
import MenuIcon from '@/components/icons/MenuIcon';
import Menu from 'Menu.svg';
export interface Props {
  onClick: () => void;
}

const ButtonMenu = ({ onClick }: Props) => (
  <Button onClick={onClick}>
    <MenuIcon />
  </Button>
);

export default ButtonMenu;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  &:active {
    background-color: ${({ theme }) => theme.color['gray_hover']};
  }
`;

const ButtonImg = styled.img``;
