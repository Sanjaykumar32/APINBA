import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { CardNba } from "./CardNba";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "./Details";

function App() {
  const [getData, setgetData] = useState("");
  const [apidata, setApidata] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <CardNba
                getapidata={(el) => setApidata(el)}
                childData={(el) => setgetData(el)}
              />
            }
          ></Route>
          <Route
            path={"/details/:id"}
            element={<Details idvalue={getData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
