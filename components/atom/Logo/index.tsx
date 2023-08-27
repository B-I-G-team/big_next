import Image from 'next/image';
import React from 'react';
import logoImage from '@/public/assets/logo.svg';
import styled from 'styled-components';

const Logo = () => {
  return <StyledImage src={logoImage} alt="logo" />;
};

export default Logo;

const StyledImage = styled(Image)`
  cursor: pointer;
`;
