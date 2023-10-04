import Body3 from '@/components/atom/typography/Body3';
import CalenderIcon from '@/components/icons/CalenderIcon';
import DocumentIcon from '@/components/icons/DocumentIcon';
import LogoutIcon from '@/components/icons/LogoutIcon';
import Header from '@/components/molecule/Header';
import IconAndText from '@/components/molecule/IconAndText';
import MypageHeader from '@/components/molecule/MypageHeader';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

export interface Props {}

const Mypage = () => {
  const router = useRouter();

  return (
    <Container>
      <Header />

      <Content>
        <MypageHeader />

        <SectionContainer>
          <Section>
            <Body3 bold>나의 활동</Body3>
            <IconAndText IconComponent={DocumentIcon} text="예약내역" />
            <IconAndText IconComponent={CalenderIcon} text="체육관 관리" />
          </Section>

          <Section>
            <Body3 bold>기타</Body3>
            <IconAndText
              IconComponent={LogoutIcon}
              text="로그아웃"
              onClick={() => {
                localStorage.removeItem('access_token');
                router.push('/');
              }}
            />
          </Section>
        </SectionContainer>
      </Content>
    </Container>
  );
};

export default Mypage;

const Container = styled.div``;

const Content = styled.div`
  padding: 28px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Section = styled.div``;
