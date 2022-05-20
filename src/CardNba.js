import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardNba = ({ childData, getapidata }) => {
  const [data, setData] = useState([]);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getapidata(data);
  }, [data]);

  return data.map((el) => {
    return (
      <div key={el.id}>
        <div className="container mt-5 ">
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

              <button className="btn btn-dark" onClick={() => childData(el.id)}>
                <Link to={"/details/" + el.id}> Details</Link>
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  });
};
