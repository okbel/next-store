import Head from "next/head";
import "../assets/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Store</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
