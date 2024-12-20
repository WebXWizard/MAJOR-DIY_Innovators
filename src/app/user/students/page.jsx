import React from "react";

const Students = () => {
  return (
    <div>
     

      <div className=" flex flex-wrap justify-center mt-4 font-[sans-serif] p-2 gap-5 sm:p-8">
        <section className="hidden md:block z-10 font-serif">
          <div className=" max-w-4xl text-center mx-auto font-[sans-serif] mt-12 mb-2">
            <h1 className="block font-extrabold text-gray-800 text-3xl md:text-4xl lg:text-6xl capitalize">
              <span className="bg-clip-text bg-violet-500 text-transparent font-[sans-serif]">
                Loved by Kids, Parents, and Teachers
              </span>
            </h1>
          </div>
        </section>
        {/* card 1 */}
        <div className="hidden md:block max-w-sm shadow-2xl rounded-xl">
          <div className="flex rounded-lg h-full p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-white dark:text-black text-xl font-medium">
                Elaine W- School Teacher
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-lg text-white dark:text-gray-600">
                I love logging onto DIY every day - not just for projects but to
                also look at the comments my kids share about each other's work.
                It's a brilliant way to foster healthy support systems!
              </p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="hidden md:block max-w-sm shadow-2xl rounded-xl">
          <div className="flex rounded-lg h-full  p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-white dark:text-black text-xl font-medium">
                Pearl L : DIYer from India
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-lg text-white dark:text-gray-600">
                DIY is such a great app with really sweet people and moderators
                who always make sure this app is super safe. You can learn to
                create things or learn drawing techniques - honestly there is so
                much to do
              </p>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="hidden md:block max-w-sm shadow-2xl rounded-xl">
          <div className="flex rounded-lg h-full p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-white dark:text-black text-xl font-medium">
                Jenny L : Mom to 3 DIYers
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-lg text-white dark:text-gray-600">
                We absolutely love the DIY platform and its endless river of
                creative adventures and projects! We always have the best time
                together participating, learning and creating!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className=" max-w-3xl text-center mx-auto font-[sans-serif] mt-12 ">
          <h1 className="block font-extrabold text-gray-800 text-3xl md:text-4xl lg:text-5xl capitalize">
            <span className="bg-clip-text bg-violet-500 text-transparent font-[sans-serif]">
              DIY Resources for Young Creators
            </span>
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 ">
          <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 shadow-2xl">
            {/* First blog post */}
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <a href="/kids">
                <img
                  src="https://cdn.cdnparenting.com/articles/2020/10/16131505/DIY-Halloween-Costume-for-Kids.webp"
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
              </a>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                  <div className="flex gap-x-2.5">
                    <img
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    John
                  </div>
                </div>
              </div>
            </article>
            {/* Second blog post */}
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <a href="/kids">
                <img
                  src="https://thumb.ac-illust.com/a3/a392c8f074ce24855e2df881490ebd7f_t.jpeg"
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
              </a>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"></div>
            </article>
            {/* Third blog post */}
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <a href="/kids">
                <img
                  src="https://png.pngtree.com/png-vector/20221017/ourmid/pngtree-handmade-presents-isolated-cartoon-vector-illustration-png-image_6311784.png"
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
              </a>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"></div>
            </article>
            {/* More blog posts can be added similarly */}
          </div>
        </div>
      </div>

     

      <>
        {/* component */}
        <link
          rel="stylesheet"
          href="https://cdn.tailgrids.com/tailgrids-fallback.css"
        />
        {/* ====== Cards Section Start */}
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                  font-semibold
                  text-dark text-xl
                  sm:text-[22px]
                  md:text-xl
                  lg:text-[22px]
                  xl:text-xl
                  2xl:text-[22px]
                  mb-4
                  block
                  hover:text-primary
                  "
                      >
                        50+ Best creative website themes &amp; templates
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
               inline-block
               py-2
               px-7
               border border-[#E5E7EB]
               rounded-full
               text-base text-body-color
               font-medium
               hover:border-primary hover:bg-primary hover:text-white
               transition
               "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                  font-semibold
                  text-dark text-xl
                  sm:text-[22px]
                  md:text-xl
                  lg:text-[22px]
                  xl:text-xl
                  2xl:text-[22px]
                  mb-4
                  block
                  hover:text-primary
                  "
                      >
                        The ultimate UX and UI guide to card design
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
               inline-block
               py-2
               px-7
               border border-[#E5E7EB]
               rounded-full
               text-base text-body-color
               font-medium
               hover:border-primary hover:bg-primary hover:text-white
               transition
               "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                  font-semibold
                  text-dark text-xl
                  sm:text-[22px]
                  md:text-xl
                  lg:text-[22px]
                  xl:text-xl
                  2xl:text-[22px]
                  mb-4
                  block
                  hover:text-primary
                  "
                      >
                        Creative Card Component designs graphic elements
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
               inline-block
               py-2
               px-7
               border border-[#E5E7EB]
               rounded-full
               text-base text-body-color
               font-medium
               hover:border-primary hover:bg-primary hover:text-white
               transition
               "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Cards Section End */}
      </>

      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
            <div className="relative w-full h-auto md:col-span-2">
              <div className="bg-gray-800 rounded-2xl flex  justify-between flex-row flex-wrap">
                <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                  <div className="block">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                    Accomplish tasks swiftly with online tools.
                  </h3>
                  <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                    Get quoted and covered in under 10 minutes online. no
                    paperwork or waiting any more{" "}
                  </p>
                  <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                    View More
                    <svg
                      width={6}
                      height={10}
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative hidden h-auto md:w-1/2 md:block">
                  <img
                    src="https://cdn-jam-p00.diy.org/assets/brochure/fly_1.png"
                    alt="Header tailwind Section"
                    className="h-full ml-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full h-auto">
              <div className="bg-indigo-500 rounded-2xl p-5  xl:p-8 h-full">
                <div className="block">
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                  Improved technology yields greater value
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  We’ve eliminated old analogue process with state-of-the art
                  tech{" "}
                </p>
                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative w-full h-auto">
              <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                  Build wealth with insurance planning
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  Every life plan policy has a built-in wealth bonus, and we
                  contribute too{" "}
                </p>
                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  <svg
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
        {/* https://gist.github.com/goodreds/3579ddfffe439457b5ef9902b5336124 */}
        <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
              Continually Scale Results
            </h2>
            <a
              href="#"
              className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
            >
              Go to insights -&gt;
            </a>
          </div>
          <div className="flex flex-wrap -mx-4 font-[sans-serif]">
            <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
              <img
                src="https://i.etsystatic.com/27519419/r/il/085abf/6397150438/il_794xN.6397150438_bpi2.jpg"
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="triangle" />
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                  <div>
                    <a
                      href="#"
                      className="block mb-4 text-2xl font-bold hover:underline hover:text-blue-600"
                    >
                      What Zombies Can Teach You About Food
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nulla delectus corporis commodi aperiam, amet cupiditate?
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More -&gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
              <img
                src="https://i.etsystatic.com/35218550/r/il/07be49/5292227301/il_794xN.5292227301_td8b.jpg"
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="triangle" />
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                  <div>
                    <a
                      href="#"
                      className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                    >
                      Client-based Adoption
                    </a>
                    <a
                      href="#"
                      className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                    >
                      Old School Art
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nulla delectus.
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More -&gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
              <img
                src="https://i.etsystatic.com/11341860/r/il/42afd4/4308022825/il_794xN.4308022825_jm6q.jpg"
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div className="triangle" />
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                  <div>
                    <a
                      href="#"
                      className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                    >
                      Intellectual Capital
                    </a>
                    <a
                      href="#"
                      className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                    >
                      5 Things To Do About Rain
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione, neque. Eius, ea possimus.
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More -&gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Students;
