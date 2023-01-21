import styled from "styled-components"

const Section = styled.section`
position: absolute;
display : flex;
width : 100vw;
justify-content: center;
background-color : red
`
const Title = styled.h1`
  position: absolute;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 48px;
/* or 68px */



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
