import { formActions } from "@/reducers/form";

export default function RegionSelector({ value, dispatchForm }) {
  function handleChange(event) {
    let filter = event.target.value;
    if (filter === "none") filter = "";

    dispatchForm({
      type: formActions.filter,
      filter,
    });
  }

  return (
    <>
      <label htmlFor="region" className="sr-only">
        Filter results by region
      </label>
      <select
        name="region"
        id="region"
        value={value}
        onChange={handleChange}
        className="basis-[12.5rem] cursor-pointer appearance-none rounded-md bg-card bg-down-arrow bg-[size:0.8rem] bg-[position:right_1.5rem_center] bg-no-repeat px-6 py-3 drop-shadow-md"
      >
        <option value="" disabled>
          Filter by Region
        </option>
        <option value="none">None</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
}
