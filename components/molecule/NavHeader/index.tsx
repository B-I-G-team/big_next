import ButtonBack from '@/components/atom/buttons/ButtonBack';
import Body3 from '@/components/atom/typography/Body3';
import Title2 from '@/components/atom/typography/Title2';
import React from 'react';
import { styled } from 'styled-components';

export interface Props {
  pageName: string;
  onClickBack: () => {};
  isSaveButton?: boolean;
  onClickSave: () => {};
}
const NavHeader = ({
  pageName,
  onClickBack,
  isSaveButton,
  onClickSave,
}: Props) => {
  return (
    <Container>
      <LeftSection>
        <CustomButtonBack onClick={onClickBack} />
        <Title2>{pageName}</Title2>
      </LeftSection>
      {isSaveButton && (
        <SaveButton onClick={onClickSave} color="text_500">
          <Body3>저장완료</Body3>
        </SaveButton>
      )}
    </Container>
  );
};

export default NavHeader;

const CustomButtonBack = styled(ButtonBack)``;
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.border_300};
  padding: 10px;
  justify-content: space-between;
`;

const SaveButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
