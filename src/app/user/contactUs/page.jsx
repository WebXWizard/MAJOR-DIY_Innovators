"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});

const ContactUs = () => {
  const router = useRouter();
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      // subject: " ",
      details: " ",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/contactUs/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("Response sent Successfully");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to send Response");
        });
    },
    validationSchema: ContactSchema,
  });
  return (
    <div className="">
      <section className="py-4 z-10 font-serif  ">
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-5xl px-4 py-8 mx-auto border border-gray-100 rounded-2xl shadow-2xl">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end font-[sans-serif]">
            <form
              className="mt-6 grid gap-5 px-12 "
              onSubmit={contactForm.handleSubmit}
            >
              <h2 className="text-4xl lg:text-5xl sm:text-4xl text-center text-gray-500 font-extrabold mb-2 capitalize">
                Get in touch
              </h2>
              <div>
                <label htmlFor="" className=""></label>
                {contactForm.errors.name && contactForm.touched.name ? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.name}
                  </div>
                ) : null}
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-lg outline-[#007bff]"
                  id="name"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.name}
                />
              </div>
              <div>
                <label htmlFor="" className=""></label>
                {contactForm.errors.email && contactForm.touched.email ? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.email}
                  </div>
                ) : null}
                <input
                  type="email"
                  placeholder="example123@gmail.com"
                  className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-lg outline-[#007bff]"
                  id="email"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.email}
                />
              </div>
              <div>
                <label htmlFor="" className=""></label>
                {contactForm.errors.phone && contactForm.touched.phone ? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.phone}
                  </div>
                ) : null}
                <input
                  type="number"
                  placeholder="Enter Phone No."
                  className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-lg outline-[#007bff]"
                  id="phone"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.phone}
                />
              </div>

              {/* <div>
            <label htmlFor="" className=""></label>
            {contactForm.errors.subject &&
            contactForm.touched.subject ? (
              <div className="text-red-500 text-sm">
                {contactForm.errors.subject}
              </div>
            ) : null}
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg py-2.5 px-4 border border-gray-300 text-lg outline-[#007bff]"
              id="subject"
              onChange={contactForm.handleChange}
              value={contactForm.values.subject}
            />
          </div> */}

              <div>
                <label htmlFor="" className=""></label>
                {contactForm.errors.details && contactForm.touched.details ? (
                  <div className="text-red-500 text-sm">
                    {contactForm.errors.details}
                  </div>
                ) : null}
                <textarea
                  rows={3}
                  className="col-span-full w-full rounded-lg px-4 border border-gray-300 text-lg pt-3 outline-[#007bff]"
                  type="text"
                  placeholder="Enter Message or Query "
                  aria-label="Details"
                  id="details"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.details}
                />
              </div>
              <div className="flex items-center col-span-full">
                <input
                  id="checkbox1"
                  type="checkbox"
                  className="w-4 h-4 mr-3"
                />
                <label htmlFor="checkbox1" className="text-sm text-gray-400">
                  I agree to the{" "}
                  <a href="javascript:void(0);" className="underline">
                    Terms&Conditions
                  </a>{" "}
                  and{" "}
                  <a href="javascript:void(0);" className="underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <div className="flex justify-center w-full -mx-3 items">
                <div className="w-full px-3 mb-5  ">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-bold">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" hidden md:block w-full md:w-1/2 py-8 font-[sans-serif] mr-8">
            <img
              src="https://img.freepik.com/free-vector/diy-creative-workshop_23-2148537618.jpg?t=st=1732382368~exp=1732385968~hmac=a92c4ee7223d3c41933680eb1189b318c49d1e48019962f06692daa05f6495ef&w=740"
              className="g-image rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
