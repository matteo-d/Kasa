import jsonData from "../data.json"

export default function Card(){ 
  return(
    <section>
      <ul>
        {jsonData.map(lodgement => (
          <li key={lodgement.id}>
            {lodgement.title}
            {lodgement.cover}
          </li>
        ))}
      </ul>
    </section>
  )
}
