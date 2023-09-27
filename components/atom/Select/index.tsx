import React, { useState } from 'react';
import styled from 'styled-components';
import DrawerButton from '../buttons/DrawerButton';
import Body3 from '../typography/Body3';

export interface Props {
  defaultValue: string;
  options: string[];
  onChange: () => void;
  width?: string;
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
      <ChildSection $isdraw={draw}>
        {options.map(
          (item, index) =>
            item === value || (
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
            ),
        )}
      </ChildSection>
    </Container>
  );
};

export default Select;

const Container = styled.div``;

const MainSection = styled.div`
  display: flex;
  cursor: pointer;
  gap: 6px;
  border: 1px solid ${({ theme }) => theme.color.red_500};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  width: 80px;
  padding: 5px 0px;
`;

const ChildSection = styled.div<{ $isdraw: boolean }>`
  display: ${({ $isdraw }) => ($isdraw ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 80px;
  background-color: ${({ theme }) => theme.color.white};
`;

const Child = styled.div`
  cursor: pointer;
  padding: 5px 0px;
  width: 100%;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.border_100};
  border-top: none;
  &:hover {
    background-color: ${({ theme }) => theme.color.border_100};
    border: 1px solid ${({ theme }) => theme.color.border_100};
    border-color: ${({ theme }) => theme.color.red_500};
  }
`;
