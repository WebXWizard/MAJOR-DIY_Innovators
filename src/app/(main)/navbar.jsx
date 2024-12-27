import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-2 md:px-4 mt-1 ml-1 mr-1 rounded-lg ">
        <header className="flex text-xl items-center justify-between py-2 font-[sans-serif] ">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold  lg:text-2xl"
            aria-label="logo"
          >
            <img
              className="w-32 h-24 "
              src="https://logowik.com/content/uploads/images/diyorg9408.jpg"
              alt=""
            />
          </Link>

          <nav className="hidden gap-12 lg:flex ">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-md font-semibold text-gray-600 hover:border-b-2  border-blue-400"
            >
              Home
            </Link>
            {/* <Link
              href="/admin/adminDashboard"
              className="inline-flex items-center gap-1 text-md font-semibold text-gray-600 hover:border-b-2  border-blue-400"
            >
              Admin
            </Link> */}
            <Link
              href="/user/browseTutorials"
              className="inline-flex items-center gap-1 text-md font-semibold text-gray-600 hover:border-b-2  border-blue-400"
            >
              DIY Library
            </Link>
            {/* <Link
              href="/user/contactUs"
              className="text-md font-semibold text-gray-600 hover:border-b-2  border-blue-400"
            >
              Contact
            </Link> */}
            <Link
              href="/user/students"
              className="text-md font-semibold text-gray-600 hover:border-b-2  border-blue-400"
            >
              For Students
            </Link>
            <Link
              href="/user/browseKits"
              className="text-md font-semibold text-gray-600 hover:border-b-2  border-blue-400"
            >
              DIY Kits
            </Link>
          </nav>
          <button
            id="myCartDropdownButton1"
            data-dropdown-toggle="myCartDropdown1"
            type="button"
            className="flex gap-1 text-gray-600"
          >
            <svg
              className="w-8 h-10 lg:me-1"
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
            <span
              href="/user/signUp"
              className="flex py-2 text-md font-semibold text-gray-600 hover:border-b-2 border-blue-400"
            >
              My Cart
            </span>
          </button>

          <div className=" hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start ">
            <a
              href="/user/login"
              className="inline-block rounded-lg px-4 py-3 text-center text-xl font-semibold text-gray-600 outline-none ring-indigo-300 "
            >
              Sign in
            </a>
            <a
              href="/user/signUp"
              className="inline-block rounded-xl bg-gray-600 px-6 py-3 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-800 focus-visible:ring active:bg-indigo-700 "
            >
              Sign up
            </a>
          </div>

          <button className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
