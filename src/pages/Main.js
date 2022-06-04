import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Card from '../components/Card';

const StyledMain = styled.main`
  card {
    display: block;
  }
`;

export default function Main({ setBookmark }) {

  const [state, setState] = useState(null);
  const [active, setActive] = useState(null);

  const URL = `https://kjbn-bookmarkd-mern.herokuapp.com/api/`;

  const getSites = async () => {
    const data = await fetch(URL).then((response) => response.json());
    setState(data);
  };

  const handleActive = (index) => {
    setActive(index);
  };

  const deleteCard = async (id) => {
    try {
      await fetch(URL + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'Application/json',
        },
      });
      getSites();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSites();
  }, [state]);
  
  const loaded = () => {
    return state.map((site, idx) => <Card 
      key={site._id} 
      setBookmark={setBookmark} 
      deleteCard={deleteCard} 
      databaseID={site._id} 
      site={site} 
      active={active} 
      handleActive={handleActive} 
      idx={idx}
    />);
  };

  const loading = () => <div className="loader"></div>;

  return (
    <StyledMain>
      <div>Hello</div>
      <div>What Website Would you like to add?</div>

      <Form />

      {state ? loaded() : loading()}
    </StyledMain>
  );
}
