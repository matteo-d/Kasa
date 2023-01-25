import styled from "styled-components"
import Img from "../assets/IMG.png"

const Section = styled.section`
 background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.5) 100%);
background-image: url(${Img});
background-position : center;
background-repeat : no-repeat;
opacity : 90%;
display : flex;
width : 85%;
height : 4rem;
margin : auto;
padding : 1.8rem 0 1.8rem 0;
border-radius : 25px 25px 25px 25px 
`
const Title = styled.h1`
margin : auto;
font-family: 'Montserrat';
font-weight: 500;
font-size: 44px;
color: #FFFFFF;
`
export { Section, Title }
