import Small from '@/components/atom/typography/Small';
import DrawerIcon from '@/components/icons/DrawerIcon';
import React, { ReactChild, useState } from 'react';
import styled from 'styled-components';

export interface Props {
  children: ReactChild;
  title: string;
}
const Drawer = ({ title, children }: Props) => {
  const [draw, setDraw] = useState(false);
  return (
    <Container>
      <TitleBox>
        <Small bold>{title}</Small>
        <DrawerButton
          onClick={() => {
            setDraw((prev) => !prev);
          }}
        >
          <DrawerIcon />
        </DrawerButton>
      </TitleBox>
      <DrawBox className="DrawBox" is_draw={draw}>
        {children}
      </DrawBox>
    </Container>
  );
};

export default Drawer;

const Container = styled.div`
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  padding: 8px 10px;
  border: 1px solid ${({ theme }) => theme.color.border_100};
  justify-content: space-between;
`;

const DrawerButton = styled.div`
  &:hover {
    opacity: 0.8;
  }
  transition: 200ms;
`;

const DrawBox = styled.div<{ is_draw: boolean }>`
  display: ${({ is_draw }) => (is_draw ? 'flex' : 'none')};
  width: 100%;
`;
