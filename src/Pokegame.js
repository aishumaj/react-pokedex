import Pokedex from './Pokedex'

let pocketMonsters = [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ];
  
const styles1 = {
    backgroundColor: "aqua",
  };
  
const styles2 = {
    backgroundColor: "pink"
  };
  
function totalExperience(pokemon) {
    let sum =0;
    
    pokemon.forEach(x => sum += x.base_experience);
    
    return sum;
}

function Pokegame({pokedex = pocketMonsters}) {
    let hand1 = [];
    let hand2 = pokedex.slice();
    
    while(hand1.length < hand2.length) {
        let randIndex = Math.floor(Math.random()*hand2.length);
        let randomPokemon = hand2.splice(randIndex, 1);
        hand1.push(randomPokemon[0]);
    }
    
    let hand1Exp = totalExperience(hand1);
    let hand2Exp = totalExperience(hand2);
    
    return (
        <div>
            <div style={styles1}>
                <Pokedex pokedex={hand1} totalExperience={hand1Exp} isWinner={hand1Exp > hand2Exp}/>
            </div>
            <div style={styles2}>
                <Pokedex pokedex={hand2} totalExperience={hand2Exp} isWinner={hand2Exp > hand1Exp}/>
            </div>
        </div>
    )
}

export default Pokegame;