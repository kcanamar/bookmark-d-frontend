import styled from 'styled-components'

const StyledMain = styled.main`
  card {
    display: block;
  }
`

const handleSubmit = () => {
  console.log('hi')
}

export default function Main() {
  return (
    <StyledMain>
      <div>Hello</div>
      <div>What Website Would you like to add?</div>

      <form onSubmit={handleSubmit}>
        <input name='title' placeholder='Website Name'/>
        <input name='url' placeholder='https://'/>
        <button type='submit'>+</button>
      </form>

      <card>
        Google.com ...
      </card>
      <card>
        MDN ...
      </card>
      <card>
        The atlantic ...      
      </card>
    </StyledMain>
  );
}
