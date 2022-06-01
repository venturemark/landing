/** This file is auto-generated by Plasmic; please do not edit! */

import Head from 'next/head';
import * as React from "react";
import PlasmicLoader from "@plasmicapp/loader";
import dynamic from "next/dynamic";
import Link from "next/link";
import * as ga from "../lib/ga";

export default function Home() {
  const Referlist = dynamic(
    () =>
      import("referlist").then((referlist) => {
        referlist.initialize({ domain: "breadcrumb" });
      }),
    { ssr: false }
  );

  const Referlist2 = dynamic(
    () =>
      import("referlist").then((referlist) => {
        referlist.initialize({
          domain: "breadcrumb",
          buttonId: "referlistbutton2",
          emailId: "referlistemail2",
        });
      }),
    { ssr: false }
  );

  const logSignup = () => {
    ga.event({
      action: "sign_up",
    });
  };

  return (
    <>
      <Head>
        <title>Breadcrumb - Turn Meetings Into Action</title>
        <meta
          property="og:title"
          content="Venturemark - Share Venture Stories"
          key="title"
        />
        <meta
          property="og:description"
          name="description"
          content="Venturemark is a communication tool that makes sharing business progress fast and engaging."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Business Updates, Investor Updates, Team Updates"
        />
        <meta name="robots" content="follow" />
      </Head>
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-100italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-200.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-200italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-300.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-500italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-500.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-600.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-700.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-600italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-700italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-800.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-800italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-900.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-900italic.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/poppins/poppins-v15-latin-100.ttf"
        as="font"
        crossOrigin=""
      />
      <Referlist />
      <Referlist2 />
      <PlasmicLoader
        projectId="htDwGmRhKKr2sReJspzzGk"
        component="Homepage"
        componentProps={{
          privacyPolicy: {
            wrap: (node) => (
              <Link href="/privacy">
                <a>{node}</a>
              </Link>
            ),
          },
          join1: {
            type: "button",
            id: "referlistbutton",
            onClick: () => logSignup(),
          },
          email1: {
            input: {
              id: "referlistemail",
              name: "emailAddress",
              placeholder: "Enter your email",
            },
          },
          join2: {
            type: "button",
            id: "referlistbutton2",
            onClick: () => logSignup(),
          },
          email2: {
            input: {
              id: "referlistemail2",
              name: "emailAddress2",
              placeholder: "Enter your email",
            },
          },
        }}
      />
    </>
  );
}
