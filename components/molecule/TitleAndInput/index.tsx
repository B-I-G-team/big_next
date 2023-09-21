import PrimaryInput from '@/components/atom/inputs/PrimaryInput';
import SubTitle from '@/components/atom/typography/SubTitle';
import React, { useState } from 'react';
import styled from 'styled-components';

export interface Props {
  title: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
}
const TitleAndInput = ({ title, placeholder, onChange, value }: Props) => {
  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <PrimaryInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};

export default TitleAndInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
