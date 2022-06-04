import styled from "styled-components"

const Button = styled.button`
    background-color: SlateBlue;
    color: white;
    padding: .75rem;
    border-radius: .5rem;
    margin-right: .5rem;
    letter-spacing: 1px;
    font-size: 16px;
`

export default function StyledButton(props) {
    return <Button className={props.className}>{props.name}</Button>
}