import React, { useEffect } from "react";
import styled from "styled-components";
import logoImage from "assets/logo.png";

interface Props {
  open: boolean;
  closeDrawer: () => void;
}

const Drawer = ({ open, closeDrawer }: Props) => {
  useEffect(() => {
    closeDrawer();
  }, []);
  return (
    <>
      <Container open={open}>
        <CloseButton onClick={closeDrawer}>
          <span>X</span>
        </CloseButton>
      </Container>
    </>
  );
};

export default Drawer;

const Container = styled.div<{ open: boolean }>`
  width: 180px;
  height: 100vh;

  position: absolute;
  top: 0;
  background-color: #ececec;
  z-index: 10;
  transform: ${({ open }) => (open ? "translanteX(0%)" : "translateX(-100%)")};
  display: ${({ open }) => (open ? "flex" : "none")};
  transition: 1s;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  border: none;
  background-color: none;
`;
