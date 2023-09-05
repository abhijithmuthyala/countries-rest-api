import Link from "next/link";

export default function BorderCountries({ borders }) {
  return (
    <div>
      <h3 className="text-base font-medium leading-3 mb-4">
        Border Countries:
      </h3>
      <ul className="flex flex-wrap gap-x-2 gap-y-4 rounded-sm">
        {borders.map((border) => (
          <li
            key={border}
            className="basis-24 shrink-0 bg-blue-600 text-center py-1.5"
          >
            <Link href={`/country/${border.toLowerCase()}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
