import jsonData from "../data.json"
import PropTypes from "prop-types"

export default function Card({id, title, cover}){ 
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

Card.propTypes = {
  id : PropTypes.string.isRequired,  
  title : PropTypes.number.isRequired,  
  cover : PropTypes.string.isRequired  
}
