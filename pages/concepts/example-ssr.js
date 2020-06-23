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
    <Layout showGoBack>
      <div>This content is: {data}</div>
    </Layout>
  );
}
