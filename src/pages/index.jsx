import Head from "next/head";
import { memo, useReducer } from "react";

import Form from "../components/Form/Form";
import CountriesList from "../components/country/CountriesList";

import { formReducer } from "@/reducers/form";
import { API_URL } from "../constants";
import Searchbar from "@/components/Form/Searchbar";
import RegionSelector from "@/components/Form/RegionSelector";

const MemoizedCountriesList = memo(CountriesList);

export default function Home({ countriesData }) {
  return (
    <>
      <Head>
        <title>Countries</title>
        <meta
          name="description"
          content="Explore different countries and their data such as population, currency, langugaes, border countries."
        />
      </Head>
      <MainContent countriesData={countriesData} />
    </>
  );
}

function MainContent({ countriesData }) {
  const [formState, dispatchForm] = useReducer(formReducer, {
    searchQuery: "",
    debouncedSearchQuery: "",
    filter: "",
  });

  return (
    <main className="h-main">
      <div className="max-w-wrapper px-4 py-6 md:py-12">
        <Form>
          <Searchbar
            query={formState.searchQuery}
            dispatchForm={dispatchForm}
          />
          <RegionSelector
            value={formState.filter}
            dispatchForm={dispatchForm}
          />
        </Form>
      </div>
      <div className="max-w-wrapper px-4 py-2">
        <section>
          <h2 className="sr-only">List of countries data</h2>
          <MemoizedCountriesList
            countriesData={countriesData}
            filter={formState.filter}
            query={formState.debouncedSearchQuery}
          />
        </section>
      </div>
    </main>
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
