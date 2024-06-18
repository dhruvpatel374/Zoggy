import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchBar from "./components/SearchBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
const AppLayout = () => (
  <div>
    <Header />
    <hr />
    <SearchBar />
    <hr />
    <Body />
    <hr />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
