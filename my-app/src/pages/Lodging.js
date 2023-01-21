import { useParams, Navigate } from "react-router-dom"
import jsonData from "../data.json"

export function Lodging() {
  const { id } = useParams()
  const Data = jsonData.filter(prop => prop.id === id)
  if (Data.length ==+ 1) {
    return(
      <div>
        <h1> URL PARAMS :  { id } </h1>
        <p> {Data[0].title} </p>
      </div>
    )}
  else {
    return <Navigate to="/error" /> 
  }
}
