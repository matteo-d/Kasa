import { useParams } from "react-router-dom"
import { Div, DivDos, DivTres, LodgementInfos , Title, Location, ListTags, TagElement, Infos, Stars, WrapperStars, LandlordName, LandlordPicture } from "../styles/LodgementDescription"

import JsonData from "../data.json"
import FilledStar from "../assets/FilledStar.svg"
import EmptyStar from "../assets/EmptyStar.svg"
import ArrowDown from "../assets/ArrowDown.svg"
import ArrowUp from "../assets/ArrowUp.svg"
import { CollapseDescription } from "./CollapseDescription.jsx"

function displayStars (numberOfStars){
  let Array = []
  let i = 0
  let maxStars = 5;
  while (i < numberOfStars){
    Array.push(FilledStar)
    i++
  }
  while (i < maxStars){
    Array.push(EmptyStar)
    i++
  }
  return Array
}

export default function LodgementDescription(){
  const { id } = useParams()
  const Data = JsonData.filter(prop => prop.id === id)
  const stars = displayStars(Data[0].rating)
  
  const [ expanded, setExpanded] = useState({})
  function toggleArrow(id) {
  setExpanded({...expanded, [id]: !expanded[id]]})
  }
  return(
    <LodgementInfos>
      <Div>
        <Title> {Data[0].title} </Title>
        <Location> {Data[0].location}</Location>
        <ListTags>
          {Data[0].tags.map((tag, index) => (
            <TagElement key={index}>{tag}</TagElement>
          ))}
        </ListTags>
      </Div>
      <DivDos>
          <Infos>
            <LandlordName>{Data[0].host.name}</LandlordName>
            <LandlordPicture src={Data[0].host.picture}/>
          </Infos>
          <WrapperStars>
            {stars.map((star, index) =>(
            <Stars key={index} src={star} Stars/>
            ))}
          </WrapperStars>
      </DivDos>
      <DivTres>
        <Section>
      {Data.map(article => {
        const isExpanded = expanded[article.id];
        return (
          <Article key={article.id}>
            <Div>
              <Title>Description</Title>
              <Arrow bgImage={isExpanded ? ArrowUp : ArrowDown} onClick={() => toggleArrow(article.id)}> </Arrow>
            </Div>
            <Text display={isExpanded ? "block" : "none"}>{article.description}</Text>
          </Article>
        );
      })}
    </Section
        <p>equip</p>
      </DivTres>
    </LodgementInfos>
  )
}
