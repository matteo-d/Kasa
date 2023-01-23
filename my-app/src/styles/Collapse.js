import styled from "styled-components"
import ArrowDown from "../assets/arrowDown.svg"

const Section = styled.section `
width : 74%;
margin-left : 13%;
margin-right : 13%;
`
const Article = styled.article `
display : flex;
flex-direction : column;
margin-top : 2rem;

`
const Div = styled.article `
display : flex;
flex-direction : row;
justify-content : space-between;
height : 3rem;
background-color : #FF6060;
border-radius: 5px;
padding : 0 0rem 0 0.9rem;
`
const Title = styled.h3 `
font-family: 'Montserrat';
font-style: normal;
font-weight: bold;
font-size: 24px;
color : #FFFFFF;
 align-self : center;
`
const Arrow = styled.span `
 background-image : url(${ArrowDown});
 background-repeat : no-repeat;
 align-self : center;
 height : 1.8rem;
 width : 1.8rem;
 padding-right : 1.2rem
`
const Text = styled.span `
background: #F7F7F7;
border-radius: 5px;
padding : 1rem 1.8rem 1rem 0.8rem;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
color : #FF6060;
`
export { Section, Article, Div, Title, Arrow, Text }
