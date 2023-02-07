import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@/components/Layout";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log("Email sent, Great success!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout title="contact">
      <div className="main flex flex-col justify-center items-center gap-5">
        <h1 className="header p-5 text-gray-50 text-3xl">contact //</h1>
        <div className="h-screen flex flex-col justify-start items-center">
          <div className="outline outline-3 outline-gray-400 rounded-lg p-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-50">
                  Name
                </label>
                <input
                  type="text"
                  className="border border-gray-400 p-2 w-full bg-transparent focus:border-pink-500"
                  name="user_name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-50">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-400 p-2 w-full bg-transparent"
                  name="user_email"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-50">
                  Message
                </label>
                <textarea
                  className="border border-gray-50 p-2 w-full bg-transparent"
                  name="message"
                  rows="3"
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="outline outline-violet-500 hover:bg-indigo-900 text-gray-50 font-light py-0.5 px-7 rounded text-md lg:text-base hover:transition-all duration-700"
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
