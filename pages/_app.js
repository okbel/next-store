import Head from "next/head";
import "../assets/tailwind.css";
import { CloudinaryContext } from "cloudinary-react";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MyStore</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <CloudinaryContext cloudName="vercel">
        <Component {...pageProps} />
      </CloudinaryContext>
    </>
  );
}
