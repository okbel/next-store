import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/core/Layout";
import { v4 as uuidv4 } from "uuid";

export default function Isg() {
  const [rand, setRand] = useState(uuidv4());

  const changeRand = async () => {
    const newRand = uuidv4();
    setRand(newRand);
  };

  return (
    <Layout showGoBack styled>
      <h1>Incremental Static Regeneration</h1>
      <p>
        Big and complex systems with many web pages encounter the issue of
        having to re-build an entire app for each deploy. Systems like this
        usually deal with this issue by using{" "}
        <strong>server side rendering</strong> and a caching layer (e.g Varnish)
      </p>
      <p>
        Rendering and building a page by request is <i>not a solution</i>.
        Neither is building the entire app everything at once. That's why we
        came up with <strong>Incremental Static Generation</strong>.
      </p>
      This is useful for:
      <ul>
        <li>Big applications, with loads of pages</li>
        <li>Architectures that tend to rely on SSR</li>
        <li>Dynamic Content, content changes fast</li>
      </ul>
      <br />
      <h2>Benefits:</h2>
      <ul>
        <li>Works in the background, users always get a static response</li>
        <li>
          Pages get statically regenerated, including all changes from the CMS
        </li>
        <li>It's fully automatic, no need to trigger a full rebuild</li>
      </ul>
      <div className="flex row align-center m-6">
        <Link href="/concepts/item/[slug]" as={`/concepts/item/${rand}`}>
          <button className="block">Go to {rand}</button>
        </Link>
        <a className="block mt-4 ml-4 cursor-pointer" onClick={changeRand}>
          Click here to change the random id.
        </a>
      </div>
      <h3>Read more about this topic: </h3>
      <ul>
        <li>
          <a href="https://reactions-demo.now.sh/" target="_blank">
            Reactions Page Demo
          </a>
        </li>
        <li>
          <a
            href="https://nextjs.org/docs/advanced-features/preview-mode"
            target="_blank"
          >
            Preview Mode - Next.js Docs
          </a>
        </li>
      </ul>
      <br />
      <h3>Up Next</h3>
      <p>Features that we are planning</p>
      <ul>
        <li>
          Re-generating and invalidating multiple pages at once (like your blog
          index and a certain blog post)
        </li>
        <li>
          Re-generating by listening to events (like CMS webhooks), ahead of
          user traffic
        </li>
      </ul>
    </Layout>
  );
}
