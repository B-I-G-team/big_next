import { AppProps } from "next/app";
import React from "react";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* 동일한 컴포넌트를 모든 페이지에 추가 */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
