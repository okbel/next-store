import Head from "../components/Head";
import "../assets/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
