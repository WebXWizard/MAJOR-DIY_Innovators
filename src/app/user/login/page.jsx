"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAppContext from '@/context/appContext'


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const {setLoggedIn, setCurrentUser} = useAppContext();
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/user/authenticate", values)
        .then((response) => {
          console.log(response.status);
          localStorage.setItem('user', JSON.stringify(response.data))
          setLoggedIn(true)
          resetForm();
          toast.success("Login Successfully");
          router.push("/user");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Invalid Credentials");
        });
    },
    validationSchema: LoginSchema,
  });
  return (
    <div>
      <>
        
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
          <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div className="mt-8 flex flex-col items-center font-[sans-serif]">
                <h1 className="text-2xl xl:text-4xl font-extrabold">Sign In</h1>
                <div className="w-full flex-1 mt-4">
                  <div className="flex flex-col items-center">
                    <button className="w-full max-w-xs font-bold shadow-sm text-lg rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                      <div className="bg-white p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                          <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                          />
                          <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                          />
                          <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                          />
                          <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                          />
                        </svg>
                      </div>
                      <span className="ml-4">Sign In with Google</span>
                    </button>
                    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-sky-400 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                      {/* <div className="bg-white p-1 rounded-full"></div> */}
                      <a className="ml-4 text-lg" href="/signUp">
                        Don't Have an Account
                      </a>
                    </button>
                  </div>
                  <div className="my-8 border-b text-center font-[sans-serif]"></div>
                  <form onSubmit={loginForm.handleSubmit}>
                    <div className="mx-auto max-w-xs">
                      <label></label>
                      {loginForm.errors.email && loginForm.touched.email ? (
                        <div className="text-red-500 text-sm">
                          {loginForm.errors.email}
                        </div>
                      ) : null}
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.email}
                      />

                      <label></label>
                      {loginForm.errors.password &&
                      loginForm.touched.password ? (
                        <div className="text-red-500 text-sm">
                          {loginForm.errors.password}
                        </div>
                      ) : null}
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                      />
                      <p className="mt-2 text-md text-gray-600 text-end">
                        {/* I agree all your<span> </span> */}
                        <a
                          href="/user/forget-password"
                          className=" text-indigo-500 border-dotted font-semibold"
                        >
                          Forget Password
                        </a>
                      </p>
                      <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy={7} r={4} />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">Sign In</span>
                      </button>
                      <p className="mt-6 text-md text-gray-600 text-center">
                        I agree all your<span> </span>
                        <a
                          href="#"
                          className="border-b border-gray-500 border-dotted"
                        >
                          Terms & Conditions
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div
                className="m-12 xl:m-12 w-full bg-cover rounded-xl "
                style={{
                  backgroundImage:
                    'url("https://img.freepik.com/free-vector/diy-creative-workshop_52683-37919.jpg")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
