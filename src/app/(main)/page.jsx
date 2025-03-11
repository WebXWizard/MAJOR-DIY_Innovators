import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    
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
