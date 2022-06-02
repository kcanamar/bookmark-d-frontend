import { Link } from "react-router-dom"
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  a {
    color: green;
    text-decoration: none;
  }

  .link {
    
  }

  a:hover {
    color: red;
  }
`

export default function Nav() {

  return (
    <StyledHeader>
      <Link to="/" className="link" > <h1>BookMark`d</h1> </Link>
      <nav className="nav">
        <Link to="/Main" > MAIN </Link>
        <Link to="/about" > ABOUT </Link>
      </nav>
    </StyledHeader>
  )
}
