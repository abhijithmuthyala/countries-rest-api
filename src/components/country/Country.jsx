import Image from "next/image";

export default function Country({ data }) {
  return (
    <li
      key={data.name.official}
      className="grid grid-rows-[10rem,_minmax(176px,_auto)] bg-blue-600 rounded-lg overflow-hidden"
    >
      <Image
        src={data.flags.svg}
        alt={`Flag of ${data.name.official}`}
        width={264}
        height={160}
        loading="lazy"
        className="self-stretch object-cover object-center"
      />
      <div className="p-6">
        <h3 className="font-bold leading-3 text-lg mb-4">
          {data.name.official}
        </h3>
        <div className="flex flex-col gap-y-2">
          <p className="leading-1 text-sm">
            <span className="font-medium">Population</span>: {data.population}
          </p>
          <p>
            <span className="font-medium">Region</span>: {data.region}
          </p>
          <p>
            <span className="font-medium">Capital</span>: {data.capital}
          </p>
        </div>
      </div>
    </li>
  );
}
