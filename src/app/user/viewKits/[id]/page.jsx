"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ViewKits = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    const res = await fetch("http://localhost:5000/product/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    setProductList(data);
    console.log(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="">
      <div className="">
        {productList !== null ? (
          <div className=" ">
            <div className="hidden md:block max-w-5xl text-center mx-auto font-[sans-serif]">
              <h1 className="block font-extrabold text-gray-800 text-2xl md:text-3xl lg:text-5xl capitalize">
                <span className="bg-clip-text bg-violet-500 text-transparent font-[sans-serif capitalize]">
                  DIY Kits For Kids and Adults
                </span>
              </h1>
            </div>
            <section className="py-8 bg-white md:py-12 antialiased">
              <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                  <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                    <img
                      className="w-full rounded-xl hidden dark:block cursor-pointer"
                      src={productList.url}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 sm:mt-8 lg:mt-0 font-[sans-serif]">
                    <h1 className="lg:text-3xl font-bold sm:text-2xl dark:text-black">
                      {productList.name}
                    </h1>
                    <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                      <p className="text-2xl lg:text-3xl font-bold text-gray-700 sm:text-2xl ">
                        ₹ {productList.price}
                      </p>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-5 h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-5 h-5 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                        </div>
                        <p className="text-lg font-medium leading-none text-gray-500 dark:text-gray-400">
                          (5.0)
                        </p>
                        <a
                          href="#"
                          className="text-sm font-bold leading-none text-gray-900 underline hover:no-underline "
                        >
                          345 Reviews
                        </a>
                      </div>
                    </div>
                    <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 font-[sans-serif]">
                      {/* <a
                        href="#"
                        title=""
                        className="flex items-center justify-center py-2.5 px-5 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-600 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        role="button"
                      >
                        <svg
                          className="w-5 h-5 -ms-2 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                          />
                        </svg>
                        Add to Wishlist
                      </a> */}
                      {/* <a
                        href="#"
                        title=""
                        className=" mt-4 sm:mt-0 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center text-white"
                        role="button"
                      >
                        <svg
                          className="w-5 h-5 -ms-2 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                          />
                        </svg>
                        Add to cart
                      </a> */}
                    </div>
                    <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                    <h3 className="text-xl font-semibold mb-2">
                      About This Item:
                    </h3>
                    <p className="mb-6 text-lg text-gray-500 dark:text-gray-600">
                      {productList.description}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Key Features:
                      </h3>
                      <ul className="text-lg  font-[sans-serif ] list-disc list-inside text-gray-600">
                        <li>Dimensions: 27cm (H) x 26.5cm (W) x 19.5cm (D)</li>
                        <li>
                          Features: Glowing stained glass window, wizard-themed
                          decorations
                        </li>
                        <li>Assembly Time: 12+ hours</li>
                        <li>
                          Skill Level: Suitable for beginners and seasoned
                          crafters alike
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div>
            <h1>NO PRODUCT FOUND</h1>
          </div>
        )}
      </div>

      <section className="bg-white ">
        <div className="hidden md:block max-w-5xl text-center mx-auto font-[sans-serif] mt-12 ">
          <h1 className="block font-extrabold text-gray-800 text-2xl md:text-3xl lg:text-5xl capitalize">
            <span className="bg-clip-text bg-violet-500 text-transparent font-[sans-serif capitalize]">
              Related products with free delivery on eligible orders
            </span>
          </h1>
        </div>
        <div className="hidden md:block container mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/35218550/r/il/07be49/5292227301/il_794xN.5292227301_td8b.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/16393649/r/il/955420/2278183181/il_794xN.2278183181_eksu.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/17436998/r/il/79f75b/4140208066/il_794xN.4140208066_kzi9.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage:
                  'url("https://www.sowandgrow.in/cdn/shop/files/Photoroom_20240715_201254_360x.jpg?v=1721056689")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black opacity-40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage:
                  'url("https://www.sowandgrow.in/cdn/shop/products/IMG_6995_360x.jpg?v=1615798822")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/18124409/r/il/91e238/4079626595/il_794xN.4079626595_7ire.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/23649651/r/il/731a2b/2765981416/il_794xN.2765981416_lup2.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-72 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/5454299/r/il/7877e0/6006709853/il_794xN.6006709853_2wvc.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="component-tab-1"
        className="preview-section"
        role="tabpanel"
        aria-labelledby="component-tab-1-item"
        style={{}}
      >
        <div className="code-toolbar relative border border-gray-300 rounded-xl">
          <img
            src="https://pagedone.io/block_preview_image/Footer-6.png"
            alt="image"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewKits;
