import jsonData from "./about_text_data.json"

export default function Dropdown() {
  console.log(jsonData)
 return(
    <article>
      {jsonData.map(article => (
      <div>
        <h2>{article.title}</h2>
        <p> Arrow dropdown</p>
        <p>{article.text}</p>
      </div>
    ))}
    </article>
  )
}
