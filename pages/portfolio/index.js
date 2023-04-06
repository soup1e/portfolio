import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <Layout title="portfolio">
      <section
        id="boathousebot"
        className="flex flex-col justify-center text-gray-50 min-h-screen max-w-6xl mx-auto p-4 sm:px-6 h-full"
      >
        <section
          id="image"
          className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
        >
          <Link href="https://github.com/soup1e/boathousebot" target="_blank">
            <Image
              className="w-full h-full object-cover transition"
              src="/boathousebot.JPG"
              width="540"
              height="303"
              alt="boathousebot!"
            />
          </Link>

          <section id="details">
            <div className="mb-3">
              <ul className="flex flex-wrap text-xs font-medium -m-1">
                <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                  JavaScript
                </li>
                <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                  Discord.js
                </li>
                <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                  Node.js
                </li>
                <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                  DisTube.js
                </li>
                <li className="m-1 inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out">
                  Heroku
                </li>
              </ul>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
              <Link
                className="hover:text-gray-500 transition duration-150 ease-in-out"
                href="https://github.com/soup1e/boathousebot"
                target="_blank"
              >
                Boat House Bot
              </Link>
            </h1>
            <main className="text-lg text-gray-400 flex-grow">
              BoatHouseBot is a user-friendly Discord bot with error handling.
              Built using Discord.js v14, Node.js, and DisTube. BoatHouseBot can
              play music in voice channels and includes a variety of other fun
              commands.
            </main>

            <footer className="flex items-center mt-4 gap-4">
              <Link
                className="ring ring-violet-500 hover:bg-indigo-900 text-gray-100 py-1 px-3 rounded-full lg:text-md text-xs hover:transition-all duration-700"
                href="https://github.com/soup1e/boathousebot"
                target="_blank"
              >
                View Code
              </Link>
              <p className="text-gray-500">March 23, 2023</p>
            </footer>
          </section>
        </section>
      </section>

      <section
        id="portfolio"
        className="flex flex-col justify-center text-gray-50 min-h-screen max-w-6xl mx-auto p-4 sm:px-6 h-full"
      >
        <section
          id="image"
          className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
        >
          <Link href="https://github.com/soup1e/portfolio" target="_blank">
            <Image
              className="w-full h-full object-cover transition"
              src="/sadams.JPG"
              width="540"
              height="303"
              alt="sadams.dev!"
            />
          </Link>

          <section id="details">
            <div className="mb-3">
              <ul className="flex flex-wrap text-xs font-medium -m-1">
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                    JavaScript
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                    Next JS
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                    TailwindCSS
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                    Email JS
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out">
                    Netlify
                  </div>
                </li>
              </ul>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
              <Link
                className="hover:text-gray-500 transition duration-150 ease-in-out"
                href="https://github.com/soup1e/portfolio"
                target="_blank"
              >
                sadams.dev
              </Link>
            </h1>
            <main className="text-lg text-gray-400 flex-grow">
              You are here! This website was built using Next 13, TailwindCSS,
              JavaScript and deployed using Netlify.
            </main>

            <footer className="flex items-center mt-4 gap-4">
              <Link
                className="ring ring-violet-500 hover:bg-indigo-900 text-gray-100 py-1 px-3 rounded-full lg:text-md text-xs hover:transition-all duration-700"
                href="https://github.com/soup1e/portfolio"
                target="_blank"
              >
                View Code
              </Link>
              <p className="text-gray-500">Feb 7, 2023</p>
            </footer>
          </section>
        </section>
      </section>

      <section
        id="Escape from Terminal"
        className="flex flex-col justify-center text-gray-50 min-h-screen max-w-6xl mx-auto p-4 sm:px-6 h-full"
      >
        <section
          id="image"
          className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
        >
          <Link href="https://github.com/Terminal-Escape" target="_blank">
            <Image
              className="w-full h-full object-cover transition"
              src="/escape.JPG"
              width="540"
              height="303"
              alt="Escape from Terminal"
            />
          </Link>

          <section id="details">
            <div className="mb-3">
              <ul className="flex flex-wrap text-xs font-medium -m-1">
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                    JavaScript
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                    PostgreSQL
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                    Node.js
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out">
                    Express
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out">
                    Heroku
                  </div>
                </li>
              </ul>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
              <Link
                className="hover:text-gray-500 transition duration-150 ease-in-out"
                href="https://github.com/Terminal-Escape"
                target="_blank"
              >
                Escape from Terminal Forest
              </Link>
            </h1>
            <main className="text-lg text-gray-400 flex-grow">
              Terminal Escape is a sprint project I developed with a small team
              where players navigate through a forest using the terminal.
              Created an API and using Node.js and Express to call RESTful
              routes from a backend hosted with Heroku.
            </main>

            <footer className="flex items-center mt-4 gap-4">
              <Link
                className="ring ring-violet-500 hover:bg-indigo-900 text-gray-100 py-1 px-3 rounded-full lg:text-md text-xs hover:transition-all duration-700"
                href="https://github.com/Terminal-Escape"
                target="_blank"
              >
                View Code
              </Link>
              <p className="text-gray-500">Dec 16, 2022</p>
            </footer>
          </section>
        </section>
      </section>

      <section
        id="boathousebot"
        className="flex flex-col justify-center text-gray-50 min-h-screen max-w-6xl mx-auto p-4 sm:px-6 h-full"
      >
        <section
          id="image"
          className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
        >
          <Link
            href="https://github.com/morganniemeyer/boardgameselector"
            target="_blank"
          >
            <Image
              className="w-full h-full object-cover transition"
              src="/GameStack.JPG"
              width="540"
              height="303"
              alt="Board game Selector"
            />
          </Link>

          <section id="details">
            <div className="mb-3">
              <ul className="flex flex-wrap text-xs font-medium -m-1">
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                    JavaScript
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                    HTML
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                    CSS
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out">
                    Supabase
                  </div>
                </li>
                <li className="m-1">
                  <div className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out">
                    Netlify
                  </div>
                </li>
              </ul>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
              <Link
                className="hover:text-gray-500 transition duration-150 ease-in-out"
                href="https://github.com/morganniemeyer/boardgameselector"
                target="_blank"
              >
                GameStack
              </Link>
            </h1>
            <main className="text-lg text-gray-400 flex-grow">
              GameStack is a virtual library of board games where users can find
              and add games to there profile in Realtime. I worked in Vanilla
              JavaScript to create randomize logic for User and Public libraries
              and heavily with CSS to improve user-experience.
            </main>

            <footer className="flex items-center mt-4 gap-4">
              <Link
                className="ring ring-violet-500 hover:bg-indigo-900 text-gray-100 py-1 px-3 rounded-full lg:text-md text-xs hover:transition-all duration-700"
                href="https://github.com/morganniemeyer/boardgameselector"
                target="_blank"
              >
                View Code
              </Link>
              <p className="text-gray-500">Oct 21, 2022</p>
            </footer>
          </section>
        </section>
      </section>
    </Layout>
  );
}
