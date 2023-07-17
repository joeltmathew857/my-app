import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/card"; // Corrected import statement
import CardComponents from './components/CardComponents';

import "./Style.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Card />
      <CardComponents />
      <Footer />
    </div>
  );
};

export default App;
