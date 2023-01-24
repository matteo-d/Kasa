import JsonData from "../data.json"
import { useParams } from "react-router-dom"
import { Div, DivDos, DivTres, LodgementInfos , Title, Location, ListTags, TagElement, Stars, LandlordInfos, LandlordName, LandlordPicture } from "../styles/LodgementDescription"

export default function LodgementDescription(){
  const { id } = useParams()
  const Data = JsonData.filter(prop => prop.id === id)

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
        <Stars>{Data[0].rating}</Stars>
        <LandlordInfos>
          <LandlordName>{Data[0].host.name}</LandlordName>
          <LandlordPicture src={Data[0].host.picture}/>
        </LandlordInfos>
      </DivDos>
      <DivTres>
        <p>desc</p>
        <p>equip</p>
      </DivTres>
    </LodgementInfos>
  )
} 
