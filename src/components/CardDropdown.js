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
    :hover {
      cursor: pointer;
    }
  }
`

export default function CardDropdown({ idx, active, handleActive}) {
  function handleClick () {
    handleActive(idx);
  }

  function menu() {
    return(
    <StyledButton  className="dropdown" >
      <img src={dotsImg} alt="an img of thing"/>
    </StyledButton>
    )
  }

  function dropdown() {
    return (
      <div >
        <Link className="dropdown" to="/edit">Edit</Link>
        <StyledButton className="dropdown" >Delete</StyledButton>
      </div>
    )
  }

  return (
    <div onClick={handleClick} className="card-links">
      {active === idx ? dropdown() : menu() }
    </div>
  )
}