'use client';

import { PropsWithChildren } from 'react';
import GlobalStyle from '@/styles';
import { theme } from '@/styles/theme';

import { ThemeProvider } from 'styled-components';

import '@/styles/fonts.css';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
