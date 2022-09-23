import { Link } from "react-router-dom";
import React from "react";

const Dashboard = (props) => {
    let stockData = props.stockData.map((data, index) => {
        return <Link key={index} to={`/stocks/${data.symbol}`}>
            <tr>{data.name}</tr>
            <tr>{data.lastPrice}</tr>
            <tr>{data.change}</tr>
        </Link>
    });
    return (
        <table>{stockData}</table>
    )
}

export default Dashboard;