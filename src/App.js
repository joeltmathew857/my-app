import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CardComponents from "./components/CardComponents";

import "./Style.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardComponents />
      <Footer />
    </div>
  );
};

export default App;
