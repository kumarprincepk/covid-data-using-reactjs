import React, { useState, useEffect } from "react";

const StateWise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const resp = await fetch("https://data.covid19india.org/data.json");
    const actualData = await resp.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      {/* <h1>INDIA COVID-19 Dashboard</h1> */}
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span>COVID-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((currentElement, index) => {
                return (
                  <tr key={index}>
                    <td>{currentElement.state}</td>
                    <td>{currentElement.confirmed}</td>
                    <td>{currentElement.recovered}</td>
                    <td>
                      {" "}
                      <td>{currentElement.deaths}</td>
                    </td>
                    <td>{currentElement.active}</td>
                    <td>{currentElement.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;
