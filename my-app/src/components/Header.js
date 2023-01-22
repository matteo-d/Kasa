import { Link } from "react-router-dom"
import { HeaderStyled, Img, Nav, Home, About } from "../styles/Header"

export default function Header(){
  return(
    <HeaderStyled>
      <Img  src="./kasa_logo.PNG"
     alt="Logo de Kasa"/>
      <Nav>
        <Home to="/"> Home </Home>
      <About to="/about"> About </About>
      </Nav>
    </HeaderStyled>
  )
}   
