'use client';
import LoginPage from '@/components/page/LoginPage';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Index() {
  const params = useSearchParams();
  const router = useRouter();

  const access_token = params.get('access_token');

  useEffect(() => {
    if (access_token) {
      localStorage.setItem('access_token', access_token);
      router.push('/');
    }
  }, [access_token, router]);

  return <LoginPage />;
}
