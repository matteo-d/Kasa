import { useParams } from "react-router-dom"

export function Lodging() {
  const { id } = useParams()
  return(
    <div>
      <h1> Lodging { id } </h1>
    </div>
  )
}
