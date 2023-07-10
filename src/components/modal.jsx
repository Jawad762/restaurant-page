const Modal = (props) => {

    return (
        <div className="modal-card">
            <img  className='modal-img' src={props.meal.strMealThumb}></img>
            <h1>{props.meal.strMeal}</h1>
            <p> {props.meal.strInstructions}</p>
            <button className="close" onClick={props.closeModal}>Close</button>
        </div>
    )
}

export default Modal