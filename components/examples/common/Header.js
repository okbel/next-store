import s from "./Header.module.css";

export default function Header() {
  return (
    <div className="container mx-auto relative bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a href="#" className="flex">
              <svg
                width="45"
                viewBox="0 0 116 100"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.5 0L115 100H0L57.5 0z"
                />
              </svg>
              <span>MyStore</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className={s.menuLink}>
              New Arrivals
            </a>
            <a href="#" className={s.menuLink}>
              Electronics
            </a>
            <a href="#" className={s.menuLink}>
              Home & Furniture
            </a>
            <a href="#" className={s.menuLink}>
              Jewelry
            </a>
            <a href="#" className={s.menuLink}>
              Watches
            </a>
            <a href="#" className={s.menuLink}>
              Sale
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-no-wrap text-base leading-6 font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Sign in
            </a>
            <span className="inline-flex  shadow-sm">
              <a
                href="#"
                className="whitespace-no-wrap rounded-sm inline-flex items-center justify-center px-4 py-2 border border-transparent text-white leading-6 font-medium bg-gray-900 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={s.hero}>
        <h1>25% OFF! in Iconic Handbags </h1>
        <a className={s.cta}>Shop LV, Hermès and more &rarr; </a>
        <img
          className={s.heroImage}
          src="https://images.unsplash.com/photo-1524672353063-4f66ee1f385e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80"
        />
      </div>
      <div className="relative bg-white overflow-hidden flex mt-6 h-64 ">
        <div className="relative flex-1 shadow-sm mr-6  relative z-10 w-full h-full overflow-hidden flex justify-center items-center">
          <a className={s.cta}>Shop Beauty &rarr;</a>
          <img
            className="absolute transform -translate-y-40 w-full object-cover z-0"
            src="https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          />
        </div>
        <div className="relative flex-1 shadow-sm  relative z-10 w-full h-full overflow-hidden flex justify-center items-center">
          <a className={s.cta}>Shop Home &rarr;</a>
          <img
            className="absolute transform  w-full object-cover z-0 w-full"
            src="https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          />
        </div>
      </div>
    </div>
  );
}
