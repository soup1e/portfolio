import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="home">
      <div className="flex justify-center items-center lg:h-screen h-Moblie ease-in-out duration-1000 delay-100">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col mx-auto p-5 outline shadow-lg rounded-lg sm:flex-row sm:flex-wrap sm:gap-5 sm:items-end">
            <h1
              className="text-xl lg:text-6xl font-bold whitespace-nowrap text-transparent bg-white bg-clip-text hover:bg-gradient-to-tr from-indigo-500 to-pink-600 
              ease-in-out delay-100 duration-700"
            >
              Sam Adams
            </h1>

            <p className="text-base lg:text-4xl font-light whitespace-nowrap ease-in-out duration-700 delay-100">
              Full Stack Developer
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-5 py-0.5 w-full justify-between lg:justify-start transition-all">
            <Link
              className="outline hover:bg-indigo-900 text-gray-50 font-light py-0.5 px-2 rounded text-sm lg:text-base hover:transition-all duration-700"
              href="/contact"
            >
              contact
            </Link>
            <Link
              className="outline hover:bg-indigo-900 text-gray-50 font-light py-0.5 px-2 rounded text-sm lg:text-base hover:transition-all duration-700"
              href="samadams-resume.pdf"
              target="_blank"
            >
              resume
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
