import { useRef } from "react";

import { formActions } from "@/reducers/form";
import { DEBOUNCE_THRESHOLD } from "@/constants";

export default function Searchbar({ query, dispatchForm }) {
  const timerRef = useRef(null);

  function handleChange(event) {
    dispatchForm({
      type: formActions.searchQuery,
      searchQuery: event.target.value.trim().toLowerCase(),
    });

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(function queryDebounce() {
      dispatchForm({
        type: formActions.debouncedSearchQuery,
      });
    }, DEBOUNCE_THRESHOLD);
  }

  return (
    <label
      htmlFor="input-country"
      className="flex min-h-[3rem] w-full max-w-[30rem] cursor-text items-center gap-x-6 rounded-md bg-card px-8 drop-shadow-lg focus-within:outline focus-within:outline-2 focus-within:outline-gray-300"
    >
      <span className="inline-block aspect-square w-4 bg-search bg-cover bg-center bg-no-repeat"></span>
      <input
        type="text"
        id="input-country"
        value={query}
        onChange={handleChange}
        placeholder="Search for a country"
        className="w-full placeholder:text-xs focus:outline-none md:placeholder:text-base"
      />
    </label>
  );
}
