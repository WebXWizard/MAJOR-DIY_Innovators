"use client";
import React from "react";
import Link from "next/link";
import useAppContext from "@/context/appContext";

const UserNavbar = () => {
  const { loggedIn, logout } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Navbar with Logo */}
      <nav className="w-full max-w-screen-3xl px-4 sm:px-8 mx-auto lg:py-1 mt-2 mb-2 font-[sans-serif] bg-indigo-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <a
            href="/"
            className="block cursor-pointer text-base text-slate-800 font-semibold"
          >
            <img
              className="w-auto h-12"
              src="https://cdn-icons-png.flaticon.com/512/5553/5553926.png"
              alt=""
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 md:flex-row sm:flex-row">
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9l9-6 9 6"
                  />
                  <rect
                    x={4}
                    y={9}
                    width={16}
                    height={11}
                    rx={2}
                    stroke="currentColor"
                  />
                  <rect
                    x={10}
                    y={14}
                    width={4}
                    height={6}
                    rx={1}
                    stroke="currentColor"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={8} r={4} />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  <circle cx={18} cy={18} r={3} />
                  <path d="M18 16v2" />
                  <path d="M18 21h.01" />
                </svg>
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
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.75C3 4.336 3.336 4 3.75 4h16.5c.414 0 .75.336.75.75v14.5c0 .414-.336.75-.75.75H3.75A.75.75 0 0 1 3 19.25V4.75z"
                  />
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

          {/* Desktop Auth Buttons */}
          {loggedIn ? (
            <div className="hidden md:flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/user/cart"
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-blue-300 text-sm font-medium leading-none text-gray-900 dark:text-black"
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
                  className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-black ms-1"
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
              </a>
              <button
                className="rounded-xl bg-slate-500 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-indigo-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="items-center hidden md:flex gap-x-2">
              <a
                href="/user/cart"
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-blue-300 text-sm font-medium leading-none text-gray-900 dark:text-black"
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
                  className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-black ms-1"
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
              </a>
              <a
                href="/user/signUp"
                className="rounded-xl bg-indigo-500 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
                type="button"
              >
                Sign Up
              </a>
              <a
                href="/user/login"
                className="rounded-xl bg-slate-500 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
                type="button"
              >
                Sign In
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="relative ml-auto h-10 w-10 select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
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

          {/* Mobile Menu */}
          <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden w-full mt-4`}>
            <ul className="flex flex-col gap-4 pb-4">
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9l9-6 9 6"
                  />
                  <rect
                    x={4}
                    y={9}
                    width={16}
                    height={11}
                    rx={2}
                    stroke="currentColor"
                  />
                  <rect
                    x={10}
                    y={14}
                    width={4}
                    height={6}
                    rx={1}
                    stroke="currentColor"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={8} r={4} />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  <circle cx={18} cy={18} r={3} />
                  <path d="M18 16v2" />
                  <path d="M18 21h.01" />
                </svg>
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
                  stroke="currentColor"
                  className="h-6 w-6 text-slate-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.75C3 4.336 3.336 4 3.75 4h16.5c.414 0 .75.336.75.75v14.5c0 .414-.336.75-.75.75H3.75A.75.75 0 0 1 3 19.25V4.75z"
                  />
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
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-800">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
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
                <a href="/user/cart" className="flex items-center">
                  My Cart
                </a>
              </li>

              {/* Mobile Auth Buttons */}
              {loggedIn ? (
                <li className="mt-4">
                  <button
                    className="w-full rounded-xl bg-slate-500 py-2 px-4 text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-indigo-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="mt-4">
                    <a
                      href="/user/signUp"
                      className="block w-full rounded-xl bg-indigo-500 py-2 px-4 text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="/user/login"
                      className="block w-full rounded-xl bg-slate-500 py-2 px-4 text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
                    >
                      Sign In
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
