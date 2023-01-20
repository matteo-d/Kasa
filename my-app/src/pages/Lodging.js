import { useParams } from "react-router-dom"
import jsonData from "../data.json"

export function Lodging() {
  const { id } = useParams()
  const Data = jsonData.filter(prop => prop.id === id);
  console.log(Data[0].title)
  return(
    <div>
      <h1> URL PARAMS :  { id } </h1>
      <p> {Data[0].title} </p>
    </div>
  )
}
