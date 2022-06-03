import styled from "styled-components"

const Button = (props) => <button className={props.className}>{props.name}</button>

const StyledButton = styled(Button)``
const Bio = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 100%;

    ${StyledButton}{
        background-color: SlateBlue;
        color: white;
        padding: .75rem;
        border-radius: .5rem;
        margin-right: .5rem;
        letter-spacing: 1px;
        font-size: 16px;
    }

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