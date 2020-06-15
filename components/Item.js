function Item({ img = "", title = "", desc = "", price = "0" }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden relative">
      <div className="flex-shrink-0">
        <span class="absolute inline-block bg-black mt-3 mr-6 px-3 py-1 text-sm font-semibold text-white right-0">
          EDITORS PICK
        </span>
        <img className="h-48 w-full object-cover" src={img} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            <a href="#" className="hover:underline">
              JEWLERY
            </a>
          </p>
          <a href="#" className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">{desc}</p>
          </a>
        </div>
        <div class="mt-4 text-xl leading-none font-extrabold text-gray-900">
          <span>${price}</span>
        </div>
        <div className="flex justify-center">
          <div class="rounded-md shadow mt-6 flex-1">
            <a
              href="#"
              class="flex items-center mr-4 justify-center px-5 py-3 border border-black text-base leading-6 font-medium rounded-md text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Obsess
            </a>
          </div>
          <div class="rounded-md shadow mt-6 flex-1">
            <a
              href="#"
              class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-white hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
