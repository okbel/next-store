import NextHead from "next/head";

const Head = () => (
  <NextHead>
    <title>next-store</title>
    <meta
      name="Description"
      content="A proof of concept using a NextJS seed ready to be deployed with Vercel."
    ></meta>
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
    ></meta>
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="robots" content="noindex" />
    <meta name="theme-color" content="#317EFB" />
    <link rel="apple-touch-icon" href="/favicon.png" />
  </NextHead>
);

export default Head;
