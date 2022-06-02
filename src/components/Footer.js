import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  a {
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      This amazing website was made by
      <a href="https://github.com/sunghunp/" target="_blank" rel="noreferrer">
        Joe
      </a>
      ,
      <a href="https://github.com/kcanamar/" target="_blank" rel="noreferrer">
        Kyle
      </a>
      ,
      <a href="https://github.com/yinathan/" target="_blank" rel="noreferrer">
        Nathan
      </a>
      , and
      <a href="https://github.com/benburgos/" target="_blank" rel="noreferrer">
        Ben
      </a>
      .
    </StyledFooter>
  );
}
