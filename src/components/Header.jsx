import Link from "next/link";

export default function Header() {
  return (
    <header className="h-header flex flex-wrap items-center justify-between">
      <h1 className="leading-2 font-bold">
        <Link href="/">Where in the world?</Link>
      </h1>
      <button className="flex items-center gap-2 text-xs font-medium">
        <span className="bg-dark-mode block aspect-square w-4 bg-contain bg-no-repeat"></span>
        Dark Mode
      </button>
    </header>
  );
}
