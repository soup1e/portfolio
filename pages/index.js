import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="home">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-start gap-3">
          <div className="flex p-5 ring ring-gray-50 rounded-lg lg:flex-row lg:items-end gap-3 flex-col">
            <h1 className="text-3xl lg:text-6xl font-bold ease-in-out duration-700 text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-pink-500">
              Sam Adams
            </h1>
            <p className="text-xl lg:text-4xl font-light whitespace-nowrap ease-in-out duration-700">
              Full Stack Developer
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-5 py-0.5 w-full justify-between lg:justify-start transition-all">
            <Link
              className="ring ring-violet-500 hover:bg-indigo-900 text-gray-50 font-light py-1 px-5 rounded lg:text-md text-xs hover:transition-all duration-700"
              href="/contact"
            >
              contact
            </Link>
            <Link
              className="ring ring-violet-500 hover:bg-indigo-900 text-gray-50 font-light py-1 px-5 rounded lg:text-md text-xs hover:transition-all duration-700"
              href="samadamsresume.pdf"
              target="_blank"
            >
              resume
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center h-full">
        <div className="w-3/5">
          <h1 className="text-3xl text-gray-300 mb-5">about me //</h1>
          <p className="lg:text-l text-base text-gray-400 mb-80">
            Hi, I&apos;m Sam! I am a dedicated software developer with an strong
            desire to learn about new technologies and a love for creating
            visually appealing user interfaces. I am always trying to expand my
            knowledge of new programming principles. I approach each task with
            enthusiasm and a strong drive to deliver a high-quality product,
            whether working independently or as part of a team. In my spare
            time, I enjoy learning different aspects of technology, such as
            computers and keyboards, and pursuing my hobbies of video editing
            and staying active, whether it be in the gym or outside.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-full mb-40 ease-in-out duration-1000 delay-100">
        <ul className="flex flex-wrap justify-center w-3/5 items-left lg:flex-row gap-3 text-gray-300">
          <h1 className="p-5 w-full text-gray-300 text-3xl text-center">
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
          <li className="boxed-list">PostgreSQL</li>
          <li className="boxed-list">Jest</li>

          <h1 className="p-5 w-full text-gray-300 text-3xl text-center">
            tools //
          </h1>
          <li className="boxed-list">Github</li>
          <li className="boxed-list">Git</li>
          <li className="boxed-list">Heroku</li>
          <li className="boxed-list">Netlify</li>
          <li className="boxed-list">VSCode</li>
          <li className="boxed-list">Supabase</li>
        </ul>
      </div>
    </Layout>
  );
}
