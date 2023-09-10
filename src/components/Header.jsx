export default function Header() {
  return (
    <header className="h-header flex flex-wrap items-center justify-between">
      <h1 className="font-bold leading-2">Where in the world?</h1>
      <button className="flex items-center gap-2 text-xs font-medium">
        <span className="block aspect-square w-4 bg-dark-mode bg-contain bg-no-repeat"></span>
        Dark Mode
      </button>
    </header>
  );
}
