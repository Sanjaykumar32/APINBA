import { Table } from "react-bootstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Details = ({ idvalue }) => {
  const [apidata, setApiData] = useState({});

  console.log(apidata);

  useEffect(() => {
    axios
      .get(`https://free-nba.p.rapidapi.com/players/+${idvalue}`, {
        headers: {
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5ff8afd798msh26fb333754e9d9fp12a1a4jsna7c6a035317b",
        },
      })
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {apidata && (
        <div>
          <div className="">
            <h1>Players id : -{idvalue}</h1>
            <Table striped className="my-5 mb-5">
              <thead>
                <tr>
                  <th>
                    <h2>List</h2>
                  </th>
                  <th>
                    <h2>First Name</h2>
                  </th>
                  <th>
                    <h2>Last Name</h2>
                  </th>
                  <th>
                    <h2>position</h2>
                  </th>
                  <th>
                    <h2>abbreviation</h2>
                  </th>
                  <th>
                    <h2>city</h2>
                  </th>
                  <th>
                    <h2>conference</h2>
                  </th>
                  <th>
                    <h2>division</h2>
                  </th>
                  <th>
                    <h2>id</h2>
                  </th>
                </tr>
              </thead>
              <tbody className="my-5">
                <tr>
                  <td>
                    <h2>1</h2>
                  </td>
                  <td>
                    <h2>{apidata.first_name}</h2>
                  </td>
                  <td>
                    <h2>{apidata.last_name}</h2>
                  </td>
                  <td>
                    <h2>{apidata?.position}</h2>
                  </td>
                  <td>
                    <h2>{apidata?.team?.abbreviation}</h2>
                  </td>
                  <td>
                    <h2>{apidata?.team?.city}</h2>
                  </td>
                  <td>
                    <h2>{apidata?.team?.conference}</h2>
                  </td>
                  <td>
                    <h2>{apidata?.team?.division}</h2>
                  </td>
                  <td>
                    <h2>{apidata?.team?.id}</h2>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};
