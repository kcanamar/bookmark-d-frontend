import Profile from "../components/Profile"
import styled from "styled-components"

const AboutBody = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`
const Message = styled.p`
  text-align: center;
  font-size: 2rem;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  border: 1px solid black;
  width: 100%;
`

export default function About() {
  return (
    <AboutBody>
      <Message>Hello! <br/> This website was made by four <br/> amazing developers. <br/> <br/> To follow more of our work please <br/> follow us on our social media. <br/> <br/> Thank you for your time! </Message>
      <Container>
        <Profile name='Nathan Yi' github='https://github.com/yinathan' linked='https://www.linkedin.com/in/yi-nathan/' img='https://ca.slack-edge.com/T0351JZQ0-U033R49HZ0C-ba1517eb877a-512'/>
        <Profile name='Ben Burgos' github='https://github.com/Benburgos' linked='https://www.linkedin.com/in/bburgos/' img='https://media-exp1.licdn.com/dms/image/C5603AQEUsrYvESg8lA/profile-displayphoto-shrink_200_200/0/1558481398477?e=1659571200&v=beta&t=VFKLsN9_OKkgyS1qdWRMQjVgBW7xX1-WMLpOi52FLQw'/>
        <Profile name='Sunghun "Joe" Park' github='https://github.com/SunghunP' linked='https://www.linkedin.com/in/sunghunp/' img='https://media-exp1.licdn.com/dms/image/D5635AQFk5QjQV7azmQ/profile-framedphoto-shrink_200_200/0/1651196361481?e=1654822800&v=beta&t=J5BOEFhpQlkuDAKCXhmuWpDVUdFujUClwyNGIyNst04'/>
        <Profile name='Kyle Canamar' github='https://github.com/kcanamar' linked='https://www.linkedin.com/in/kyle-canamar/' img='https://media-exp1.licdn.com/dms/image/C5603AQErSHf_5d4rGA/profile-displayphoto-shrink_200_200/0/1651195536336?e=1659571200&v=beta&t=q9shtV1eZAYeuKQ-OMDpVt6Z3_ngDvZUy3I8_yI1gwM'/>
      </Container>
    </AboutBody>
  )
}