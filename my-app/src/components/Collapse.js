import jsonData from "./about_text_data.json"
import { useState, useEffect } from "react"
import { Section, Article, Div, Arrow, Title, Text } from "../styles/Collapse"
import ArrowDown from "../assets/arrowDown.svg"
import ArrowUp from "../assets/arrowUp.svg"
  // Déclare variable d'état
export default function Collapse() {
  const [text, setText] = useState("none")
  const [arrow, setArrow] = useState("url(${ArrowDown})")
function toggleArrow(){
  setArrow(arrow === "url(${ArrowDown})" ? "url(${ArrowUp})" : "url(${ArrowDown})")
  setText(text === "none" ? "block" : "none")
}
  return(
  <Section>
    {jsonData.map(article => (
    <Article key={article.id}>
      <Div>
        <Title>{article.title}</Title>
        <Arrow OnClick={toggleArrow}></Arrow>
      </Div>
    <Text>{article.text}</Text>
  </Article>
  ))}
  </Section>
  )
}
