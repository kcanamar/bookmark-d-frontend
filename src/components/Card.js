import CardDropdown from "./CardDropdown";

export default function Card({ site, idx, handleActive, active, databaseID, setBookmark}) {
  const { title, url } = site;

  return (
    <div className="card">
      <div className="card-content">
        <a href={url} target="_blank" rel="noreferrer">
          <h1>{title}</h1>
        </a>
      </div>
      
      <CardDropdown idx={idx} setBookmark={setBookmark} handleActive={handleActive} active={active} databaseID={databaseID} site={site}/>
    </div>
  );
}
