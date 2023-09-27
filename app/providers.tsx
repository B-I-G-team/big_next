'use client';

import { PropsWithChildren } from 'react';
import GlobalStyle from '@/styles';
import { theme } from '@/styles/theme';

import { ThemeProvider } from 'styled-components';

import '@/styles/fonts.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
