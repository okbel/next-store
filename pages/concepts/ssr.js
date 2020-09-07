import Link from "next/link";
import Layout from "../../components/core/Layout";

export async function getServerSideProps() {
  await setTimeout(() => {
    // blocker function
  }, 1000);

  return {
    props: {
      data: "server side rendered.",
    },
  };
}

export default function Example({ data }) {
  return (
    <Layout showGoBack styled>
      <h1>Server Side Rendering</h1>
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
                href="https://nextjs.org/docs/basic-features/pages#server-side-rendering"
                target="_blank"
              >
                Server-side Rendering - Next.js Docs
              </a>
            </li>
          </ul>
        </p>
        <br />
        <h2>What happens when I use Server-side Rendering</h2>
        <p>
          Next.js pre-renders a page on each request. It will be slower because
          the page cannot be cached by a CDN, but the pre-rendered page will
          always be up-to-date.
        </p>
        <p>
          The HTML is generated on each request. Therefore, by adding latency to
          the request{" "}
          <strong>
            Server-side Rendering results in slower performance than Static
            Generation.
          </strong>
        </p>
        <br />
      </div>
      <footer className="flex flex-row-reverse my-5 py-4 min-w-full border-t-2">
        <Link href="/concepts/isr" as="/concepts/isr">
          <a className="inline-block">
            Next up &rarr; Incremental Static Regeneration
          </a>
        </Link>
      </footer>
    </Layout>
  );
}
