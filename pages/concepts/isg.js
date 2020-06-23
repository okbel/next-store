import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/core/Layout";
import { generateRandom } from "../../helpers/uuid";
export default function Isg() {
  const [rand, setRand] = useState(generateRandom());

  const changeRand = async () => {
    const newRand = generateRandom();
    setRand(newRand);
  };

  return (
    <Layout showGoBack>
      <h1>Incremental Static Generation - Fallback Mode</h1>
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
      Benefits:
      <ul>
        <li>Works in the background, users always get a static response</li>
        <li>
          Pages get statically re-generated, including all changes from the CMS
        </li>
        <li>It's fully automatic, no need to trigger a full rebuild</li>
      </ul>
      <Link href="/concepts/item/[slug]" as={`/concepts/item/${rand}`}>
        <button>Go to {rand}</button>
      </Link>
      <a className="block mt-4 cursor-pointer" onClick={changeRand}>
        Click here to change the random id.
      </a>
    </Layout>
  );
}
