import { useContext } from "react";

import FormContext from "@/context/form";
import { formActions } from "@/context/form";

export default function Searchbar() {
  const { formState, dispatchForm } = useContext(FormContext);

  function handleChange(event) {
    dispatchForm({
      type: formActions.searchQuery,
      searchQuery: event.target.value.trim().toLowerCase(),
    });
  }

  return (
    <label
      htmlFor="input-country"
      className="w-full max-w-[30rem] flex gap-x-6 items-center min-h-[3rem] px-8 bg-blue-600 rounded-md cursor-text focus-within:outline focus-within:outline-gray-300 focus-within:outline-2"
    >
      <span className="inline-block w-4 aspect-square bg-search bg-center bg-cover bg-no-repeat"></span>
      <input
        type="text"
        id="input-country"
        value={formState.searchQuery}
        onChange={handleChange}
        placeholder="Search for a country"
        className="w-full placeholder:text-gray-100 placeholder:text-xs focus:outline-none"
      />
    </label>
  );
}
