import Country from "./Country";

export default function CountriesList({ countriesData }) {
  return (
    <ul className="grid justify-center grid-cols-[repeat(auto-fit,_264px)] gap-y-[40px] gap-x-[75px] lg:justify-between lg:gap-x-[60px] lg:gap-y-16">
      {countriesData.map(renderCountry)}
    </ul>
  );

  function renderCountry(countryData) {
    return <Country data={countryData} key={countryData.name.official} />;
  }
}
