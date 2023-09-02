import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@/components/icons/SearchIcon';
export interface Props {
  prefixed?: boolean;
  placeholder: string;
}

const PrimaryInput = ({ prefixed, placeholder }: Props) => {
  return (
    <Container>
      <SearchIcon prefixed={prefixed} />
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default PrimaryInput;
const Container = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color['border_300']};
  align-items: center;
  width: 300px;
  height: 33px;
  border-radius: 6px;
`;
const Input = styled.input`
  display: flex;
  margin-left: 10px;
  width: 100%;
  align-items: flex-start;
  border: none;
  font-family: Gmarket Sans TTF;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.154px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color['text_100']};
  }
`;
