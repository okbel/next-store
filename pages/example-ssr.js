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
    <div className="p-6">
      <div>This content is: {data}</div>
    </div>
  );
}
