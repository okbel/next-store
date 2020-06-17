export async function getStaticProps() {
  return {
    props: {
      data: "statically computed at build-time.",
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
