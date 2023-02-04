import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{`sam // ${title}`}</title>
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
