import React, { useState } from 'react';
import styled from 'styled-components';
import DrawerButton from '../buttons/DrawerButton';
import Body3 from '../typography/Body3';

export interface Props {
  standard: string;
}
const Select = ({ standard }: Props) => {
  const [draw, setDraw] = useState(false);
  return (
    <Container>
      <MainSection>
        <Body3>{standard}</Body3>
        <DrawerButton
          draw={draw}
          onClick={() => {
            setDraw((prev) => !prev);
          }}
        />
      </MainSection>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  width: 50%;
`;

const MainSection = styled.div`
  display: flex;
  gap: 6px;
  padding: 12px 6px;
  border: 1px solid ${({ theme }) => theme.color.border_100};
  justify-content: center;
  align-items: center;
`;
