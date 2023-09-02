import React from 'react';
import { styled } from 'styled-components';

interface Props {
  prefixed?: boolean;
}
const SearchIcon = ({ prefixed }: Props) => {
  return (
    <Icon
      prefixed={prefixed}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0387 18.6281L17.744 18.3335L13.879 14.4684L13.5878 14.7014C12.3759 15.6708 10.8395 16.2502 9.16665 16.2502C5.25463 16.2502 2.08331 13.0788 2.08331 9.16683C2.08331 5.25481 5.25463 2.0835 9.16665 2.0835C13.0787 2.0835 16.25 5.25481 16.25 9.16683C16.25 10.8397 15.6706 12.3761 14.7012 13.588L14.4682 13.8792L18.6232 18.0341L18.6255 18.0365C18.7028 18.1125 18.75 18.2171 18.75 18.3335C18.75 18.5636 18.5634 18.7502 18.3333 18.7502C18.2181 18.7502 18.1145 18.704 18.0387 18.6281ZM9.16665 2.91683C5.71487 2.91683 2.91665 5.71505 2.91665 9.16683C2.91665 12.6186 5.71487 15.4168 9.16665 15.4168C12.6184 15.4168 15.4166 12.6186 15.4166 9.16683C15.4166 5.71505 12.6184 2.91683 9.16665 2.91683Z"
        fill="#8C8D96"
      />
    </Icon>
  );
};
export default SearchIcon;

const Icon = styled.svg<{ prefixed?: boolean }>`
  margin-left: 6px;
  margin-bottom: 4px;
  display: ${({ prefixed }) => (prefixed ? 'inline' : 'none')};
`;
