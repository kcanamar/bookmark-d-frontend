import { Link } from "react-router-dom"
import styled from 'styled-components'

const StyledHeader = styled.header`
  font-family: "Titillium Web", sans-serif;
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 3px solid grey;
  background-color: #adb5bd;

   a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: #14213d;
  }
  a:hover {
    text-decoration: none;
    color: #fca311;
  }

  .nav {
    margin-right: 50px;
    position: absolute;
    right: 0;
    top: 10;
    padding: 20px;
  }

  .nav {
    a {
      padding: 10px;
    }
  }

  .link {
    text-align: center;
    flex: 1 0 auto;
    font-size: 25px;
  }
`;

export default function Nav() {

  return (
    <StyledHeader>
      <Link to="/" className="link" > <h1>BookMark`d</h1> </Link>
      <nav className="nav">
        <Link to="/" > Main </Link>
        
        <Link to="/about" > About </Link>
      </nav>
    </StyledHeader>
  )
}
