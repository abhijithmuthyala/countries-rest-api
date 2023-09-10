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
      className="flex min-h-[3rem] w-full max-w-[30rem] cursor-text items-center gap-x-6 rounded-md bg-blue-600 px-8 focus-within:outline focus-within:outline-2 focus-within:outline-gray-300"
    >
      <span className="inline-block aspect-square w-4 bg-search bg-cover bg-center bg-no-repeat"></span>
      <input
        type="text"
        id="input-country"
        value={formState.searchQuery}
        onChange={handleChange}
        placeholder="Search for a country"
        className="w-full placeholder:text-xs placeholder:text-gray-100 focus:outline-none"
      />
    </label>
  );
}
