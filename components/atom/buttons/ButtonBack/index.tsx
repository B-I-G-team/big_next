import { styled } from 'styled-components';
import Image from 'next/image';
import BackIcon from '@/components/icons/BackIcon';
export interface Props {
  onClick: () => void;
}

const ButtonBack = ({ onClick }: Props) => (
  <Button onClick={onClick}>
    <BackIcon />
  </Button>
);

export default ButtonBack;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  svg rect {
    fill: ${({ theme }) => theme.color.white};
    transition: 200ms;
  }

  &:active {
    svg rect {
      fill: ${({ theme }) => theme.color.gray_hover};
    }
  }
`;
