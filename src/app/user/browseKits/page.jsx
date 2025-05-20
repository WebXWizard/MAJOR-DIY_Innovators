"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import useProductContext from "@/context/ProductContext";

const Kits = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const { addItemToCart, isInCart } = useProductContext();

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:5000/product/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setProduct(data);
      setFilterProduct(data);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const displayProduct = () => {
    return product.map((obj) => (
      <div key={obj._id} className=" ">
        <div href={"/user/viewKits/" + obj._id} className="">
          <div className="font-[sans-serif]">
            <div className="container ">
              <div className="">
                <div className="bg-white rounded-2xl shadow-xl p-4">
                  <div className="relative overflow-hidden">
                    <img
                      className="object-cover w-full h-full rounded-2xl"
                      src={obj.url}
                      alt="Product"
                    />
                    <div className="absolute inset-0 bg-black opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href={"/user/viewKits/" + obj._id}
                        className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block"
                      >
                        View Product
                      </a>
                    </div>
                  </div>
                  <h3 className="sm:text-md md:text-lg lg:text-xl font-bold text-gray-900 mt-4">
                    {obj.name}
                  </h3>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold sm:text-md md:text-lg lg:text-xl ">
                      ₹ {obj.price}
                    </span>
                    <a
                      href=""
                      disabled={isInCart(obj)}
                      onClick={(e) => addItemToCart(obj)}
                      className="bg-gray-900 text-white py-2 px-4 rounded-xl font-bold hover:bg-gray-800"
                    >
                      {isInCart(obj) ? "Already Added" : "Add to Cart"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // For Searching(Filter)
  const applysearch = (e) => {
    const value = e.target.value;
    setProduct(
      product.filter((product) => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  // For Filtering of Products By Category
  const filterBYCategory = (product) => {
    console.log(product);
    const filteredProduct = filterProduct.filter((col) =>
      col.category.toLowerCase().includes(product.toLowerCase())
    );
    setProduct(filteredProduct);
  };

  return (
    <div className="font-[sans-serif]">
      <header className="bg-body-tertiary py-5">
        <>
          <div className="relative overflow-hidden font-[sans-serif]">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="text-center">
                <h1 className="text-4xl sm:text-6xl font-semibold text-gray-800">
                  DIY Kits For Everyone
                </h1>
                <p className="mt-3 text-gray-600 text-xl">
                  Stay in the know with DIY Kits for Young Creators and Adults.
                </p>
                <div className="mt-4 sm:mt-8 mx-auto max-w-xl relative">
                  {/* Form */}
                  <form>
                    <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100">
                      <div className="w-full">
                        <label
                          htmlFor="hs-search-article-1"
                          className="block text-lg text-gray-900 "
                        >
                          {/* <span className=" text-md">Search article</span> */}
                        </label>
                        <input
                          type="email"
                          name="hs-search-article-1"
                          id="hs-search-article-1"
                          className="py-2.5 px-6 block w-full border-transparent rounded-xl focus:border-blue-500 focus:ring-blue-500 text-xl"
                          placeholder="Search DIY Kits"
                          onChange={applysearch}
                        />
                      </div>
                      <div>
                        <a
                          className="size-[46px] inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx={11} cy={11} r={8} />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </form>
                  {/* End Form */}
                  {/* SVG Element */}
                  <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                    <svg
                      className="w-16 h-auto text-orange-500"
                      width={121}
                      height={135}
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                  {/* SVG Element */}
                  <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                    <svg
                      className="w-40 h-auto text-cyan-500"
                      width={347}
                      height={188}
                      viewBox="0 0 347 188"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                        stroke="currentColor"
                        strokeWidth={7}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                </div>
                <div className="mt-8 sm:mt-10">
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Magic House Kit")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#101010"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M20.4 14.5L16 10 4 20" />
                    </svg>
                    Magic House Kit
                  </button>
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Hampers")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#101010"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Hampers
                  </button>
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Toys DIY")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#101010"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Toys DIY
                  </button>
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Greetings")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#101010"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Greetings
                  </button>
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Cards")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#101010"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                    </svg>
                    Cards
                  </button>
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Craft")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#101010"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Craft
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </header>
      ;
      <div className="container font-[sans-serif] ">
        <div className="lg:ml-16 md:ml-12 grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {" "}
          {displayProduct()}{" "}
        </div>
      </div>
      <div className="hidden md:block max-w-3xl text-center mx-auto font-[sans-serif] mt-12 ">
        <h1 className="block font-extrabold text-gray-800 text-xl md:text-2xl lg:text-4xl capitalize">
          <span className="bg-clip-text bg-violet-500 text-transparent font-[sans-serif]">
            Explore a huge Library of Courses
          </span>
        </h1>
        <div className="w-full py-8">
          <img
            src="https://cdn-jam-p00.diy.org/assets/brochure/course-library.png"
            className="g-image"
          />
        </div>
      </div>
      <div
        id="component-tab-1"
        className="preview-section"
        role="tabpanel"
        aria-labelledby="component-tab-1-item"
        style={{}}
      >
       
      </div>
    </div>
  );
};

export default Kits;
