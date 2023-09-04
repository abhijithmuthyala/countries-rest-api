import Searchbar from "./Searchbar";
import RegionSelector from "./RegionSelector";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form
      action="/"
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-x-6 gap-y-[2.5rem] justify-between"
    >
      <Searchbar />
      <RegionSelector />
    </form>
  );
}
