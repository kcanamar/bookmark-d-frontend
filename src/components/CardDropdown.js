import { useState } from "react";
import styled from "styled-components";
import dotsImg from '../images/dots.png'

const StyledButton = styled.button`
  border-radius: 100%;
  img {
    max-width: 50px;
  }
`

function handleClick () {
  console.log("hi")
}

export default function CardDropdown() {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="card-links">
      <StyledButton onClick={handleClick} hidden={!hidden}>
        <img src={dotsImg} alt="an img of thing"/>
      </StyledButton>
      <div hidden={hidden} >
        <StyledButton className="dropdown">Edit</StyledButton>
        <StyledButton className="dropdown">Delete</StyledButton>
      </div>
    </div>
  )
}