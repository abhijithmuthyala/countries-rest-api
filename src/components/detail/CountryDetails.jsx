import Image from "next/image";

import { useState } from "react";

import PropertiesGroup from "./PropertiesGroup";
import BorderCountries from "./BorderCountries";

export default function CountryDetails({ data }) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  function handleImageLoad() {
    setShowSkeleton(false);
  }

  return (
    <article className="flex flex-wrap items-start justify-between gap-x-36 gap-y-11">
      <Image
        src={data.flags.svg}
        alt={data.flags.alt}
        width={900}
        height={600}
        loading="eager"
        priority={true}
        onLoad={handleImageLoad}
        className={`${
          showSkeleton ? "skeleton" : ""
        } mx-auto aspect-[3/2] min-w-0 max-w-[35rem] grow basis-80 rounded-lg object-cover object-center`}
      />
      <div className="grid grow basis-80 place-content-center">
        <h2 className="mb-4 text-xl font-bold md:text-3xl">
          {data.name.common}
        </h2>
        <div className="mb-8 flex flex-wrap gap-x-28 gap-y-8">
          <PropertiesGroup
            data={[
              {
                property: "Native Name",
                value:
                  data.name.nativeName[Object.keys(data.name.nativeName)[0]]
                    ?.common,
              },
              { property: "Population", value: data.population },
              { property: "Region", value: data.region },
              { property: "Sub Region", value: data.subregion },
              { property: "Capital", value: data.capital },
            ]}
          />
          <PropertiesGroup
            data={[
              { property: "Top Level Domain", value: data.tld[0] },
              {
                property: "Currencies",
                value: Object.values(data.currencies)[0]?.name,
              },
              {
                property: "Languages",
                value: Object.values(data.languages).join(", "),
              },
            ]}
          />
        </div>
        {data.borders.length > 0 && <BorderCountries borders={data.borders} />}
      </div>
    </article>
  );
}
