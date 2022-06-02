export default function Card({ title, url }) {
  return (
    <div className="card">
      <div className="card-content">
        <a href={url} target="_blank">
          <h1>{title}</h1>
        </a>
      </div>
      <div className="card-links">
        <button></button>
      </div>
    </div>
  );
}
