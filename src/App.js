import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Header } from "./Header";
import { CardNba } from "./CardNba";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CardNba />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
