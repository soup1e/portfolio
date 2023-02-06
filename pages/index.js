import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="home">
      <div className="flex justify-center items-center lg:h-screen h-Moblie">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-center mx-auto p-5 outline shadow-lg rounded-lg sm:flex-row sm:flex-wrap sm:gap-5 sm:items-end">
            <h1 className="text-xl lg:text-6xl font-bold whitespace-nowrap ">
              Sam Adams
            </h1>
            <p className="text-base lg:text-4xl font-light whitespace-nowrap ">
              Full Stack Developer
            </p>
          </div>
          <button className="outline hover:bg-indigo-700 text-white font-normal py-1 px-2 rounded text-sm lg:text-base">
            contact me
          </button>
        </div>
      </div>
    </Layout>
  );
}
