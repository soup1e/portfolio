import React, { useState } from "react";
import Layout from "@/components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Layout title="contact">
      <div className="main flex flex-col justify-center items-center gap-5">
        <h1 className="header p-5 text-gray-50 text-3xl">contact //</h1>
        <div className="h-screen flex flex-col justify-start items-center">
          <div className="outline outline-3 outline-gray-400 rounded-lg p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block font-bold mb-2 text-gray-50"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border border-gray-400 p-2 w-full bg-transparent focus:border-pink-500"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-bold mb-2 text-gray-50"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-400 p-2 w-full bg-transparent"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-bold mb-2 text-gray-50"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="border border-gray-50 p-2 w-full bg-transparent"
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
