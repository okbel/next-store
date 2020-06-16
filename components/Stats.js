function StatsItem({ upper = "", text = "" }) {
  return (
    <div className="bg-gray-100 overflow-hidden shadow  flex align-middle cursor-pointer">
      <div className="px-4 py-5 sm:p-6 flex justify-center align-middle">
        <dl className="flex flex-col justify-center">
          <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
            {upper}
          </dt>
          <dd className="mt-1 text-xl leading-9 font-semibold text-gray-900">
            {text}
          </dd>
        </dl>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="my-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <StatsItem upper="Save more!" text="Free Shipping + Returns" />
      <StatsItem upper="Get moving!" text="Download The App now!" />
      <StatsItem upper="MyStore Rewards" text="Get Special Offers and More!" />
    </div>
  );
}

export default Stats;
