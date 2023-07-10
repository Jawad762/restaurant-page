const Menu = (props) => {

    if (props.loading) {
        return (
            <div>
                <h3 className="loading">Loading menu...</h3>
            </div>
        )
    }

 return (
    <div className={props.modal ? 'menu-container blur': 'menu-container'}>
        <h1 className="popular">Popular dishes</h1>
        <form  onSubmit={(e) => props.searchMeal(e)}>
        <input type="search" placeholder="Find your favorite meal" onChange={props.handleChange}></input>
        </form>
        <div className="menu">
            
        {props.meals.map(meal => {
            return (
                <div key={meal.strMeal} className="card">
                <img className='card-img' src={meal.strMealThumb}></img>
                <div className="card-footer">
                  <p className="card-meal-name">{meal.strMeal}</p>
                  <button className="viewMore" onClick={()=> props.viewMore(meal.strMeal)}>View more</button>
                </div>
            </div>
            )
        })}
        </div>
    </div>
 )
}

export default Menu