import JsonData from "../data.json"
import { useParams } from "react-router-dom"
import { LodgementInfos , Title, Location, ListTags, TagElement, Stars, LandlordInfos, LandlordName, LandlordPicture } from "../styles/LodgementDescription"

export default function LodgementDescription(){
  const { id } = useParams()
  const Data = JsonData.filter(prop => prop.id === id)
  console.log(Data[0])
  console.log(Data[0].host.picture)
  

  return(
    <LodgementInfos>
      <Title> {Data[0].title} </Title>
      <Location> {Data[0].location}</Location>
      <ListTags>
        <TagElement></TagElement>
        <TagElement></TagElement>
        <TagElement></TagElement>
      </ListTags>
      <Stars></Stars>
      <LandlordInfos>
        <LandlordName>{Data[0].host.name}</LandlordName>
        <LandlordPicture src={Data[0].host.picture}/>
      </LandlordInfos>
    // Collapse elements
    </LodgementInfos>
  )
} 
