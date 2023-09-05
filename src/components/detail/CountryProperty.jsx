export default function CountryProperty({ property, value }) {
  return (
    <p>
      <span className="font-medium leading-4">{property}: </span>
      {value}
    </p>
  );
}
