import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { addDataSlice } from "./features/counter/counterSlice";

export const CardNba = () => {
  const [data, setData] = useState([]);

  //   const dispatch = useDispatch();
  //   const detailsData = useSelector((state) => state.counter);

  //   console.log("redux store data", detailsData);

  useEffect(() => {
    axios
      .get("https://free-nba.p.rapidapi.com/players", {
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5ff8afd798msh26fb333754e9d9fp12a1a4jsna7c6a035317b",
        },
      })
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleData = (el) => {};

  return data.map((el) => {
    return (
      <div key={el.id}>
        <div className="container-fluid mt-5 ">
          <Card style={{ width: "30rem" }} className="bg-light">
            <Card.Body>
              <Card.Title>
                <div className="d-flex justify-content-between">
                  <h1>
                    {" "}
                    {el.first_name} {el.last_name}
                  </h1>

                  <h4>{el.id}</h4>
                </div>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h3>position - {el.position}</h3>
              </Card.Subtitle>
              <Card.Text className="my-5">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
              </Card.Text>

              <button
                className="btn btn-dark"
                onClick={() => handleData(el.id)}
              >
                <Link to={el.id}> Details</Link>
              </button>

              {/* <Link to="/details">Details</Link> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  });
};
