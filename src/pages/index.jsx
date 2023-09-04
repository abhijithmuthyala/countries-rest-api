import Head from "next/head";

import Header from "../components/Header";
import Form from "../components/Form/Form";
import CountriesList from "../components/country/CountriesList";

import { API_URL } from "../constants";

export default function Home({ countriesData }) {
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
        <div className="max-w-wrapper px-4 py-2">
          <section>
            <h2 className="sr-only">List of countries data</h2>
            <CountriesList countriesData={countriesData} />
          </section>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(API_URL.all);
  const countriesData = await res.json();

  return {
    props: {
      countriesData,
    },
  };
}
