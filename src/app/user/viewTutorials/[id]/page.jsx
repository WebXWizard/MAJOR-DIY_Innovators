"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const View = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    const res = await fetch("http://localhost:5000/tutorials/getbyid/" + id);
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
            <div className="row my-5 m-16 ">
              <h1 className="flex justify-center m-4 p-2 text-2xl text-indigo-900 font-extrabold font-[sans-serif] sm:text-3xl md:text-4xl lg:text-5xl">
                {" "}
                {productList.name}
              </h1>
              <>
                {/* Hero */}
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Grid */}
                  <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                      <h1 className="block font-extrabold text-indigo-600 sm:text-3xl md:text-4xl lg:text-4xl font-[sans-serif] ">
                        Category - {productList.category}
                      </h1>
                      <p className="mt-5 sm:text-md md:text-lg lg:text-xl font-medium text-gray-800 font-[sans-serif]">
                        {productList.description}
                      </p>
                      <div className="mt-5 gap-x-6">
                        <a
                          className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-xl font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 font-[sans-serif] mb-8"
                          href="/signUp"
                        >
                          SignUp Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* End Col */}
                    <div className="lg:col-span-4 lg:mt-4">
                      <div
                        className="relative "
                        style={{ paddingTop: "56.25%" }}
                      >
                        <iframe
                          className="absolute inset-0 w-full h-full mb-8 "
                          src={productList.link}
                          frameBorder={0}
                        />
                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Grid */}
                </div>
                {/* End Hero */}
              </>
            </div>
          </div>
        ) : (
          <div>
            <h1>NO PRODUCT FOUND</h1>
          </div>
        )}
      </div>

      {/* <section className="bg-white mt-12 hidden sm:block">
        <div className="container mx-auto ">
          <div className=" max-w-2xl text-center mx-auto font-[sans-serif]  ">
            <h1 className="block font-extrabold text-gray-800 text-2xl md:text-4xl lg:text-5xl capitalize">
              <span className="bg-clip-text bg-violet-500 text-transparent font-[sans-serif]">
                Explore a huge Library of Courses
              </span>
            </h1>
          </div>
          <div className=" max-w-8xl grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/35218550/r/il/07be49/5292227301/il_794xN.5292227301_td8b.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Tutorials
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/17436998/r/il/79f75b/4140208066/il_794xN.4140208066_kzi9.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Tutorials
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
              style={{
                backgroundImage:
                  'url("https://www.sowandgrow.in/cdn/shop/files/Photoroom_20240715_201254_360x.jpg?v=1721056689")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black opacity-40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Tutorials
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
              style={{
                backgroundImage:
                  'url("https://www.sowandgrow.in/cdn/shop/products/IMG_6995_360x.jpg?v=1615798822")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Tutorials
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/18124409/r/il/91e238/4079626595/il_794xN.4079626595_7ire.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Tutorials
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/23649651/r/il/731a2b/2765981416/il_794xN.2765981416_lup2.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Tutorials
                  </button>
                </div>
              </div>
            </div>

            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/5454299/r/il/7877e0/6006709853/il_794xN.6006709853_2wvc.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Tutorials
                  </button>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-80 group"
              style={{
                backgroundImage:
                  'url("https://i.etsystatic.com/5454299/r/il/7877e0/6006709853/il_794xN.6006709853_2wvc.jpg")',
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-4 rounded-xl font-bold hover:bg-gray-300 hidden md:block font-[sans-serif]">
                    View Tutorials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className=" max-w-3xl text-center mx-auto font-[sans-serif] mt-12 ">
        <div className="w-full">
          <img
            src="https://cdn-jam-p00.diy.org/assets/brochure/course-library.png"
            className="g-image"
          />
        </div>
      </div>

      <>
        {/*Footer container*/}
        <footer className="flex flex-col items-center text-center text-surface text-xl font-bold font-[sans-serif] dark:text-black ">
          <div className="container px-6 pt-6">
            {/* Social media icons container */}
            <div className="mb-6 flex justify-center space-x-2">
              <a
                href="#!"
                type="button"
                className="rounded-full bg-[#3b5998] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-[#55acee] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-[#dd4b39] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 488 512"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-[#ac2bac] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-[#0082ca] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>
              <a
                href="#!"
                type="button"
                className="rounded-full bg-[#333333] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          {/*Copyright section*/}
          <div className="w-full bg-black/5 p-4 text-center">
            © 2023 Copyright:
            <a href="https://tw-elements.com/">DIY INNOVATORS</a>
          </div>
        </footer>
      </>
    </div>
  );
};

export default View;
