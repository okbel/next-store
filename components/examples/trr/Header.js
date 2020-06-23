const Header = ({ menuLinks }) => (
  <>
    <header className="container mx-auto relative px-10">
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 py-3">
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
      <nav className="container mx-auto relative py-3">
        <ul className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12 overflow-hidden">
          {menuLinks.map((l) => (
            <li
              key={l}
              className="inline-block text-sm whitespace-pre cursor-pointer"
            >
              {l}
            </li>
          ))}
          <li className="uppercase text-pink-900 text-sm whitespace-pre">
            Sell With Us
          </li>
          <li>
            <input className="bg-gray-200 border-0 p-2 text-sm p-3" />
          </li>
        </ul>
      </nav>
    </header>
    <div className="bg-gray-200 text-center p-3 mt-4">
      <span className="text-black uppercase text-sm">
        AUTHENTICATED LUXURY CONSIGNMENT
      </span>
    </div>
  </>
);

export default Header;
