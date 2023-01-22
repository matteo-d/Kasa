import styled from "styled-components"

const Section = styled.section `
  display : flex;
  width : 85%;
  height : 25rem;
  justify-content : space-between;
  background-color: red;
  margin : auto;
`

const ArrowLeft = styled.img `
 height : 3.5rem; 
 padding-left : 2rem;
 align-self : center;
`

const ArrowRight = styled.img `
 height : 3.5rem; 
 padding-right : 2rem;
 align-self : center;
`
export { ArrowLeft, ArrowRight, Section }

