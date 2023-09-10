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
    <div className="max-w-wrapper bg-blue-600 px-4">
      <Header />
    </div>
  );
}
