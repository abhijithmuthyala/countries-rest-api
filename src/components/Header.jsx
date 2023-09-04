export default function Header() {
  return (
    <header className="min-h-[5rem] flex items-center justify-between flex-wrap">
      <h1 className="leading-2 font-bold">Where in the world?</h1>
      <button className="flex items-center gap-2 font-medium text-xs">
        <span className="block w-4 aspect-square bg-dark-mode bg-contain bg-no-repeat"></span>
        Dark Mode
      </button>
    </header>
  );
}
