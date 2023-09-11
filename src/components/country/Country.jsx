import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { EAGER_LOAD_THRESHOLD } from "@/constants";

export default function Country({ data, number }) {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const shouldLoadEagerly = number <= EAGER_LOAD_THRESHOLD;

  function handleImageLoad() {
    setShowSkeleton(false);
  }

  return (
    <li key={data.name.official}>
      <Link
        href={`/country/${data.cca3.toLowerCase()}`}
        className="grid h-full grid-rows-[10rem,_minmax(176px,_auto)] overflow-hidden rounded-lg bg-card drop-shadow-md transition-all hover:scale-105"
      >
        <Image
          src={data.flags.svg}
          alt={data.flags.alt}
          width={264}
          height={160}
          loading={shouldLoadEagerly ? "eager" : "lazy"}
          priority={shouldLoadEagerly}
          className={`self-stretch object-cover object-center transition-all ${
            showSkeleton ? "skeleton" : ""
          }`}
          onLoad={handleImageLoad}
        />
        <div className="p-6">
          <h3 className="mb-4 text-lg font-bold leading-3">
            {data.name.official}
          </h3>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm leading-1">
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
      </Link>
    </li>
  );
}
