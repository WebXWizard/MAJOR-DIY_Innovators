"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { useParams, Link } from "react-router-dom";
// import classes from './template.module.css'

const Templates = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:5000/tutorials/getall");

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
        <Link href={"/user/viewTutorials/" + obj._id} className="">
          <div className="">
            <div className="mx-2 rounded-xl bg-gray-100" />
            <div className="group cursor mx-2 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4 ">
              <div className="flex h-60 flex-col justify-between overflow-hidden ">
                <img
                  src={obj.url}
                  className="group-hover:scale-110 h-full w-full object-cover duration-200"
                />
              </div>
              <div className="flex-1 overflow-hidden bg-white px-6 py-8">
                <h5 className="group-hover:text-indigo-600 mb-4 text-2xl font-bold font-[sans-serif]">
                  {obj.name}
                </h5>
                <p className="mb-8 text-gray-600">{}</p>
                <div className="flex justify-between">
                  <button
                    href="#"
                    className="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
                  >
                    <span>▷ </span>
                    <span className="underline text-xl">Watch Now</span>
                  </button>
                  <div className="max-w-full flex-none lg:px-4"></div>
                </div>
              </div>
            </div>
            <div className="mx-2 rounded-xl bg-gray-100" />
          </div>
        </Link>
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
    <div className="font-[sans-serif] ">
      {/* <div className=" max-w-2xl text-center mx-auto font-[sans-serif]">
        <h1 className="block font-extrabold text-gray-800 text-3xl md:text-4xl lg:text-6xl capitalize  mb-4">
          <span className="bg-clip-text bg-violet-500 text-transparent font-[sans-serif] capitalize">
            What's so fly About DIY
          </span>
        </h1>
      </div> */}
      <header className="bg-body-tertiary py-5">
        {/* <div className="container py-5">
          <p className="text-center mb-5 text-3xl">All Products</p>

          <input
            type="text"
            placeholder="Search Items"
            className="form-control w-75 mx-auto rounded-lg border border-black text-xl px-4 py-1 ml-8"
          />
        </div> */}
        <>
          {/* Hero */}
          <div className="relative overflow-hidden font-[sans-serif]">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className="text-center">
                <h1 className="text-4xl sm:text-6xl font-semibold text-gray-800">
                  What's So Fly About DIY
                </h1>
                <p className="mt-3 text-gray-600 text-xl">
                  Stay in the know with DIY Tutorials for Young Creators and
                  Adults.
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
                          placeholder="Search Tutorials"
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
                    onClick={(e) => filterBYCategory("MineCraft")}
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    MineCraft
                  </button>
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Drawing")}
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    Animations
                  </button>
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Animations")}
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    Drawing
                  </button>
                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Fashion")}
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                    Fashion
                  </button>

                  <button
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={(e) => filterBYCategory("Cook")}
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                      <path d="M10 6h4" />
                      <path d="M10 10h4" />
                      <path d="M10 14h4" />
                      <path d="M10 18h4" />
                    </svg>
                    Cook
                  </button>
                  {/* <a
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                    MacBook
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          {/* End Hero */}
        </>
      </header>

      {/* <p className="text-2xl text-semibold  ml-10 px-8 py-2"></p> */}
      <div className="container p-4">
        <div className="mx-auto justify-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 lg:ml-8">
          {displayProduct()}
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

      
    </div>
  );
};

export default Templates;
