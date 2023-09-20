import Select from '@/components/atom/Select';
import PrimaryInput from '@/components/atom/inputs/PrimaryInput';
import Title1 from '@/components/atom/typography/Title1';
import React, { useState } from 'react';
import styled from 'styled-components';

export interface Props {}
const SearchSection = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  return (
    <Container>
      <Title1>{`"${title}" 검색 결과`}</Title1>
      <Section>
        <PrimaryInput
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setTitle(value);
              setValue('');
            }
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="체육관, 업체 검색"
          prefixed
          value={value}
        ></PrimaryInput>
        <Select
          defaultValue="인기순"
          options={['인기순', '조회순', '좋아요순']}
          onChange={() => {}}
        />
      </Section>
    </Container>
  );
};

export default SearchSection;

const Container = styled.div``;

const Section = styled.div`
  display: flex;
  gap: 4px;
`;
