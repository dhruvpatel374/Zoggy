import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const ShimmerRestCard = () => {
  return (
    <div className="flex flex-row">
      <div className="container-max ">
        <div className="mx-4 hidden lg:block w-full animate-pulse rounded-lg  ">
          <section className=" mt-8 mb-12">
            <div className="my-4 flex justify-between align-middle mx-auto">
              <h1 className=" font-bold text-3xl pl-5 w-3/6 h-8 rounded-md bg-gray-200 "></h1>
              <div className="    ">
                <div className="  rounded-full flex align-middle gap-2 ">
                  <h1 className="w-6 h-6 bg-gray-200 rounded-full"></h1>
                  <h1 className="w-6 h-6 bg-gray-200 rounded-full"></h1>
                </div>
              </div>
            </div>
            <div className="ml-3 flex flex-nowrap gap-6 overflow-hidden">
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
              <h1 className="w-20 h-20 bg-gray-200 rounded-full"></h1>
            </div>
          </section>
        </div>
        <div className="flex gap-4 max-w-[560px] w-[95%] mx-auto m-5 h-12 lg:w-[500px]   ">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for Restaurants and cuisine"
            className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow"
          ></input>
          <button
            type="submit"
            className="bg-orange-400 basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base"
          >
            <MagnifyingGlassIcon className="w-4 h-4" />{" "}
            <span className="hidden md:block">Search</span>
          </button>
        </div>
        <h1 className="my-4 font-bold text-3xl pl-5">Restaurant List</h1>
        <div className="pl-5">
          <button
            className="border-2 border-gray-500 rounded-3xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 
              
            "
          >
            Delivery Time Low to High
          </button>
          <button className="border-2 border-gray-500 rounded-3xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 ">
            Rating High to Low
          </button>
          <button className=" border-2 border-gray-500 rounded-3xl p-2 mr-4 mb-4 sm:mb-0 text-gray-700 ">
            Reset
          </button>
        </div>
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 md:gap-6 lg:gap-8 m-5">
          <div className="animate-pulse space-y-2 fle">
            {/* <div className="w-full bg-gray-200 rounded-md aspect-video object-cover block card-img relative"></div> */}
            <div className="w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 w-1/2 rounded-md bg-gray-200"></h2>
            <h2 className="text-lg font-semibold mt-2 h-4 w-1/3 rounded-md bg-gray-200"></h2>

            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
          </div>
          {/*
           */}
          <div className="animate-pulse space-y-2 fle">
            {/* <div className="w-full bg-gray-200 rounded-md aspect-video object-cover block card-img relative"></div> */}
            <div className="w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 w-1/2 rounded-md bg-gray-200"></h2>
            <h2 className="text-lg font-semibold mt-2 h-4 w-1/3 rounded-md bg-gray-200"></h2>

            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
          </div>
          <div className="animate-pulse space-y-2 fle">
            {/* <div className="w-full bg-gray-200 rounded-md aspect-video object-cover block card-img relative"></div> */}
            <div className="w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 w-1/2 rounded-md bg-gray-200"></h2>
            <h2 className="text-lg font-semibold mt-2 h-4 w-1/3 rounded-md bg-gray-200"></h2>

            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
          </div>
          <div className="animate-pulse space-y-2 fle">
            {/* <div className="w-full bg-gray-200 rounded-md aspect-video object-cover block card-img relative"></div> */}
            <div className="w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 w-1/2 rounded-md bg-gray-200"></h2>
            <h2 className="text-lg font-semibold mt-2 h-4 w-1/3 rounded-md bg-gray-200"></h2>

            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
          </div>
          <div className="animate-pulse space-y-2 fle">
            {/* <div className="w-full bg-gray-200 rounded-md aspect-video object-cover block card-img relative"></div> */}
            <div className="w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 w-1/2 rounded-md bg-gray-200"></h2>
            <h2 className="text-lg font-semibold mt-2 h-4 w-1/3 rounded-md bg-gray-200"></h2>

            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
          </div>
          <div className="animate-pulse space-y-2 fle">
            {/* <div className="w-full bg-gray-200 rounded-md aspect-video object-cover block card-img relative"></div> */}
            <div className="w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 w-1/2 rounded-md bg-gray-200"></h2>
            <h2 className="text-lg font-semibold mt-2 h-4 w-1/3 rounded-md bg-gray-200"></h2>

            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
          </div>
          <div className="animate-pulse space-y-2 fle">
            {/* <div className="w-full bg-gray-200 rounded-md aspect-video object-cover block card-img relative"></div> */}
            <div className="w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 w-1/2 rounded-md bg-gray-200"></h2>
            <h2 className="text-lg font-semibold mt-2 h-4 w-1/3 rounded-md bg-gray-200"></h2>

            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
          </div>
          <div className="animate-pulse space-y-2 fle">
            {/* <div className="w-full bg-gray-200 rounded-md aspect-video object-cover block card-img relative"></div> */}
            <div className="w-full bg-gray-200 rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

            <h2 className="text-lg font-semibold mt-2 h-4 w-1/2 rounded-md bg-gray-200"></h2>
            <h2 className="text-lg font-semibold mt-2 h-4 w-1/3 rounded-md bg-gray-200"></h2>

            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
            <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestCard;
