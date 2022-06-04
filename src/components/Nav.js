import { Link } from "react-router-dom"
import styled from 'styled-components'

const StyledHeader = styled.header`
  font-family: "Titillium Web", sans-serif;
  display: flex;
  width: 100%;
  align-items: center;

  a {
    color: FCA311;
    text-decoration: none;
  }

  .nav {
    border: solid 2px black;
    position: absolute;
    right: 0;
    top: 10;
  }

  .link {
    text-align: center;
    flex: 1 0 auto;
  }
`;

export default function Nav() {

  return (
    <StyledHeader>
      <Link to="/" className="link" > <h1>BookMark`d</h1> </Link>
      <nav className="nav">
        <Link to="/" > MAIN </Link>
        <Link to="/about" > ABOUT </Link>
      </nav>
    </StyledHeader>
  )
}
