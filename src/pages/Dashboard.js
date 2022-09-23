import { Link } from "react-router-dom";
import React from "react";

const Dashboard = (props) => {
    let stockData = props.stockData.map((data, index) => {
        return <Link key={index} to={`/stocks/${data.symbol}`}>
            <li >{data.name}</li>
        </Link>
    });
    return (
        <ul>{stockData}</ul>
    )
}

export default Dashboard;