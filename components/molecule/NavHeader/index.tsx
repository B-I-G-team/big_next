import ButtonBack from '@/components/atom/buttons/ButtonBack';
import Title2 from '@/components/atom/typography/Title2';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { styled } from 'styled-components';

export interface Props {
  router: NextRouter;
  pageName: string;
}
const NavHeader = ({ router, pageName }: Props) => {
  const onClickBack = () => {
    console.log(router.asPath);
  };
  return (
    <Container>
      <ButtonBack onClick={onClickBack} />
      <Title2>{pageName}</Title2>
    </Container>
  );
};

export default NavHeader;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.border_300};
  padding: 5px;
  justify-content: flex-start;
  gap: 20px;
`;
