const Main = () => (
  <main className="container mx-auto relative py-6 px-10">
    <div className="bg-gray-400">
      <Image publicId="top-banner.jpg" className="w-full" />
    </div>
    <div className="grid grid-cols-3 gap-10 mt-6">
      <div className="relative col-span-2 bg-gray-400 overflow-hidden">
        <Image publicId="product-bags_n9filt.jpg" className="w-full" />
        <div className="absolute bg-white p-6 text-center bottom-0 w-full">
          <span className="text-2xl">Iconic Handbags</span>
          <a className="font-bold block">SHOP LV, HÈRMES, and MORE</a>
        </div>
      </div>
      <div className=" flex flex-col">
        <div className="relative flex-1 mb-10">
          <Image publicId="product-shoes_wiujqw.jpg" />
          <div className="absolute bg-gray-200 p-3 text-center bottom-0 w-full">
            <span className="text-2xl">Shoes with Sole</span>
            <a className="font-bold block underline uppercase text-sm">
              Shop now
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          <Image publicId="product-women_mcaj3r.jpg" />
          <div className="absolute bg-transparent text-center bottom-0 mb-10 w-full">
            <a className="font-bold block underline uppercase text-sm text-white">
              Shop now
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="px-3 py-6 border-t border-gray-300 mt-12">
      <h2 className="text-center text-2xl">Top Designers</h2>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-6 p-3">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full">
            <Image publicId="designer-gucci.jpg" />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            GUCCI
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full">
            <Image publicId="designer-burberry_xx9byy.jpg" />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            Burberry
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full">
            <Image publicId="designer-prada_jaxbna.jpg" />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            Prada
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full">
            <Image publicId="designer-louboutin_gqnhf2.jpg" />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            Louboutin
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full">
            <Image publicId="designer-louis-vuitton_mmzvod.jpg" />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            Louis Vuitton
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center bg-gray-400 inline-block h-40 w-40 rounded-full">
            <Image publicId="designer-gucci.jpg" />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            HERMÈS
          </span>
        </div>
      </div>
    </div>
    <div className="px-3 py-6 border-t border-gray-300 mt-12">
      <h2 className="text-center text-2xl">Top Categories</h2>
      <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-3 p-3">
        <div className=" bg-gray-400">
          <Image publicId="category-women_kvxh2t.jpg" />
        </div>
        <div className=" bg-gray-400">
          <Image publicId="category-jewelry_txef2k.jpg" />
        </div>
        <div className=" bg-gray-400">
          <Image publicId="category-men_d74ghz.jpg" />
        </div>
      </div>
    </div>
    <div className="px-3 py-6 border-t border-gray-300 mt-12">
      <Image publicId="category-sale_p78qvm.jpg" />
    </div>
    <div className="px-3 py-6 border-t border-gray-300 mt-12 text-gray-600">
      *Promotional code will expire seven days from issue date. Code is valid on
      any item. Code may be split between multiple orders. Code does not apply
      to gift cards or shipping. Returned items originally purchased with the
      use of a code will result in the activation of the code, which will be
      valid for the following three days.
    </div>
  </main>
);

export default Main;
