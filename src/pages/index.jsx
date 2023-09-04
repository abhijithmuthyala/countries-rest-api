import Head from "next/head";

import Header from "../components/Header";
import Form from "../components/Form/Form";

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
        <div className="max-w-wrapper px-4 py-6">
          <Form />
        </div>
      </main>
    </>
  );
}
