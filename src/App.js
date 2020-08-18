import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Search/Search";
import Result from "./Components/HowTo";

function App() {
  return (
    <div className="App">
      <Result />
      <Header />
      <Search />
    </div>
  );
}

export default App;
