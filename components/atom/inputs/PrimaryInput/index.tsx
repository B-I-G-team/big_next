import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@/components/icons/SearchIcon';
export interface Props {
  prefixed?: boolean;
  placeholder: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit?: React.FormEventHandler<HTMLInputElement> | undefined;
}

const PrimaryInput = ({
  prefixed,
  placeholder,
  onChange,
  value,
  onSubmit,
}: Props) => {
  return (
    <Container>
      {prefixed && <SearchIcon />}
      <Input
        onSubmit={onSubmit}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default PrimaryInput;
const Container = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color['border_300']};
  align-items: center;
  width: 100%;
  height: 33px;
  border-radius: 6px;
`;
const Input = styled.input`
  display: flex;
  margin: 0px 10px;
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
