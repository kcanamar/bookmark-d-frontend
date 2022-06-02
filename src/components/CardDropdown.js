import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dotsImg from '../images/dots.png';

const StyledButton = styled.button`
  background-color: white;
  border-radius: 50%;
  border: none; 

  img {
    max-width: 20px;
  }
`

export default function CardDropdown() {
  const [hidden, setHidden] = useState(true);

  function handleClick () {
    setHidden(!hidden);
  }
  
  return (
    <div onClick={handleClick} className="card-links">
      <StyledButton className="dropdown" hidden={!hidden}>
        <img src={dotsImg} alt="an img of thing"/>
      </StyledButton>
      <div hidden={hidden} >
        <Link className="dropdown" to="/edit">Edit</Link>
        <StyledButton className="dropdown" >Delete</StyledButton>
      </div>
    </div>
  )
}