export default function Footer() {
  return (
    <div className="bg-black mt-12">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Solutions
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Marketing
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Analytics
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Commerce
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Guides
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Company
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Jobs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Claim
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-base leading-6 text-gray-300 hover:text-white"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Subscribe to our newsletter
            </h4>
            <p className="mt-4 text-gray-300 text-base leading-6">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <input
                aria-label="Email address"
                type="email"
                required
                className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6  text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                placeholder="Enter your email"
              />
              <div className="mt-3  shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button className="w-full flex items-center justify-center px-5 py-3 border border-gray-100 text-base leading-6 font-medium  text-white bg-transpartent hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
