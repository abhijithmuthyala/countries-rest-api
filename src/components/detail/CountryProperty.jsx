export default function CountryProperty({ property, value }) {
  if (!value) return null;

  return (
    <p>
      <span className="font-medium leading-4">{property}: </span>
      {value}
    </p>
  );
}
