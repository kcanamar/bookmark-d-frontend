import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import styled from 'styled-components';
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
`;

export default function CardDropdown({ idx, active, handleActive, databaseID, setBookmark, deleteCard, site }) {

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  const { id } = useParams();
  let navigate = useNavigate();

  function handleClick (e) {
    setBookmark(site)
    if (active === idx ) {
      handleActive(null);
    } else {
      handleActive(idx);
    }
  }

  function closeDropdown(e) {
    setBookmark(null)
    if (e.target.className !== 'dropdown') {
      handleActive(null);
    }
  }

  function removeCard(e) {
    deleteCard(e.target.id);
    navigate('/');
  }

  function menu() {
    return (
      <StyledButton>
        <img className="dropdown" src={dotsImg} alt="an img of thing" />
      </StyledButton>
    );
  }

  function dropdown() {
    return (
      <div ref={ref}>
        <Link to={`/edit/${databaseID}`} className="dropdown" >Edit</Link>
        <StyledButton className="dropdown" id={databaseID} onClick={removeCard}>
          Delete
        </StyledButton>
      </div>
    );
  }

  return (
    <div onClick={handleClick} className="card-links">
      {active === idx ? dropdown() : menu()}
    </div>
  );
}
