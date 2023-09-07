import Image from "next/image";

import PropertiesGroup from "./PropertiesGroup";
import BorderCountries from "./BorderCountries";

export default function CountryDetails({ data }) {
  return (
    <article className="flex flex-wrap justify-between items-start gap-y-11 gap-x-36">
      <Image
        src={data.flags.svg}
        alt="Flag"
        width={900}
        height={600}
        loading="eager"
        className="rounded-lg max-w-[35rem] min-w-0 grow basis-80 mx-auto"
      />
      <div className="basis-80 grow grid place-content-center">
        <h2 className="font-bold text-xl mb-4">{data.name.common}</h2>
        <div className="flex flex-wrap gap-x-28 gap-y-8 mb-8">
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
              { property: "Top Level Domain", value: data.tld || "todo" },
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
        <BorderCountries borders={data.borders} />
      </div>
    </article>
  );
}
