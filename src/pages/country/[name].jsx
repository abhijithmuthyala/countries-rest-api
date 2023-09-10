import Head from "next/head";

import CountryDetails from "@/components/detail/CountryDetails";

import { API_URL } from "@/constants";

export default function Page({ data }) {
  return (
    <>
      <Head>
        <title>Details of {data.name.common}</title>
      </Head>
      <main className="h-main">
        <h1 className="sr-only">Details of {data.name.common}</h1>
        <div className="max-w-wrapper px-7 py-16">
          <CountryDetails data={data} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(API_URL.country(params.name));
    const data = await res.json();

    const borders = await Promise.allSettled(
      data.borders.map(async (border) => {
        const res = await fetch(API_URL.borders(border));
        const data = await res.json();
        return { code: data.cca3, name: data.name.common };
      }),
    );
    data.borders = borders.map((border) => border.value);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
  }
}

function wait(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getStaticPaths() {
  const res = await fetch(API_URL.countries);
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { name: country.cca3.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
}
