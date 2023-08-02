import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { RecoilRoot } from "recoil";

import { defaultValues } from "@/swr/config";
import Layout from "@/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SWRConfig value={defaultValues}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </RecoilRoot>
  );
}
