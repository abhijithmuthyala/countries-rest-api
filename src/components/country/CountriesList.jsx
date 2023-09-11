import Country from "./Country";

export default function CountriesList({ countriesData, filter, query }) {
  console.log("rendering CountriesList");

  const filteredCountries = countriesData.filter(filterCountries);

  function filterCountries(countryData) {
    const includesRegion = countryData.region.toLowerCase().includes(filter);
    const includesSearch = countryData.name.official
      .toLowerCase()
      .includes(query);

    return includesRegion && includesSearch;
  }

  if (filteredCountries.length === 0) {
    return (
      <p className="text-center text-xl font-medium text-gray-200">
        No countries {query && "with name "}
        {query?.replace(/^\w/, (c) => c.toUpperCase())} found in the region{" "}
        {filter.replace(/^\w/, (c) => c.toUpperCase())}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_264px)] justify-center gap-x-[4.5rem] gap-y-[40px] md:gap-y-16 lg:justify-start">
      {filteredCountries.map(renderCountry)}
    </ul>
  );

  function renderCountry(countryData) {
    return <Country data={countryData} key={countryData.name.official} />;
  }
}
