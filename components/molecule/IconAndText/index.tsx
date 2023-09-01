import Body3 from '@/components/atom/typography/Body3';
import React, { ReactComponentElement, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface Props {
  IconComponent: () => React.JSX.Element;
  text: string;
  onClick?: () => {};
}

/**
 * 작성자: 김대환
 *
 * 사용예시
 *
 * ```javascript
 * import DocumentIcon from '@/components/icons/DocumentIcon';
 * ...
 * <IconAndText IconComponent={DocumentIcon} text='예약내역' />
 * ```
 *
 */
const IconAndText = ({ IconComponent, text, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <IconComponent />
      <Body3>{text}</Body3>
    </Container>
  );
};

export default IconAndText;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 20px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border_100};
`;
