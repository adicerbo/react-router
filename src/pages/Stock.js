const Stock = (props) => {
    const oneStock = props.stockData.filter (data => data.symbol === props.match.params.symbol)[0];
    return (
        <div>
            <h2>{oneStock.name}</h2>
            <h3>{oneStock.lastPrice}</h3>
        </div>
    )
}

export default Stock;