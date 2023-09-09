import { styled } from 'styled-components';
import MenuIcon from '@/components/icons/MenuIcon';
export interface Props {
  onClick: () => void;
}

const MenuButton = ({ onClick }: Props) => (
  <Button onClick={onClick}>
    <MenuIcon />
  </Button>
);

export default MenuButton;

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
