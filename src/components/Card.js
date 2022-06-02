export default function Card({ site }) {
  const { title, url } = site;
  return (
    <div className="card">
      <div className="card-content">
        <a href={url} target="_blank" rel="noreferrer">
          <h1>{title}</h1>
        </a>
      </div>
      <div className="card-links">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
