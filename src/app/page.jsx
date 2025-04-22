"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
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

          {/* {loggedIn ? (
            <div className="hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                <a
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
            </a>
              <button
                className="rounded-xl bg-slate-500 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : ( */}
            <div className="items-center hidden gap-x-2 lg:flex">
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
                className="hidden sm:flex w-4 h-4 text-black dark:text-black ms-1"
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
      {/* Hero */}
      <div className="relative font-[sans-serif] rounded-lg overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-lg text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
              href="/user/signUp"
            >
              Join Us for More
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-2 max-w-3xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-5xl md:text-6xl lg:text-7xl">
              Where every{" "}
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-800 text-transparent">
                kid is a Creator
              </span>
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-gray-500">
              Hang out with friends and make new ones over Drawing
            </p>
          </div>
          <div className="mt-5 flex items-center justify-center gap-x-6">
            <a
              className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-lg font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 font-[sans-serif]"
              href="/user/signUp"
            >
              Get Started
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

        <section className="hidden sm:block z-10 font-serif">
          <div className="flex flex-row md:flex-row items-center max-w-3xl px-6 mx-auto">
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <img src="https://cdn-jam-p00.diy.org/assets/brochure/Globe.svg" />
            </div>
            <div className="w-full ml-2 md:w-1/3 py-1">
              <img
                src="https://cdn-jam-p00.diy.org/assets/brochure/paper-plane.svg"
                className="g-image"
              />
            </div>
            <div className="w-full md:w-1/3 py-1">
              <img
                src="https://cdn-jam-p00.diy.org/assets/brochure/usp/kids-inspire.png"
                className="g-image"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Hero 2 */}
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <section className="relative overflow-hidden bg-gradient-to-b pb-4 pt-4 sm:pb-4 sm:pt-4 lg:pb-12 xl:pb-8 xl:pt-4">
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="max-w-8xl px-4 py-10 sm:px-6 lg:px-8 lg:py-8 mx-auto">
                <div className="min-h-[65vh] lg:min-h-[85vh] bg-[url('https://img.freepik.com/free-vector/diy-creative-workshop-concept_23-2148514209.jpg?semt=ais_hybrid')] bg-center bg-cover bg-no-repeat relative rounded-xl">
                  <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
                    {/* Card */}
                    <div className="px-5 py-4 inline-block rounded-lg md:p-7">
                      <div className="">
                        <a
                          className=" flex items-center text-start gap-2 text-xl font-bold hover:text-gray-900 focus:outline-none focus:text-gray-500 border border-green-500 rounded-lg lg:px-2 py-3 bg-blue-600 text-white font-[sans-serif]"
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
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          Watch our Video
                        </a>
                      </div>
                    </div>
                    {/* End Card */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* About Section */}
      <div className="container relative flex flex-col justify-center h-full max-w-4xl px-10 mx-auto xl:px-0 mt-2">
        <div className=" max-w-3xl text-center mx-auto font-[sans-serif] mb-8">
          <h1 className="font-extrabold text-gray-800 text-3xl md:text-4xl lg:text-6xl capitalize">
            <span className="bg-clip-text bg-violet-500 text-transparent font-[sans-serif]">
              What Makes DIY the Safest Place
            </span>
          </h1>
        </div>

        <div className="w-full mt-4 font-[sans-serif]">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-xl" />
                <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      We’ve got 3 Layers of security.
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    That’s 3 filters between you and any icky content out there
                    that combines a smart contract and a frontend user
                    interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      DIY has human moderators!
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    They’re online 24x7x365, watching out for you every step of
                    the way.Comment @MODS and they’ll appear like genies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      No bullies, no drama, no haters.
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    We’re here to make sure this is your safe space.They’re
                    online 24x7x365, watching out for you every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Your identity is a complete secret
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Your avatar and username are all we display on DIY.Parents
                    get regular email updates from DIY.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      DIY Resources for Young Creators
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600">
                    Just getting started? Here are some tools to help you get
                    better at the things you do. From animation to vlogging,
                    we’ve got your covered!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main id="content font-[sans-serif]">
        <div className="relative overflow-hidden">
          <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto font-[sans-serif]">
            {/* Gradients */}
            <div aria-hidden="true" className="flex -z-[1] absolute start-0">
              <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px]" />
            </div>
            {/* End Gradients */}
            {/* Grid */}
            <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
              <div className="hidden lg:block lg:col-span-2">
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Avatar"
                />
              </div>
              {/* End Col */}
              <div className="lg:col-span-4">
                {/* Blockquote */}
                <blockquote>
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal">
                    We absolutely love the DIY platform and its endless river of
                    creative adventures and projects! We always have the best
                    time together participating, learning and creating!
                  </p>
                  <footer className="mt-6">
                    <div className="flex items-center">
                      <div className="lg:hidden shrink-0">
                        <img
                          className="size-12 rounded-full"
                          src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                      </div>
                      <div className="ms-4 lg:ms-0">
                        <p className="font-medium text-xl text-gray-800">
                          Nicole Grazioso
                        </p>
                        <p className="text-md text-gray-600">Head of Finance</p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
                {/* End Blockquote */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
        </div>
      </main>

      {/*Footer container*/}
    </div>
  );
}
