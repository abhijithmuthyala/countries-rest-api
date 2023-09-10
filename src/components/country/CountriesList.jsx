import { useContext } from "react";

import Country from "./Country";
import FormContext from "@/context/form";

export default function CountriesList({ countriesData }) {
  const { formState } = useContext(FormContext);

  const filteredCountries = countriesData.filter((countryData) =>
    countryData.region.toLowerCase().includes(formState.filter)
  );

  if (filteredCountries.length === 0) {
    return (
      <p className="text-center text-xl font-medium text-gray-200">
        No countries found in the region{" "}
        {formState.filter.replace(/^\w/, (c) => c.toUpperCase())}
      </p>
    );
  }

  return (
    <ul className="grid justify-center grid-cols-[repeat(auto-fit,_264px)] gap-y-[40px] gap-x-[75px] lg:justify-between lg:gap-x-[60px] lg:gap-y-16">
      {filteredCountries.map(renderCountry)}
    </ul>
  );

  function renderCountry(countryData) {
    return <Country data={countryData} key={countryData.name.official} />;
  }
}
