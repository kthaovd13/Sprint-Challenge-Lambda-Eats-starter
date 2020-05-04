import React, { useState } from "react"

const Form = () => {
    const [pizza, setPizza] = useState ()

    return (
        <form>
            <h3>Choice of Size</h3>
            <h5>Required</h5>
                <label htmlFor="size" />
                <select>
                    <option value="">--Please choose a size--</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>

            <h3>Choice of Sauce</h3>
            <h5>Required</h5>
                <div>
                    <input
                        id="original red"
                        type="radio"
                    />
                    <label htmlFor="original red">Original Red</label>
                </div>

                <div>
                    <input
                        id="garlic ranch"
                        type="radio"
                    />
                    <label htmlFor="garlic ranch">Garlic Ranch</label>
                </div>

                <div>
                    <input
                        id="bbq sauce"
                        type="radio"
                    />
                    <label htmlFor="bbq sauce">BBQ Sauce</label>
                </div>

                <div>
                    <input
                        id="spinach alfredo"
                        type="radio"
                    />
                    <label htmlFor="spinach alfredo">Spinach Alfredo</label>
                </div>

            <h3>Select Toppings</h3>
            <h5>Choose up to 10.</h5>
                <label htmlFor="pepperoni" className="allToppings">Pepperoni</label>
                <input
                    id="pepperoni"
                    type="checkbox"
                />
                <label htmlFor="sausage" className="allToppings">Sausage</label>
                <input
                    id="sausage"
                    type="checkbox"
                />
                <label htmlFor="canadian bacon" className="allToppings">Canadian Bacon</label>
                <input
                    id="canadian bacon"
                    type="checkbox"
                />
                <label htmlFor="spicy italian" className="allToppings">Spicy Italian Sausage</label>
                <input
                    id="spicy italian"
                    type="checkbox"
                />
                <label htmlFor="grilled chicken" className="allToppings">Grilled Chicken</label>
                <input
                    id="grilled chicken"
                    type="checkbox"
                />
                <label htmlFor="onions" className="allToppings">Onions</label>
                <input
                    id="onions"
                    type="checkbox"
                />
                <label htmlFor="green pepper" className="allToppings">Green Pepper</label>
                <input
                    id="green pepper"
                    type="checkbox"
                />
                <label htmlFor="diced tomatoes" className="allToppings">Diced Tomatoes</label>
                <input
                    id="diced tomatoes"
                    type="checkbox"
                />
                <label htmlFor="black olives" className="allToppings">Black Olives</label>
                <input
                    id="black olives"
                    type="checkbox"
                />
                <label htmlFor="roasted garlic" className="allToppings">Roasted Garlic</label>
                <input
                    id="roasted garlic"
                    type="checkbox"
                />
                <label htmlFor="artichoke hearts" className="allToppings">Artichoke Hearts</label>
                <input
                    id="artichoke hearts"
                    type="checkbox"
                />
                <label htmlFor="three cheese" className="allToppings">Three Cheese</label>
                <input
                    id="three cheese"
                    type="checkbox"
                />
                <label htmlFor="pineapple" className="allToppings">Pineapple</label>
                <input
                    id="pineapple"
                    type="checkbox"
                />
                <label htmlFor="extra cheese" className="allToppings">Extra Cheese</label>
                <input
                    id="extra cheese"
                    type="checkbox"
                />
        </form>
    )
}

export default Form