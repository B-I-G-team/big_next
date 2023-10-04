import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

type ImageSize = 'sm' | 'md' | 'lg';

export interface Props {
  src: string | StaticImageData;
  size: ImageSize;
  onClick?: () => void;
  active?: boolean;
}

const sizeAdjust = (size: ImageSize) => {
  switch (size) {
    case 'sm':
      return '28';
    case 'md':
      return '38';
    case 'lg':
      return '100';

    default:
      return '38';
  }
};

/**
 *
 * 작성자: 김대환
 *
 * size 가 sm 일 경우에만 버튼의 역할을 합니다.
 *
 * 나머지 사이즈일 경우는 그냥 static 한 이미지입니다.
 *
 * 이미지 파일을 임포트한후 src 속성값으로 주면 됩니다.
 *
 * ```jsx
 * import TempProfileImage from '@/public/assets/ProfileTemp.jpeg';
 *
 * ...
 *<ProfileImage onClick={() => {}} size="md" src={TempProfileImage} />
 *
 * ```
 */
const ProfileImage = ({ src, size, active = false, onClick }: Props) => {
  return (
    <StyledImage
      src={src}
      alt="profile image"
      size={size}
      width={sizeAdjust(size)}
      height={sizeAdjust(size)}
      $active={active}
      onClick={onClick}
    />
  );
};

export default ProfileImage;

const StyledImage = styled(Image)<{ size: ImageSize; $active: boolean }>`
  border-radius: 50%;

  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.color.blue : 'none')};

  cursor: ${({ size }) => (size === 'sm' ? 'pointer' : 'default')};
`;
