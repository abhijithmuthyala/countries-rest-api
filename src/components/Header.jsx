import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("dark");

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    document.body.classList.toggle("light");
  }

  return (
    <header className="h-header flex flex-wrap items-center justify-between">
      <h1 className="font-bold leading-2 md:text-2xl">
        <Link href="/">Where in the world?</Link>
      </h1>
      <button
        onClick={handleTheme}
        className="flex items-center gap-2 text-xs font-medium md:gap-4 md:text-base"
      >
        <span className="dark:bg-dark-mode block aspect-square w-4 bg-mode bg-contain bg-no-repeat sm:w-6"></span>
        {theme.replace(/^\w/, (c) => c.toUpperCase())} Mode
      </button>
    </header>
  );
}
