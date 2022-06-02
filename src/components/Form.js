export default function Form(props) {
  const URL = `https://kjbn-bookmarkd-mern.herokuapp.com/bookmarkd`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(URL, {
        method: 'Post',
        headers: {
          'Content-Type': 'Application/json',
        },
        // body: JSON.stringify()
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Website Name" required />
      <input type='url' name="url" placeholder="https://" />
      <button type="submit">+</button>
    </form>
  );
}
