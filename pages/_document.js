import Document_, { Head, Main, NextScript } from "next/document";

export default class Document extends Document_ {
  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/**
           * Here add your GA and more scripts.
           */}
        </body>
      </html>
    );
  }
}
