import { MdFavorite, MdShoppingCart } from "react-icons/md";

function Item({ img = "", title = "", desc = "", price = "0" }) {
  return (
    <div className="flex flex-col  shadow-lg overflow-hidden relative">
      <div className="flex-shrink-0">
        <span className="absolute inline-block bg-black mt-3 mr-6 px-3 py-1 text-sm font-semibold text-white right-0">
          EDITORS PICK
        </span>
        <img className="h-48 w-full object-cover" src={img} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600 uppercase tracking-wide text-sm text-indigo-600 font-bold">
            <a href="#" className="hover:underline">
              Jewelry
            </a>
          </p>
          <a href="#" className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">{desc}</p>
          </a>
        </div>
        <div className="mt-4 text-xl leading-none font-extrabold text-gray-900">
          <span>${price}</span>
        </div>
        <div className="flex justify-center mt-6">
          <div className=" flex-1">
            <a
              href="#"
              className="flex items-center mr-4 justify-center p-3 border border-black text-base leading-3 font-medium  text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              <MdFavorite className="mr-2" />
              Obsess
            </a>
          </div>
          <div className=" flex-1">
            <a
              href="#"
              className="flex items-center justify-center p-3 border border-transparent text-base leading-3 font-medium  text-white bg-black hover:bg-gray-800 hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              <MdShoppingCart className="mr-2" />
              <span className="hidden xl:inline">Add to Cart</span>
              <span className="inline xl:hidden">Add</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
