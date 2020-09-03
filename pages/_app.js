import "@/assets/init.css";
import "@/assets/ssense.css";
import Head from "../components/core/Head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
