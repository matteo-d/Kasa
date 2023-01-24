import JsonData from "../data.json"
import { useParams } from "react-router-dom"
import { LodgementInfos , Title, Location, ListTags, TagElement, Stars, LandlordInfos, LandlordName, LandlordPicture } from "../styles/LodgementDescription"

export default function LodgementDescription(){
  const { id } = useParams()
  const Data = JsonData.filter(prop => prop.id === id)
  console.log(Data.title)


  return(
    <LodgementInfos>
      <Title> Hello </Title>
      <Location></Location>
      <ListTags>
        <TagElement></TagElement>
        <TagElement></TagElement>
        <TagElement></TagElement>
      </ListTags>
      <Stars></Stars>
      <LandlordInfos>
        <LandlordName></LandlordName>
        <LandlordPicture></LandlordPicture>
      </LandlordInfos>
    // Collapse elements
    </LodgementInfos>
  )
} 
