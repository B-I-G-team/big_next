import KakaoLoginButton from '@/components/atom/buttons/KakaoLoginButton';
import Logo from '@/components/atom/Logo';
import Title1 from '@/components/atom/typography/Title1';
import NavHeader from '@/components/molecule/NavHeader';
import React from 'react';
import styled from 'styled-components';

export interface Props {}

const LoginPage = ({}: Props) => {
  return (
    <Container>
      <NavHeader pageName="로그인" />

      <Wrapper>
        <Logo />
        <Content>
          <TextContent>
            <Title1>간편하게 로그인하고</Title1>
            <Title1>다양한 서비스를 이용해보세요.</Title1>
          </TextContent>
          <KakaoLoginButton />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 30px;

  margin-top: 60px;

  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  gap: 20px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 4px;
`;
