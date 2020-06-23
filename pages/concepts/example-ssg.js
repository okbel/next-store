import Layout from "../../components/core/Layout";

export async function getStaticProps() {
  return {
    props: {
      data: "statically computed at build-time.",
    },
  };
}

export default function Example({ data }) {
  return (
    <Layout showGoBack>
      <div>This content is: {data}</div>
    </Layout>
  );
}
