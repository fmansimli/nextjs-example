import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface PageProps {}

const NotFoundPage: NextPage<PageProps> = (props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h4 className="text-6xl font-bold">Not Found, 404!</h4>
        <br />
        <Link href="/">back to home</Link>
      </main>
    </div>
  );
};

export default NotFoundPage;
