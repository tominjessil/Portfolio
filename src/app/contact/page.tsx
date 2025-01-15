"use client";
import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: { email: "", name: "", surname:"", message:""},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center items-center mt-16">

      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-md text-black"
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-black">
          Contact me 
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm text-black font-bold mt-5 mb-2"
          >
            First Name
          </label>
          <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your first name"
          />

          <label
            htmlFor="surname"
            className="block text-sm text-black font-bold mt-5 mb-2"
          >
            Surname
          </label>
          <input
            id="surname"
            name="surname"
            type="surname"
            onChange={formik.handleChange}
            value={formik.values.surname}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your surname"
          />
          
          <label
            htmlFor="name"
            className="block text-sm text-black font-bold mt-5 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please enter your email"
          />
          <label
            htmlFor="email"
            className="block text-sm text-black font-bold mt-5 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="w-full h-52 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Please type your message here"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
