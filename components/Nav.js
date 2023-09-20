import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <nav className="flex justify-between flex-wrap p-4 gap-5 lg:fixed lg:bg-background w-full">
      <div className="flex items-center flex-shrink-0 text-transparent bg-indigo-500 bg-clip-text hover:bg-gradient-to-tr from-indigo-500 to-pink-500 hover:animate-bobbing">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          sam adams
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-2.5 py-2.5 border rounded text-gray-50 border-white hover:text-purple-00 hover:border-indigo-700"
          onClick={handleClick}
        >
          <svg
            className="text-white h-3 w-3 overflow-visible"
            viewBox="0 0 100 100"
          >
            <rect
              className={`rect-1 ${
                isActive
                  ? "transition-all duration-1000 rotate-360 ease-in-out origin-center"
                  : "transition-all duration-1000 rotate-180 ease-in-out origin-center"
              }`}
              fill="white"
              y="0"
              width="100"
              height="20"
            ></rect>
            <rect
              className={`rect-2 ${
                isActive
                  ? "transition-all duration-1000 rotate-90 ease-in-out origin-center"
                  : "transition-all duration-1000 rotate-180 ease-in-out origin-center"
              }`}
              fill="white"
              y="80"
              width="100"
              height="20"
            ></rect>
            <title>Menu</title>
          </svg>
        </button>
      </div>
      <div
        className={
          isActive
            ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            : "hidden lg:visible w-full flex-grow lg:flex lg:items-center lg:w-auto"
        }
      >
        <div className="text-m lg:flex-grow ">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-indigo-400 hover:transition-all duration-700 mr-4"
          >
            about
          </Link>

          <Link
            href="/portfolio"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-indigo-400 hover:transition-all duration-700 mr-4"
          >
            portfolio
          </Link>

          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-indigo-400 hover:transition-all duration-700 mr-4"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
