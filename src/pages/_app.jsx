import Router from "next/router";
import { useEffect } from "react";

import Header from "../components/Header";

import "../index.css";

export default function App({ Component, pageProps }) {
  useEffect(function initTransitions() {
    if (!document.startViewTransition) return;

    let transitionPromise = { resolve: null };

    Router.events.on("routeChangeStart", function startTransition() {
      document.startViewTransition(function transitionCallback() {
        return new Promise((resolve) => {
          transitionPromise.resolve = resolve;
        });
      });
    });

    Router.events.on("routeChangeComplete", function endTransition() {
      transitionPromise.resolve();
    });
  }, []);

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
