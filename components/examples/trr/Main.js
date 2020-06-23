import Image from "../../../components/core/Image";

const Main = () => (
  <main className="container mx-auto relative py-6 px-10">
    <div className="">
      <Image
        alt="image"
        publicId="top-banner.jpg"
        className="w-full"
        width="1200"
        height="150"
      />
    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-10 mt-6">
      <div className="relative col-span-2  overflow-hidden">
        <Image
          alt="image"
          publicId="product-bags_n9filt.jpg"
          className="w-full"
          width="786"
          height="507"
        />
        <div className="absolute bg-white p-6 text-center bottom-0 w-full">
          <span className="text-2xl">Iconic Handbags</span>
          <a className="font-bold block">SHOP LV, HÈRMES, and MORE</a>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <div className="relative flex-1 mb-10 text-center">
          <Image
            alt="image"
            publicId="product-shoes_wiujqw.jpg"
            width="373"
            height="274"
          />
          <div className="absolute bg-gray-200 p-3 text-center bottom-0 w-full">
            <span className="text-2xl">Shoes with Sole</span>
            <a className="font-bold block underline uppercase text-sm">
              Shop now
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            alt="image"
            publicId="product-women_mcaj3r.jpg"
            width="373"
            height="274"
          />
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
      <div className="mt-5 grid gap-5 xl:grid-cols-6 sm:grid-cols-3 grid-cols-1 p-3">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center  inline-block h-40 w-40 rounded-full">
            <Image
              alt="image"
              publicId="designer-gucci.jpg"
              width="142"
              height="142"
            />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            GUCCI
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center  inline-block h-40 w-40 rounded-full">
            <Image
              alt="image"
              publicId="designer-burberry_xx9byy.jpg"
              width="142"
              height="142"
            />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            Burberry
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center  inline-block h-40 w-40 rounded-full">
            <Image
              alt="image"
              publicId="designer-prada_jaxbna.jpg"
              width="142"
              height="142"
            />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            Prada
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center  inline-block h-40 w-40 rounded-full">
            <Image
              alt="image"
              publicId="designer-louboutin_gqnhf2.jpg"
              width="142"
              height="142"
            />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            Louboutin
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center  inline-block h-40 w-40 rounded-full">
            <Image
              alt="image"
              publicId="designer-louis-vuitton_mmzvod.jpg"
              width="142"
              height="142"
            />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            Louis Vuitton
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center  inline-block h-40 w-40 rounded-full">
            <Image
              alt="image"
              publicId="designer-gucci.jpg"
              width="142"
              height="142"
            />
          </div>
          <span className="block mt-2 underline font-bold uppercase text-sm">
            HERMÈS
          </span>
        </div>
      </div>
    </div>
    <div className="px-3 py-6 border-t border-gray-300 mt-12">
      <h2 className="text-center text-2xl">Top Categories</h2>
      <div className="mt-5 grid lg:grid-cols-3 gap-8 sm:grid-cols-1 p-3">
        <div className=" ">
          <Image
            alt="image"
            publicId="category-women_kvxh2t.jpg"
            width="363"
            height="450"
          />
        </div>
        <div className=" ">
          <Image
            alt="image"
            publicId="category-jewelry_txef2k.jpg"
            width="363"
            height="450"
          />
        </div>
        <div className=" ">
          <Image
            alt="image"
            publicId="category-men_d74ghz.jpg"
            width="363"
            height="450"
          />
        </div>
      </div>
    </div>
    <div className="px-3 py-6 border-t border-gray-300 mt-12">
      <Image
        alt="image"
        publicId="category-sale_p78qvm.jpg"
        width="1200"
        height="90"
      />
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
