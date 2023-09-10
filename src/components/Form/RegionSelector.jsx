import { useContext } from "react";

import FormContext from "@/context/form";
import { formActions } from "@/context/form";

export default function RegionSelector() {
  const { formState, dispatchForm } = useContext(FormContext);

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
        value={formState.filter}
        onChange={handleChange}
        className="basis-[12.5rem] px-6 py-3 max-h-12 bg-blue-600 rounded-md bg-down-arrow bg-no-repeat bg-[size:.8rem] bg-[position:right_1.5rem_center] cursor-pointer appearance-none"
      >
        <option value="" disabled className="hidden">
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceana">Oceana</option>
        op
      </select>
    </>
  );
}
