import React, { useState } from 'react';
import styled from 'styled-components';
import DrawerButton from '../buttons/DrawerButton';
import Body3 from '../typography/Body3';

export interface Props {
  defaultValue: string;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
const Select = ({ defaultValue, onChange, options }: Props) => {
  const [draw, setDraw] = useState(false);
  const [value, setValue] = useState(defaultValue);
  return (
    <Container>
      <MainSection
        onClick={() => {
          setDraw((prev) => !prev);
        }}
      >
        <Body3>{value}</Body3>
        <DrawerButton draw={draw} onClick={() => {}} />
      </MainSection>
      <ChildSection isdraw={draw}>
        {options.map((item, index) => (
          <Child
            key={index}
            onClick={() => {
              setValue(item);
              setDraw((prev) => !prev);
              onChange();
            }}
          >
            <Body3>{item}</Body3>
          </Child>
        ))}
      </ChildSection>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  width: 50%;
`;

const MainSection = styled.div`
  display: flex;
  cursor: pointer;
  gap: 6px;
  padding: 12px 6px;
  border: 1px solid ${({ theme }) => theme.color.border_100};
  justify-content: center;
  align-items: center;
`;

const ChildSection = styled.div<{ isdraw: boolean }>`
  display: ${({ isdraw }) => (isdraw ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`;

const Child = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 12px 6px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.border_100};
  &:hover {
    background-color: ${({ theme }) => theme.color.border_100};
  }
`;
