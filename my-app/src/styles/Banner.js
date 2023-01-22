import styled from "styled-components"
import Img from "../assets/IMG.png"

const Section = styled.section`

background: url(${Img});
background-position : center;
display : flex;
width : 85%;
height : 10rem;
margin : auto;
border-radius : 25px 25px 25px 25px 
`
const Title = styled.h1`
margin : auto;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 142.6%;
color: black;
`
export { Section, Title }
