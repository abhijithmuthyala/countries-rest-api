import Image from "next/image";

import PropertiesGroup from "./PropertiesGroup";
import BorderCountries from "./BorderCountries";

export default function CountryDetails({ data }) {
  return (
    <article>
      <Image
        src={data.flags.svg}
        alt="Flag"
        width={320}
        height={230}
        className="rounded-lg mb-11"
      />
      <h2 className="font-bold text-xl mb-4">{data.name.common}</h2>
      <div className="flex flex-col gap-y-8">
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
        <BorderCountries borders={data.borders} />
      </div>
    </article>
  );
}
