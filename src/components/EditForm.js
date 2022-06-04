import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ id }) {
  const URL = `https://kjbn-bookmarkd-mern.herokuapp.com/api/`;
  const navigate = useNavigate();
  const [item, setItem] = useState({title: "", url: ""});

  const updateEntry = async (entry, bookmarkID) => {
    await fetch(URL + bookmarkID, {
      method: 'Put',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(item)
    });
    setItem();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    updateEntry(item, id);
    navigate('/');
  }

  function handleChange(event) {
    setItem({
      ...item,
      [event.target.name]: event.target.value
    });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="title" placeholder="Website Name" required/>
      <input onChange={handleChange} name="url" placeholder="https://" required/>
      <button type="submit">+</button>
    </form>
  );
}
