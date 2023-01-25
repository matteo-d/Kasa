import jsonData from "../data.json"
import { useState } from "react"
import { Section, Article, Div, Arrow, Title, Text } from "../styles/Collapse"

import ArrowDown from "../assets/arrowDown.svg"
import ArrowUp from "../assets/arrowUp.svg"

export function CollapseDescription() {
  const [expanded, setExpanded] = useState({});

  function toggleArrow(id) {
    setExpanded({...expanded, [id]: !expanded[id]});
  }

  return(
    <Section>
      {jsonData.map(article => {
        const isExpanded = expanded[article.id];
        return (
          <Article key={article.id}>
            <Div>
              <Title>Description</Title>
              <Arrow bgImage={isExpanded ? ArrowUp : ArrowDown} onClick={() => toggleArrow(article.id)}> </Arrow>
            </Div>
            <Text display={isExpanded ? "block" : "none"}>{article.description}</Text>
          </Article>
        );
      })}
    </Section>
  )
}
