import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

type Size = 'sm' | 'md' | 'fit';

const sizeAdjust = (size: Size) => {
  switch (size) {
    case 'sm':
      return '60px';
    case 'md':
      return '100px';
    case 'fit':
      return '100%';
  }
};
export interface Props {
  src: StaticImport | string;
  alt: string;
  size: Size;
}

const CustomImage = ({ size = 'md', src, alt = '사진' }: Props) => {
  return <StyledImage size={size} src={src} alt={alt} />;
};

export default CustomImage;

const StyledImage = styled(Image)<{ size: Size }>`
  width: ${({ size }) => sizeAdjust(size)};
  height: ${({ size }) => sizeAdjust(size)};
  border-radius: 8px;
`;
