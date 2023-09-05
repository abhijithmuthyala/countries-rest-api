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
    <div className="max-w-wrapper px-4 bg-blue-600">
      <Header />
    </div>
  );
}
