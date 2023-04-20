import React from "react";

import "./DashBoard.css";
import LineGraph from "../charts/LineGraph";
import Donut from "../charts/Donut";
export default function DashBoard() {
  const userData = [100, 400, 200, 600]; // number of visits by registered users for Jan, Feb, Mar, Apr, May
  const guestData = [200, 100, 400, 100];
  var chartConfig = {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "User",
          data: userData,
          borderColor: "blue",
          fill: false,
        },
        {
          label: "Guest",
          data: guestData,
          borderColor: "green",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "User vs Guest Activity",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };
  return (
    <div className="splitScreen">
      <div className="left">
        <h1
          style={{
            marginTop: "20px",
            marginBottom: "30px",
            marginLeft: "30px",
          }}
          className="board"
        >
          Board.
        </h1>

        <ul
          style={{
            textAlign: "left",
            marginTop: "30px",
          }}
        >
          <h5 style={{ marginTop: "60px" }}>
            <li>DashBoards</li>
          </h5>
          <h5 style={{ marginTop: "30px" }}>
            {" "}
            <li>Transactions</li>
          </h5>
          <h5 style={{ marginTop: "30px" }}>
            {" "}
            <li>Schedules</li>
          </h5>
          <h5 style={{ marginTop: "30px" }}>
            {" "}
            <li>Users</li>
          </h5>
          <h5 style={{ marginTop: "30px" }}>
            <li>Settings</li>
          </h5>
        </ul>

        <ul style={{ marginTop: "130px" }}>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="right">
        <div className="header">
          <div>
            <h2 style={{ marginTop: "15px" }}>DashBoard</h2>
          </div>
          <div className="rightheader">
            <div class="search-container">
              <form>
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  style={{
                    borderRadius: "3px",
                    backgroundColor: "whitesmoke",
                    padding: "3px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    borderRadius: "5px",
                    border: "none",
                    padding: "3px",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div>
              <button
                type="submit"
                style={{
                  borderRadius: "5px",
                  border: "none",
                  padding: "3px",
                  marginLeft: "10px",
                  backgroundColor: "whitesmoke",
                }}
              >
                <i class="fa fa-bell"></i>
              </button>
            </div>
            <div>
              <button
                type="submit"
                style={{
                  borderRadius: "5px",
                  border: "none",
                  padding: "3px",
                  marginLeft: "10px",

                  backgroundColor: "whitesmoke",
                }}
              >
                <i class="fa fa-user"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="header1">
          <div className="div1">
            <div className="boxinside">
              Total Revenues
              <h6>$2,129,430</h6>
            </div>
            <div>
              <i style={{ marginRight: "8px" }} class="fa fa-money"></i>
            </div>
          </div>
          <div className="div2">
            <div className="boxinside">
              {" "}
              Total Transactions
              <h6>1,520</h6>
            </div>
            <div>
              <i style={{ marginRight: "8px" }} class="fa fa-exchange"></i>
            </div>
          </div>
          <div className="div3">
            <div className="boxinside">
              {" "}
              Total Likes<h6>9,721</h6>
            </div>
            <div>
              <i style={{ marginRight: "8px" }} class="fa fa-thumbs-up"></i>
            </div>
          </div>
          <div className="div4">
            <div className="boxinside">
              {" "}
              Total Users<h6>892</h6>
            </div>
            <div>
              <i style={{ marginRight: "8px" }} class="fa fa-users"></i>
            </div>
          </div>
        </div>
        <div className="graphpic">
          <div style={{ marginLeft: "50px" }}>
            <h5>Activities</h5>
            <select>
              <option style={{ border: "none" }}>may-june 2021</option>
            </select>
          </div>
          <LineGraph userData={userData} guestData={guestData} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: "50px",
          }}
        >
          <div className="piechart">
            <div
              style={{
                marginLeft: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h5 style={{ marginTop: "10px" }}>Activities</h5>
              <select style={{ marginTop: "10px", marginRight: "10px" }}>
                <option style={{ border: "none" }}>may-june 2021</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Donut className="donut" />
              </div>
              <div style={{ marginTop: "20px" }}>
                <ul>
                  <li> Basic Tees</li>
                  <li>Custom short pants</li>
                  <li>Super Hoodies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="piechart">
            <div
              style={{
                marginLeft: "50px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h5 style={{ marginTop: "10px" }}>Todays Schedule</h5>
            </div>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <ul>
                <li
                  style={{
                    marginTop: "20px",
                    borderLeft: "6px solid green",
                    height: "50px",
                  }}
                >
                  {" "}
                  Basic Tees
                </li>
                <li
                  style={{
                    marginTop: "20px",
                    borderLeft: "6px solid blue",
                    height: "50px",
                  }}
                >
                  Custom short pants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
