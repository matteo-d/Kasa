import jsonData from "../data.json"
import styled from "styled-components"

const Section = styled.section`
 position: absolute;
    width: 100%;
   
    
    top: 30rem;
    background-color: red;
} 
`
const Ul = styled.ul`
  

`
const Li = styled.li`

`
const Title = styled.h3`

`
export default function Card(){ 
  return(
    <Section>
      <Ul>
        {jsonData.map(lodgement => (
          <Li key={lodgement.id}>
            <Title>{lodgement.title}</Title>
          </Li>
        ))}
      </Ul>
    </Section>
  )
}
