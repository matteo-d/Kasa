import { StyledHeader, Img, Nav, Home, About } from "../styles/Header"
import Svg from "../assets/logo.svg"

export default function Header(){
  return(
    <StyledHeader>
      <Img  src={ Svg } alt="Logo de Kasa"/>
      <Nav>
        <Home to="/"> Acceuil </Home>
      <About to="/about"> A Propos </About>
      </Nav>
    </StyledHeader>
  )
}   
