import styled from "styled-components"
import { Link } from "react-router-dom"

const Section = styled.section `
  width : 85%;
  margin : auto;
  background: #F7F7F7;
border-radius: 25px;
`
const Ul = styled.ul `
  display : flex;
  flex-wrap: wrap;
  justify-content : space-evenly;
  padding : 0;
  list-style-type : none;
`
const Lodgement = styled(Link) `
  display : flex;
  align-items : flex-end;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image : url(${props => props.cover});
  border-radius: 10px;
  width : 25%;
  height : 15rem;
  padding : 0 1.5rem 0 1.5rem;
  margin-top : 1rem;
  text-decoration: none; 
`
const Title = styled.h3 `
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;

color: #FFFFFF;
  
`
export { Section, Ul, Lodgement, Title }
