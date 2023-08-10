"use client";
import React from "react";
import { styled, css } from "styled-components";

interface Props {
  size: string;

  children: string;
  reversal: Boolean;
}
const PrimaryButton = ({ size, children, reversal }: Props) => {
  return (
    <Wrapper size={size} reversal={reversal}>
      {children}
    </Wrapper>
  );
};

export default PrimaryButton;

const Wrapper = styled.div<{
  size: string;
  reversal: Boolean;
}>`
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #d00051;
  align-items: center;
  background-color: #d00051;
  color: #ffffff;
  height: 40px;
  ${({ size }) =>
    size === "sm" &&
    css`
      width: 100px;
    `}
  ${({ size }) =>
    size === "md" &&
    css`
      width: 130px;
    `}
  ${({ size }) =>
    size === "fit" &&
    css`
      width: 100%;
    `}
  ${({ reversal }) =>
    reversal &&
    css`
      color: #d00051;
      background-color: #ffffff;
    `}
`;
