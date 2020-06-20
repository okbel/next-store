import Head from "next/head";
import s from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.xz.style/serve/inter.css"
        ></link>
      </Head>
      <div className={`container mx-auto p-12 ${s.root} max-w-5xl`}>
        {children}
      </div>
    </>
  );
}
