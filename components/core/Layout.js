import Head from "next/head";
import Link from "next/link";
import s from "./Layout.module.css";

export default function Layout({ children, showGoBack, styled }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.xz.style/serve/inter.css"
        ></link>
      </Head>
      <div className={`container mx-auto px-12 pb-12 max-w-5xl`}>
        <header className={s.header}>
          <h1 className="text-2xl font-semibold">next-store</h1>
          <p className="py-4">
            A proof of concept using a <strong>NextJS</strong> seed ready to be
            deployed with <strong>Vercel</strong>.
          </p>
          {showGoBack && (
            <Link href="/">
              <a>Go back</a>
            </Link>
          )}
        </header>
        <main className={styled ? s.styled : ""}>{children}</main>
      </div>
    </>
  );
}
