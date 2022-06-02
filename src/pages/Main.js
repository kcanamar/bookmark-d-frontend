import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Card from '../components/Card'
const StyledMain = styled.main`
  card {
    display: block;
  }
`;

const handleSubmit = () => {
  console.log('hi');
};

export default function Main() {
  return (
    <StyledMain>
      <div>Hello</div>
      <div>What Website Would you like to add?</div>

      <Form />

      <Card />
      <Card />
      <Card />
    </StyledMain>
  );
}
