"use client";
import React from "react";
import useProductContext from "../../../context/ProductContext";
import Link from "next/link";

const Cart = () => {
  const {
    cartItems,
    // addItemToCart,
    removeItemFromCart,
    clearCart,
    // isInCart,
    getCartTotal,
    getCartItemsCount,
  } = useProductContext();

  const displayCartItems = () => {
    if (getCartItemsCount() === 0)
      return (
        <div className="">
          <section className="container mx-auto font-[sans-serif]">
            <div className="flex items-center text-center rounded-lg  ">
              <div className="flex flex-col w-full max-w-xl py-8 mx-auto">
                <h1 className="mt-3 text-3xl text-gray-800">
                  Your Cart is Currently Empty!
                </h1>
                <p className="mt-2 text-lg text-gray-500 dark:text-gray-600">
                  Before proceed to checkout you must add some products to your
                  shopping cart. You will fill a lot of interesting products on
                  our <br /> "Product page".
                </p>
                <div className=" items-center mt-4 sm:mx-auto gap-x-3">
                  <Link
                    href={"/user/browseKits"}
                    className="flex items-center justify-center px-5 py-2 text-lg tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span> Return to Shop</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    return cartItems.map((item) => (
      <div key={item._id} className="flex">
        <div className="grid sm:grid-cols-2 items-center gap-6 space-y-4 ">
          <div className=" w-full h-full p-4 shrink-0 text-center">
            <img
              src={item.url}
              className="w-84 h-full object-contain inline-block rounded-xl"
            />
          </div>
          <div className="">
            <h3 className=" text-md lg:text-2xl font-bold text-gray-800">
              {item.name}
            </h3>
            <p className="text-sm lg:text-lg text-gray-500 mt-2">
              {item.description}
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-3">
                <h4 className="text-sm text-gray-500">Qty:</h4>
                <button
                  type="button"
                  className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2 fill-white"
                    viewBox="0 0 124 124"
                  >
                    <path
                      d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <space className="font-bold text-sm leading-[16px]">1</space>
                <button
                  type="button"
                  className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2 fill-white"
                    viewBox="0 0 42 42"
                  >
                    <path
                      d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-600">
                  ₹{item.price}
                </h4>
              </div>
            </div>
            <div className="divide-x border-y grid grid-cols-2 text-center mt-6">
              <Link
                href={"/user/viewKits/" + item._id}
                type="button"
                className="bg-transparent hover:bg-gray-100 flex items-center justify-center font-semibold py-3 text-gray-500 text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 fill-current mr-3 inline-block"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  />
                </svg>
                View details
              </Link>
              <button
                onClick={(e) => removeItemFromCart(item)}
                type="button"
                className="bg-transparent hover:bg-gray-100 flex items-center justify-center font-semibold py-3 text-gray-500 text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-current mr-3 inline-block"
                  viewBox="0 0 390 390"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  />
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  />
                </svg>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="container my-3 font-[sans-serif]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className=" max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              Your Shopping Bag
            </h1>
          </div>
        </div>

        <div className="font-[sans-serif] bg-white h-full lg:ml-8 md:ml-8 sm:ml-2">
          <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-8">
            <div className="grid lg:grid-cols-3 gap-8 relative">
              <div className="lg:col-span-2 space-y-6">
                <div className="p-2 bg-white shadow-[0_3px_20px_-10px_rgba(6,81,237,0.4)] rounded-md relative">
                  {displayCartItems()}
                </div>
              </div>
              <div className="bg-white h-max rounded-md p-4 shadow-[0_3px_20px_-10px_rgba(6,81,237,0.4)] sticky top-0">
                <h3 className="text-lg font-bold text-gray-800">
                  Order Summary
                </h3>
                <ul className="text-gray-500 text-sm space-y-3 mt-3">
                  <li className="flex flex-wrap gap-4">
                    Total{" "}
                    <span className="ml-auto font-bold">
                      {" "}
                      ₹{getCartTotal()}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4">
                    Tax <span className="ml-auto font-bold">Free</span>
                  </li>
                  <li className="flex flex-wrap gap-4">
                    Items{" "}
                    <span className="ml-auto font-bold">
                      {" "}
                      {getCartItemsCount()}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 font-bold">
                    <button
                      onClick={() => clearCart()}
                      className="px-6 py-2 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                    >
                      Clear Cart
                    </button>
                  </li>
                </ul>

                <button
                  type="button"
                  className="mt-4 px-6 py-2 w-full text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Make Payment
                </button>
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-3">
                      Secure payment
                    </h4>
                    <p className="text-sm text-gray-500">
                      Experience peace of mind with our secure payment options,
                      ensuring your transactions are protected and reliable.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-3">
                      Free delivery
                    </h4>
                    <p className="text-sm text-gray-500">
                      Enjoy the convenience of free delivery on all your orders,
                      providing a cost-effective and seamless shopping
                      experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 mb-3">
                      Easy to return
                    </h4>
                    <p className="text-sm text-gray-500">
                      Simplify your shopping experience with hassle-free
                      returns. Our easy return process ensures convenience and
                      customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
