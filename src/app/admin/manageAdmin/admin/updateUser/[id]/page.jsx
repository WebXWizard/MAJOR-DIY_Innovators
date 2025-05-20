"use client";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),

  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const res = await axios.get(`http:///localhost:5000/user/getbyid/${id}`);
    setUserData(res.data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const router = useRouter();
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .put("http://localhost:5000/user/update/" + id, values)
        .then((response) => {
          // console.log(response.status)
          // resetForm()
          toast.success("User Updated Successfully");
          router.push("/manage_User");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to update User");
        });
    },
    validationSchema: SignUpSchema,
  });

  return (
    <div>
      <>
        <section className="py-4 z-10 font-serif  ">
          <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl px-4 py-8 mx-auto border border-gray-100 rounded-2xl shadow-2xl">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              {userData !== null ? (
                <Formik initialValues={userData} onSubmit={signUpForm}>
                  {(updateForm) => {
                    return (
                      <form
                        onSubmit={signUpForm.handleSubmit}
                        className="font-[sans-serif]"
                      >
                        <div className="mx-auto max-w-md p-4">
                          <h1 className="text-2xl xl:text-4xl text-indigo-600 font-extrabold capitalize">
                            Create Your Account
                          </h1>

                          <label></label>
                          {signUpForm.errors.name && signUpForm.touched.name ? (
                            <div className="text-red-500 text-sm">
                              {signUpForm.errors.name}
                            </div>
                          ) : null}
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="Enter Your Name"
                            id="name"
                            onChange={signUpForm.handleChange}
                            value={signUpForm.values.name}
                          />
                          <label></label>
                          {signUpForm.errors.email &&
                          signUpForm.touched.email ? (
                            <div className="text-red-500 text-sm">
                              {signUpForm.errors.email}
                            </div>
                          ) : null}
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="email"
                            placeholder="john123example@gmail.com"
                            id="email"
                            onChange={signUpForm.handleChange}
                            value={signUpForm.values.email}
                          />

                          <label></label>
                          {signUpForm.errors.password &&
                          signUpForm.touched.password ? (
                            <div className="text-red-500 text-sm">
                              {signUpForm.errors.password}
                            </div>
                          ) : null}
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            onChange={signUpForm.handleChange}
                            value={signUpForm.values.password}
                          />
                          <label></label>
                          {signUpForm.errors.phone &&
                          signUpForm.touched.phone ? (
                            <div className="text-red-500 text-sm">
                              {signUpForm.errors.phone}
                            </div>
                          ) : null}
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-5 "
                            type="number"
                            placeholder="Enter Phone Number"
                            id="phone"
                            onChange={signUpForm.handleChange}
                            value={signUpForm.values.phone}
                          />
                          <div className="flex items-center col-span-full mt-4 mb-4">
                            <input
                              id="checkbox1"
                              type="checkbox"
                              className="w-4 h-4 mr-3"
                            />
                            <label
                              htmlFor="checkbox1"
                              className="text-sm text-gray-400"
                            >
                              I agree to the{" "}
                              <a
                                href="javascript:void(0);"
                                className="underline"
                              >
                                Terms and Conditions
                              </a>{" "}
                              and{" "}
                              <a
                                href="javascript:void(0);"
                                className="underline"
                              >
                                Privacy Policy
                              </a>
                            </label>
                          </div>
                          <button className="mt-2 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
                            <span className="ml-3">Sign Up</span>
                          </button>
                        </div>

                        <div className="flex flex-col items-center mt-2">
                          <button className="w-full max-w-md font-bold shadow-sm text-lg rounded-lg py-3 bg-indigo-400 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
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
                            <a className="ml-4" href="/#">
                              Sign Up with Google
                            </a>
                          </button>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              ) : (
                <p>Loading......</p>
              )}
            </div>
            <div className="w-full md:w-1/2 py-8 font-[sans-serif]">
              <img
                src="https://img.freepik.com/free-vector/diy-creative-workshop_52683-37862.jpg?semt=ais_hybrid"
                className="g-image"
              />
              <a
                href="/login"
                className="w-full max-w-sm font-bold shadow-sm rounded-lg py-3 bg-indigo-600 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-2 lg:ml-24"
              >
                <span className="ml-4 text-lg">Already Have an Account ??</span>
              </a>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default UpdateUser;
