import Form from '../components/EditForm'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: #adb5bd;
  border: 5px;
  border-radius: 3%;
  width: 50%;
  align-items: center;
  margin: 40px auto;
  padding: 20px;
`
export default function Edit({ bookmark }) {
  

  return(
    <StyledDiv className="edit-page">
      <h2>Let's Edit Your Bookmark</h2>
      <div>
        <h2>{bookmark.title} ({bookmark.url})</h2>
        <Form id={bookmark._id}/>
      </div>
    </StyledDiv>
  )
}