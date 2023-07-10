const Home = (props) => {
    return (
        <div className="home">
            <h2>HAPPY DINING!</h2>
            <h3 className="home-text">We serve all kinds of delicious foods</h3>
            <button className="order" onClick={props.NavigateMenu}>Order</button>
        </div>
    )
}

export default Home