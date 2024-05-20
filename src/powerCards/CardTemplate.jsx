import FlexBoxRow from './FlexBoxRow.jsx'
import '../App.css'

const CardTemplate = (props) => {

  return (
    <div>
      <li className="concept">
        <img src={props.information.image} alt={props.information.title}/>
        <h2>{props.information.title}</h2>
        <p>{props.information.description}</p>
      </li>
    </div>
  )
}

export default CardTemplate;