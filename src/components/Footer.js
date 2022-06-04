import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #adb5bd;
  color: #14213d;

  a {
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      This amazing website was made by
      <a href="https://github.com/sunghunp/" target="_blank" rel="noreferrer">
        {/* These spaces are necessary because of the formatting on the footer*/}
        {" "}Joe
      </a>
      ,
      <a href="https://github.com/kcanamar/" target="_blank" rel="noreferrer">
        {" "}Kyle
      </a>
      ,
      <a href="https://github.com/yinathan/" target="_blank" rel="noreferrer">
        {" "}Nathan
      </a>
      , and
      <a href="https://github.com/benburgos/" target="_blank" rel="noreferrer">
        {" "}Ben
      </a>
      .
    </StyledFooter>
  );
}
