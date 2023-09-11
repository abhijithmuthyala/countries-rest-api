export default function Form({ children }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form
      action="/"
      onSubmit={handleSubmit}
      className="flex min-h-[3rem] flex-wrap justify-between gap-x-6 gap-y-[2.5rem] md:min-h-[3.5rem] md:text-base"
    >
      {children}
    </form>
  );
}
