import Link from "next/link";

export default function BorderCountries({ borders }) {
  return (
    <div>
      <h3 className="mb-4 text-base font-medium leading-3 md:text-lg">
        Border Countries:
      </h3>
      <ul className="flex flex-wrap gap-x-2 gap-y-4 rounded-sm">
        {borders.map((border) => (
          <li
            key={border.code}
            className="min-w-[6rem] bg-blue-600 px-3 py-1.5"
          >
            <Link
              href={`/country/${border.code.toLowerCase()}`}
              className="block text-center md:text-lg"
            >
              {border.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
