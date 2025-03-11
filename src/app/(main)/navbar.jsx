"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* Navbar with Logo */}
      <nav className=" w-full max-w-screen-3xl px-8 mx-auto lg:py-1 mt-2 mb-2 font-[sans-serif] bg-indigo-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <a
            href="/"
            className=" block cursor-pointer text-base text-slate-800 font-semibold"
          >
            <img
              className="w-auto h-12"
              src="https://cdn-icons-png.flaticon.com/512/5553/5553926.png"
              alt=""
            />
          </a>

          <div className="hidden md:block">
            <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 md:flex-row sm:flex-row">
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  // strokewidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  {/* House Roof */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9l9-6 9 6"
                  />
                  {/* House Body */}
                  <rect
                    x={4}
                    y={9}
                    width={16}
                    height={11}
                    rx={2}
                    stroke="currentColor"
                    // strokeWidth="1.5"
                  />
                  {/* Door */}
                  <rect
                    x={10}
                    y={14}
                    width={4}
                    height={6}
                    rx={1}
                    stroke="currentColor"
                    // strokeWidth="1.5"
                  />
                </svg>

                <a href="/user/" className="flex items-center">
                  Home
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  // strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={8} r={4} />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  <circle cx={18} cy={18} r={3} />
                  <path d="M18 16v2" />
                  <path d="M18 21h.01" />
                </svg>

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg> */}

                <a href="/user/about" className="flex items-center">
                  About Us
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  // strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5" />
                  <path d="M4 19.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                  <path d="M8 7h8" />
                  <path d="M8 11h8" />
                  <path d="M12 15l3 2-3 2v-4z" />
                </svg>

                <a href="/user/browseKits" className="flex items-center">
                  DIY Kits
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  // strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                  />
                </svg>
                <a href="/user/browseTutorials" className="flex items-center">
                  DIY Library
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  // strokewidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  {/* Phone Icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.75C3 4.336 3.336 4 3.75 4h16.5c.414 0 .75.336.75.75v14.5c0 .414-.336.75-.75.75H3.75A.75.75 0 0 1 3 19.25V4.75z"
                  />
                  {/* Speaker Icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 5.25h9m-9 3h9"
                  />
                </svg>
                <a href="/user/contactUs" className="flex items-center">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="items-center hidden gap-x-2 lg:flex">
            {/* <a
              href="/user/cart"
              id="myCartDropdownButton1"
              data-dropdown-toggle="myCartDropdown1"
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <span className="sr-only">Cart</span>
              <svg
                className="w-5 h-5 lg:me-1"
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
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <span className="hidden text-slate-600 sm:flex text-lg">
                My Cart
              </span>
              <svg
                className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
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
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </a> */}
            <a
              href="/user/signUp"
              className="rounded-xl bg-slate-500 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
              type="button"
            >
              Get Started
            </a>
          </div>

          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
