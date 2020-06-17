import Head from "next/head";
import "../assets/tailwind.css";
import { CloudinaryContext } from "cloudinary-react";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MyStore</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="Description" content="Put your description here."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="theme-color" content="#000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <CloudinaryContext cloudName="vercel">
        <Component {...pageProps} />
      </CloudinaryContext>
    </>
  );
}
