import { useCallback, useRef, useState } from "react";

import Country from "./Country";
import { EAGER_LOAD_THRESHOLD } from "@/constants";
import useIntersectionEffect from "@/hooks/useIntersectionEffect";

export default function CountriesList({ countriesData, filter, query }) {
  const [sliceSize, setSliceSize] = useState(EAGER_LOAD_THRESHOLD);
  const observerRef = useRef(null);
  const options = useRef({
    root: null,
    rootMargin: "0px 0px 96px 0px",
    threshold: 0,
  });

  useIntersectionEffect(
    observerRef,
    options.current,
    useCallback(onIntersect, []),
  );

  const filteredCountries = countriesData
    .filter(filterCountries)
    .slice(0, sliceSize);

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
    <>
      <ul className="grid grid-cols-[repeat(auto-fit,_264px)] justify-center gap-x-[4.5rem] gap-y-[40px] md:gap-y-16 lg:justify-start">
        {filteredCountries.map((countryData, index) => (
          <Country
            data={countryData}
            key={countryData.name.official}
            number={index + 1}
          />
        ))}
      </ul>
      <div ref={observerRef} className="py-3"></div>
    </>
  );

  function onIntersect() {
    setSliceSize((prevSliceSize) => prevSliceSize + EAGER_LOAD_THRESHOLD);
  }

  function filterCountries(countryData) {
    const includesRegion = countryData.region.toLowerCase().includes(filter);
    const includesSearch = countryData.name.official
      .toLowerCase()
      .includes(query);

    return includesRegion && includesSearch;
  }
}
