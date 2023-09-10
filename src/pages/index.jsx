import Head from "next/head";

import Header from "../components/Header";
import Form from "../components/Form/Form";
import CountriesList from "../components/country/CountriesList";

import { API_URL } from "../constants";

import { FormProvider } from "@/context/form";

export default function Home({ countriesData }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="h-main">
        <FormProvider>
          <div className="max-w-wrapper px-4 py-6">
            <Form />
          </div>
          <div className="max-w-wrapper px-4 py-2">
            <section>
              <h2 className="sr-only">List of countries data</h2>
              <CountriesList countriesData={countriesData} />
            </section>
          </div>
        </FormProvider>
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
