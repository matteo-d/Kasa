import styled from "styled-components"

const Section = styled.section`
position: absolute;
width: 100%;
height: 223px;
top: 171px;
background-color : red
`
const Title = styled.h1`
  position: absolute;
left: 25.9%;
right: 25.14%;
top: 24.32%;
bottom: 69.04%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 142.6%;
/* or 68px */

display: flex;
align-items: flex-end;

color: black ;
`


/* IMG */
export default function Banner(){
  return(
    <Section>
      <Title>Chez vous, partout et ailleurs</Title>
    </Section>
  )
}
