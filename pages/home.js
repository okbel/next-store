const menuLinks = [
  "NEW ARRIVALS",
  "DESIGNERS",
  "WOMEN",
  "MEN",
  "JEWELRY",
  "WATCHES",
  "HOME",
  "KIDS",
  "SALE",
];

export default function Home() {
  return (
    <div className="">
      <div className="bg-black p-3 text-center text-white">
        <span>
          20% Off! Code: REAL — <a className="underline">Terms Apply*</a>
        </span>
      </div>
      <header className="container mx-auto relative px-3">
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 p-3">
          <div className="">
            <span>Hi Belén, check your email for a $25 offer code.</span>
            <a className="flex underline">
              Updates for Our Customers and Community
            </a>
          </div>
          <div className="text-center flex justify-center items-center text-2xl">
            TheRealReal
          </div>
          <div className="text-right">MY TRR</div>
        </div>
        <nav className="container mx-auto relative p-3">
          <ul className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12 overflow-hidden">
            {menuLinks.map((l) => (
              <li className="inline-block text-sm whitespace-pre cursor-pointer">
                {l}
              </li>
            ))}
            <li className="uppercase text-pink-900 text-sm whitespace-pre">
              Sell With Us
            </li>
            <li>
              <input className="bg-gray-700 border-0 p-2 text-sm p-3" />
            </li>
          </ul>
        </nav>
      </header>
      <div className="bg-gray-200 text-center p-3 mt-4">
        <span className="text-black uppercase text-sm">
          AUTHENTICATED LUXURY CONSIGNMENT
        </span>
      </div>
      <main className="container mx-auto relative py-6 px-3">
        <div className="bg-gray-400 h-64"></div>
        <div class="grid grid-cols-3 gap-4 mt-6">
          <div className="relative col-span-2 bg-gray-400 h-64">
            1
            <div className="absolute bg-white p-6 text-center bottom-0 w-full">
              <span className="text-2xl">Iconic Handbags</span>
              <a className="font-bold block">SHOP LV, HÈRMES, and MORE</a>
            </div>
          </div>
          <div className="bg-gray-400 flex flex-col">
            <div className="bg-gray-500 flex-1 mb-2">1</div>
            <div className="bg-gray-400 flex-1">1</div>
          </div>
        </div>
        <div className="px-3 py-6 border-t border-gray-300 mt-12">
          <h2 className="text-center text-2xl">Top Designers</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-6 p-3">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full"></div>
              <span className="block mt-2 underline font-bold uppercase text-sm">
                GUCCI
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full"></div>
              <span className="block mt-2 underline font-bold uppercase text-sm">
                GUCCI
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full"></div>
              <span className="block mt-2 underline font-bold uppercase text-sm">
                GUCCI
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full"></div>
              <span className="block mt-2 underline font-bold uppercase text-sm">
                GUCCI
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full"></div>
              <span className="block mt-2 underline font-bold uppercase text-sm">
                GUCCI
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full"></div>
              <span className="block mt-2 underline font-bold uppercase text-sm">
                GUCCI
              </span>
            </div>
          </div>
        </div>
        <div className="px-3 py-6 border-t border-gray-300 mt-12">
          <h2 className="text-center text-2xl">Top Categories</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 p-3">
            <div className="h-64 bg-gray-400"></div>
            <div className="h-64 bg-gray-400"></div>
            <div className="h-64 bg-gray-400"></div>
          </div>
        </div>
        <div className="px-3 py-6 border-t border-gray-300 mt-12">
          <h2 className="text-center text-2xl bg-red-800 p-6 text-white">
            SALE
          </h2>
        </div>
        <div className="px-3 py-6 border-t border-gray-300 mt-12 text-gray-600">
          *Promotional code will expire seven days from issue date. Code is
          valid on any item. Code may be split between multiple orders. Code
          does not apply to gift cards or shipping. Returned items originally
          purchased with the use of a code will result in the activation of the
          code, which will be valid for the following three days.
        </div>
      </main>
      <footer className="p-6 bg-gray-900 p-8 h-64"></footer>
    </div>
  );
}
