import styled from "styled-components"
import { Link } from "react-router-dom"
const Section = styled.section`
  display : flex;
  flex-direction : column;
  width : 86%;
  min-height : 100vh;
  justify-content : center;
  margin : 0 7% 0 7%;
`
const ErrorTitle = styled.h4`
margin : auto;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 288px;
color: #FF6060;
`
const Text = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
color: #FF6060;
margin : auto;
`
const LinkTo = styled(Link)`
 font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */

display: flex;
align-items: flex-end;
text-decoration-line: underline;

color: #FF6060; 
margin : auto;
`
export { Section, ErrorTitle, Text, LinkTo }
