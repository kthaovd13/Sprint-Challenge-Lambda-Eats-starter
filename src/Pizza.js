import React, { useState } from "react"
import styled from "styled-components"
import * as yup from "yup"

const Information = styled.div`
  background-color: #282c34;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: coral;
`

const Form = () => {
    const [formState, setFormState] = useState ({})

    const formSubmit = e => {
        e.preventDefault()
    }

    const inputChange = e => {
        setFormState({ name: e.target.value })
    }

    const formSchema = yup.object().shape({
        name: yup.string().min(2).required("Name is a required field"),
        instructions: yup.string() 
    })

    return (
        <form onSubmit ={formSubmit}>
            <Information>
            <h1>Pizza Selector</h1>
            <label htmlFor="customer">Who is this pizza for?</label>
                <textarea
                    id="customer"
                    placeholder="Name?"
                />
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
                        name="orginal red"
                    />
                    <label htmlFor="original red">Original Red</label>
                </div>

                <div>
                    <input
                        id="garlic ranch"
                        type="radio"
                        name="garlic ranch"
                    />
                    <label htmlFor="garlic ranch">Garlic Ranch</label>
                </div>

                <div>
                    <input
                        id="bbq sauce"
                        type="radio"
                        name="bbq sauce"
                    />
                    <label htmlFor="bbq sauce">BBQ Sauce</label>
                </div>

                <div>
                    <input
                        id="spinach alfredo"
                        type="radio"
                        name="spinach alfredo"
                    />
                    <label htmlFor="spinach alfredo">Spinach Alfredo</label>
                </div>

            <h3>Select Toppings</h3>
            <h5>Choose up to 4.</h5>
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
            
            <h3>Special Instructions</h3>
            <label htmlFor="instructions" />
                <textarea
                    id="instructions"
                    placeholder="Anything else you'd like to add?"
                />
            
            <button className="button" type="button">Add to Order</button>
            </Information>
        </form>
    )
}

export default Form