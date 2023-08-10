"use client";
import Home from "@/app/page";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Drawer from "./Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <Drawer open={open} closeDrawer={closeDrawer} />
      <MenuButton onClick={openDrawer}>
        <Imgbox src="Menu.png" alt="" />
      </MenuButton>
      <Link href={"/"}>
        <LogoWrapper src="LogoWhite.png" alt="" />
      </Link>
      <Profile>
        <Imgbox src="profile.png" alt="" />
      </Profile>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const LogoWrapper = styled.img`
  width: 50px;
  height: 25px;
`;

const Imgbox = styled.img``;

const Profile = styled.div`
  cursor: pointer;
`;
