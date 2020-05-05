import React, { useState, useEffect } from "react"
import styled from "styled-components"
import * as yup from "yup"
import axios from "axios"

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
    const [formState, setFormState] = useState ({
        customer: "",
                    size: "",
                    sauce: "",
                    pepperoni: "",
                    sausage: "",
                    canadian: "",
                    italian: "",
                    instructions: ""
    })

    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const [post, setPost] = useState([])

    const [errors, setErrors] = useState ({
        customer: "",
        size: "",
        sauce: "",
        pepperoni: "",
        sausage: "",
        canadian: "",
        italian: "",
        instructions: ""
    })

    const formSubmit = e => {
        e.preventDefault()
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost(res.data)
                setFormState({
                    customer: "",
                    size: "",
                    sauce: "",
                    pepperoni: "",
                    sausage: "",
                    canadian: "",
                    italian: "",
                    instructions: ""
                })
            })
            .catch(err => console.log(err.res))
    }

    const inputChange = e => {
      e.persist()
      const newFormData = {
        ...formState,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
        validateChange(e)
        setFormState( newFormData )
    }

    const formSchema = yup.object().shape({
        customer: yup.string().min(2).required("Name is a required field"),
        size: yup.string().required("Size selection is required"),
        sauce: yup.string().oneOf(["original", "garlic", "bbq", "spinach"]).required(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        canadian: yup.boolean(),
        italian: yup.boolean(),
        instructions: yup.string() 
    })

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch(err => {
                console.log("error", err)
                setErrors({...errors, [e.target.name]: err.errors[0]})
            })
    }

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid)
            setIsButtonDisabled(!valid)
            
        })
    }, [formState, formSchema])

    return (
        <form onSubmit ={formSubmit}>
        <Information>
        <h1>Pizza Selector</h1>
                <label htmlFor="customer">Who is this pizza for? {errors.customer.length > 0 ? <p className="error">{errors.name}</p> : null}</label>
                <textarea
                    id="customer"
                    placeholder="Name?"
                    name="customer"
                    onChange={inputChange}
                    value={formState.customer}
                    data-cy="customer"
                />

                <h3>Choice of Size</h3>
                    <h5>Required</h5>
                        <label htmlFor="size" />
                        <select id="size" name="size" onChange={inputChange} value={formState.size} data-cy="size">
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
                            name="sauce"
                            onChange={inputChange}
                            value="original"
                            data-cy="sauce"
                        />
                        <label htmlFor="original red">Original Red</label>
                    </div>

                    <div>
                        <input
                            id="garlic ranch"
                            type="radio"
                            name="sauce"
                            onChange={inputChange}
                            value="garlic"
                            data-cy="sauce"
                        />
                        <label htmlFor="garlic ranch">Garlic Ranch</label>
                    </div>

                    <div>
                        <input
                            id="bbq sauce"
                            type="radio"
                            name="sauce"
                            onChange={inputChange}
                            value="bbq"
                            data-cy="sauce"
                        />
                        <label htmlFor="bbq sauce">BBQ Sauce</label>
                    </div>

                    <div>
                        <input
                            id="spinach alfredo"
                            type="radio"
                            name="sauce"
                            onChange={inputChange}
                            value="spinach"
                            data-cy="sauce"
                        />
                        <label htmlFor="spinach alfredo">Spinach Alfredo</label>
                    </div>

            <h3>Select Toppings</h3>
                    <h5>Choose up to 4.</h5>
                        <label htmlFor="pepperoni" className="allToppings">Pepperoni</label>
                        <input
                            id="pepperoni"
                            type="checkbox"
                            name="pepperoni"
                            onChange={inputChange}
                            value={formState.toppings}
                            data-cy="pepperoni"
                        />
                        <label htmlFor="sausage" className="allToppings">Sausage</label>
                        <input
                            id="sausage"
                            type="checkbox"
                            name="sausage"
                            onChange={inputChange}
                            value={formState.toppings}
                            data-cy="sausage"
                        />
                        <label htmlFor="canadian" className="allToppings">Canadian Bacon</label>
                        <input
                            id="canadian"
                            type="checkbox"
                            name="canadian"
                            onChange={inputChange}
                            value={formState.toppings}
                            data-cy="canadian"
                        />
                        <label htmlFor="italian" className="allToppings">Spicy Italian Sausage</label>
                        <input
                            id="italian"
                            type="checkbox"
                            name="italian"
                            onChange={inputChange}
                            value={formState.toppings}
                            data-cy="italian"
                        />
            
            <h3>Special Instructions</h3>
            <label htmlFor="instructions" />
                <textarea
                    id="instructions"
                    placeholder="Anything else you'd like to add?"
                    name="instructions"
                    onChange={inputChange}
                    value={formState.instructions}
                    data-cy="instructions"
                />
            <pre>{JSON.stringify(post, null, 2)}</pre>
        <button disabled={isButtonDisabled} className="button" type="submit">Add to Order</button>
            </Information>
        </form>
    )
}

export default Form