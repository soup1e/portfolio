import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="home">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-start gap-3">
          <div className="flex p-5 outline outline-2 rounded-lg lg:flex-row lg:items-end gap-3 flex-col">
            <h1 className="text-3xl lg:text-6xl font-bold ease-in-out duration-700 text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-pink-500">
              Sam Adams
            </h1>
            <p className="text-xl lg:text-4xl font-light whitespace-nowrap ease-in-out duration-700">
              Full Stack Developer
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-5 py-0.5 w-full justify-between lg:justify-start transition-all">
            <Link
              className="outline outline-2 outline-violet-500 hover:bg-indigo-900 text-gray-50 font-light py-1 px-5 rounded lg:text-md text-xs hover:transition-all duration-700"
              href="/contact"
            >
              contact
            </Link>
            <Link
              className="outline outline-2 outline-violet-500 hover:bg-indigo-900 text-gray-50 font-light py-1 px-5 rounded lg:text-md text-xs hover:transition-all duration-700"
              href="samadamsresume.pdf"
              target="_blank"
            >
              resume
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full mb-40 ease-in-out duration-1000 delay-100">
        <ul className="flex flex-wrap justify-center w-3/5 items-left lg:flex-row gap-3 text-gray-300">
          <h1 className="header p-5 w-full text-gray-400 text-3xl text-center">
            tech //
          </h1>
          <li className="boxed-list">JavaScript</li>
          <li className="boxed-list">HTML</li>
          <li className="boxed-list">CSS</li>
          <li className="boxed-list">Node.js</li>
          <li className="boxed-list">React</li>
          <li className="boxed-list">Express</li>
          <li className="boxed-list">TailwindCSS</li>
          <li className="boxed-list">Next.js</li>
          <h1 className="header p-5 w-full text-gray-400 text-3xl text-center">
            tools //
          </h1>
          <li className="boxed-list">Github</li>
          <li className="boxed-list">Git</li>
          <li className="boxed-list">Heroku</li>
          <li className="boxed-list">Netlify</li>
          <li className="boxed-list">VSCode</li>
        </ul>
      </div>
    </Layout>
  );
}
