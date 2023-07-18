import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CardComponents from "./components/CardComponents";
import Bottom from "./components/Bottom";
import SearchBar from "./components/SearchBar"

import "./Style.css";

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Hero />
      <CardComponents />
      <Bottom />
      <Footer />
    </div>
  );
};

export default App;
