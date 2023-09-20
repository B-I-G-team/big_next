import DrawerIcon from '@/components/icons/DrawerIcon';
import React, { useState } from 'react';
import styled from 'styled-components';

export interface Props {
  onClick: () => void;
  draw: boolean;
}
const DrawerButton = ({ draw, onClick }: Props) => {
  return (
    <DrawerBox draw={draw} onClick={onClick}>
      <DrawerIcon />
    </DrawerBox>
  );
};

export default DrawerButton;

const DrawerBox = styled.button<{ draw: boolean }>`
  cursor: pointer;
  border: none;
  transform: ${({ draw }) => (draw ? 'rotateX(180deg)' : '')};
  background-color: ${({ theme }) => theme.color.white};
  &:hover {
    opacity: 0.8;
  }
  transition: 200ms;
`;
