import PayCardButton from '@/components/atom/radio-buttons/PayCardButton';
import PayKakaoButton from '@/components/atom/radio-buttons/PayKakaoButton';
import { radioPaymentAtom } from '@/jotai/common';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export type RadioPaymentValue = 'card' | 'kakao' | '';

const RadioPayment = () => {
  const [value, setValue] = useAtom(radioPaymentAtom);

  useEffect(() => () => setValue(''), []);

  return (
    <Container>
      <PayCardButton
        active={value === 'card'}
        onClick={() => setValue('card')}
      />
      <PayKakaoButton
        active={value === 'kakao'}
        onClick={() => setValue('kakao')}
      />
    </Container>
  );
};

export default RadioPayment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
