import React from "react"
import styled from "styled-components"

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
            
            <img alt="pizza" src="src\Assets\Pizza.jpg" />
        </Header>
    )
}

export default Home