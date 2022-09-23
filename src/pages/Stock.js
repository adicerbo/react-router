const Stock = (props) => {
    const oneStock = props.stockData.filter (data => data.symbol === props.match.params.symbol)[0];
    return (
        <div>
            <h2>{stock.name}</h2>
        </div>
    )
}