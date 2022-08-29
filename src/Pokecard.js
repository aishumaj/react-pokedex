import "./Pokecard.css"

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

function Pokecard({id, name, type, exp}){
  return (
    <div className="Pokecard">
      <p className="title">{name}</p>
      <img className="img" src= {`${BASE_URL}/${id}.png`} alt="pokemon"/>
      <p className="type">Type: {type} </p>
      <p className="exp">EXP: {exp} </p>
    </div>
  )
}

export default Pokecard; 