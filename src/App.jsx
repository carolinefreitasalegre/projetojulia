import React from "react";
import Header from "./pages/header/Header";
import Range from "./pages/range/Range";
import MyJob from "./pages/myJob/MyJob";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import Nav from "./pages/nav/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Range />
      <MyJob />
      <Contact />
      <Footer />
    </>
  );
}
