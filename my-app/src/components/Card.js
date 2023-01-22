import jsonData from "../data.json"
  
export default function Card(){ 
  return(
    <section>
      <ul>
        {jsonData.map(lodgement => (
          <li key={lodgement.id}>
            <title>{lodgement.title}</title>
          </li>
        ))}
      </ul>
    </section>
  )
}
