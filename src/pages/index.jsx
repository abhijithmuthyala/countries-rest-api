import Head from "next/head";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <div className="max-w-wrapper px-4 bg-blue-600">
          <Header />
        </div>
      </main>
    </>
  );
}
