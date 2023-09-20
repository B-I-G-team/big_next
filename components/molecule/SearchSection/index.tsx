import PrimaryInput from '@/components/atom/inputs/PrimaryInput';
import Title1 from '@/components/atom/typography/Title1';
import React, { useState } from 'react';
import styled from 'styled-components';

export interface Props {}
const SearchSection = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  return (
    <Container
      onSubmit={() => {
        setTitle(value);
      }}
    >
      <Title1>{`"${value}" 검색 결과`}</Title1>
      <PrimaryInput
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="체육관, 업체 검색"
        prefixed
        value={value}
      ></PrimaryInput>
    </Container>
  );
};

export default SearchSection;

const Container = styled.form``;
