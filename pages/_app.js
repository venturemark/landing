import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Breadcrumb - Everyone Updated. Easily.</title>
        <meta
          property="og:title"
          name="title"
          content="Breadcrumb - Everyone Updated. Easily."
        ></meta>
        <meta
          property="og:description"
          name="description"
          content="Breadcrumb is a communication tool that makes sharing business progress fast and engaging."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Business Updates, Investor Updates, Team Updates, Weekly Updates, Daily Updates"
        />
        <meta name="robots" content="follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
