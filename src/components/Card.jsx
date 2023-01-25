import jsonData from "../data.json"
import { Section, Ul, Lodgement, Title} from "../styles/Card"

export default function Card(){ 
  return(
    <Section>
      <Ul>
        {jsonData.map(lodgement => (
          <Lodgement  key={ lodgement.id } to={`/lodging/${lodgement.id}`} cover={lodgement.cover}>
            <Title>{ lodgement.title } </Title>
          </Lodgement>
        ))}
      </Ul>
    </Section>
  )
}
