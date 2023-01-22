import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledHeader = styled.header`  
  display : flex;
  width : 85%;
  justify-content : space-between;
  margin : auto;
  padding : 2rem 0 3rem 0;
`
const Img = styled.img`
`
const Nav = styled.nav`
  align-self : center;
`

const Home = styled(Link)`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;
text-decoration-line: underline;
color: #FF6060;
`

const About = styled(Link)`
  padding : 0rem 2rem 0rem 4rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
  text-decoration-line: underline;
  color: #FF6060;
`

export { StyledHeader, Img, Nav, Home, About }
