import React from 'react';
import styled from 'styled-components';
import TextButton from '@/components/atom/buttons/TextButton';
import Logo from '@/components/atom/Logo';
import MenuButton from '@/components/atom/buttons/MenuButton';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  return (
    <Container>
      <MenuButton onClick={() => {}} />
      <StyledLogo />
      <TextButton
        onClick={() => {
          router.push('/login');
        }}
      >
        로그인
      </TextButton>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;

  border-bottom: 1px solid ${({ theme }) => theme.color.border_100};
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
