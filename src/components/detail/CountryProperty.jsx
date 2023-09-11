export default function CountryProperty({ property, value }) {
  if (!value) return null;

  return (
    <p className="md:text-lg">
      <span className="font-medium leading-4 md:text-lg">{property}: </span>
      {value}
    </p>
  );
}
