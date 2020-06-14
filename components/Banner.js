export default function Banner() {
  return (
    <div className="relative bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">We announced a new product!</span>
            <span className="hidden md:inline">
              Earn up to $500 in Site Credit!* Limited Time
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="text-white font-bold underline">
                See Details &rarr;
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
