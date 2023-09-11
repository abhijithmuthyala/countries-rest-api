import { useContext } from "react";

import FormContext from "@/reducers/form";
import { formActions } from "@/reducers/form";

export default function RegionSelector({ value, dispatchForm }) {
  function handleChange(event) {
    dispatchForm({
      type: formActions.filter,
      filter: event.target.value,
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
        className="max-h-12 basis-[12.5rem] cursor-pointer appearance-none rounded-md bg-blue-600 bg-down-arrow bg-[size:.8rem] bg-[position:right_1.5rem_center] bg-no-repeat px-6 py-3"
      >
        <option value="" disabled className="hidden">
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        op
      </select>
    </>
  );
}
