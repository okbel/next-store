import Layout from "../../components/core/Layout";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      data: "statically computed at build-time. ",
    },
  };
}

export default function Example({ data }) {
  return (
    <Layout showGoBack styled>
      <h1> Static Generation</h1>
      <br />
      <blockquote>
        This content is: <strong>{data}</strong>
      </blockquote>
      <div>
        <hr />
        <h2>Pre-rendering</h2>
        <p>
          By default, <strong>Next.js pre-renders every page</strong>. This
          means that Next.js generates HTML for each page in advance, instead of
          having it all done by client-side JavaScript.
        </p>
        <p>Pre-rendering can result in better performance and SEO.</p>
        <p>
          Each generated HTML is associated with minimal JavaScript code
          necessary for that page. When a page is loaded by the browser, its
          JavaScript code runs and makes the page fully interactive. This
          process is called <strong>hydration</strong>.
        </p>
        <p>
          Next.js has two forms of pre-rendering:{" "}
          <strong>Static Generation</strong> and
          <strong> Server-side Rendering.</strong> The difference is in{" "}
          <strong>when</strong> it generates the HTML for a page.
        </p>
        <p>
          Read more about this topic:{" "}
          <ul>
            <li>
              <a
                href="https://nextjs.org/docs/basic-features/pages"
                target="_blank"
              >
                Pages - Next.js Docs
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/docs/basic-features/pages#static-genaeration-recommended"
                target="_blank"
              >
                Static Generation - Next.js Docs
              </a>
            </li>
          </ul>
        </p>
        <br />
        <h2>Why static?</h2>
        <p>
          We recommend using Static Generation over Server-side Rendering for
          performance reasons. Statically generated pages can be cached by CDN
          with no extra configuration to boost performance. However, in some
          cases, Server-side Rendering might be the only option.
        </p>
        <p>
          You can also use <strong>Client-side Rendering</strong> along with
          <strong> Static Generation</strong>.
        </p>
        <br />
      </div>
      <footer className="flex flex-row-reverse my-5 py-4 min-w-full border-t-2">
        <Link href="/concepts/ssr" as="/concepts/ssr">
          <a className="inline-block">Next up &rarr; Server-side Rendering</a>
        </Link>
      </footer>
    </Layout>
  );
}
