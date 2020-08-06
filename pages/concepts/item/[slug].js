import Layout from "../../../components/core/Layout";

export default function IncrementalPage({ slug, updatedAt }) {
  return (
    <Layout showGoBack styled>
      <p>This page has been Incrementally built.</p>
      <div>Slug: {slug}</div>
      <div>Updated At: {new Date(updatedAt).toLocaleTimeString()}</div>
      <br />
      What is happening?
      <ul>
        <li>Next.js sends to your browser the old version of the page.</li>
        <li>Regenerates the page in the background.</li>
        <li>In the next reload, you will get the newly built page.</li>
      </ul>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // You can fetch external data here
  return {
    props: {
      slug: params.slug,
      updatedAt: Date.now(),
      // we will attempt to re-generate the page:
      // - when a request comes in
      // - at most once every second
      revalidate: 1,
    },
  };
}
