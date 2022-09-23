import { Link } from "react-router-dom";
import React from "react";

const Dashboard = (props) => {
    let stockData = props.stockData.map((data, index) => {
        return (
            <div>
                <tr>
                <Link key={index} to={`/stocks/${data.symbol}`}>
                    <td>{data.name}</td>
                    <td>Last Price: {data.lastPrice}</td>
                    <td>Change: {data.change}</td>
                </Link>
                </tr>
            </div>
        )
    });
    return (
        <table>{stockData}</table>
    )
}

export default Dashboard;