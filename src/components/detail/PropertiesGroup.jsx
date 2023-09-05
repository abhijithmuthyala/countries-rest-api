import CountryProperty from "./CountryProperty";

export default function PropertiesGroup({ data }) {
  return (
    <div className="">
      {data.map((props) => (
        <CountryProperty {...props} key={props.property} />
      ))}
    </div>
  );
}
