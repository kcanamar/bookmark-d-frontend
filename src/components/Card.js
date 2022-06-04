import CardDropdown from './CardDropdown';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  width: 20em;
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
    a {
      text-decoration: none;
      color: #14213D;
    }
    a:hover {
      color: #FCA311;
    }
`;

export default function Card({
  site,
  idx,
  handleActive,
  active,
  databaseID,
  setBookmark,
  deleteCard,
}) {
  const { title, url } = site;

  return (
    <StyledCard className="card">
      <div className="card-content">
        <a href={url} target="_blank" rel="noreferrer">
          <h1>{title}</h1>
        </a>
      </div>
      <CardDropdown
        idx={idx}
        setBookmark={setBookmark}
        handleActive={handleActive}
        deleteCard={deleteCard}
        active={active}
        databaseID={databaseID}
        site={site}
      />
    </StyledCard>
  );
}
