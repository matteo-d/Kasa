import { Section, ErrorTitle, Text, LinkTo } from "../styles/Error"

export default function Err(){
  return(
  <Section>
    <ErrorTitle> 404 </ErrorTitle>
    <Text> Oups! La page que vous demandez n&#39;existe pas. </Text>
    <LinkTo to="/">Retournez sur la page d&#39;accueil </LinkTo>
  </Section>
  )
}

