import CardDropdown from "./CardDropdown";
import styled from 'styled-components';

const StyledCard = styled.div`
`

export default function Card({ site, idx, handleActive, deleteCard, active}) {
  const { title, url } = site;

  return (
    <StyledCard className="card">
      <div className="card-content">
        <a href={url} target="_blank" rel="noreferrer">
          <h1>{title}</h1>
        </a>
      </div>
      
      <CardDropdown site={site} idx={idx} handleActive={handleActive} active={active} deleteCard={deleteCard}/>
    </StyledCard>
  );
}
