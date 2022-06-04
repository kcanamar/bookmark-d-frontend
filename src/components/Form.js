import { useState } from "react";

export default function Form(props) {
  const URL = `https://kjbn-bookmarkd-mern.herokuapp.com/api`;
  
  const [item, setItem] = useState({title: "", url: ""});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(URL, {
        method: 'Post',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(item)
      });
    } catch (err) {
      console.log(err);
    }
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
      <input onChange={handleChange} name="url" placeholder="https://" />
      <button type="submit">+</button>
    </form>
  );
}
