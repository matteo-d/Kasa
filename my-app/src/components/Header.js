import { Link } from "react-router-dom"
import { HeaderStyled, Img, Nav, Home, About } from "../styles/Header"
import Svg from "../assets/logo.svg"

export default function Header(){
  return(
    <HeaderStyled>
      <Img  src={ Svg } alt="Logo de Kasa"/>
      <Nav>
        <Home to="/"> Acceuil </Home>
      <About to="/about"> A Propos </About>
      </Nav>
    </HeaderStyled>
  )
}   
