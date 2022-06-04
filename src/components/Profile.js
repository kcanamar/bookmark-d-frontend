import styled from "styled-components"
import StyledButton from "../components/StyledButton"

const Bio = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 100%;

    .links{
        padding: 5px;
        margin: auto;
    }
    p{
        margin: auto 0;
        width: 200px;
        font-size: 24px;
    }
    img{
        width: 5rem;
        padding: .75rem;
        border-radius: 10rem;
    }
`

export default function Profile(props) {
    const { github, linked, name, img } = props
    return <Bio>
        <img src={img} alt={name}/><p>{name}</p>
        <section className="links">
            <a href={linked}><StyledButton name={<i class="fa-brands fa-linkedin"> LinkedIn</i>} /></a>
            <a href={github}><StyledButton name={<i class="fa-brands fa-github"> GitHub</i>} /></a>
        </section>
    </Bio>
}