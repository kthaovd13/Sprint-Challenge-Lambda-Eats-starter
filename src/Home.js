import React from "react"
import styled from "styled-components"
import Pizza from "./Pizza.jpg"

const Header = styled.header`
  background-color: #282c34;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: coral;
`

function Home () {
    return (
        <Header className="home-header">
            <h1> Your favorite food, delivered while coding</h1>
                <p>Pizza?</p>
            
            <img alt="pizza" src={Pizza} />
        </Header>
    )
}

export default Home