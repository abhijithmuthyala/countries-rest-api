import Searchbar from "./Searchbar";
import RegionSelector from "./RegionSelector";

export default function Form({ children }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form
      action="/"
      onSubmit={handleSubmit}
      className="flex flex-wrap justify-between gap-x-6 gap-y-[2.5rem]"
    >
      {children}
    </form>
  );
}
