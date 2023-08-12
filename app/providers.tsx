'use client';

import { PropsWithChildren } from 'react';
import GlobalStyle from '@/styles';
import '@/styles/fonts.css';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
