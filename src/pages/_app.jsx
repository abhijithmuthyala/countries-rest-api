import Header from "../components/Header";

import "../index.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LayoutHeader />
      <Component {...pageProps} />
    </>
  );
}

function LayoutHeader() {
  return (
    <div className="max-w-wrapper bg-card px-4 shadow-md">
      <Header />
    </div>
  );
}
